/**
 * WhatsApp Integration Utility for Berry Luxe Treats
 * Centralized configuration for all WhatsApp messaging across the app.
 */

export const WHATSAPP_CONFIG = {
  // Official Berry Luxe Treats WhatsApp Phone Number (Cameroon Country Code +237)
  phoneNumber: '237672288000',
  displayPhoneNumber: '+237 672 288 000',
  defaultGreeting: 'Hi Berry Luxe Treats! ',
};

/**
 * Builds a direct WhatsApp chat URL with a pre-filled, URL-encoded message.
 * @param {string} customMessage - Message to send
 * @returns {string} Fully qualified WhatsApp click-to-chat URL
 */
export function createWhatsAppUrl(customMessage = '') {
  const phone = WHATSAPP_CONFIG.phoneNumber.replace(/[^0-9]/g, '');
  const message = customMessage || `${WHATSAPP_CONFIG.defaultGreeting}I would like to place an order or inquire about your treats.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Contextual WhatsApp Message Builders
 */
export const WhatsAppMessages = {
  generalOrder: () =>
    createWhatsAppUrl('Hi Berry Luxe Treats! I would like to order and taste the difference. Please share your current availability.'),

  chatWithBaker: () =>
    createWhatsAppUrl('Hi Berry! I’d love to chat with the baker about a custom order for my upcoming celebration.'),

  cakeInquiry: (cakeType = 'Custom Cake') =>
    createWhatsAppUrl(`Hi Berry Luxe Treats! I’d like to inquire about ordering a ${cakeType}. What flavors and sizes are available?`),

  pastryInquiry: (pastryType = 'Pastries & Cupcakes') =>
    createWhatsAppUrl(`Hi Berry Luxe Treats! I’d like to order some ${pastryType} for fresh pickup / delivery.`),

  cateringQuote: () =>
    createWhatsAppUrl('Hi Berry Luxe Treats! I would like to request a catering quote for my upcoming event (wedding / birthday / corporate).'),

  giftBasketInquiry: () =>
    createWhatsAppUrl('Hi Berry Luxe Treats! I’d like to order an Artisanal Gift Basket. Please let me know the available package options.'),

  moneyBouquetInquiry: () =>
    createWhatsAppUrl('Hi Berry Luxe Treats! I’d like to order an Elegant Money Bouquet for a special surprise.'),

  deliveryInquiry: (city = '') =>
    createWhatsAppUrl(
      city
        ? `Hi Berry Luxe Treats! I would like to check delivery availability and rates to ${city}.`
        : 'Hi Berry Luxe Treats! I would like to check your delivery schedules to Buea, Limbe, Tiko, Douala, or other locations.'
    ),

  galleryItemInquiry: (itemTitle = 'this treat') =>
    createWhatsAppUrl(`Hi Berry Luxe Treats! I saw "${itemTitle}" in your gallery and I would love to order something similar.`),

  customRequest: (details = '') =>
    createWhatsAppUrl(`Hi Berry Luxe Treats! I have a custom inquiry: ${details || 'Please let me know how to proceed.'}`),
};
