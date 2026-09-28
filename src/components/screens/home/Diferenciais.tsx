import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { diferenciais } from "./diferenciais-data";

export function Diferenciais() {
  return (
    <section id="diferenciais" className="pt-section-title bg-white pb-24">
      <Container>
        <div className="max-w-2xl">
          <Text
            as="span"
            size="sm"
            weight="bold"
            color="secondary"
            className="uppercase tracking-wide"
          >
            Por que a MM Uniformes
          </Text>

          <Text
            as="h2"
            size="4xl"
            weight="bold"
            color="primary"
            className="mt-3 leading-tight"
          >
            Uniformes pensados para o seu negócio, do início ao fim.
          </Text>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item) => (
            <Card key={item.id} className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>

              <Text as="h3" size="lg" weight="semibold" color="default">
                {item.title}
              </Text>

              <Text size="sm" color="muted">
                {item.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
