import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type RequestMapRecord = {
  chatId: number;
  username?: string;
  firstName?: string;
  linkedAt: number;
};

type RequestMapStore = Map<string, RequestMapRecord>;
type UserLatestRequestStore = Map<number, { requestId: string; linkedAt: number }>;

const LINK_TTL_SECONDS = 60 * 60 * 24 * 14;
const LINK_TTL_MS = LINK_TTL_SECONDS * 1000;
const KV_REQUEST_PREFIX = "telegram:req:";
const KV_USER_PREFIX = "telegram:user:";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getRequestMapStore(): RequestMapStore {
  const globalWithStore = globalThis as typeof globalThis & {
    __telegramRequestMapStore?: RequestMapStore;
  };

  if (!globalWithStore.__telegramRequestMapStore) {
    globalWithStore.__telegramRequestMapStore = new Map<string, RequestMapRecord>();
  }

  return globalWithStore.__telegramRequestMapStore;
}

function getUserLatestRequestStore(): UserLatestRequestStore {
  const globalWithStore = globalThis as typeof globalThis & {
    __telegramUserLatestRequestStore?: UserLatestRequestStore;
  };

  if (!globalWithStore.__telegramUserLatestRequestStore) {
    globalWithStore.__telegramUserLatestRequestStore = new Map<number, { requestId: string; linkedAt: number }>();
  }

  return globalWithStore.__telegramUserLatestRequestStore;
}

function trimStore(store: RequestMapStore, userLatestStore: UserLatestRequestStore) {
  const now = Date.now();

  for (const [requestId, record] of store.entries()) {
    if (now - record.linkedAt > LINK_TTL_MS) {
      store.delete(requestId);
    }
  }

  for (const [chatId, record] of userLatestStore.entries()) {
    if (now - record.linkedAt > LINK_TTL_MS) {
      userLatestStore.delete(chatId);
    }
  }
}

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function getKvHeaders() {
  return {
    Authorization: `Bearer ${process.env.KV_REST_API_TOKEN as string}`,
    "Content-Type": "application/json",
  };
}

function buildKvUrl(path: string) {
  const baseUrl = process.env.KV_REST_API_URL as string;
  return `${baseUrl.replace(/\/$/, "")}${path}`;
}

async function kvGet(key: string): Promise<string | null> {
  if (!hasKvConfig()) return null;

  try {
    const response = await fetch(buildKvUrl(`/get/${encodeURIComponent(key)}`), {
      method: "GET",
      headers: getKvHeaders(),
    });

    if (!response.ok) return null;
    const payload = (await response.json().catch(() => null)) as { result?: unknown } | null;
    return typeof payload?.result === "string" ? payload.result : null;
  } catch (error) {
    console.error("KV get error:", error);
    return null;
  }
}

async function kvSetWithTtl(key: string, value: string, ttlSeconds: number): Promise<boolean> {
  if (!hasKvConfig()) return false;

  try {
    const response = await fetch(
      buildKvUrl(
        `/set/${encodeURIComponent(key)}/${encodeURIComponent(value)}?EX=${encodeURIComponent(String(ttlSeconds))}`
      ),
      {
        method: "POST",
        headers: getKvHeaders(),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("KV set error:", error);
    return false;
  }
}

function getRequestKvKey(requestId: string) {
  return `${KV_REQUEST_PREFIX}${requestId}`;
}

function getUserKvKey(chatId: number) {
  return `${KV_USER_PREFIX}${chatId}`;
}

async function persistLink(requestId: string, record: RequestMapRecord): Promise<void> {
  if (!hasKvConfig()) return;

  await Promise.all([
    kvSetWithTtl(getRequestKvKey(requestId), JSON.stringify(record), LINK_TTL_SECONDS),
    kvSetWithTtl(getUserKvKey(record.chatId), requestId, LINK_TTL_SECONDS),
  ]);
}

async function getLinkByRequestId(requestId: string, store: RequestMapStore): Promise<RequestMapRecord | null> {
  const inMemory = store.get(requestId);
  if (inMemory) return inMemory;

  const kvValue = await kvGet(getRequestKvKey(requestId));
  if (!kvValue) return null;

  try {
    const parsed = JSON.parse(kvValue) as RequestMapRecord;
    if (!parsed || typeof parsed.chatId !== "number" || typeof parsed.linkedAt !== "number") {
      return null;
    }

    store.set(requestId, parsed);
    return parsed;
  } catch {
    return null;
  }
}

async function getLatestRequestIdByChat(
  chatId: number,
  store: RequestMapStore,
  userLatestStore: UserLatestRequestStore
): Promise<string | null> {
  const inMemory = userLatestStore.get(chatId);
  if (inMemory) return inMemory.requestId;

  const kvValue = await kvGet(getUserKvKey(chatId));
  if (kvValue) {
    userLatestStore.set(chatId, { requestId: kvValue, linkedAt: Date.now() });
    return kvValue;
  }

  const mappedRequestIds = [...store.entries()]
    .filter(([, record]) => record.chatId === chatId)
    .sort((a, b) => b[1].linkedAt - a[1].linkedAt)
    .map(([requestId]) => requestId);

  return mappedRequestIds[0] || null;
}

async function sendTelegramMessage(botToken: string, chatId: number | string, text: string) {
  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Telegram sendMessage failed: ${response.status} ${details}`);
  }
}

function isAdminChat(chatId: number, adminChatIdRaw: string): boolean {
  const adminChatId = Number(adminChatIdRaw);
  return Number.isFinite(adminChatId) && chatId === adminChatId;
}

function extractReplyCommand(text: string): { requestId: string; replyText: string } | null {
  const match = text.match(/^\/reply\s+(req_[a-z0-9]+)\s+([\s\S]+)$/i);
  if (!match) return null;

  return {
    requestId: match[1],
    replyText: match[2].trim(),
  };
}

function getStartPayload(text: string): string {
  const parts = text.trim().split(/\s+/);
  if (parts[0] !== "/start") return "";
  return parts[1] || "";
}

export async function POST(request: NextRequest) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const adminChatId = process.env.TELEGRAM_CHAT_ID;
    const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET;

    if (!botToken || !adminChatId) {
      return NextResponse.json({ ok: true });
    }

    if (webhookSecret) {
      const headerSecret = request.headers.get("x-telegram-bot-api-secret-token") || "";
      if (headerSecret !== webhookSecret) {
        return NextResponse.json({ ok: false, message: "Invalid webhook secret" }, { status: 401 });
      }
    }

    const payload = await request.json();
    const message = payload?.message;
    if (!message || !message.chat || typeof message.text !== "string") {
      return NextResponse.json({ ok: true });
    }

    const chatId = Number(message.chat.id);
    const text = String(message.text || "").trim();
    const store = getRequestMapStore();
    const userLatestStore = getUserLatestRequestStore();
    trimStore(store, userLatestStore);

    const startPayload = getStartPayload(text);
    if (startPayload && /^req_[a-z0-9]+$/i.test(startPayload)) {
      const record: RequestMapRecord = {
        chatId,
        username: message.from?.username ? String(message.from.username) : undefined,
        firstName: message.from?.first_name ? String(message.from.first_name) : undefined,
        linkedAt: Date.now(),
      };
      store.set(startPayload, record);
      userLatestStore.set(chatId, { requestId: startPayload, linkedAt: record.linkedAt });
      await persistLink(startPayload, record);

      await sendTelegramMessage(
        botToken,
        chatId,
        `✅ Заявку <code>${startPayload}</code> підключено. Напишіть тут повідомлення — менеджер отримає відповідь.`
      );

      await sendTelegramMessage(
        botToken,
        adminChatId,
        `🔗 Користувач підключив звернення <code>${startPayload}</code>\n` +
          `<b>Користувач:</b> ${escapeHtml(message.from?.first_name || "—")} ${escapeHtml(message.from?.last_name || "")}\n` +
          `<b>Username:</b> ${message.from?.username ? `@${message.from.username}` : "—"}\n` +
          `<b>Chat ID:</b> <code>${chatId}</code>`
      );

      return NextResponse.json({ ok: true });
    }

    if (isAdminChat(chatId, adminChatId)) {
      const reply = extractReplyCommand(text);
      if (!reply) {
        return NextResponse.json({ ok: true });
      }

      const target = await getLinkByRequestId(reply.requestId, store);
      if (!target) {
        await sendTelegramMessage(
          botToken,
          adminChatId,
          `⚠️ Не знайдено активний діалог для <code>${reply.requestId}</code>.\n` +
            `Попросіть юзера натиснути «Продовжити в Telegram» ще раз.`
        );
        return NextResponse.json({ ok: true });
      }

      await sendTelegramMessage(
        botToken,
        target.chatId,
        `💬 Відповідь менеджера по зверненню <code>${reply.requestId}</code>:\n${escapeHtml(reply.replyText)}`
      );

      await sendTelegramMessage(botToken, adminChatId, `✅ Надіслано для <code>${reply.requestId}</code>.`);
      return NextResponse.json({ ok: true });
    }

    const latestRequestId = await getLatestRequestIdByChat(chatId, store, userLatestStore);
    if (!latestRequestId) {
      await sendTelegramMessage(
        botToken,
        chatId,
        "Щоб почати діалог, спершу надішліть запит із сайту і натисніть «Продовжити в Telegram»."
      );
      return NextResponse.json({ ok: true });
    }
    const sender = escapeHtml(message.from?.first_name || "Користувач");

    await sendTelegramMessage(
      botToken,
      adminChatId,
      `📩 Нове повідомлення від ${sender} по <code>${latestRequestId}</code>:\n${escapeHtml(text)}\n\n` +
        `Відповісти: <code>/reply ${latestRequestId} ваш текст</code>`
    );

    await sendTelegramMessage(
      botToken,
      chatId,
      `✅ Повідомлення по <code>${latestRequestId}</code> передано менеджеру.`
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram webhook error:", error);
    return NextResponse.json({ ok: true });
  }
}
