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
      "Match the ply count to your machine's tension rating and pulley diameters, and take the belt endless, cut-length, stripped or ZIP CLIP® prepared. Every belt is cross-referenced to your machine or OEM part number.",
    ],
    features: [
      "Manufactured to DIN 22102, routinely tested in-house",
      "2, 3 and 4 ply EP carcasses matched to your tension rating",
      "Endless, stripped, cut-length or ZIP CLIP® supply formats",
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
    name: "Heavy-Duty & Specialized",
    subtitle: "Performance Belts",
    family: "Performance range",
    tagline: "Built for the hardest hits.",
    description: [
      "When standard multi-ply isn't enough: Ironcleat® reinforced-weave belts that last up to four times longer, and Ripstop steel-mesh belts that stop the tramp metal and rebar that slice ordinary belts. Fabric Breaker constructions with an extra breaker ply absorb the impact of large lumps in crushing and screening duty.",
      "For exceptional applications the range extends to heat, cold & frost, flameproof and oil & fat resistant cover compounds — specified case by case against your application survey.",
    ],
    features: [
      "Ironcleat®: lasts up to 4x longer than standard EP multi-ply",
      "Ripstop: reinforced steel wire mesh stops rips and punctures",
      "Fabric Breaker: extra breaker ply protects the carcass",
      "Heat, cold & frost, flameproof and oil resistant covers",
      "Hot spliced (vulcanized) or ZIP CLIP® prepared",
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
      "Pair the cleat pattern with a heavy-duty base belt such as Ironcleat® for cut, impact and wear resistance with excellent troughability. Our team will match cleat profile, height and pitch to your incline angle, material and belt speed.",
    ],
    features: [
      "Cleats hot-molded into the top cover for superior adhesion",
      "Profiles matched to incline angle, material type and belt speed",
      "Popular 15 mm, 25 mm and 32 mm cleat heights, optional V-joints",
      "Ironcleat®, Fabric Breaker and Ripstop base belt options",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    applications: ["Aggregates", "Quarrying", "Crushing", "Screening", "Stockpiling"],
    /* Machine-portrait imagery (client direction, 24 Aug 2026, modeled on
       the "MRB Cleatmax" references): mobile plant with the incline
       conveyors CleatMax belts actually run on — the hero even shows a
       chevron-cleated belt on the raised boom. */
    images: {
      hero: {
        src: "/products/photos/quarry-cleated-conveyor.jpg",
        alt: "Mobile crushing and screening plant in a quarry, its raised incline conveyor fitted with a chevron-cleated belt",
      },
      gallery: [
        {
          src: "/products/photos/crusher-incline-boom.jpg",
          alt: "Tracked mobile crusher with its long incline discharge conveyor raised against the sky",
        },
        {
          src: "/products/photos/crusher-side-profile.jpg",
          alt: "Side profile of a tracked mobile crusher with folded incline conveyor",
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
