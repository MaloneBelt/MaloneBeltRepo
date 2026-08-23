/* English UI dictionary — the source of truth for the Dictionary shape.
   Catalog content (categories/products) is localized separately via
   src/i18n/catalog-pt.ts; this file covers page chrome and fixed copy. */

export const en = {
  meta: {
    titleDefault: "Malone Road Belt — OEM Conveyor Belts, Shipped Next Day",
    titleTemplate: "%s · Malone Road Belt",
    description:
      "OEM/OEA-spec conveyor belts for mobile material processing equipment.",
  },
  common: {
    skipToContent: "Skip to content",
    machineDownRightNow: "Machine down right now?",
    requestQuote: "Request a quote",
    contactUs: "Contact us",
    talkToUs: "Talk to us",
    viewProduct: "View product",
    viewRange: "View range",
    belt: "belt",
    belts: "belts",
    tagline: "Moving your business forward.",
    motto: "We don't sell belts. We sell uptime.",
    home: "Home",
    products: "Products",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  nav: {
    products: "Products",
    about: "About",
    contact: "Contact",
    comingSoon: "Coming Soon",
  },
  footer: {
    productsHeading: "Products",
    contactHeading: "Contact",
    rights: "All rights reserved.",
  },
  trustRow: [
    "OEM spec, cross-referenced",
    "Made to DIN 22102",
    "Next-day ship on stocked belts",
  ],
  beltMatch: {
    byMachine: "By machine",
    byPart: "By OEM part #",
    placeholderMachine: "e.g. Powerscreen Chieftain 1400 — main conveyor",
    placeholderPart: "e.g. MB-8830-IC or OEM part #",
    ariaMachine: "Search by machine",
    ariaPart: "Search by OEM part number",
    searchMode: "Search mode",
    submit: "Find my belt →",
    popular: "Popular:",
  },
  ctaBand: {
    planTitle: "Planning your next belt change?",
    planBody:
      "Send us your machine or OEM part number and get a cross-referenced quote — with stock status up front.",
    downBody:
      "Call us. Stocked belts ship next day, and ZIP CLIP® fits in as little as one hour.",
  },
  home: {
    heroBadge: "Original conveyor belts · shipped the next day",
    heroTitle: "Moving your business",
    heroTitleAccent: "forward.",
    heroLead:
      "Original-spec conveyor belts for all mobile/portable material process and recycling equipment — cross-referenced to your machine and shipped the next day.",
    howEyebrow: "How it works",
    howTitle: "Three steps to back-in-service.",
    stepLabel: "STEP",
    /* An empty body marks a title-only step (client wants the last step to
       read as fast — the card renders it with an express treatment). */
    steps: [
      {
        title: "Identify",
        body: "Tell us your make and model or OEM part numbers. Our cross-reference matches it to the exact MRB belt spec.",
      },
      {
        title: "Confirm the joint",
        body: "Select your splice from mechanical clips or vulcanized endless.",
      },
      {
        title: "Shipped from several options",
        body: "",
      },
    ],
    /* Closing image carousel — slide order must match GALLERY_IMAGES in
       src/app/[locale]/page.tsx */
    gallery: {
      eyebrow: "Out in the field",
      title: "Where our belts go to work.",
      previous: "Previous image",
      next: "Next image",
      goTo: "Go to image",
      slides: [
        {
          title: "Keeping quarries moving",
          body: "Every hour of uptime matters. Our belts keep stackers and screeners running through the hardest shifts.",
          alt: "Radial stacker conveyor piling crushed stone in a quarry",
        },
        {
          title: "Matched to your machine",
          body: "Crushers, screeners and recyclers — every belt is cross-referenced to the exact machine it drives.",
          alt: "Mobile crusher discharging crushed material from its conveyor",
        },
        {
          title: "Grip for every incline",
          body: "Cleated profiles carry your material up the steepest inclines without rollback.",
          alt: "Close-up of chevron cleats on a conveyor belt",
        },
        {
          title: "Built, stocked, ready",
          body: "Manufactured to DIN 22102 and stocked as finished rolls — ready to ship the next day.",
          alt: "Finished conveyor belt rolls in the warehouse",
        },
        {
          title: "Wherever material moves",
          body: "From quarries to ports and recycling yards — mobile equipment anywhere is equipment we cover.",
          alt: "Mobile crusher working at a harbor terminal",
        },
      ],
    },
  },
  productsPage: {
    metaTitle: "Products",
    metaDescription:
      "OEM-spec conveyor belts organized the way you buy them: standard multi-ply belts, heavy-duty & specialized constructions, the Cleatpro X™ Incline cleated range — and custom builds to your spec.",
    eyebrow: "Products",
    title: "Belts built to your machine's spec.",
    lead: "Original-spec conveyor belts for all mobile/portable material process and recycling equipment — cross-referenced to your machine and shipped the next day.",
    noMatchFor: "No exact match for",
    matchFor: "match for",
    matchesFor: "matches for",
    clearSearch: "Clear search",
    matchingRanges: "Matching ranges",
    matchingBelts: "Matching belts",
    noMatchBody:
      "Our cross-reference desk confirms every fit by hand — if your machine or part number isn't matched here yet, send it over and we'll come back with the exact spec, usually within the hour.",
    categoriesEyebrow: "Categories",
    categoriesTitle: "Browse by range.",
    categoriesLead:
      "Standard multi-ply belts, heavy-duty constructions and the Incline cleated range — each built around one application. Open a range for the full story, then step into the belt you need. Need something special? That tile takes you straight to us.",
    byCategoryEyebrow: "Products by category",
    byCategoryTitle: "Every belt, in its range.",
    specializedEyebrow: "Specialized belts",
    specializedTitle: "Exceptional applications, covered.",
    specializedLead:
      "Heat, deep cold, flame or oil — specialized cover compounds are quoted case by case against your application survey.",
  },
  categoryPage: {
    allProducts: "All products",
    applications: "Applications",
    inRangeEyebrow: "In this range",
    inRangeTitleSuffix: "ready to spec.",
    by: "by",
    filterLegend: "Filter by pattern",
    filterAll: "All patterns",
  },
  productPage: {
    aboutThisBelt: "About this belt",
    whyItWins: "Why it wins",
    applications: "Applications",
    relatedEyebrow: "Related",
    relatedTitle: "Also worth a look.",
  },
  contact: {
    metaTitle: "Contact & Quote Request",
    metaDescription:
      "Request a cross-referenced conveyor belt quote, or call us if your machine is down — stocked belts ship next day.",
    eyebrow: "Contact",
    title: "Get a straight quote.",
    lead: "Send us your machine model or OEM part number. You'll get back a cross-referenced spec, stock status and pricing — no games.",
    downBody:
      "Skip the form. Call us and we'll cross-reference your belt on the phone — stocked belts ship next day.",
  },
  quoteForm: {
    urgencyLabel: "How urgent is it?",
    downNowTitle: "Machine is down now",
    downNowSub: "We prioritize and ship next day",
    plannedTitle: "Planned purchase",
    plannedSub: "Quote for an upcoming belt change",
    name: "Name",
    namePlaceholder: "Your name",
    company: "Company",
    companyPlaceholder: "Company (optional)",
    email: "Email",
    emailPlaceholder: "you@company.com",
    phone: "Phone",
    phonePlaceholder: "Phone (optional)",
    product: "Product",
    productPlaceholder: "Not sure — help me match it",
    beltWidth: "Belt width",
    beltWidthPlaceholder: "e.g. 1000 mm",
    beltLength: "Belt length",
    beltLengthPlaceholder: "e.g. 7150 mm",
    message: "Message",
    messagePlaceholder:
      "Machine model, OEM part number, or anything else that helps us match the belt",
    submit: "Request my quote",
    successTitle: "Quote request received.",
    successBody:
      "We'll get back to you within one business hour with a cross-referenced spec and straight pricing. If your machine is down, call us — stocked belts ship next day.",
    errName: "Please enter your name",
    errEmail: "Please enter a valid email address",
    errMessage: "Message is too long",
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "Malone Road Belt manufactures OEM-spec replacement conveyor belts for mobile crushing, screening and recycling equipment — cross-referenced by machine, made to DIN 22102, shipped next day.",
    eyebrow: "About Malone Road Belt",
    title: "We don't sell belts. We sell uptime.",
    lead: "Every hour a crusher stands still costs more than the belt that stopped it. That's why we manufacture OEM-spec replacement belts for mobile material processing equipment — cross-referenced by machine, made to DIN 22102, and shipped the day after you order them.",
    storyTitle: "Belt people.",
    storyParagraphs: [
      "Malone Road Belt exists for one buying moment: the day your crusher, screener or recycler needs a new belt. Mobile processing equipment doesn't wait — so instead of selling generic rubber by the metre, we hold OEM-spec belts for the machines actually working in quarries, recycling yards and road projects, ready to ship.",
      "Behind the range is a cross-reference engine: machine models and OEM part numbers mapped to exact MB belt specs — width, length, plies, splice and cover grade. Send us either one and you get the confirmed fit back, not a catalogue to decode.",
      "We serve operators and dealers across Ireland, the UK and beyond — and whenever you call, a person answers the phone.",
    ],
    /* `ring` is the arc text of each stat's stamp badge (StampBadge) — keep
       it to ~17 characters or fewer so the banner doesn't cover its ends. */
    stats: [
      {
        value: "DIN 22102",
        label: "All belts are manufactured with DIN 22102",
        ring: "Quality assurance",
      },
      {
        value: "Next day",
        label: "Dispatch on stocked belts",
        ring: "Next-day dispatch",
      },
      { value: "< 1 hr", label: "ZIP CLIP® fitting time", ring: "Rapid fitting" },
      {
        value: "4x",
        label: "Ironcleat® service life vs standard EP",
        ring: "Service life",
      },
    ],
    howEyebrow: "How we work",
    howTitle: "Three promises on every order.",
    values: [
      {
        title: "Cross-referenced, not guessed",
        body: "Every order starts from your machine model or OEM part number. Our cross-reference desk confirms the exact dimensions, splice and cover grade against OEM spec before anything ships.",
      },
      {
        title: "OEM spec, certified",
        body: "Belts are manufactured to DIN 22102 in an ISO 9001 certified process, and every MB part number is recorded so your next reorder is a one-line email.",
      },
      {
        title: "Built around your downtime",
        body: "Stocked belts ship the next day. When the machine is already down, ZIP CLIP® has you running again within the hour — no splicing crew, no curing time.",
      },
    ],
    manufacturedTo: "Manufactured to:",
    oemEyebrow: "Manufacturers",
    oemTitle: "The OEM brands we cover.",
    oemLead:
      "Every belt starts from a machine. These are the manufacturers whose crushers, screeners, washers and recyclers our cross-reference desk matches every day.",
  },
  comingSoon: {
    metaTitle: "Coming Soon",
    metaDescription:
      "The full Malone Road Belt system is almost here. Until then, our belt desk is one call away.",
    badge: "Coming soon",
    title:
      "Our site is undergoing construction. Please feel free to contact us at any time",
  },
  notFound: {
    badge: "404 · NO MATCH FOUND",
    title: "This line stopped moving.",
    body: "The page you're looking for doesn't exist — but your belt probably does. Try the products catalog or ask us directly.",
    browseProducts: "Browse products",
  },
} as const;

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? readonly DeepStringify<U>[] extends readonly unknown[]
        ? readonly (U extends string ? string : DeepStringify<U>)[]
        : never
      : DeepStringify<T[K]>;
};

export type Dictionary = DeepStringify<typeof en>;
