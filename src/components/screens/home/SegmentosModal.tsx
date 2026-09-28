"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowRightIcon, CloseIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type { Segmento } from "./segmentos-data";

const SWIPE_THRESHOLD_PX = 50;

interface SegmentosModalProps {
  segmentos: Segmento[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function SegmentosModal({
  segmentos,
  activeIndex,
  onClose,
  onNavigate,
}: SegmentosModalProps) {
  const touchStartX = useRef<number | null>(null);
  const segmento = segmentos[activeIndex];

  function goTo(index: number) {
    onNavigate((index + segmentos.length) % segmentos.length);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goTo(activeIndex + 1);
      if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={segmento.label}
      onClick={onClose}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStartX.current;

        if (delta > SWIPE_THRESHOLD_PX) goTo(activeIndex - 1);
        else if (delta < -SWIPE_THRESHOLD_PX) goTo(activeIndex + 1);

        touchStartX.current = null;
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute top-5 right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
      >
        <CloseIcon className="h-5 w-5" />
      </button>

      <div
        onClick={(event) => event.stopPropagation()}
        className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-mm-cream"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-mm-navy">
          {/* unoptimized: mesma URL que o preload da seção Segmentos já
              deixou no cache do navegador, então a troca de foto aqui
              (anterior/próxima) também aparece na hora, sem fundo vazio. */}
          <Image
            src={segmento.photoSrc}
            alt={segmento.photoAlt}
            fill
            unoptimized
            className="object-cover"
          />

          <button
            type="button"
            aria-label="Segmento anterior"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-primary shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ArrowRightIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Próximo segmento"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/85 text-primary shadow-md transition-transform duration-300 hover:scale-110"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-8">
          <Text as="h3" size="2xl" weight="bold" color="primary">
            {segmento.label}
          </Text>
          <Text color="muted">
            Exemplo de uniforme personalizado para o segmento de{" "}
            {segmento.label.toLowerCase()}.
          </Text>
        </div>

        <div className="flex items-center justify-center gap-2 pb-6">
          {segmentos.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ir para ${item.label}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 cursor-pointer rounded-full transition-all duration-300",
                index === activeIndex ? "w-6 bg-primary" : "w-2 bg-primary/30",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
