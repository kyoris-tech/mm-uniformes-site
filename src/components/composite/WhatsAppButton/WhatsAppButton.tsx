import { WhatsAppIcon } from "@/components/ui/icons";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const FLOATING_MESSAGE =
  "Olá! Vim pelo site da MM Uniformes e gostaria de solicitar um orçamento.";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl(FLOATING_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-neutral-900/20 transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  );
}
