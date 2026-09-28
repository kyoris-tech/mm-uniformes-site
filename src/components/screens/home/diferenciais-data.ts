import type { ComponentType } from "react";
import {
  ChatIcon,
  ClockIcon,
  CustomizeIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import type { IconProps } from "@/components/ui/icons";

export interface Diferencial {
  id: string;
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
}

export const diferenciais: Diferencial[] = [
  {
    id: "personalizacao",
    icon: CustomizeIcon,
    title: "Personalização completa",
    description:
      "Cores, logotipo e acabamentos definidos junto com você, para o uniforme refletir a identidade da sua empresa.",
  },
  {
    id: "atendimento",
    icon: ChatIcon,
    title: "Atendimento direto",
    description:
      "Fale direto com quem cuida do seu pedido, sem intermediários, do orçamento à entrega.",
  },
  {
    id: "tecidos",
    icon: ShieldIcon,
    title: "Tecidos para o trabalho",
    description:
      "Materiais selecionados para resistência e conforto no dia a dia de cada função.",
  },
  {
    id: "prazo",
    icon: ClockIcon,
    title: "Prazo combinado, prazo cumprido",
    description:
      "Cronograma de produção alinhado com você desde o fechamento do pedido.",
  },
];
