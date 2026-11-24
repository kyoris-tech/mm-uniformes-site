"use client";

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { formatCnpj, formatPhone, isValidCnpjLength, isValidEmail } from "@/lib/form";

function getInputClassName(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-[var(--text-color-default)] placeholder:text-neutral-400 transition-colors duration-300 focus:outline-none focus:ring-2",
    hasError
      ? "border-secondary focus:border-secondary focus:ring-secondary/20"
      : "border-neutral-200 focus:border-primary focus:ring-primary/20",
  );
}

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [cnpj, setCnpj] = useState("");
  const [cnpjError, setCnpjError] = useState<string | null>(null);

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
  }

  function validateCnpj(value: string) {
    if (value.trim() && !isValidCnpjLength(value)) {
      setCnpjError("O CNPJ deve ter 14 dígitos.");
      return false;
    }
    setCnpjError(null);
    return true;
  }

  function handleCnpjChange(event: ChangeEvent<HTMLInputElement>) {
    setCnpj(formatCnpj(event.target.value));
    if (cnpjError) setCnpjError(null);
  }

  function handleCnpjBlur(event: FocusEvent<HTMLInputElement>) {
    validateCnpj(event.target.value);
  }

  function validateEmail(value: string) {
    if (value.trim() && !isValidEmail(value)) {
      setEmailError("Digite um e-mail válido (ex.: voce@empresa.com).");
      return false;
    }
    setEmailError(null);
    return true;
  }

  function handleEmailBlur(event: FocusEvent<HTMLInputElement>) {
    validateEmail(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");

    if (!validateEmail(email)) {
      form.querySelector<HTMLInputElement>("#email")?.focus();
      return;
    }

    if (!validateCnpj(cnpj)) {
      form.querySelector<HTMLInputElement>("#cnpj")?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          cnpj,
          email,
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("request-failed");

      setStatus("success");
      form.reset();
      setPhone("");
      setCnpj("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Card className="flex flex-col gap-5">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name">
            <Text as="span" size="sm" weight="semibold" color="primary">
              Nome
            </Text>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nome de quem está entrando em contato"
            className={getInputClassName(false)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company">
              <Text as="span" size="sm" weight="semibold" color="primary">
                Empresa
              </Text>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Nome da empresa"
              className={getInputClassName(false)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="cnpj">
              <Text as="span" size="sm" weight="semibold" color="primary">
                CNPJ
              </Text>
            </label>
            <input
              id="cnpj"
              name="cnpj"
              type="text"
              inputMode="numeric"
              value={cnpj}
              onChange={handleCnpjChange}
              onBlur={handleCnpjBlur}
              aria-invalid={Boolean(cnpjError)}
              placeholder="00.000.000/0000-00"
              className={getInputClassName(Boolean(cnpjError))}
            />
            {cnpjError && (
              <Text size="xs" color="secondary">
                {cnpjError}
              </Text>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email">
              <Text as="span" size="sm" weight="semibold" color="primary">
                E-mail
              </Text>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="voce@empresa.com"
              onBlur={handleEmailBlur}
              onChange={() => emailError && setEmailError(null)}
              aria-invalid={Boolean(emailError)}
              className={getInputClassName(Boolean(emailError))}
            />
            {emailError && (
              <Text size="xs" color="secondary">
                {emailError}
              </Text>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone">
              <Text as="span" size="sm" weight="semibold" color="primary">
                Telefone / WhatsApp
              </Text>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(13) 9 9999-9999"
              className={getInputClassName(false)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message">
            <Text as="span" size="sm" weight="semibold" color="primary">
              Conte sobre o seu pedido
            </Text>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Quantidade de uniformes, funções da equipe, prazo desejado..."
            className={cn(getInputClassName(false), "resize-none")}
          />
        </div>

        <Button
          as="button"
          type="submit"
          variant="primary"
          size="lg"
          className="mt-1 justify-center"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </Button>

        {status === "success" && (
          <Text size="sm" color="muted">
            Mensagem enviada! A gente responde em breve por e-mail.
          </Text>
        )}

        {status === "error" && (
          <Text size="sm" color="secondary">
            Não foi possível enviar agora. Tente novamente ou chama a gente no WhatsApp.
          </Text>
        )}
      </form>
    </Card>
  );
}
