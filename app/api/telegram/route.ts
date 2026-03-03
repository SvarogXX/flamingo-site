import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 2_500;
const MAX_MESSAGE_LENGTH = 1500;

type RateLimitStore = Map<string, number[]>;

function getRateLimitStore(): RateLimitStore {
  const globalWithStore = globalThis as typeof globalThis & {
    __telegramRateLimitStore?: RateLimitStore;
  };

  if (!globalWithStore.__telegramRateLimitStore) {
    globalWithStore.__telegramRateLimitStore = new Map<string, number[]>();
  }

  return globalWithStore.__telegramRateLimitStore;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const store = getRateLimitStore();
  const attempts = store.get(ip) || [];
  const freshAttempts = attempts.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  freshAttempts.push(now);
  store.set(ip, freshAttempts);

  return freshAttempts.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function generateRequestId() {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).slice(2, 8);
  return `req_${timestamp}${randomPart}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const message = String(body?.message || "").trim();
    const source = String(body?.source || "").trim();
    const honeypot = String(body?.website || "").trim();
    const formStartedAt = Number(body?.formStartedAt || 0);

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (formStartedAt > 0 && Date.now() - formStartedAt < MIN_FORM_FILL_MS) {
      return NextResponse.json({ success: true });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { message: `Повідомлення занадто довге. Максимум ${MAX_MESSAGE_LENGTH} символів.` },
        { status: 400 }
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { message: "Забагато запитів. Спробуйте ще раз через хвилину." },
        { status: 429 }
      );
    }

    if (!message) {
      return NextResponse.json({ message: "Повідомлення обов'язкове" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { message: "Telegram не налаштовано. Додайте TELEGRAM_BOT_TOKEN і TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    if (!/^-?\d+$/.test(chatId)) {
      return NextResponse.json(
        { message: "TELEGRAM_CHAT_ID має бути числом (наприклад 123456789 або -100...)." },
        { status: 500 }
      );
    }

    const requestId = generateRequestId();

    const telegramText = [
      "<b>Нове повідомлення із сайту</b>",
      `<b>ID звернення:</b> <code>${requestId}</code>`,
      name ? `<b>Ім'я:</b> ${escapeHtml(name)}` : "<b>Ім'я:</b> —",
      `<b>Текст:</b> ${escapeHtml(message)}`,
      source ? `<b>Сторінка:</b> ${escapeHtml(source)}` : "",
      `<b>Час:</b> ${new Date().toLocaleString("uk-UA")}`,
    ]
      .filter(Boolean)
      .join("\n");

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramText,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      return NextResponse.json(
        { message: `Telegram API error: ${telegramResponse.status}`, details: errorText },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, requestId });
  } catch (error) {
    console.error("Telegram route error:", error);
    return NextResponse.json({ message: "Не вдалося надіслати повідомлення" }, { status: 500 });
  }
}
