export const contact = {
  whatsappDisplay: '+91 80770 80985',
  whatsappHref: 'https://wa.me/918077080985',
  callDisplay: '+91 98990 54206',
  callHref: 'tel:+919899054206',
  quoteMessage: 'Hi SafeDrive! I want a quote for my vehicle.',
};

export function getWhatsAppQuoteUrl(message = contact.quoteMessage) {
  return `${contact.whatsappHref}?text=${encodeURIComponent(message)}`;
}
