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
        productSlug: "3-ply",
        position: "Main conveyor",
        oemPartNumber: "PS-1400-2124",
      },
      { productSlug: "c15p385", position: "Side conveyor" },
    ],
  },
  {
    slug: "powerscreen-warrior-1800",
    brand: "Powerscreen",
    model: "Warrior 1800",
    aliases: ["warrior"],
    fits: [
      {
        productSlug: "hd-flat",
        position: "Main conveyor",
        oemPartNumber: "PS-1800-3310",
      },
      { productSlug: "2-ply", position: "Side conveyor" },
    ],
  },
  {
    slug: "metso-lokotrack-lt106",
    brand: "Metso",
    model: "Lokotrack LT106",
    aliases: ["lokotrack", "lt106"],
    fits: [
      {
        productSlug: "hd-flat",
        position: "Main conveyor",
        oemPartNumber: "MM-N11852341",
      },
      { productSlug: "4-ply", position: "Main conveyor" },
    ],
  },
  {
    slug: "sandvik-qj341",
    brand: "Sandvik",
    model: "QJ341",
    aliases: ["qj341"],
    fits: [
      {
        productSlug: "4-ply",
        position: "Main conveyor",
        oemPartNumber: "SV-BG00534421",
      },
      { productSlug: "2-ply", position: "Magnet conveyor" },
    ],
  },
  {
    slug: "terex-finlay-883",
    brand: "Terex Finlay",
    model: "883+",
    aliases: ["finlay", "883"],
    fits: [
      {
        productSlug: "3-ply",
        position: "Main conveyor",
        oemPartNumber: "TF-883-1102",
      },
      { productSlug: "c15p540", position: "Fines conveyor" },
    ],
  },
  {
    slug: "mccloskey-r105",
    brand: "McCloskey",
    model: "R105",
    aliases: ["r105"],
    fits: [
      {
        productSlug: "3-ply",
        position: "Main conveyor",
        oemPartNumber: "MC-R105-0217",
      },
      { productSlug: "c15p385", position: "Side conveyor" },
    ],
  },
];

/* MB catalog part numbers → product slug ("By OEM part #" also accepts our
   own codes, e.g. the MB-8830-IC shown in the BeltMatch hint row). */
export const mbPartNumbers: Record<string, string> = {
  "MB-4402-2P": "2-ply",
  "MB-4403-3P": "3-ply",
  "MB-4404-4P": "4-ply",
  "MB-8830-IC": "hd-flat",
  "MB-9385-CL": "c15p385",
};
