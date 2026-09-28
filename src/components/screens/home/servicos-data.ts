import type { ComponentType } from "react";
import { EmbroideryIcon, PrintIcon, ScissorsIcon } from "@/components/ui/icons";
import type { IconProps } from "@/components/ui/icons";

export interface Servico {
  id: string;
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  photoSrc: string;
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
];
