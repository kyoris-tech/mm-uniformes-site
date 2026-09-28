import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Página não encontrada | MM Uniformes",
  robots: { index: false, follow: true },
};

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da MM Uniformes e gostaria de solicitar um orçamento.";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="pt-section-title flex min-h-screen flex-col items-center justify-center bg-primary pb-24">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
            <Text weight="bold" color="secondary" size="sm" className="uppercase tracking-widest">
              Erro 404
            </Text>

            <Text as="h1" size="4xl" weight="bold" color="inverse" className="leading-tight sm:text-5xl">
              Página não encontrada
            </Text>

            <Text color="inverse-muted">
              A página que você procura pode ter sido movida ou não existe mais. Volte para o
              início ou fale direto com a gente pelo WhatsApp.
            </Text>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Button as="a" href="/" variant="primary" size="lg">
                Voltar para o início
              </Button>
              <Button
                as="a"
                href={getWhatsAppUrl(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
