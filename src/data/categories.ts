import type { Category } from "@/types/product";

/* Product categories — the top level of the catalog (restructured at the
   client meeting, Aug 2026): Standard multi-ply belts, Heavy-Duty &
   Specialized constructions, the MRB CleatMax cleated range, and a link-only
   Custom / Special tile that routes straight to the contact page. Order
   here drives the order of every category listing. */

export const categories: Category[] = [
  {
    slug: "standard",
    code: "MB-ST",
    name: "Standard",
    subtitle: "Multi-Ply Conveyor Belts",
    family: "Core range",
    tagline: "The stocked EP workhorse — pick your ply.",
    description: [
      "The standard Malone Road Belt range: EP multi-ply conveyor belts manufactured to DIN 22102 and held in stock as 2, 3 and 4 ply constructions. Polyester warp and polyamide weft give the carcass high tensile strength with negligible elongation and excellent troughability.",
      "Match the ply count to your machine's tension rating and pulley diameters, and take the belt endless, cut-length, stripped or MRB ZIP® prepared. Every belt is cross-referenced to your machine or OEM part number.",
    ],
    features: [
      "Manufactured to DIN 22102, routinely tested in-house",
      "2, 3 and 4 ply EP carcasses matched to your tension rating",
      "Endless, stripped, cut-length or MRB ZIP® supply formats",
      "Factory hot-vulcanized splices — nearly 2x cold-splice strength",
      "Cross-referenced MB part numbers for fast reordering",
    ],
    applications: [
      "Quarrying",
      "Crushing",
      "Screening",
      "Recycling",
      "Aggregates",
      "Mining",
    ],
    images: {
      hero: {
        src: "/products/photos/belt-roll-pair.jpg",
        alt: "Finished conveyor belt rolls wrapped for dispatch in the warehouse",
      },
      gallery: [
        {
          src: "/products/photos/belt-roll-spiral.jpg",
          alt: "Face of a wound conveyor belt roll showing the ply spiral",
        },
      ],
    },
  },
  {
    slug: "heavy-duty-specialized",
    code: "MB-HD",
    name: "Heavy-Duty",
    subtitle: "Performance Belts",
    family: "Performance range",
    tagline: "Built for the hardest hits.",
    description: [
      "When standard multi-ply isn't enough: reinforced straight-warp belts that last up to four times longer.",
    ],
    features: [
      "Reinforced weave: lasts up to 4x longer than standard EP multi-ply",
      "Hot spliced (vulcanized) or MRB ZIP® prepared",
    ],
    applications: [
      "Crushing",
      "C&D waste",
      "Foundry & clinker",
      "Biomass & sawdust",
      "Grain & food",
      "Underground",
    ],
    images: {
      hero: {
        src: "/products/photos/crusher-discharge.jpg",
        alt: "Mobile crusher discharging rock over its incline conveyor",
      },
      /* Single image for now — the client trimmed the range gallery to the
         hero only (client review, Aug 2026). */
      gallery: [],
    },
  },
  {
    slug: "incline",
    code: "MB-IN",
    name: "MRB CleatMax",
    subtitle: "Aggregate Cleated Belts",
    family: "MRB CleatMax™ cleated range",
    tagline: "Rock and no rollback.",
    description: [
      "A MRB CleatMax™ cleated belt range built for aggregate duty: crushed rock, screened material and everything a quarry throws at it. The cleat profiles are integrally hot-molded into the belt's top cover — not glued or bolted on — so they grip the belt as firmly as the belt grips the load, extending belt life and keeping material moving up steep inclines.",
      "Pair the cleat pattern with a heavy-duty base belt such as Bulldog Cleat for cut, impact and wear resistance with excellent troughability. Our team will match cleat profile, height and pitch to your incline angle, material and belt speed.",
    ],
    features: [
      "Cleats hot-molded into the top cover for superior adhesion",
      "Profiles matched to incline angle, material type and belt speed",
      "Popular 15 mm, 25 mm and 32 mm cleat heights, optional V-joints",
      "Heavy-Duty base belt options",
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    applications: ["Aggregates", "Quarrying", "Crushing", "Screening", "Stockpiling"],
    /* Machine-portrait imagery (client direction, 24 Aug 2026, modeled on
       the "MRB Cleatmax" references): hero and gallery are the client's own
       26 Aug 2026 photo set from functional_docs/MRB Cleatmax (third-party
       machine marks painted out, upscaled to 1600x900; the milling-machine
       cut-out arrived with a painted checkerboard and was keyed to real
       alpha, hence fit: "contain"). */
    images: {
      hero: {
        src: "/products/photos/cleatmax-incline-cleated.jpg",
        alt: "Cleated belt running up a steep incline conveyor inside a recycling plant",
      },
      gallery: [
        {
          src: "/products/photos/cleatmax-chevron-closeup.jpg",
          alt: "Close-up of a chevron-cleated belt with hot-molded cleats",
        },
        {
          src: "/products/photos/cleatmax-trommel-screen.jpg",
          alt: "Tracked trommel screen with its folding incline conveyors deployed on a recycling yard",
        },
        {
          src: "/products/photos/cleatmax-milling-truck.jpg",
          alt: "Cold milling machine loading millings into a dump truck over its raised discharge conveyor",
        },
        {
          src: "/products/photos/cleatmax-milling-machine.png",
          alt: "Cold milling machine cut-out with its long folding discharge conveyor",
          fit: "contain",
        },
      ],
    },
  },
  {
    slug: "custom-special",
    code: "MB-CS",
    name: "Custom / Special",
    subtitle: "Engineered to Order",
    family: "Made to order",
    tagline: "Not in the catalog? We build it to your spec.",
    href: "/contact",
    description: [
      "Special profiles, siderails, unusual widths, exceptional compounds — if it runs on a belt, we can build it. Send us your application and our team comes back with a drawing and a straight quote.",
    ],
    features: [],
    applications: [],
    images: {
      hero: {
        src: "/products/photos/belt-diamond-profile.jpg",
        alt: "Diamond-profile rubber belt surface, one of the special patterns made to order",
      },
      gallery: [],
    },
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
