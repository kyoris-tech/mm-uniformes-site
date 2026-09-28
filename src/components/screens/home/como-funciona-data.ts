export interface PassoComoFunciona {
  number: string;
  title: string;
  description: string;
}

export const passosComoFunciona: PassoComoFunciona[] = [
  {
    number: "01",
    title: "Contato inicial",
    description:
      "Você nos conta o que precisa: quantidade, funções da equipe e ideia de personalização.",
  },
  {
    number: "02",
    title: "Orçamento personalizado",
    description:
      "Montamos uma proposta com tecidos, acabamentos e prazos alinhados ao seu pedido.",
  },
  {
    number: "03",
    title: "Produção",
    description:
      "Confeccionamos, aplicamos o silk ou bordado e revisamos cada peça antes da entrega.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Você recebe os uniformes prontos, dentro do prazo combinado.",
  },
];
