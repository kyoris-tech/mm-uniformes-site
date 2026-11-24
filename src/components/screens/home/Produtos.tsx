import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { produtos } from "./produtos-data";

export function Produtos() {
  // Produtos com destaque (ex.: Dry-fit) ganham uma faixa própria acima da
  // grade, para ter mais visibilidade que os itens da lista.
  const destaques = produtos.filter((produto) => produto.highlight);
  const demais = produtos.filter((produto) => !produto.highlight);

  return (
    <section id="produtos" className="bg-white py-24">
      <Container>
        <div className="max-w-2xl">
          <Text
            as="span"
            size="sm"
            weight="bold"
            color="secondary"
            className="uppercase tracking-wide"
          >
            Produtos
          </Text>

          <Text as="h2" size="4xl" weight="bold" color="primary" className="mt-3 leading-tight">
            O que mais produzimos.
          </Text>
        </div>

        {destaques.map((produto) => (
          <div
            key={produto.id}
            className="mt-12 flex flex-col gap-3 rounded-3xl border border-secondary/30 bg-secondary/5 px-6 py-5 sm:flex-row sm:items-center sm:gap-5"
          >
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {produto.highlight?.badge}
            </span>

            <Text as="h3" size="xl" weight="bold" color="primary">
              {produto.label}
            </Text>

            <Text color="muted">{produto.highlight?.description}</Text>
          </div>
        ))}

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demais.map((produto) => (
            <li
              key={produto.id}
              className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-mm-cream px-5 py-4"
            >
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <Text as="span" size="base" weight="semibold" color="primary">
                {produto.label}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
