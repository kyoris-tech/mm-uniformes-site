"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { ZoomIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { segmentos } from "./segmentos-data";
import { SegmentosModal } from "./SegmentosModal";

export function Segmentos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeSegmento = segmentos[activeIndex];

  // Mesma estratégia usada na galeria do site da Letmor: como a foto é trocada
  // clicando num badge (não é lazy por natureza), pré-carregamos todas as 8
  // fotos assim que a seção monta, com <img> nativo (fora do Next/Image). São
  // poucas fotos e leves, então o custo é baixo — e assim, quando o usuário
  // clica num segmento, a foto já está no cache do navegador e aparece na
  // hora, em vez de mostrar o fundo vazio por uma fração de segundo enquanto
  // baixa. O <Image unoptimized /> abaixo usa a mesma URL do arquivo original
  // (sem o proxy de otimização do Next), então ele bate certinho nesse cache.
  useEffect(() => {
    segmentos.forEach((segmento) => {
      const preloadImage = new window.Image();
      preloadImage.decoding = "async";
      preloadImage.src = segmento.photoSrc;
    });
  }, []);

  return (
    <section id="segmentos" className="bg-mm-cream py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="flex flex-col gap-8 lg:order-2">
            <div className="max-w-lg">
              <Text as="h2" size="3xl" weight="bold" color="primary" className="leading-tight">
                Atendemos empresas de diferentes segmentos.
              </Text>

              <Text color="muted" className="mt-3">
                Clique em um segmento para ver um exemplo de uniforme na
                galeria ao lado.
              </Text>
            </div>

            <div className="flex flex-wrap gap-3">
              {segmentos.map((segmento, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={segmento.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={cn(
                      "cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium shadow-sm transition-colors duration-300",
                      isActive
                        ? "border-primary bg-primary text-white"
                        : "border-primary/15 bg-white text-primary hover:border-primary/40",
                    )}
                  >
                    {segmento.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            aria-label={`Ampliar exemplo de uniforme para ${activeSegmento.label}`}
            className="group relative cursor-zoom-in text-left lg:order-1 lg:h-full"
          >
            {/* Mobile: mantém a proporção 16:9 (não há coluna de texto para
                "casar" em altura). Desktop (lg+): abandona a proporção fixa e
                estica para preencher a mesma altura do bloco de texto +
                badges ao lado, via grid `items-stretch` no contêiner pai. */}
            <div
              key={activeSegmento.id}
              className="segment-photo-transition relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-mm-navy lg:aspect-auto lg:h-full"
            >
              <Image
                src={activeSegmento.photoSrc}
                alt={activeSegmento.photoAlt}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {activeSegmento.label}
            </span>

            <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <ZoomIcon className="h-4 w-4" />
            </span>
          </button>
        </div>
      </Container>

      {isModalOpen && (
        <SegmentosModal
          segmentos={segmentos}
          activeIndex={activeIndex}
          onClose={() => setIsModalOpen(false)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
