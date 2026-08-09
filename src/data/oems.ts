/* Allied OEM / manufacturer brands whose machines MRB belts fit. Source:
   client list (functional_docs/OEMS.xlsx, July 2026). Logos live in
   public/oems/<slug>.png in their ORIGINAL brand colors (client direction,
   Aug 2026), sourced from each manufacturer's official site/press assets.
   tone: "dark" marks logos whose original artwork is white-on-dark — they
   render directly on dark bands and get a petrol plate on white surfaces.
   KPI and Roadtec carry the Astec mark (their current corporate branding);
   Terex Cedar Rapids / Terex MPS use the Terex corporate mark. */

export interface Oem {
  slug: string;
  name: string;
  logo: string;
  /* original artwork is a white-on-dark lockup: render on a dark plate
     when the surrounding surface is white */
  tone?: "dark";
}

export const oems: Oem[] = [
  { slug: "anaconda", name: "Anaconda", logo: "/oems/anaconda.png" },
  { slug: "astec-mobile-screens", name: "Astec Mobile Screens", logo: "/oems/astec-mobile-screens.png" },
  { slug: "barford", name: "Barford", logo: "/oems/barford.png" },
  { slug: "eagle-crusher", name: "Eagle Crusher", logo: "/oems/eagle-crusher.png" },
  { slug: "edge", name: "EDGE", logo: "/oems/edge.png" },
  { slug: "ims", name: "Irish Manufacturing (IMS)", logo: "/oems/ims.png" },
  { slug: "irock", name: "IROCK", logo: "/oems/irock.png" },
  { slug: "kleemann", name: "Kleemann", logo: "/oems/kleemann.png" },
  { slug: "kpi", name: "Kolberg-Pioneer (KPI)", logo: "/oems/kpi.png" },
  { slug: "mccloskey", name: "McCloskey", logo: "/oems/mccloskey.png", tone: "dark" },
  { slug: "mccloskey-environmental", name: "McCloskey Environmental", logo: "/oems/mccloskey-environmental.png" },
  { slug: "mws", name: "McCloskey Washing Systems (MWS)", logo: "/oems/mws.png", tone: "dark" },
  { slug: "metso", name: "Metso", logo: "/oems/metso.png" },
  { slug: "pronar", name: "Pronar", logo: "/oems/pronar.png" },
  { slug: "rubblemaster", name: "Rubblemaster", logo: "/oems/rubblemaster.png" },
  { slug: "roadtec", name: "Roadtec (Astec)", logo: "/oems/roadtec.png" },
  { slug: "sandvik", name: "Sandvik", logo: "/oems/sandvik.png" },
  { slug: "telestack", name: "Telestack", logo: "/oems/telestack.png" },
  { slug: "terex-cbi", name: "Terex CBI", logo: "/oems/terex-cbi.png", tone: "dark" },
  { slug: "terex-cedarapids", name: "Terex Cedar Rapids", logo: "/oems/terex-cedarapids.png" },
  { slug: "terex-ecotec", name: "Terex Ecotec", logo: "/oems/terex-ecotec.png" },
  { slug: "terex-evoquip", name: "Terex Evoquip", logo: "/oems/terex-evoquip.png" },
  { slug: "terex-finlay", name: "Terex Finlay", logo: "/oems/terex-finlay.png" },
  { slug: "terex-marco", name: "Terex Marco", logo: "/oems/terex-marco.png" },
  { slug: "terex-mds", name: "Terex MDS", logo: "/oems/terex-mds.png" },
  { slug: "terex-mps", name: "Terex MPS", logo: "/oems/terex-mps.png" },
  { slug: "terex-powerscreen", name: "Terex Powerscreen", logo: "/oems/terex-powerscreen.png" },
  { slug: "terex-prostack", name: "Terex Prostack", logo: "/oems/terex-prostack.png" },
  { slug: "terex-washing-systems", name: "Terex Washing Systems", logo: "/oems/terex-washing-systems.png" },
  { slug: "tesab", name: "Tesab", logo: "/oems/tesab.png", tone: "dark" },
];
