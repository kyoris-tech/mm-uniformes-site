import { cn } from "@/lib/cn";
import { ImagePlaceholderIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/Text";
import type {
  PhotoPlaceholderAspect,
  PhotoPlaceholderProps,
} from "./photo-placeholder.types";

// Placeholder visual para fotos reais (uniformes, produção, equipe) que ainda
// não foram enviadas pelo cliente. Assim que as fotos chegarem, cada uso deste
// componente deve ser substituído por um <Image> do next/image apontando para
// o arquivo real em /public/images.
const aspectClassMap: Record<PhotoPlaceholderAspect, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function PhotoPlaceholder({
  label,
  aspect = "video",
  rounded = true,
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "photo-placeholder relative flex w-full items-center justify-center overflow-hidden border border-white/10",
        rounded && "rounded-3xl",
        aspectClassMap[aspect],
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <ImagePlaceholderIcon className="h-8 w-8 text-white/60" />
        <Text size="sm" color="inverse-muted" className="max-w-[16rem]">
          {label}
        </Text>
      </div>
    </div>
  );
}
