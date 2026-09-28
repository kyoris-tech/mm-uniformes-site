import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail } from "@/lib/form";

// TODO: definir o e-mail real de destino/remetente da MM Uniformes e
// configurar RESEND_API_KEY (conta gratuita em resend.com) no .env.local
// antes de publicar. Sem a chave, o formulário responde com erro amigável
// em vez de falhar silenciosamente.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "contato@mmuniformes.com.br";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "MM Uniformes <onboarding@resend.dev>";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY não configurada. Crie uma conta gratuita em resend.com e adicione a chave em .env.local.",
    );
    return NextResponse.json(
      { error: "Envio de e-mail não configurado no servidor." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const message = payload.message?.trim();
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";

  if (!name || !message) {
    return NextResponse.json(
      { error: "Nome e mensagem são obrigatórios." },
      { status: 400 },
    );
  }

  if (email && !isValidEmail(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `Novo contato pelo site — ${name}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #171717;">
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          ${email ? `<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>` : ""}
          ${phone ? `<p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>` : ""}
          <p><strong>O que precisa de uniforme:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Falha ao enviar e-mail via Resend:", error.name, "-", error.message);
      return NextResponse.json({ error: "Não foi possível enviar sua mensagem." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro inesperado ao enviar e-mail:", error);
    return NextResponse.json({ error: "Não foi possível enviar sua mensagem." }, { status: 500 });
  }
}
