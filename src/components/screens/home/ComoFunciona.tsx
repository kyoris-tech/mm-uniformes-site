import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { passosComoFunciona } from "./como-funciona-data";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-primary py-24">
      <Container>
        <div className="max-w-2xl">
          <Text
            as="span"
            size="sm"
            weight="bold"
            color="secondary"
            className="uppercase tracking-wide"
          >
            Como funciona
          </Text>

          <Text as="h2" size="4xl" weight="bold" color="inverse" className="mt-3 leading-tight">
            Um processo simples, do primeiro contato à entrega.
          </Text>
        </div>

        <div className="como-funciona-grid mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {passosComoFunciona.map((passo) => (
            <div key={passo.number} className="flex flex-col gap-4">
              {/* Brilho contínuo (ver globals.css) que destaca uma etapa por
                  vez, em sequência, num loop de 8s — a ordem de cada card no
                  grid decide sua vez via ":nth-child" no CSS. */}
              <Text
                as="span"
                size="5xl"
                weight="bold"
                className="como-funciona-number text-white/25"
              >
                {passo.number}
              </Text>

              <Text as="h3" size="lg" weight="semibold" color="inverse">
                {passo.title}
              </Text>

              <Text size="sm" color="inverse-muted">
                {passo.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
