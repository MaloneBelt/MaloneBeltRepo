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
  },
  home: {
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
  },
  productsPage: {
    metaTitle: "Products",
    metaDescription:
      "OEM-spec conveyor belts organized the way you buy them: standard multi-ply belts, heavy-duty & specialized constructions, the MRB CleatMax™ cleated range — and custom builds to your spec.",
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
      "Standard multi-ply belts, heavy-duty constructions and the MRB CleatMax cleated range — each built around one application. Open a range for the full story, then step into the belt you need. Need something special? That tile takes you straight to us.",
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
    errSubmit:
      "Something went wrong sending your request. Please try again — or call us and we'll take it over the phone.",
  },
  about: {
    metaTitle: "About",
    metaDescription:
      "Malone Road Belt is a specialized conveyor belting and replacement-parts company — an authorized Smiley Monroe OEM conveyor belt distributor serving the United States, the Caribbean and Latin America.",
    eyebrow: "About Malone Road Belt",
    title: "Moving your business forward.",
    lead: "Malone Road Belt is a specialized conveyor belting and replacement-parts company built around a straightforward idea: make buying the right belt easier, faster and more dependable. We serve material processing, aggregate, recycling, road construction, milling, wood, waste, agricultural and industrial operations across the United States — with additional support for the Caribbean and Latin America.",
    storyTitle: "We know equipment.",
    storyParagraphs: [
      "Our background comes from the equipment side of the industry — and that matters. Instead of expecting you to tell us exactly what belt you need, we work the chain ourselves: manufacturer → machine → model → application → belt → part number → correct replacement.",
      "We are continuously developing an extensive equipment and belt database covering machines from Wirtgen, McCloskey, Powerscreen, Terex Finlay, Sandvik, Extec, Rubble Master, Anaconda, Roadtec, Vermeer, Doppstadt, Komptech and many others across crushing, screening, grinding, recycling and milling.",
    ],
    storyPunch: "Give us the machine. We'll help find the belt.",
    /* `ring` is the arc text of each stat's stamp badge (StampBadge) — keep
       it to ~17 characters or fewer so the banner doesn't cover its ends. */
    stats: [
      {
        value: "DIN 22102",
        arcTop: "Quality",
        arcBottom: "Assurance",
        label: "All belts are manufactured and tested to DIN 22102",
      },
      {
        value: "Next day",
        arcTop: "From stock",
        arcBottom: "Shipping",
        label: "Stocked belts are dispatched the next working day",
      },
      {
        value: "< 1 hour",
        arcTop: "Zip Clip®",
        arcBottom: "Fitting",
        label: "A ZIP CLIP® prepared belt is fitted in under an hour",
      },
      {
        value: "4x longer",
        arcTop: "Ironcleat®",
        arcBottom: "Service life",
        label: "Ironcleat® lasts up to 4x longer than standard EP multi-ply",
      },
    ],
    howEyebrow: "How we work",
    howTitle: "Built around the customer.",
    values: [
      {
        title: "People first, no scripts",
        body: "Real people who understand your equipment: fast answers, straightforward communication, accurate cross-referencing and ownership until the machine is up and running again.",
      },
      {
        title: "Same-day mindset",
        body: "When a belt fails, the machine is sitting still right now, and downtime costs money. Our inventory and logistics are built around speed — where they permit, we provide same-day and expedited solutions.",
      },
      {
        title: "Road milling specialists",
        body: "Milling is one of our core specialties. We support replacement belts for milling equipment with a growing cross-reference of machines, belt dimensions, specifications and OEM part numbers. Tell us the machine and model — we do the homework.",
      },
    ],
    manufacturedTo: "Manufactured to:",
    supplyEyebrow: "What we supply",
    supplyTitle: "From the mobile machine to the stationary line.",
    supplyLead:
      "Conveyor belting and related products for both mobile and stationary equipment — from quarries, aggregate and asphalt plants to concrete, recycling, scrap, waste, wood processing, agricultural, mining and water-management operations. Our job isn't to sell a piece of rubber; it's to help keep the customer's machine moving.",
    supplyItems: [
      "Road milling machine belts",
      "Crusher belts",
      "Screener belts",
      "Stacker & radial conveyor belts",
      "Wood grinder belts",
      "Recycling equipment belts",
      "Aggregate & quarry belts",
      "Asphalt & concrete plant belting",
      "Waste-processing belts",
      "Agricultural belting",
      "Elevator belts",
      "Cleated & specialty belts",
      "V-belts & machine drive belts",
      "Belt components & spares",
      "Custom & specialty solutions",
    ],
    standardEyebrow: "Our standard",
    standardTitle: "Doing business with MRB should feel simple.",
    standardItems: [
      "Listen first",
      "Understand the application",
      "Find the correct product",
      "Communicate clearly",
      "Move quickly",
      "Stand behind what we sell",
    ],
    standardPunch:
      "And when something goes wrong, we don't hide behind emails, policies or departments — we work the problem.",
    visionQuote:
      "We want to build the Amazon of belting — without losing the personal service of a small company.",
    visionBody:
      "We aren't trying to be the biggest company for the sake of being big. We want to be the company customers trust to get it right — able to support a single replacement belt today while building the systems, inventory and knowledge to support thousands of machines tomorrow.",
    marketsLabel: "Who we serve:",
    markets: [
      "Equipment owners & operators",
      "Crushing & screening contractors",
      "Road milling contractors",
      "Asphalt producers",
      "Aggregate producers",
      "Quarries & mines",
      "Concrete producers",
      "Recycling companies",
      "Scrap processors",
      "Waste management",
      "Wood grinding & biomass",
      "Agricultural businesses",
      "Equipment dealers",
      "OEM manufacturers",
      "Municipal & government",
      "Industrial facilities",
      "Caribbean & Latin America export",
    ],
    oemEyebrow: "Manufacturers",
    oemTitle: "The OEM brands we cover.",
    oemLead:
      "Every belt starts from a machine. These are the manufacturers whose crushers, screeners, grinders and recyclers our cross-reference desk matches every day.",
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
