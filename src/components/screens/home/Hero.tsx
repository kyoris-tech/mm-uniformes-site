import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const HERO_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da MM Uniformes e gostaria de solicitar um orçamento.";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden pt-28 pb-16"
    >
      {/* Foto de banco de imagens (Pexels) usada como referência visual até o
          cliente enviar fotos reais da equipe/fábrica. A própria foto já tem
          espaço vazio (parede) acima da equipe, então "object-top" ancora
          esse espaço no topo — sem precisar esticar/desfocar a imagem — e
          mantém o rosto das pessoas longe do menu flutuante em qualquer
          proporção de tela. (Chegamos a testar uma faixa desfocada extra
          colada no topo do arquivo, mas em telas largas/baixas ela distorcia
          a proporção da foto e acabava dominando boa parte da hero — revertido.) */}
      <Image
        src="/images/hero-equipe-uniformizada.jpg"
        alt="Equipe uniformizada em ambiente profissional"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      {/* Leve escurecida no topo pra dar mais contraste ao menu flutuante. */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/20" />

      <Container fluid className="relative flex flex-col gap-8">
        <div className="inline-flex w-fit shrink-0 items-center rounded-2xl bg-white px-5 py-4 shadow-lg">
          <Image
            src="/images/logo.jpg"
            alt="MM Uniformes"
            width={280}
            height={124}
            className="h-14 w-auto sm:h-16"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Text
            as="h1"
            size="3xl"
            weight="bold"
            color="inverse"
            className="max-w-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            Uniformes profissionais sob medida para a sua equipe.
          </Text>

          <Text color="inverse-muted" size="lg" className="max-w-xl">
            A MM Uniformes desenvolve, personaliza e entrega uniformes com
            identidade visual da sua marca, do orçamento à confecção. Fábrica
            em Santos/SP, atendendo empresas de todo o Brasil.
          </Text>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Button
              as="a"
              href={getWhatsAppUrl(HERO_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              Solicitar orçamento
            </Button>
            <Button as="a" href="#diferenciais" variant="outline" size="lg">
              Conhecer os diferenciais
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
