import type { ComponentType } from "react";
import {
  EmbroideryIcon,
  PrintIcon,
  ReflectiveIcon,
  ScissorsIcon,
} from "@/components/ui/icons";
import type { IconProps } from "@/components/ui/icons";

export interface Servico {
  id: string;
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  // Sem foto ainda: o card mostra um PhotoPlaceholder até o cliente enviar.
  photoSrc?: string;
  photoAlt: string;
}

// As fotos abaixo são imagens de banco (Pexels), usadas como referência visual
// até o cliente enviar fotos reais de cada etapa da produção.
export const servicos: Servico[] = [
  {
    id: "silk-screen",
    icon: PrintIcon,
    title: "Silk Screen",
    description:
      "Aplicação de logotipo e identidade visual com acabamento resistente à lavagem e ao uso diário.",
    photoSrc: "/images/servico-silk-screen.jpg",
    photoAlt: "Aplicação de silk screen com tinta amarela sobre tecido",
  },
  {
    id: "bordado",
    icon: EmbroideryIcon,
    title: "Bordado Computadorizado",
    description:
      "Bordado de precisão para uma apresentação mais formal e duradoura da marca.",
    photoSrc: "/images/servico-bordado-computadorizado.jpg",
    photoAlt: "Cabeças de máquina de bordado computadorizado em operação",
  },
  {
    id: "confeccao",
    icon: ScissorsIcon,
    title: "Confecção sob Medida",
    description:
      "Modelagem e costura ajustadas por função e numeração da sua equipe.",
    photoSrc: "/images/servico-confeccao-sob-medida.jpg",
    photoAlt: "Corte de tecido sob medida com régua e tesoura",
  },
  {
    id: "faixa-refletiva",
    icon: ReflectiveIcon,
    title: "Aplicação de Faixa Refletiva",
    description:
      "Faixas refletivas aplicadas em coletes, camisas e calças para mais visibilidade e segurança da equipe.",
    photoAlt: "Uniforme com aplicação de faixa refletiva",
  },
];
