export const contact = {
  whatsappDisplay: '+91 80770 80985',
  whatsappHref: 'https://wa.me/918077080985',
  callDisplay: '+91 80770 80985',
  callHref: 'tel:+918077080985',
  quoteMessage: 'Hi SafeDrive! I want a quote for my vehicle.',
};

export function getWhatsAppQuoteUrl(message = contact.quoteMessage) {
  return `${contact.whatsappHref}?text=${encodeURIComponent(message)}`;
}
