export interface Produto {
  id: string;
  label: string;
  // Destaque opcional (ex.: novidade que o cliente quer dar mais visibilidade).
  highlight?: {
    badge: string;
    description: string;
  };
}

export const produtos: Produto[] = [
  { id: "camisas", label: "Camisas" },
  { id: "camisetas", label: "Camisetas" },
  { id: "polos", label: "Polos" },
  {
    id: "dry-fit",
    label: "Dry-fit",
    highlight: {
      badge: "Novidade",
      description: "Ideal para corridas, academias e eventos esportivos.",
    },
  },
  { id: "calcas-jeans", label: "Calças jeans" },
  { id: "uniformes-operacionais", label: "Uniformes operacionais" },
  { id: "bermudas-operacionais", label: "Bermudas operacionais" },
  { id: "coletes-refletivos", label: "Coletes refletivos" },
  { id: "pijama-cirurgico", label: "Pijama cirúrgico" },
  { id: "balaclava", label: "Balaclava" },
];
