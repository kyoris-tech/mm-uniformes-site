// TODO: substituir pelo número de WhatsApp real da MM Uniformes (com DDI+DDD,
// só dígitos, ex.: "5513999999999") antes de publicar o site.
const WHATSAPP_NUMBER = "SEU_NUMERO_WHATSAPP";
export const WHATSAPP_DISPLAY_NUMBER = "(xx) x xxxx-xxxx";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
