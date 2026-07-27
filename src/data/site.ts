/* Site-wide configuration. Phone, email and domain come from the client's
   final logo artwork (public/brand/Final-logo.png). Address and opening
   hours are intentionally omitted (client direction, July 2026). */

export const site = {
  name: "Malone Road Belt",
  tagline: "Moving your business forward.",
  description:
    "OEM-spec conveyor belts for mobile material processing equipment. We don't sell belts — we sell uptime.",
  url: "https://www.malonebelt.com",
  phone: "270-777-7727",
  phoneHref: "tel:+12707777727",
  email: "sales@malonebelt.com",
};

export const nav = {
  links: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    /* Interim launch page — remove from the nav once the final version
       is approved and it takes over as the live-launch landing. */
    { label: "Coming Soon", href: "/coming-soon" },
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
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request a quote", href: "/contact" },
  ],
};
