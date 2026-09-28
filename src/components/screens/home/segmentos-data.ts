export interface Segmento {
  id: string;
  label: string;
  photoSrc: string;
  photoAlt: string;
}

// As fotos abaixo são imagens de banco (Pexels), usadas como referência visual
// até o cliente enviar fotos reais de uniformes por segmento.
export const segmentos: Segmento[] = [
  {
    id: "construcao-civil",
    label: "Construção Civil",
    photoSrc: "/images/segmento-construcao-civil.jpg",
    photoAlt: "Equipe de construção civil uniformizada com colete e capacete",
  },
  {
    id: "industria",
    label: "Indústria",
    photoSrc: "/images/segmento-industria.jpg",
    photoAlt: "Equipe de produção industrial uniformizada em linha de fábrica",
  },
  {
    id: "saude",
    label: "Saúde",
    photoSrc: "/images/segmento-saude.jpg",
    photoAlt: "Profissionais de saúde uniformizados em ambiente hospitalar",
  },
  {
    id: "alimentacao",
    label: "Alimentação",
    photoSrc: "/images/segmento-alimentacao.jpg",
    photoAlt: "Cozinheiros uniformizados trabalhando em cozinha profissional",
  },
  {
    id: "educacao",
    label: "Educação",
    photoSrc: "/images/segmento-educacao.jpg",
    photoAlt: "Profissional da educação em sala de aula",
  },
  {
    id: "comercio-servicos",
    label: "Comércio e Serviços",
    photoSrc: "/images/segmento-comercio-servicos.jpg",
    photoAlt: "Atendente uniformizada auxiliando cliente em loja",
  },
  {
    id: "eventos",
    label: "Eventos",
    photoSrc: "/images/segmento-eventos.jpg",
    photoAlt: "Profissional de eventos uniformizado servindo em bandeja",
  },
  {
    id: "logistica",
    label: "Logística",
    photoSrc: "/images/segmento-logistica.jpg",
    photoAlt: "Equipe de logística uniformizada em corredor de armazém",
  },
];
