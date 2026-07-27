/* Machine / OEM cross-reference data. Phase 1 keeps this in TypeScript; the
   shape mirrors the Machine + MachineFit + OemPartNumber models in
   prisma/schema.prisma so Phase 2 can move it to the database unchanged.
   Fits and part numbers are placeholders until the client delivers the real
   cross-reference sheet (see Client content deliverables). */

export interface MachineFit {
  productSlug: string;
  position: string; // e.g. "Main conveyor"
  oemPartNumber?: string;
}

export interface Machine {
  slug: string;
  brand: string;
  model: string;
  aliases: string[]; // alternate spellings matched by search
  fits: MachineFit[];
}

export const machines: Machine[] = [
  {
    slug: "powerscreen-chieftain-1400",
    brand: "Powerscreen",
    model: "Chieftain 1400",
    aliases: ["chieftain"],
    fits: [
      {
        productSlug: "ep-multi-ply",
        position: "Main conveyor",
        oemPartNumber: "PS-1400-2124",
      },
      { productSlug: "endless-belt", position: "Main conveyor" },
      { productSlug: "zip-clip", position: "Side conveyor" },
    ],
  },
  {
    slug: "powerscreen-warrior-1800",
    brand: "Powerscreen",
    model: "Warrior 1800",
    aliases: ["warrior"],
    fits: [
      {
        productSlug: "toughflex",
        position: "Main conveyor",
        oemPartNumber: "PS-1800-3310",
      },
      { productSlug: "zip-clip", position: "Side conveyor" },
    ],
  },
  {
    slug: "cat-ap555",
    brand: "Cat",
    model: "AP555",
    aliases: ["caterpillar", "ap555f"],
    fits: [
      {
        productSlug: "cleated-chevron",
        position: "Feeder conveyor",
        oemPartNumber: "CAT-460-9055",
      },
      { productSlug: "endless-belt", position: "Feeder conveyor" },
    ],
  },
  {
    slug: "wirtgen-w-100-fi",
    brand: "Wirtgen",
    model: "W 100 Fi",
    aliases: ["w100", "w100fi"],
    fits: [
      {
        productSlug: "ripstop",
        position: "Main conveyor",
        oemPartNumber: "WG-2308811",
      },
      { productSlug: "cleated-chevron", position: "Discharge conveyor" },
    ],
  },
  {
    slug: "metso-lokotrack-lt106",
    brand: "Metso",
    model: "Lokotrack LT106",
    aliases: ["lokotrack", "lt106"],
    fits: [
      {
        productSlug: "toughflex",
        position: "Main conveyor",
        oemPartNumber: "MM-N11852341",
      },
      { productSlug: "endless-belt", position: "Main conveyor" },
    ],
  },
  {
    slug: "sandvik-qj341",
    brand: "Sandvik",
    model: "QJ341",
    aliases: ["qj341"],
    fits: [
      {
        productSlug: "ep-multi-ply",
        position: "Main conveyor",
        oemPartNumber: "SV-BG00534421",
      },
      { productSlug: "zip-clip", position: "Magnet conveyor" },
    ],
  },
  {
    slug: "terex-finlay-883",
    brand: "Terex Finlay",
    model: "883+",
    aliases: ["finlay", "883"],
    fits: [
      {
        productSlug: "ripstop",
        position: "Main conveyor",
        oemPartNumber: "TF-883-1102",
      },
      { productSlug: "cleated-chevron", position: "Fines conveyor" },
    ],
  },
  {
    slug: "mccloskey-r105",
    brand: "McCloskey",
    model: "R105",
    aliases: ["r105"],
    fits: [
      {
        productSlug: "endless-belt",
        position: "Main conveyor",
        oemPartNumber: "MC-R105-0217",
      },
      { productSlug: "zip-clip", position: "Side conveyor" },
    ],
  },
];

/* MB catalog part numbers → product slug ("By OEM part #" also accepts our
   own codes, e.g. the MB-4471-EP shown on the home hero card). */
export const mbPartNumbers: Record<string, string> = {
  "MB-4471-EP": "ep-multi-ply",
  "MB-6120-EB": "endless-belt",
  "MB-2210-ZC": "zip-clip",
  "MB-8830-TF": "toughflex",
  "MB-1050-RS": "ripstop",
  "MB-3300-CC": "cleated-chevron",
};
