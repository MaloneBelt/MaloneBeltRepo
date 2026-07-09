import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "endless-belt",
    sku: "MB-EB",
    name: "Endless Belt Ready to Fit",
    tagline: "Factory hot-vulcanized loop. Fit it and run.",
    description: [
      "A finished length of conveyor belt with a hot (vulcanized) splice forming a continuous loop, manufactured to your machine's exact OEM specification. It arrives ready to fit — no on-site splicing, no curing time, no specialist crew.",
      "Hot vulcanized joints are almost twice as strong as cold vulcanized splices, so an endless belt is the longest-lasting way to put your machine back to work. Every belt is made to DIN 22102 and cross-referenced to your OEM part number.",
    ],
    features: [
      "Factory hot-vulcanized splice — nearly 2x the strength of a cold splice",
      "Manufactured to exact OEM dimensions for your machine",
      "No on-site splicing crew or curing downtime required",
      "Cross-referenced MB part numbers for fast reordering",
      "ISO 9001 certified manufacturing",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Belt width", value: "300–2000 mm" },
      { label: "Carcass", value: "EP fabric, 2–5 plies" },
      { label: "Temperature range", value: "-30°C to +120°C" },
      { label: "Splice", value: "Hot vulcanized (factory)" },
    ],
    applications: ["Crushing", "Screening", "Recycling", "Aggregates", "Quarrying"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/endless-belt/hero.png",
        alt: "Endless conveyor belt with a hot vulcanized splice forming a continuous loop",
      },
      gallery: [
        {
          src: "/products/endless-belt/rolls.png",
          alt: "Finished endless conveyor belt rolls ready to ship",
        },
        {
          src: "/products/endless-belt/splice.png",
          alt: "Splice crew hot-vulcanizing a conveyor belt joint",
        },
      ],
    },
    availability: { status: "in-stock", label: "Ships today" },
    buyingMoment: "planned",
    featured: true,
    related: ["zip-clip", "ep-multi-ply", "toughflex"],
  },
  {
    slug: "zip-clip",
    sku: "MB-ZC",
    name: "ZIP CLIP® Mechanically Fastened Belt",
    tagline: "Machine down? Fitted in as little as one hour.",
    description: [
      "A replacement conveyor belt with mechanically prepared ends, joined on the machine with a push-in or screw-in connecting pin. No specialist tools, no vulcanizing crew, no curing time — the belt is ready to run the moment the pin is home.",
      "Choose the Screw-In variant with a polyurethane seal, or the Push-In variant with two zinc-plated steel retaining collars that keep the pin from working loose during operation. Fitting instructions ship with every belt.",
    ],
    features: [
      "Fits in as little as one hour — ready to run immediately",
      "No specialist tools or splicing crew required",
      "Screw-In variant: connecting pin with polyurethane seal",
      "Push-In variant: pin secured by 2 zinc-plated retaining collars",
      "Recessed clips protect the splice from scrapers and skirting",
      "Fitting instructions shipped with every belt",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Splice", value: "Mechanical, pin-joined" },
      { label: "Variants", value: "Screw-In / Push-In" },
      { label: "Fitting time", value: "~1 hour" },
      { label: "Tools required", value: "None (standard hand tools)" },
    ],
    applications: ["Emergency replacement", "Crushing", "Screening", "Recycling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/zip-clip/hero.png",
        alt: "ZIP CLIP mechanically fastened conveyor belt loop with mechanical splice",
      },
      gallery: [
        {
          src: "/products/zip-clip/fasteners.png",
          alt: "ZIP CLIP replacement belt roll with connecting pin fastener kit",
        },
        {
          src: "/products/zip-clip/splice-detail.png",
          alt: "Close-up of a mechanically fastened ZIP CLIP splice with recessed clips",
        },
        {
          src: "/products/zip-clip/fitting.png",
          alt: "Technicians fitting a ZIP CLIP mechanically fastened belt on site",
        },
      ],
    },
    availability: { status: "in-stock", label: "Ships today" },
    buyingMoment: "down-now",
    featured: true,
    related: ["endless-belt", "ep-multi-ply"],
  },
  {
    slug: "ep-multi-ply",
    sku: "MB-EP",
    name: "EP Multi-Ply Conveyor Belt",
    tagline: "The workhorse for large lumps and abrasive materials.",
    description: [
      "EP multi-ply fabric belts are the industry standard for heavy, abrasive duty. Polyester warp and polyamide weft give the carcass high tensile strength with low elongation, absorbing the impact of large lumps under extreme conditions.",
      "Built to DIN 22102, ISO 10247 and BS 490, with cover grades matched to your material and 2 to 5 plies matched to your tension rating.",
    ],
    features: [
      "Recommended for large lumps and abrasive materials",
      "Polyester/polyamide (EP) carcass — high strength, low stretch",
      "2–5 plies matched to your machine's tension rating",
      "Cover grades for abrasion, impact and cut resistance",
      "Available endless, cut-length or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Standards", value: "DIN 22102 / ISO 10247 / BS 490" },
      { label: "Belt width", value: "300–2000 mm" },
      { label: "Carcass", value: "EP fabric, 2–5 plies" },
      { label: "Temperature range", value: "-30°C to +120°C" },
      { label: "Cover grades", value: "Abrasion / impact resistant" },
    ],
    applications: ["Crushing", "Screening", "Quarrying", "Aggregates", "Mining"],
    standards: ["DIN 22102", "ISO 10247", "BS 490"],
    images: {
      hero: {
        src: "/products/ep-multi-ply/hero.png",
        alt: "EP multi-ply conveyor belt conveying rock on a mobile crusher",
      },
      gallery: [
        {
          src: "/products/ep-multi-ply/material.png",
          alt: "Close-up of abrasive material carried on an EP multi-ply belt",
        },
        {
          src: "/products/ep-multi-ply/anatomy.png",
          alt: "Cutaway diagram of belt construction: covers, rubber skim and fabric plies",
        },
      ],
    },
    availability: { status: "in-stock", label: "Ships today" },
    buyingMoment: "planned",
    featured: true,
    related: ["toughflex", "ripstop", "endless-belt"],
  },
  {
    slug: "toughflex",
    sku: "MB-TF",
    name: "ToughFlex®",
    tagline: "Lasts up to 4x longer than standard EP multi-ply.",
    description: [
      "ToughFlex® uses a special weave of two reinforced fabric plies plus an additional binder warp. The result is a carcass that resists puncturing and lasts up to four times longer than a standard EP multi-ply belt in the same application.",
      "When belt changes are eating your maintenance windows, ToughFlex® is the upgrade that pays for itself in uptime.",
    ],
    features: [
      "Lasts up to 4x longer than standard EP multi-ply belts",
      "Special weave: 2 reinforced plies + additional binder warp",
      "Superior puncture resistance",
      "Fewer belt changes — more scheduled uptime",
      "Available endless, cut-length or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Carcass", value: "2 reinforced plies + binder warp" },
      { label: "Service life", value: "Up to 4x standard EP" },
      { label: "Resistance", value: "Puncture / rip" },
    ],
    applications: ["Crushing", "Screening", "Recycling", "Demolition waste"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/toughflex/hero.png",
        alt: "Illustration of the ToughFlex special weave with reinforced plies and binder warp",
      },
      gallery: [
        {
          src: "/products/toughflex/testing.png",
          alt: "Conveyor belt comparison testing photo",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: true,
    related: ["ripstop", "ep-multi-ply"],
  },
  {
    slug: "ripstop",
    sku: "MB-RS",
    name: "Ripstop",
    tagline: "Steel-mesh reinforced. Built for C&D and crushers.",
    description: [
      "Ripstop construction adds a reinforced steel wire mesh weft between the top cover and the synthetic fabric carcass. Sharp tramp metal and rebar that would slice an ordinary belt are stopped before they reach the plies.",
      "The belt of choice for construction & demolition waste and crusher applications where rip and puncture damage is the number one cause of unplanned downtime.",
    ],
    features: [
      "Reinforced steel wire mesh weft stops rips and punctures",
      "Synthetic fabric carcass keeps the belt flexible and troughable",
      "Excellent resistance to tramp metal and rebar strikes",
      "Purpose-built for C&D waste and crusher duty",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Reinforcement", value: "Steel wire mesh (weft)" },
      { label: "Carcass", value: "Synthetic fabric plies" },
      { label: "Resistance", value: "Rip / puncture" },
    ],
    applications: ["C&D waste", "Crushing", "Recycling", "Scrap handling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/ripstop/hero.png",
        alt: "Ripstop belt construction render showing steel wire mesh between rubber covers and fabric plies",
      },
      gallery: [],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["toughflex", "ep-multi-ply"],
  },
  {
    slug: "cleated-chevron",
    sku: "MB-CL",
    name: "Cleated & Chevron Belts",
    tagline: "Hot-molded cleats for steep-incline conveying.",
    description: [
      "Custom belts with hot-molded cross-cleats, chevron patterns and siderails, manufactured in-house to DIN 22102. Cleats are molded — not glued — so they stay on the belt at the angles and speeds that shed bolt-on profiles.",
      "Chevron profile designs C25P550, C25P750 and S15P750 cover the common incline duties; custom cleat layouts are drawn to your belt width, cleat width and pitch.",
    ],
    features: [
      "Hot-molded cross-cleats and chevrons — never glued",
      "Optional hot-molded siderails for steep inclines",
      "Standard profiles: C25P550 / C25P750 / S15P750",
      "Custom cleat layouts to your width and pitch",
      "Manufactured in-house to DIN 22102",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Profiles", value: "C25P550 / C25P750 / S15P750" },
      { label: "Cleats", value: "Hot-molded chevron / cross-cleat" },
      { label: "Options", value: "Siderails, custom pitch" },
    ],
    applications: ["Steep-incline conveying", "Screening", "Aggregates", "Biomass"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/cleated-chevron/hero.png",
        alt: "Close-up of hot-molded chevron cross-cleats on a cleated conveyor belt",
      },
      gallery: [
        {
          src: "/products/cleated-chevron/sidewall.png",
          alt: "Belt section with hot-molded siderails and cross-cleats for steep-incline conveying",
        },
        {
          src: "/products/cleated-chevron/profile.png",
          alt: "Dimensioned cross-section drawing of a chevron cleat profile",
        },
        {
          src: "/products/cleated-chevron/cleat-drawing.png",
          alt: "Dimensioned technical drawing of a cleat profile used in belt selection",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: true,
    related: ["ep-multi-ply", "endless-belt"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => Boolean(p));
}

/* Belt formats — shown in the "Choose your format" section on the home page.
   Formats are ways of buying a belt, not separate products. */
export interface BeltFormat {
  id: string;
  name: string;
  description: string;
  image: { src: string; alt: string };
}

export const beltFormats: BeltFormat[] = [
  {
    id: "endless",
    name: "Endless — Ready to Fit",
    description:
      "Factory hot-vulcanized into a continuous loop. Fit it and run — no splicing on site.",
    image: {
      src: "/products/formats/endless-loop.png",
      alt: "Endless conveyor belt loop with hot vulcanized splice",
    },
  },
  {
    id: "stripped",
    name: "Stripped — Ready to Splice",
    description:
      "Measured length with overlapping stripped ends, prepared for hot or cold splicing on site.",
    image: {
      src: "/products/formats/stripped-loop.png",
      alt: "Conveyor belt loop with stripped ends ready for splicing",
    },
  },
  {
    id: "cut-length",
    name: "Cut Length",
    description:
      "Square-ended length with an optional splice allowance. The flexible stock option.",
    image: {
      src: "/products/formats/cut-length.png",
      alt: "Cut-length conveyor belt roll with square ends",
    },
  },
  {
    id: "zip-clip",
    name: "ZIP CLIP® — Ready to Pin",
    description:
      "Mechanically prepared ends joined with a push-in or screw-in pin. Fits in about an hour.",
    image: {
      src: "/products/formats/zip-clip-loop.png",
      alt: "ZIP CLIP belt loop with mechanical splice",
    },
  },
];

/* Specialized belts — teaser on /products, no detail pages in Phase 1. */
export interface SpecializedBelt {
  id: string;
  name: string;
  description: string;
  icon: { src: string; alt: string };
}

export const specializedBelts: SpecializedBelt[] = [
  {
    id: "heat",
    name: "Heat Resistant",
    description: "Hot abrasive materials: clinker, coke, foundry sand, ore, slag.",
    icon: { src: "/products/specialized/heat.png", alt: "Heat resistant belts category icon" },
  },
  {
    id: "cold",
    name: "Cold & Frost Resistant",
    description: "Covers engineered to protect the carcass in deep-cold operation.",
    icon: { src: "/products/specialized/cold.png", alt: "Cold and frost resistant belts category icon" },
  },
  {
    id: "flame",
    name: "Flame Proof",
    description: "For combustible materials — underground duty, sawdust, biomass storage.",
    icon: { src: "/products/specialized/flame.png", alt: "Flame proof belts category icon" },
  },
  {
    id: "oil",
    name: "Oil & Fat Resistant",
    description: "Resists oil and fat penetration: grain, fertilizer, wood, food, recycling.",
    icon: { src: "/products/specialized/oil.png", alt: "Oil and fat resistant belts category icon" },
  },
];
