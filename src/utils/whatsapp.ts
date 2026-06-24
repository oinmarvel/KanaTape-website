import { APP_CONFIG } from '../constants/config';

/**
 * Generates a WhatsApp API URL with a pre-filled message.
 * @param message Optional custom message to pre-fill.
 * @returns The WhatsApp API URL.
 */
export const getWhatsAppUrl = (message?: string): string => {
  const text = message || APP_CONFIG.defaultWhatsAppMessage;
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${APP_CONFIG.phoneNumber}?text=${encodedText}`;
};
