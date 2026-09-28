import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { LocationIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/Text";
import { getWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";
import { ContactForm } from "./ContactForm";

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da MM Uniformes e gostaria de solicitar um orçamento.";

// TODO: substituir pelo e-mail real de contato da MM Uniformes antes de publicar.
const EMAIL = "contato@mmuniformes.com.br";

export function Contato() {
  return (
    <section id="contato" className="pt-section-title bg-secondary pb-24">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <Text
            as="h2"
            size="4xl"
            weight="bold"
            color="inverse"
            className="max-w-2xl leading-tight"
          >
            Pronto para uniformizar a sua equipe?
          </Text>

          <Text color="inverse-muted" size="lg" className="max-w-xl">
            Fale agora com a MM Uniformes e receba um orçamento personalizado
            para a sua empresa.
          </Text>

          <Button
            as="a"
            href={getWhatsAppUrl(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <ContactForm />

          <Card className="flex flex-col gap-6 px-8 py-8 sm:px-10">
            <Text as="h3" size="xl" weight="bold" color="primary">
              MM Uniformes
            </Text>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <LocationIcon className="h-5 w-5" />
                </span>
                <Text weight="semibold" color="primary">
                  Santos/SP
                </Text>
              </div>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <Text weight="semibold" color="primary">
                  {WHATSAPP_DISPLAY_NUMBER}
                </Text>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <MailIcon className="h-5 w-5" />
                </span>
                <Text weight="semibold" color="primary">
                  {EMAIL}
                </Text>
              </a>
            </div>

            <a href={getWhatsAppUrl(WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
              <Text
                weight="bold"
                color="secondary"
                className="transition-opacity duration-300 hover:opacity-80"
              >
                Vamos conversar sobre o seu pedido?
              </Text>
            </a>
          </Card>
        </div>
      </Container>
    </section>
  );
}
