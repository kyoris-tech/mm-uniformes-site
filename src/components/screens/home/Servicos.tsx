import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { servicos } from "./servicos-data";

export function Servicos() {
  return (
    <section id="servicos" className="pt-section-title bg-white pb-24">
      <Container>
        <div className="max-w-2xl">
          <Text
            as="span"
            size="sm"
            weight="bold"
            color="secondary"
            className="uppercase tracking-wide"
          >
            Serviços
          </Text>

          <Text as="h2" size="4xl" weight="bold" color="primary" className="mt-3 leading-tight">
            Do logotipo ao acabamento final.
          </Text>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="flex flex-col gap-5 overflow-hidden rounded-3xl bg-white pb-6 shadow-lg shadow-neutral-900/5"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={servico.photoSrc}
                  alt={servico.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 px-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <servico.icon className="h-5 w-5" />
                </div>

                <Text as="h3" size="lg" weight="semibold" color="default">
                  {servico.title}
                </Text>

                <Text size="sm" color="muted">
                  {servico.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
