// Número de WhatsApp da MM Uniformes (DDI+DDD, só dígitos).
const WHATSAPP_NUMBER = "5513978237577";
export const WHATSAPP_DISPLAY_NUMBER = "(13) 97823-7577";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
