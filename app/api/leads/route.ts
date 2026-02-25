import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const CRM_API_URL = "https://flamingo-crm-xi.vercel.app/api/leads";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, phone, company } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Обов'язкові поля: name, email, message" },
        { status: 400 }
      );
    }

    const leadData = {
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      ...(phone && { phone: String(phone).trim() }),
      ...(company && { company: String(company).trim() }),
    };

    // 1. Спробувати відправити в CRM
    const crmResponse = await fetch(CRM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });

    if (crmResponse.ok) {
      return NextResponse.json({ success: true });
    }

    // 2. Якщо CRM повертає 404/405 (ендпоінт не реалізований) - fallback на Formspree
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if ((crmResponse.status === 404 || crmResponse.status === 405) && formspreeEndpoint) {
      const formspreeResponse = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadData.name,
          email: leadData.email,
          message: leadData.message,
          phone: leadData.phone || "",
          company: leadData.company || "",
          _subject: `Новий лід з сайту: ${leadData.name}`,
        }),
      });

      if (formspreeResponse.ok) {
        return NextResponse.json({ success: true });
      }
    }

    // 3. Якщо CRM не доступний і Formspree не налаштований
    if (crmResponse.status === 404 || crmResponse.status === 405) {
      return NextResponse.json(
        {
          message:
            "Сервіс тимчасово недоступний. Напишіть нам на support@flamingo-crm.com.ua",
        },
        { status: 503 }
      );
    }

    const crmData = await crmResponse.json().catch(() => ({}));
    return NextResponse.json(
      { message: crmData.message || `Помилка сервера: ${crmResponse.status}` },
      { status: crmResponse.status }
    );
  } catch (error) {
    console.error("Leads API error:", error);
    return NextResponse.json(
      { message: "Не вдалося надіслати. Спробуйте пізніше." },
      { status: 500 }
    );
  }
}
