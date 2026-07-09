/* Site-wide configuration. Contact details are placeholders until the client
   confirms addresses, phones and inboxes (see Client content deliverables §6). */

export const site = {
  name: "Malone Road Belt",
  tagline: "Keep the line moving.",
  description:
    "OEM-spec conveyor belts for mobile material processing equipment. We don't sell belts — we sell uptime.",
  url: "https://www.maloneroadbelt.com",
  phone: "+44 28 0000 0000",
  phoneHref: "tel:+442800000000",
  email: "sales@maloneroadbelt.com",
  address: "Malone Road, Belfast, Northern Ireland",
  hours: "Mon–Fri 07:00–18:00 GMT",
};

export const nav = {
  links: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const footerLinks = {
  products: [
    { label: "Endless Belts", href: "/products/endless-belt" },
    { label: "ZIP CLIP®", href: "/products/zip-clip" },
    { label: "EP Multi-Ply", href: "/products/ep-multi-ply" },
    { label: "ToughFlex®", href: "/products/toughflex" },
    { label: "Cleated & Chevron", href: "/products/cleated-chevron" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
    { label: "Request a quote", href: "/contact" },
  ],
};
