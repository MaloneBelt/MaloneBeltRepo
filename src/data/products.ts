import { getCategory } from "@/data/categories";
import type { Category, Product } from "@/types/product";

/* The purchasable catalog. Every product belongs to at least one category
   (see src/data/categories.ts); the first slug in `categories` is the
   primary one used for breadcrumbs and grouping. Cleat-pattern products and
   their spec tables come from the MRB CleatMax™ brochure; belt constructions
   come from the Giant Handbook. The first 3 entries of `specs` are the rows
   shown on the product card. */

export const products: Product[] = [
  /* ------------------------------------------------------------------ */
  /* Standard — multi-ply conveyor belts                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "2-ply",
    categories: ["standard"],
    sku: "MB-ST-2P",
    name: "2 Ply Conveyor Belt",
    tagline: "The light-duty spec for tight pulleys and short centres.",
    description: [
      "A two-ply EP carcass for the lighter end of mobile plant duty: transfer conveyors, short centres and machines with small pulley diameters where a heavier belt would fight the drive instead of helping it.",
      "Manufactured to DIN 22102 with abrasion-resistant covers, and supplied endless, cut-length, stripped or MRB ZIP® prepared — cross-referenced to your machine or OEM part number.",
    ],
    features: [
      "2-ply EP carcass — flexible over small pulley diameters",
      "High strength with low elongation and excellent troughability",
      "Abrasion-resistant cover grades matched to your material",
      "Available endless, stripped, cut-length or MRB ZIP® prepared",
      "Cross-referenced MB part numbers for fast reordering",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Carcass", value: "EP fabric, 2 plies" },
      { label: "Tensile rating", value: "EP400/2 - PIW220/2" },
      { label: "Belt width", value: "8″–48″" },
      { label: "Temperature range", value: "-30°C to +70°C" },
    ],
    applications: ["Screening", "Recycling", "Aggregates", "Transfer conveyors"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      /* Single image per ply product (client review, 24 Aug 2026): the
         anatomy render built from the client's "Belt example" reference,
         with the layer stack surgically matched to the ply count. */
      hero: {
        src: "/products/constructions/anatomy-2-ply.png",
        alt: "Anatomy of a 2-ply conveyor belt: top cover, two nylon plies with a rubber skim between, bottom cover",
        fit: "contain",
      },
      gallery: [],
    },
    availability: { status: "in-stock", label: "Ships next day" },
    buyingMoment: "planned",
    related: ["3-ply", "4-ply", "bulldog-cleat"],
  },
  {
    slug: "3-ply",
    categories: ["standard"],
    sku: "MB-ST-3P",
    name: "3 Ply Conveyor Belt",
    tagline: "The all-round spec for mobile crushing and screening.",
    description: [
      "The workhorse of the standard range: a three-ply EP carcass that covers the main and side conveyors of most mobile crushers, screeners and recyclers. Strong enough for heavy, abrasive duty, flexible enough to trough cleanly on standard idler sets.",
      "Manufactured to DIN 22102 with cover grades matched to your material, and supplied endless, cut-length, stripped or MRB ZIP® prepared.",
    ],
    features: [
      "The most-specified ply count on mobile plant",
      "3-ply EP carcass — high strength, low stretch",
      "Cover grades for abrasion, impact and cut resistance",
      "Available endless, stripped, cut-length or MRB ZIP® prepared",
      "Cross-referenced MB part numbers for fast reordering",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Carcass", value: "EP fabric, 3 plies" },
      { label: "Tensile rating", value: "EP578/3 - PIW330/3" },
      { label: "Belt width", value: "16″–63″ (400–1600 mm)" },
      { label: "Temperature range", value: "-30°C to +70°C" },
    ],
    applications: ["Crushing", "Screening", "Quarrying", "Aggregates"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/constructions/anatomy-3-ply.png",
        alt: "Anatomy of a 3-ply conveyor belt: top cover, three nylon plies with rubber skims between, bottom cover",
        fit: "contain",
      },
      gallery: [],
    },
    availability: { status: "in-stock", label: "Ships next day" },
    buyingMoment: "planned",
    related: ["2-ply", "4-ply", "bulldog-cleat"],
  },
  {
    slug: "4-ply",
    categories: ["standard"],
    sku: "MB-ST-4P",
    name: "4 Ply Conveyor Belt",
    tagline: "High-tension carcass for long centres and heavy loads.",
    description: [
      "A four-ply EP carcass for the hardest-working drives in the standard range: long-centre stackers, primary crusher discharge and wide belts moving real tonnage. The extra ply carries the tension that would stretch a lighter belt out of service.",
      "Manufactured to DIN 22102 with impact-resistant covers, and supplied endless, cut-length, stripped or MRB ZIP® prepared.",
    ],
    features: [
      "4-ply EP carcass for high-tension, long-centre drives",
      "Absorbs the impact of large lumps under extreme conditions",
      "Cover grades for abrasion, impact and cut resistance",
      "Available endless, stripped, cut-length or MRB ZIP® prepared",
      "Cross-referenced MB part numbers for fast reordering",
    ],
    specs: [
      { label: "Standard", value: "DIN 22102" },
      { label: "Carcass", value: "EP fabric, 4 plies" },
      { label: "Tensile rating", value: "EP630/4 - PIW360/4" },
      { label: "Belt width", value: "20″–79″ (500–2000 mm)" },
      { label: "Temperature range", value: "-30°C to +70°C" },
    ],
    applications: ["Crushing", "Quarrying", "Mining", "Aggregates"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/constructions/anatomy-4-ply.png",
        alt: "Anatomy of a 4-ply conveyor belt: top cover, four nylon plies with rubber skims between, bottom cover",
        fit: "contain",
      },
      gallery: [],
    },
    availability: { status: "in-stock", label: "Ships next day" },
    buyingMoment: "planned",
    related: ["3-ply", "2-ply", "bulldog-cleat"],
  },

  /* ------------------------------------------------------------------ */
  /* Heavy-Duty                                                         */
  /* ------------------------------------------------------------------ */
  {
    slug: "bulldog-cleat",
    categories: ["heavy-duty-specialized"],
    sku: "MB-HD-F",
    name: "Bulldog Cleat",
    tagline: "Lasts up to 4x longer than standard EP multi-ply.",
    description: [
      "Bulldog Cleat is our plain-surface Heavy-Duty belt. It uses a special straight-warp weave of two reinforced plies plus an additional binder warp. The result is a carcass that resists puncturing and lasts up to four times longer than a standard EP multi-ply belt in the same application, under cut, impact and wear resistant covers.",
      "When belt changes are eating your maintenance windows, Bulldog Cleat is the upgrade that pays for itself in uptime.",
    ],
    features: [
      "Lasts up to 4x longer than standard EP multi-ply belts",
      "Special weave: 2 straight-warp plies + additional binder warp",
      "Superior cut, impact and wear resistant covers",
      "Fewer belt changes — more scheduled uptime",
      "Available endless, cut-length or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Carcass", value: "2 Straight warp" },
      { label: "Coverage", value: "Cut / impact / wear resistant" },
      { label: "Service life", value: "Up to 4x standard EP" },
      { label: "Standard", value: "DIN 22102" },
      { label: "Resistance", value: "Puncture / rip" },
    ],
    applications: ["Crushing", "Screening", "Recycling", "Demolition waste"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/bulldog-cleat.png",
        alt: "Bulldog Cleat belt render: plain heavy-duty top cover with the two reinforced straight-warp plies exposed at the corner",
        fit: "contain",
      },
      gallery: [
        {
          src: "/products/constructions/hd-weave.png",
          alt: "Cutaway illustration of the reinforced straight-warp weave: two straight-warp fabric plies with an additional binder warp",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["hd-cleat", "3-ply", "4-ply"],
  },
  {
    slug: "hd-cleat",
    categories: ["heavy-duty-specialized"],
    sku: "MB-HD-C",
    name: "HD Cleat",
    tagline: "Heavy-Duty toughness with hot-molded chevron cleats for inclines.",
    description: [
      "HD Cleat puts a chevron cleat pattern on the same reinforced carcass as Bulldog Cleat: a special straight-warp weave of two reinforced plies plus an additional binder warp, under heavy-duty cut, impact and wear resistant covers. The cleats are hot-molded to the carrying surface so they become an integral part of the belt rather than a bonded add-on.",
      "Specified for inclined main and side conveyors on mobile crushing and screening plant, where a standard chevron belt would rip or puncture long before the cleats wear out.",
    ],
    features: [
      "Same reinforced carcass as Bulldog Cleat — lasts up to 4x longer than standard EP multi-ply",
      "Hot-molded chevron cleats: integral to the belt, no cold-bond failure",
      "Reinforced straight-warp plies resist puncturing and rips",
      "Superior cut, impact and wear resistant covers",
      "Hot spliced (vulcanized) endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Carcass", value: "2 Straight warp" },
      { label: "Profile", value: "Chevron" },
      { label: "Tensile rating", value: "360 PIW" },
      { label: "Covers", value: "3/8″ + 1/8″" },
      { label: "Belt width", value: "36″–59″ stock" },
      { label: "Standard", value: "DIN 22102" },
    ],
    applications: ["Crushing", "Screening", "Recycling", "Demolition waste"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/hd-cleat.png",
        alt: "HD Cleat belt render: heavy-duty belt roll with hot-molded chevron cleats",
        fit: "contain",
      },
      gallery: [
        {
          src: "/products/constructions/hd-weave.png",
          alt: "Cutaway illustration of the reinforced straight-warp weave: two straight-warp fabric plies with an additional binder warp",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["bulldog-cleat", "c15p385", "c25p1000"],
  },

  /* ------------------------------------------------------------------ */
  /* MRB CleatMax patterns — aggregate duty                                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c15p385",
    categories: ["incline"],
    sku: "MB-IN-C15P385",
    name: "C15P385 Chevron Pattern",
    tagline: "The all-round 15 mm chevron for 400–800 mm belts.",
    description: [
      "The most versatile pattern in the MRB CleatMax range: a 15 mm chevron hot-molded integrally into the top cover, covering belt widths from 400 to 800 mm. It keeps screened aggregate, sand and crop material climbing without rollback at the inclines mobile plant actually runs.",
      "Available on EP315/3 base belts across the width range, or stepped up to EP500/3 at 650 and 800 mm for harder-working drives. Also specified for harvesting and stockpiling duty.",
    ],
    features: [
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height at a tight 250 mm pitch",
      "Belt widths from 400 to 800 mm",
      "EP315/3 or heavier EP500/3 base belt options",
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "C15P385" },
      { label: "Cleat height", value: "15 mm" },
      { label: "Cleat width", value: "400 mm" },
      { label: "Belt widths", value: "400–800 mm" },
      { label: "Base belts", value: "EP315/3 3+1.5 / EP500/3 4+2" },
    ],
    applications: ["Aggregates", "Screening", "Stockpiling", "Crop harvesting"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/c15p385-render.png",
        alt: "3D render of the C15P385 chevron pattern molded on a conveyor belt",
      },
      gallery: [
        {
          src: "/products/patterns/c15p385-tech.png",
          alt: "Technical plan drawing of the C15P385 chevron pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c15p540", "c25p1000", "c15p500"],
  },
  {
    slug: "c15v450",
    categories: ["incline"],
    sku: "MB-IN-C15V450",
    name: "C15V450 Chevron Pattern",
    tagline: "15 mm chevron with V-joint for 900 mm belts.",
    description: [
      "A 15 mm chevron with the V-joint option, molded for 900 mm belts on an EP500/3 carcass. The V-joint closes the pattern at the belt centre so fine material can't find a straight path back down the incline.",
      "Like every MRB CleatMax™ pattern, the cleats are hot-molded into the top cover for adhesion that outlasts glued or bolted profiles.",
    ],
    features: [
      "V-joint closes the pattern against fines rollback",
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height at 300 mm pitch",
      "EP500/3 5+1.5 base belt",
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "C15V450" },
      { label: "Cleat height", value: "15 mm" },
      { label: "Cleat width", value: "450 mm" },
      { label: "Belt widths", value: "900 mm" },
      { label: "Base belts", value: "EP500/3 5+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Sand & gravel"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      /* No render exists for this exact pattern — the closest client render
         in the range stands in (client direction, 24 Aug 2026: match by
         profile family, C15 -> C15 render). */
      hero: {
        src: "/products/photos/c15p385-render.png",
        alt: "3D render of the C15 chevron profile (C15P385 pattern shown, representative of the range)",
      },
      gallery: [
        {
          src: "/products/patterns/c15v450-tech.png",
          alt: "Technical plan drawing of the C15V450 chevron pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c15p385", "c15p500", "bulldog-cleat"],
  },
  {
    slug: "c32p460",
    categories: ["incline"],
    sku: "MB-IN-C32P460",
    name: "C32P460 Chevron Pattern",
    tagline: "32 mm bite for steep, coarse aggregate.",
    description: [
      "When the incline gets steep and the material gets coarse, the C32P460's 32 mm cleats give crushed rock something to lean on. The 330 mm pitch keeps lumps seated between cleats instead of bouncing over them.",
      "Molded on EP250/2 at 500 mm or EP400/3 at 650 mm belt widths, with the same integral hot-molded bond as the rest of the MRB CleatMax range.",
    ],
    features: [
      "32 mm cleat height for steep inclines and coarse material",
      "Integrally hot-molded into the top cover — never glued",
      "330 mm pitch seats large lumps between cleats",
      "EP250/2 or EP400/3 base belt options",
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "C32P460" },
      { label: "Cleat height", value: "32 mm" },
      { label: "Cleat width", value: "460 mm" },
      { label: "Belt widths", value: "500 / 650 mm" },
      { label: "Base belts", value: "EP250/2 3+1.5 / EP400/3 3+1.5" },
    ],
    applications: ["Aggregates", "Crushing", "Quarrying"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/c32p580-render.png",
        alt: "3D render of the C32 heavy chevron profile (C32P580 pattern shown, representative of the range)",
      },
      gallery: [
        {
          src: "/products/patterns/c32p460-tech.png",
          alt: "Technical plan drawing of the C32P460 chevron pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c15p385", "y26v400", "bulldog-cleat"],
  },
  {
    slug: "s25p750",
    categories: ["incline"],
    sku: "MB-IN-S25P750",
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
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "S25P750" },
      { label: "Cleat height", value: "25 mm" },
      { label: "Cleat width", value: "750 mm" },
      { label: "Belt widths", value: "1050 mm" },
      { label: "Base belts", value: "EP315/3 3+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Stockpiling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/patterns/s25p750-tech.png",
        alt: "Technical plan drawing of the S25P750 cleat pattern with dimension callouts",
        fit: "contain",
      },
      gallery: [],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c25p1000", "c15p385", "y26v400"],
  },
  {
    slug: "c25p1000",
    categories: ["incline"],
    sku: "MB-IN-C25P1000",
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
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "C25P1000" },
      { label: "Cleat height", value: "25 mm" },
      { label: "Cleat width", value: "1000 mm" },
      { label: "Belt widths", value: "1200–1600 mm" },
      { label: "Base belts", value: "EP500/3 4+2 / EP500/3 5+1.5" },
    ],
    applications: ["Stockpiling", "Aggregates", "Grain handling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/c25p1000-render.png",
        alt: "3D render of the C25P1000 chevron pattern molded on a conveyor belt",
      },
      gallery: [
        {
          src: "/products/patterns/c25p1000-tech.png",
          alt: "Technical plan drawing of the C25P1000 chevron pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c15p385", "s25p750", "bulldog-cleat"],
  },
  {
    slug: "c15p540",
    categories: ["incline"],
    sku: "MB-IN-C15P540",
    name: "C15P540 Chevron Pattern",
    tagline: "Tight 182 mm pitch keeps fines climbing.",
    description: [
      "A 15 mm chevron at the tightest pitch in the range — 182 mm — so fine, free-flowing material meets a cleat before it can slide back. Specified for 1050 mm belts on an EP400/3 carcass.",
      "The go-to MRB CleatMax pattern for fines conveyors and secondary screened material.",
    ],
    features: [
      "Tight 182 mm pitch for fine, free-flowing material",
      "Integrally hot-molded into the top cover — never glued",
      "15 mm cleat height across a 540 mm cleat width",
      "EP400/3 3+1.5 base belt",
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "C15P540" },
      { label: "Cleat height", value: "15 mm" },
      { label: "Cleat width", value: "540 mm" },
      { label: "Belt widths", value: "1050 mm" },
      { label: "Base belts", value: "EP400/3 3+1.5" },
    ],
    applications: ["Fines conveying", "Screening", "Sand & gravel"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/c15p385-render.png",
        alt: "3D render of the C15 chevron profile (C15P385 pattern shown, representative of the range)",
      },
      gallery: [
        {
          src: "/products/patterns/c15p540-tech.png",
          alt: "Technical plan drawing of the C15P540 chevron pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c15p385", "c15p800", "3-ply"],
  },
  {
    slug: "y26v400",
    categories: ["incline"],
    sku: "MB-IN-Y26V400",
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
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Y26V400" },
      { label: "Cleat height", value: "26 mm" },
      { label: "Cleat width", value: "425 mm" },
      { label: "Belt widths", value: "500 mm" },
      { label: "Base belts", value: "EP315/3 3+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Crushing"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/y32p600-render.png",
        alt: "3D render of the Y-profile cleat pattern (Y32P600 shown, representative of the range)",
      },
      gallery: [
        {
          src: "/products/patterns/y26v400-tech.png",
          alt: "Technical plan drawing of the Y26V400 cleat pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["y26v330", "c15p385", "c32p460"],
  },
  {
    slug: "c15p800",
    categories: ["incline"],
    sku: "MB-IN-C15P800",
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
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "C15P800" },
      { label: "Cleat height", value: "15 mm" },
      { label: "Cleat width", value: "800 mm" },
      { label: "Belt widths", value: "1200 mm" },
      { label: "Base belts", value: "EP400/3 5+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Stockpiling"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/c15p750-render.png",
        alt: "3D render of the wide C15 chevron profile (C15P750 pattern shown, representative of the range)",
      },
      gallery: [
        {
          src: "/products/patterns/c15p800-tech.png",
          alt: "Technical plan drawing of the C15P800 chevron pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c15p540", "c25p1000", "bulldog-cleat"],
  },
  {
    slug: "y26v330",
    categories: ["incline"],
    sku: "MB-IN-Y26V330",
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
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "Y26V330" },
      { label: "Cleat height", value: "26 mm" },
      { label: "Cleat width", value: "330 mm" },
      { label: "Belt widths", value: "500 mm" },
      { label: "Base belts", value: "EP400/3 4+2" },
    ],
    applications: ["Aggregates", "Transfer conveyors", "Screening"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      /* No pattern-specific technical drawing exists for Y26V330 in the
         client brochures (US & EU) — the closest client render is its only
         image (client direction, 24 Aug 2026). */
      hero: {
        src: "/products/photos/y32p600-render.png",
        alt: "3D render of the Y-profile cleat pattern (Y32P600 shown, representative of the range)",
      },
      gallery: [],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["y26v400", "c15p500", "bulldog-cleat"],
  },
  {
    slug: "c15p500",
    categories: ["incline"],
    sku: "MB-IN-C15P500",
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
      "Available as full rolls, cut lengths, endless or MRB ZIP® prepared",
    ],
    specs: [
      { label: "Profile", value: "C15P500" },
      { label: "Cleat height", value: "15 mm" },
      { label: "Cleat width", value: "500 mm" },
      { label: "Belt widths", value: "650 mm" },
      { label: "Base belts", value: "EP500/3 5+1.5" },
    ],
    applications: ["Aggregates", "Screening", "Side conveyors"],
    standards: ["DIN 22102", "ISO 9001"],
    images: {
      hero: {
        src: "/products/photos/c15p385-render.png",
        alt: "3D render of the C15 chevron profile (C15P385 pattern shown, representative of the range)",
      },
      gallery: [
        {
          src: "/products/patterns/c15p500-tech.png",
          alt: "Technical plan drawing of the C15P500 chevron pattern with dimension callouts",
          fit: "contain",
        },
      ],
    },
    availability: { status: "made-to-order", label: "Made to order" },
    buyingMoment: "planned",
    related: ["c15p385", "c15v450", "3-ply"],
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
    id: "mrb-zip",
    name: "MRB ZIP® — Ready to Pin",
    description:
      "Mechanically prepared ends joined with a push-in or screw-in pin. Fits in about an hour.",
    image: {
      src: "/products/formats/mrb-zip-loop.png",
      alt: "MRB ZIP belt loop with mechanical splice",
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
