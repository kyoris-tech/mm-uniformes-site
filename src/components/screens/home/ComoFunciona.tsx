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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {passosComoFunciona.map((passo) => (
            <div key={passo.number} className="flex flex-col gap-3">
              <Text
                as="span"
                size="4xl"
                weight="bold"
                className="text-white/25"
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
