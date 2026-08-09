import type { Category } from "@/types/product";

/* Product categories — the top level of the catalog. Sourced from the Giant
   Handbook (core ranges) and the Cleatpro X™ brochure (application-focused
   cleated ranges). Order here drives the order of every category listing. */

export const categories: Category[] = [
  {
    slug: "conveyor-belts",
    code: "MB-CB",
    name: "Conveyor Belts",
    subtitle: "The Core Range",
    family: "Core range",
    tagline: "Your machine's exact spec, ready to ship.",
    description: [
      "The core Malone Road Belt range: EP multi-ply conveyor belts manufactured to DIN 22102 and supplied in the format that matches the way you work — endless and ready to fit, cut length, or ZIP CLIP® mechanically fastened. Every belt is cross-referenced to your machine or OEM part number.",
      "Polyester-polyamide (EP) carcasses deliver high strength with negligible elongation and excellent troughability, while hot-molded cleats, siderails and chevron profiles turn any base belt into a custom conveying solution.",
    ],
    features: [
      "Manufactured to DIN 22102, routinely tested in-house",
      "Endless, stripped, cut-length or ZIP CLIP® supply formats",
      "2–5 ply EP carcass matched to your tension rating",
      "Factory hot-vulcanized splices — nearly 2x cold-splice strength",
      "Cross-referenced MB part numbers for fast reordering",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Belt width", value: "300–2000 mm" },
      { label: "Carcass", value: "EP fabric, 2–5 plies" },
      { label: "Tensile ratings", value: "228–457 PIW" },
      { label: "Splices", value: "Hot vulcanized / ZIP CLIP®" },
      { label: "Temperature range", value: "-30°C to +70°C" },
    ],
    applications: [
      "Quarrying",
      "Construction & Demolition",
      "Recycling",
      "Road construction",
      "Agriculture",
      "Mining",
    ],
    images: {
      hero: {
        src: "/products/photos/belt-line.jpg",
        alt: "Black rubber conveyor belt filling the frame along its conveyor frame",
      },
      gallery: [
        {
          src: "/products/photos/belt-rolls-yard.jpg",
          alt: "Stacked conveyor belt rolls in a factory yard",
        },
        {
          src: "/products/photos/stockpile-stacker.jpg",
          alt: "Inclined stacker conveyor belt rising over aggregate stockpiles",
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
    specs: [
      { label: "Constructions", value: "Ironcleat® / Ripstop / Fabric Breaker" },
      { label: "Service life", value: "Up to 4x standard EP" },
      { label: "Reinforcement", value: "Binder warp / steel mesh / breaker ply" },
      { label: "Extreme range", value: "-60°C to +600°C (specialized)" },
      { label: "Cover options", value: "Heat / cold / flame / oil" },
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
      gallery: [
        {
          src: "/products/photos/steel-mesh.jpg",
          alt: "Woven steel wire mesh, the reinforcement inside Ripstop belts",
        },
        {
          src: "/products/constructions/ironcleat.png",
          alt: "Layer diagram of the Ironcleat construction with binder warp",
        },
      ],
    },
  },
  {
    slug: "stonecleat-pro",
    code: "MB-SP",
    name: "Stonecleat Pro™",
    subtitle: "Aggregate Cleated Belts",
    family: "Cleatpro X™ cleated range",
    tagline: "Rock and no rollback.",
    description: [
      "An Cleatpro X™ cleated belt range built for aggregate duty: crushed rock, screened material and everything a quarry throws at it. The cleat profiles are integrally hot-molded into the belt's top cover — not glued or bolted on — so they grip the belt as firmly as the belt grips the load, extending belt life and keeping material moving up steep inclines.",
      "Pair the cleat pattern with a heavy-duty base belt such as Ironcleat® for cut, impact and wear resistance with excellent troughability. Our team will match cleat profile, height and pitch to your incline angle, material and belt speed.",
    ],
    features: [
      "Cleats hot-molded into the top cover for superior adhesion",
      "Profiles matched to incline angle, material type and belt speed",
      "Popular 15 mm, 25 mm and 32 mm cleat heights, optional V-joints",
      "Ironcleat®, Fabric Breaker and Ripstop base belt options",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Cleat heights", value: "15 / 25 / 26 / 32 mm" },
      { label: "Belt width", value: "400–1600 mm" },
      { label: "Base belt", value: "EP250/2 – EP500/3" },
      { label: "Profiles", value: "C15 / C25 / C32 / S25 / Y26" },
      { label: "Cleat bond", value: "Integrally hot-molded" },
    ],
    applications: ["Aggregates", "Quarrying", "Crushing", "Screening", "Stockpiling"],
    images: {
      hero: {
        src: "/products/photos/quarry-stacker.jpg",
        alt: "Tall stacker conveyor piling crushed aggregate at a quarry",
      },
      gallery: [
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
        {
          src: "/products/photos/crusher-harbor.jpg",
          alt: "Tracked mobile crusher with discharge conveyors",
        },
      ],
    },
  },
  {
    slug: "roadcleat",
    code: "MB-RD",
    name: "ROADCLEAT™",
    subtitle: "Road Construction Belts",
    family: "Cleatpro X™ cleated range",
    tagline: "Hit the road running.",
    description: [
      "Road construction punishes conveyor belts: high belt speeds, hot abrasive asphalt and constant starts and stops. ROADCLEAT™ belts answer with cleat profiles integrally molded into the top cover, so the profile stays bonded at speeds that tear glued-on cleats loose.",
      "Fitted to milling machines, pavers and mobile road plant, these belts are specified to go the distance between planned maintenance windows — not to fail in the middle of a pour.",
    ],
    features: [
      "Integrally molded cleats stay bonded at high belt speeds",
      "Handles hot, abrasive milled asphalt day after day",
      "25 mm and 32 mm cleat heights in C and Y profiles",
      "Base belts up to EP630/3 and Ironcleat® for high-tension drives",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Cleat heights", value: "25 / 32 mm" },
      { label: "Belt width", value: "850–1000 mm" },
      { label: "Base belt", value: "EP400/3 – EP630/3" },
      { label: "Profiles", value: "Y32P600 / C25P660" },
      { label: "Cleat bond", value: "Integrally hot-molded" },
    ],
    applications: ["Road milling", "Paving", "Asphalt plants", "Mobile road plant"],
    images: {
      hero: {
        src: "/products/photos/paver-feed.jpg",
        alt: "Asphalt paver being fed by a truck during road construction",
      },
      gallery: [
        {
          src: "/products/photos/paver-roller.jpg",
          alt: "Paver and roller laying fresh asphalt",
        },
        {
          src: "/products/photos/milling-machine.jpg",
          alt: "Cold milling machine on a resurfacing job",
        },
      ],
    },
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
