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
    createWhatsAppUrl("Hi! I'd like to chat with a baker about ordering treats for an upcoming celebration."),

  chatWithBaker: () =>
    createWhatsAppUrl("Hi! I'd like to chat with a baker about my upcoming event."),

  cakeInquiry: (cakeType = 'this cake') =>
    createWhatsAppUrl(`Hi! I'd like to ask about ${cakeType === 'this cake' ? 'this cake' : cakeType}.`),

  pastryInquiry: (pastryType = 'pastries') =>
    createWhatsAppUrl("Hi! I'd like to order some fresh pastries and cupcakes."),

  cateringQuote: () =>
    createWhatsAppUrl("Hi! I'd like to get a catering quote for an event."),

  giftBasketInquiry: () =>
    createWhatsAppUrl("Hi! I'd like to ask about an Artisanal Gift Basket."),

  moneyBouquetInquiry: () =>
    createWhatsAppUrl("Hi! I'd like to order an Elegant Money Bouquet."),

  deliveryInquiry: (city = '') =>
    createWhatsAppUrl(
      city
        ? `Hi! I'd like to check delivery availability to ${city}.`
        : "Hi! I'd like to check delivery availability to my location."
    ),

  galleryItemInquiry: (itemTitle = 'this treat') =>
    createWhatsAppUrl(`Hi! I saw "${itemTitle}" in your gallery and I'd like to ask about this design.`),

  customRequest: (details = '') =>
    createWhatsAppUrl(`Hi! I have a custom inquiry: ${details || "Let's discuss my idea."}`),
};
