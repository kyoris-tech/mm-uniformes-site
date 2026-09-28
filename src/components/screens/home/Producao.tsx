import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const producaoDestaques = [
  "Silk screen e bordado computadorizado próprios",
  "Confecção sob medida por número e função da equipe",
  "Acompanhamento do pedido do orçamento à entrega",
];

export function Producao() {
  return (
    <section id="producao" className="bg-mm-cream py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Foto de banco de imagens (Pexels) usada como referência visual até
              o cliente enviar fotos reais da produção. */}
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 lg:order-2">
            <Image
              src="/images/producao-bordado-computadorizado.jpg"
              alt="Máquinas de bordado computadorizado em operação na produção"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 lg:order-1">
            <Text
              as="span"
              size="sm"
              weight="bold"
              color="secondary"
              className="uppercase tracking-wide"
            >
              Por dentro da produção
            </Text>

            <Text as="h2" size="4xl" weight="bold" color="primary" className="leading-tight">
              Cada uniforme passa por um processo pensado para durar.
            </Text>

            <Text color="muted">
              Da escolha do tecido à aplicação da marca, acompanhamos cada
              etapa da confecção para entregar um uniforme alinhado com a
              identidade e a rotina da sua equipe.
            </Text>

            <ul className="flex flex-col gap-3">
              {producaoDestaques.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                  />
                  <Text size="base" color="default">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
