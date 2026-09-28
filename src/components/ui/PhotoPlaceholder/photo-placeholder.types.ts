export type PhotoPlaceholderAspect = "square" | "video" | "portrait" | "wide";

export interface PhotoPlaceholderProps {
  label: string;
  aspect?: PhotoPlaceholderAspect;
  /**
   * Controla o arredondamento próprio do placeholder. Desative (false) quando
   * ele já fica encaixado dentro de outro contêiner que cuida do
   * arredondamento (ex.: um modal com `overflow-hidden rounded-3xl`) — assim
   * evitamos que duas classes de `border-radius` concorrentes (uma no
   * componente, outra vinda de fora via `className`) briguem pela mesma
   * propriedade CSS.
   */
  rounded?: boolean;
  className?: string;
}
