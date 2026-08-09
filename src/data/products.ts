import { getCategory } from "@/data/categories";
import type { Category, Product } from "@/types/product";

/* The purchasable catalog. Every product belongs to at least one category
   (see src/data/categories.ts); the first slug in `categories` is the
   primary one used for breadcrumbs and grouping. Cleat-pattern products and
   their spec tables come from the Cleatpro X™ brochure; core belts come
   from the Giant Handbook. */

export const products: Product[] = [
  /* ------------------------------------------------------------------ */
  /* Conveyor Belts — the core range                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "endless-belt",
    categories: ["conveyor-belts"],
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
      { label: "Temperature range", value: "-30°C to +70°C" },
      { label: "Splice", value: "Hot vulcanized (factory)" },
    ],
    applications: ["Crushing", "Screening", "Recycling", "Aggregates", "Quarrying"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/formats/endless-loop.png",
        alt: "Diagram of an endless belt loop with factory hot splice",
      },
      gallery: [
        {
          src: "/products/photos/belt-line.jpg",
          alt: "Finished conveyor belt units lined up in the workshop",
        },
        {
          src: "/products/photos/belt-rolls-yard.jpg",
          alt: "Stacked conveyor belt rolls in a factory yard",
        },
      ],
    },
    availability: { status: "in-stock", label: "Ships today" },
    buyingMoment: "planned",
    featured: true,
    related: ["zip-clip", "ep-multi-ply", "ironcleat"],
  },
  {
    slug: "zip-clip",
    categories: ["conveyor-belts"],
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
        src: "/products/formats/zip-clip-loop.png",
        alt: "Diagram of a ZIP CLIP belt loop joined by a connecting pin",
      },
      gallery: [
        {
          src: "/products/photos/belt-line.jpg",
          alt: "Finished conveyor belt units lined up in the workshop",
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
    categories: ["conveyor-belts"],
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
      { label: "Temperature range", value: "-30°C to +70°C" },
      { label: "Cover grades", value: "Abrasion / impact resistant" },
    ],
    applications: ["Crushing", "Screening", "Quarrying", "Aggregates", "Mining"],
    standards: ["DIN 22102", "ISO 10247", "BS 490"],
    images: {
      hero: {
        src: "/products/photos/quarry-belt-piles.jpg",
        alt: "Conveyor belts moving crushed stone between stockpiles",
      },
      gallery: [
        {
          src: "/products/constructions/ep.png",
          alt: "Layer diagram of an EP multi-ply belt: covers and fabric plies",
        },
      ],
    },
    availability: { status: "in-stock", label: "Ships today" },
    buyingMoment: "planned",
    featured: true,
    related: ["ironcleat", "ripstop", "endless-belt"],
  },
  {
    slug: "cleated-chevron",
    categories: ["conveyor-belts"],
    sku: "MB-CL",
    name: "Cleated & Chevron Belts",
    tagline: "Hot-molded cleats for steep-incline conveying.",
    description: [
      "Custom belts with hot-molded cross-cleats, chevron patterns and siderails, manufactured in-house to DIN 22102. Cleats are molded — not glued — so they stay on the belt at the angles and speeds that shed bolt-on profiles.",
      "Need something niche? Beyond the stocked Cleatpro X™ patterns, custom cleat layouts and siderails are drawn to your belt width, cleat width and pitch.",
    ],
    features: [
      "Hot-molded cross-cleats and chevrons — never glued",
      "Optional hot-molded siderails for steep inclines",
      "Custom cleat layouts to your width and pitch",
      "Stock siderail heights and cross-cleat thicknesses available",
      "Manufactured in-house to DIN 22102",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Cleats", value: "Hot-molded chevron / cross-cleat" },
      { label: "Options", value: "Siderails, custom pitch" },
      { label: "Base belts", value: "EP / Ironcleat® / Ripstop" },
    ],
    applications: ["Steep-incline conveying", "Screening", "Aggregates", "Biomass"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/chevron-belt-stone-line.jpg",
        alt: "Chevron-cleated conveyor belt carrying stone up an incline",
      },
      gallery: [
        {
          src: "/products/patterns/c25.png",
          alt: "Plan drawing of a 25 mm chevron cleat pattern",
        },
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: true,
    related: ["ep-multi-ply", "c15p385", "s25p750"],
  },

  /* ------------------------------------------------------------------ */
  /* Heavy-Duty & Specialized                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "ironcleat",
    categories: ["heavy-duty-specialized"],
    sku: "MB-IC",
    name: "Ironcleat®",
    tagline: "Lasts up to 4x longer than standard EP multi-ply.",
    description: [
      "Ironcleat® uses a special weave of two reinforced fabric plies plus an additional binder warp. The result is a carcass that resists puncturing and lasts up to four times longer than a standard EP multi-ply belt in the same application.",
      "When belt changes are eating your maintenance windows, Ironcleat® is the upgrade that pays for itself in uptime.",
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
        src: "/products/constructions/ironcleat.png",
        alt: "Layer diagram of the Ironcleat construction with binder warp",
      },
      gallery: [
        {
          src: "/products/photos/crusher-discharge.jpg",
          alt: "Mobile crusher discharging rock over its incline conveyor",
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
    categories: ["heavy-duty-specialized"],
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
        src: "/products/photos/steel-mesh.jpg",
        alt: "Woven steel wire mesh, the reinforcement inside Ripstop belts",
      },
      gallery: [
        {
          src: "/products/constructions/ripstop.png",
          alt: "Layer diagram of the Ripstop construction with steel mesh weft",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["ironcleat", "ep-multi-ply"],
  },

  /* ------------------------------------------------------------------ */
  /* Stonecleat Pro™ patterns — aggregate duty                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c15p385",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-C15P385",
    name: "C15P385 Chevron Pattern",
    tagline: "The all-round 15 mm chevron for 400–800 mm belts.",
    description: [
      "The most versatile pattern in the Stonecleat Pro™ range: a 15 mm chevron hot-molded integrally into the top cover, covering belt widths from 400 to 800 mm. It keeps screened aggregate, sand and crop material climbing without rollback at the inclines mobile plant actually runs.",
      "Available on EP315/3 base belts across the width range, or stepped up to EP500/3 at 650 and 800 mm for harder-working drives. Also specified for harvesting and stockpiling duty.",
    ],
    features: [
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height at a tight 250 mm pitch",
      "Belt widths from 400 to 800 mm",
      "EP315/3 or heavier EP500/3 base belt options",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron, 15 mm cleat" },
      { label: "Cleat width", value: "400 mm" },
      { label: "Cleat pitch", value: "250 mm" },
      { label: "Belt widths", value: "400–800 mm" },
      { label: "Base belts", value: "EP315/3 3+1.5 / EP500/3 4+2" },
    ],
    applications: ["Aggregates", "Screening", "Stockpiling", "Crop harvesting"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/chevron-cleats-closeup.jpg",
        alt: "Molded chevron cleats on the top cover of a rubber conveyor belt",
      },
      gallery: [
        {
          src: "/products/patterns/c15.png",
          alt: "Plan drawing of the C15 chevron pattern with pitch callout",
        },
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c15p540", "c25p1000", "cleated-chevron"],
  },
  {
    slug: "c15v450",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-C15V450",
    name: "C15V450 Chevron Pattern",
    tagline: "15 mm chevron with V-joint for 900 mm belts.",
    description: [
      "A 15 mm chevron with the V-joint option, molded for 900 mm belts on an EP500/3 carcass. The V-joint closes the pattern at the belt centre so fine material can't find a straight path back down the incline.",
      "Like every Cleatpro X™ pattern, the cleats are hot-molded into the top cover for adhesion that outlasts glued or bolted profiles.",
    ],
    features: [
      "V-joint closes the pattern against fines rollback",
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height at 300 mm pitch",
      "EP500/3 5+1.5 base belt",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron V-joint, 15 mm cleat" },
      { label: "Cleat width", value: "450 mm" },
      { label: "Cleat pitch", value: "300 mm" },
      { label: "Belt widths", value: "900 mm" },
      { label: "Base belts", value: "EP500/3 5+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Sand & gravel"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/patterns/c15v.png",
        alt: "Plan drawing of the C15 chevron pattern with V-joint",
      },
      gallery: [
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c15p385", "c15p500", "ironcleat"],
  },
  {
    slug: "c32p460",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-C32P460",
    name: "C32P460 Chevron Pattern",
    tagline: "32 mm bite for steep, coarse aggregate.",
    description: [
      "When the incline gets steep and the material gets coarse, the C32P460's 32 mm cleats give crushed rock something to lean on. The 330 mm pitch keeps lumps seated between cleats instead of bouncing over them.",
      "Molded on EP250/2 at 500 mm or EP400/3 at 650 mm belt widths, with the same integral hot-molded bond as the rest of the Stonecleat Pro™ range.",
    ],
    features: [
      "32 mm cleat height for steep inclines and coarse material",
      "Integrally hot-molded into the top cover — never glued",
      "330 mm pitch seats large lumps between cleats",
      "EP250/2 or EP400/3 base belt options",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron, 32 mm cleat" },
      { label: "Cleat width", value: "460 mm" },
      { label: "Cleat pitch", value: "330 mm" },
      { label: "Belt widths", value: "500 / 650 mm" },
      { label: "Base belts", value: "EP250/2 3+1.5 / EP400/3 3+1.5" },
    ],
    applications: ["Aggregates", "Crushing", "Quarrying"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/patterns/c32.png",
        alt: "Plan drawing of the C32 heavy chevron pattern",
      },
      gallery: [
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c15p385", "y26v400", "ironcleat"],
  },
  {
    slug: "s25p750",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-S25P750",
    name: "S25P750 Cleat Pattern",
    tagline: "S-profile 25 mm cleats for 1050 mm belts.",
    description: [
      "An S-profile pattern with 25 mm cleats spanning 750 mm across 1050 mm belts. The open geometry sheds sticky screened material while still carrying it up the incline, making it a favourite on wing and discharge conveyors.",
      "Molded on an EP315/3 carcass with the cleats integrally bonded to the top cover for the full life of the belt.",
    ],
    features: [
      "S-profile geometry sheds sticky material",
      "Integrally hot-molded into the top cover — never glued",
      "25 mm cleat height at 340 mm pitch",
      "EP315/3 3+1.5 base belt",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "S-profile, 25 mm cleat" },
      { label: "Cleat width", value: "750 mm" },
      { label: "Cleat pitch", value: "340 mm" },
      { label: "Belt widths", value: "1050 mm" },
      { label: "Base belts", value: "EP315/3 3+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Stockpiling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/patterns/s25.png",
        alt: "Plan drawing of the S25 profile cleat pattern",
      },
      gallery: [
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c25p1000", "c15p385", "cleated-chevron"],
  },
  {
    slug: "c25p1000",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-C25P1000",
    name: "C25P1000 Chevron Pattern",
    tagline: "25 mm chevron for wide, high-volume belts.",
    description: [
      "The high-volume pattern of the range: a 25 mm chevron spanning a full 1000 mm cleat width, molded for belts from 1200 to 1600 mm. Built for the stockpilers and main conveyors that move the real tonnage.",
      "Runs on EP500/3 carcasses in 4+2 or 5+1.5 cover configurations, and doubles as the wide-belt option for grain and root-crop stockpiling.",
    ],
    features: [
      "1000 mm cleat width for wide, high-volume belts",
      "Integrally hot-molded into the top cover — never glued",
      "25 mm cleat height at 400 mm pitch",
      "EP500/3 base belt in 4+2 or 5+1.5 covers",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron, 25 mm cleat" },
      { label: "Cleat width", value: "1000 mm" },
      { label: "Cleat pitch", value: "400 mm" },
      { label: "Belt widths", value: "1200–1600 mm" },
      { label: "Base belts", value: "EP500/3 4+2 / EP500/3 5+1.5" },
    ],
    applications: ["Stockpiling", "Aggregates", "Grain handling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/chevron-belt-stone-line.jpg",
        alt: "Chevron-cleated conveyor belt carrying stone up an incline",
      },
      gallery: [
        {
          src: "/products/patterns/c25.png",
          alt: "Plan drawing of a 25 mm chevron cleat pattern",
        },
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c15p385", "s25p750", "ironcleat"],
  },
  {
    slug: "c15p540",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-C15P540",
    name: "C15P540 Chevron Pattern",
    tagline: "Tight 182 mm pitch keeps fines climbing.",
    description: [
      "A 15 mm chevron at the tightest pitch in the range — 182 mm — so fine, free-flowing material meets a cleat before it can slide back. Specified for 1050 mm belts on an EP400/3 carcass.",
      "The go-to Stonecleat Pro™ pattern for fines conveyors and secondary screened material.",
    ],
    features: [
      "Tight 182 mm pitch for fine, free-flowing material",
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height across a 540 mm cleat width",
      "EP400/3 3+1.5 base belt",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron, 15 mm cleat" },
      { label: "Cleat width", value: "540 mm" },
      { label: "Cleat pitch", value: "182 mm" },
      { label: "Belt widths", value: "1050 mm" },
      { label: "Base belts", value: "EP400/3 3+1.5" },
    ],
    applications: ["Fines conveying", "Screening", "Sand & gravel"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/chevron-belt-stone-line.jpg",
        alt: "Chevron-cleated conveyor belt carrying stone up an incline",
      },
      gallery: [
        {
          src: "/products/patterns/c15.png",
          alt: "Plan drawing of the C15 chevron pattern with pitch callout",
        },
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c15p385", "c15p800", "ep-multi-ply"],
  },
  {
    slug: "y26v400",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-Y26V400",
    name: "Y26V400 Cleat Pattern",
    tagline: "Y-profile 26 mm cleats with V-joint.",
    description: [
      "A Y-profile pattern with 26 mm cleats and the V-joint option, molded for 500 mm belts. The branching Y geometry steadies mixed-size aggregate that a straight chevron would let wander toward the belt edge.",
      "Supplied on an EP315/3 carcass with integrally hot-molded cleats.",
    ],
    features: [
      "Y-profile steadies mixed-size material",
      "V-joint closes the pattern against rollback",
      "Integrally hot-molded into the top cover — never glued",
      "26 mm cleat height at 200 mm pitch",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Y-profile V-joint, 26 mm cleat" },
      { label: "Cleat width", value: "425 mm" },
      { label: "Cleat pitch", value: "200 mm" },
      { label: "Belt widths", value: "500 mm" },
      { label: "Base belts", value: "EP315/3 3+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Crushing"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/patterns/y26.png",
        alt: "Plan drawing of the Y26 profile pattern with V-joint",
      },
      gallery: [
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["y26v330", "c15p385", "cleated-chevron"],
  },
  {
    slug: "c15p800",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-C15P800",
    name: "C15P800 Chevron Pattern",
    tagline: "15 mm chevron across 1200 mm belts.",
    description: [
      "A wide-format 15 mm chevron with an 800 mm cleat width, molded for 1200 mm belts on a heavy EP400/3 carcass with 5+1.5 covers. Keeps high-volume screened material moving on wide incline conveyors.",
      "Cleats are integrally hot-molded into the top cover — the bond lasts as long as the belt does.",
    ],
    features: [
      "800 mm cleat width for wide belts",
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height at 300 mm pitch",
      "EP400/3 5+1.5 base belt",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron, 15 mm cleat" },
      { label: "Cleat width", value: "800 mm" },
      { label: "Cleat pitch", value: "300 mm" },
      { label: "Belt widths", value: "1200 mm" },
      { label: "Base belts", value: "EP400/3 5+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Stockpiling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/chevron-cleats-closeup.jpg",
        alt: "Molded chevron cleats on the top cover of a rubber conveyor belt",
      },
      gallery: [
        {
          src: "/products/patterns/c15.png",
          alt: "Plan drawing of the C15 chevron pattern with pitch callout",
        },
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c15p540", "c25p1000", "ironcleat"],
  },
  {
    slug: "y26v330",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-Y26V330",
    name: "Y26V330 Cleat Pattern",
    tagline: "Compact Y-profile for 500 mm belts.",
    description: [
      "The compact sibling of the Y26V400: 26 mm Y-profile cleats at a 330 mm cleat width, molded for 500 mm belts on a heavier EP400/3 carcass with 4+2 covers.",
      "Specified where narrow transfer conveyors climb hard and the material mix is unpredictable.",
    ],
    features: [
      "Compact Y-profile for narrow, steep conveyors",
      "V-joint closes the pattern against rollback",
      "Integrally hot-molded into the top cover — never glued",
      "26 mm cleat height at 310 mm pitch",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Y-profile V-joint, 26 mm cleat" },
      { label: "Cleat width", value: "330 mm" },
      { label: "Cleat pitch", value: "310 mm" },
      { label: "Belt widths", value: "500 mm" },
      { label: "Base belts", value: "EP400/3 4+2" },
    ],
    applications: ["Aggregates", "Transfer conveyors", "Screening"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/patterns/y26.png",
        alt: "Plan drawing of the Y26 profile pattern with V-joint",
      },
      gallery: [
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["y26v400", "c15p500", "cleated-chevron"],
  },
  {
    slug: "c15p500",
    categories: ["stonecleat-pro"],
    sku: "MB-SP-C15P500",
    name: "C15P500 Chevron Pattern",
    tagline: "15 mm chevron for 650 mm mid-width belts.",
    description: [
      "A 15 mm chevron with a 500 mm cleat width and long 335 mm pitch, molded for 650 mm belts on an EP500/3 carcass with 5+1.5 covers.",
      "The mid-width workhorse for screened aggregate on mobile plant side conveyors.",
    ],
    features: [
      "Mid-width pattern for 650 mm belts",
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height at 335 mm pitch",
      "EP500/3 5+1.5 base belt",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron, 15 mm cleat" },
      { label: "Cleat width", value: "500 mm" },
      { label: "Cleat pitch", value: "335 mm" },
      { label: "Belt widths", value: "650 mm" },
      { label: "Base belts", value: "EP500/3 5+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Side conveyors"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/chevron-belt-stone-line.jpg",
        alt: "Chevron-cleated conveyor belt carrying stone up an incline",
      },
      gallery: [
        {
          src: "/products/patterns/c15.png",
          alt: "Plan drawing of the C15 chevron pattern with pitch callout",
        },
        {
          src: "/products/photos/quarry-hopper-belt.jpg",
          alt: "Hopper feeding crushed stone onto a quarry conveyor belt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c15p385", "c15v450", "ep-multi-ply"],
  },

  /* ------------------------------------------------------------------ */
  /* ROADCLEAT™ patterns — road construction                             */
  /* ------------------------------------------------------------------ */
  {
    slug: "y32p600",
    categories: ["roadcleat"],
    sku: "MB-RD-Y32P600",
    name: "Y32P600 Cleat Pattern",
    tagline: "32 mm Y-profile built for milling speed.",
    description: [
      "The ROADCLEAT™ pattern for cold milling machines: 32 mm Y-profile cleats that hold hot, abrasive millings on the fast, steep discharge conveyors road plant runs. The integral hot-molded bond stays put at belt speeds that tear glued-on cleats loose.",
      "Available on EP400/3 and heavy EP630/3 carcasses at 850 mm, or on an EPP630/2 Ironcleat® base with 9+3 covers at 1000 mm for the hardest-running machines.",
    ],
    features: [
      "Holds hot, abrasive millings at high belt speeds",
      "Integrally hot-molded into the top cover — never glued",
      "32 mm cleat height at 360 mm pitch",
      "EP400/3, EP630/3 or Ironcleat® EPP630/2 base belts",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Y-profile, 32 mm cleat" },
      { label: "Cleat width", value: "600 mm" },
      { label: "Cleat pitch", value: "360 mm" },
      { label: "Belt widths", value: "850 / 1000 mm" },
      { label: "Base belts", value: "EP400/3 · EP630/3 · EPP630/2 9+3" },
    ],
    applications: ["Road milling", "Paving", "Mobile road plant"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/patterns/y32.png",
        alt: "Plan drawing of the Y32 profile cleat pattern",
      },
      gallery: [
        {
          src: "/products/photos/paver-roller.jpg",
          alt: "Paver and roller laying fresh asphalt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["c25p660", "ironcleat", "zip-clip"],
  },
  {
    slug: "c25p660",
    categories: ["roadcleat"],
    sku: "MB-RD-C25P660",
    name: "C25P660 Chevron Pattern",
    tagline: "25 mm chevron for 914 mm paver belts.",
    description: [
      "A 25 mm chevron molded for the 914 mm belts common on pavers and material transfer vehicles. The 305 mm pitch keeps a steady, even feed of asphalt moving to the screed — no surging, no starvation.",
      "Supplied on an EP500/3 carcass with 6+1.5 covers sized for hot asphalt duty.",
    ],
    features: [
      "Even feed for pavers and material transfer vehicles",
      "Integrally hot-molded into the top cover — never glued",
      "25 mm cleat height at 305 mm pitch",
      "EP500/3 6+1.5 base belt with thick top cover for hot duty",
      "Available as full rolls, cut lengths, endless or ZIP CLIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Chevron, 25 mm cleat" },
      { label: "Cleat width", value: "660 mm" },
      { label: "Cleat pitch", value: "305 mm" },
      { label: "Belt widths", value: "914 mm" },
      { label: "Base belts", value: "EP500/3 6+1.5" },
    ],
    applications: ["Paving", "Asphalt plants", "Road milling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/chevron-cleats-closeup.jpg",
        alt: "Molded chevron cleats on the top cover of a rubber conveyor belt",
      },
      gallery: [
        {
          src: "/products/patterns/c25.png",
          alt: "Plan drawing of a 25 mm chevron cleat pattern",
        },
        {
          src: "/products/photos/paver-roller.jpg",
          alt: "Paver and roller laying fresh asphalt",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    featured: false,
    related: ["y32p600", "c15p385", "endless-belt"],
  },

];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryProducts(categorySlug: string): Product[] {
  return products.filter((p) => p.categories.includes(categorySlug));
}

export function getPrimaryCategory(product: Product): Category | undefined {
  return getCategory(product.categories[0]);
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

/* Specialized belts — teaser on /products, no detail pages in Phase 1.
   Icons are lucide names resolved in the page (design system: lucide only). */
export interface SpecializedBelt {
  id: "heat" | "cold" | "flame" | "oil";
  name: string;
  description: string;
}

export const specializedBelts: SpecializedBelt[] = [
  {
    id: "heat",
    name: "Heat Resistant",
    description: "Hot abrasive materials: clinker, coke, foundry sand, ore, slag.",
  },
  {
    id: "cold",
    name: "Cold & Frost Resistant",
    description: "Covers engineered to protect the carcass in deep-cold operation.",
  },
  {
    id: "flame",
    name: "Flame Proof",
    description: "For combustible materials — underground duty, sawdust, biomass storage.",
  },
  {
    id: "oil",
    name: "Oil & Fat Resistant",
    description: "Resists oil and fat penetration: grain, fertilizer, wood, food, recycling.",
  },
];
