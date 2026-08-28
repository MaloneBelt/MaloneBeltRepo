import { categories, getCategory } from "@/data/categories";
import { machines, mbPartNumbers } from "@/data/machines";
import { getProduct, products } from "@/data/products";
import type { Category, Product } from "@/types/product";

/* BeltMatch search. Phase 1 runs in-memory over the TypeScript catalog and
   machine cross-reference; Phase 2 swaps the internals for database queries
   (Machine, MachineFit, OemPartNumber) behind the same function signature.
   All three strategies run on every query — the UI's "By machine / By OEM
   part #" toggle only changes the placeholder hint, not what is searched. */

export type SearchMode = "machine" | "part";

export interface ProductMatch {
  product: Product;
  reasons: string[]; // human-readable "why it matched", first one is shown
}

export interface CategoryMatch {
  category: Category;
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean);
}

/* Part codes compare with separators stripped so "MB 4471 EP", "mb-4471-ep"
   and "MB4471EP" all hit the same code. */
function partKey(value: string): string {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function tokenHit(queryToken: string, haystackTokens: string[]): boolean {
  return haystackTokens.some((token) => token.startsWith(queryToken));
}

/* Category matches: every query token must prefix-hit somewhere in the
   category's own text. Rendered above product matches on /products. */
export function searchCategories(query: string): CategoryMatch[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  return categories
    .filter((category) => {
      const categoryTokens = tokenize(
        [
          category.name,
          category.subtitle,
          category.family,
          category.tagline,
          category.code,
          ...category.applications,
        ].join(" ")
      );
      return queryTokens.every((t) => tokenHit(t, categoryTokens));
    })
    .map((category) => ({ category }));
}

export function searchProducts(query: string): ProductMatch[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  const matches = new Map<string, ProductMatch>();
  const add = (slug: string, reason: string) => {
    const existing = matches.get(slug);
    if (existing) {
      if (!existing.reasons.includes(reason)) existing.reasons.push(reason);
      return;
    }
    const product = getProduct(slug);
    if (product) matches.set(slug, { product, reasons: [reason] });
  };

  // 1. Part numbers: MB catalog codes, product family codes, OEM references.
  const queryPart = partKey(query);
  if (queryPart.length >= 4) {
    for (const [code, slug] of Object.entries(mbPartNumbers)) {
      const codeKey = partKey(code);
      if (codeKey.includes(queryPart) || queryPart.includes(codeKey)) {
        add(slug, `Part number ${code}`);
      }
    }
    for (const product of products) {
      if (partKey(product.sku) === queryPart) {
        add(product.slug, `Family code ${product.sku}`);
      }
    }
    for (const machine of machines) {
      for (const fit of machine.fits) {
        if (!fit.oemPartNumber) continue;
        const codeKey = partKey(fit.oemPartNumber);
        if (codeKey.includes(queryPart) || queryPart.includes(codeKey)) {
          add(
            fit.productSlug,
            `OEM part ${fit.oemPartNumber} — ${machine.brand} ${machine.model}, ${fit.position.toLowerCase()}`
          );
        }
      }
    }
  }

  // 2. Machines: a machine matches when at least two query tokens (or the
  // whole query, if shorter) prefix-match its brand/model/aliases. This lets
  // "Powerscreen Warrior 1400 — main conveyor" match even with non-machine words.
  for (const machine of machines) {
    const machineTokens = tokenize(
      [machine.brand, machine.model, ...machine.aliases].join(" ")
    );
    const hits = queryTokens.filter((t) => tokenHit(t, machineTokens)).length;
    if (hits >= Math.min(2, queryTokens.length)) {
      for (const fit of machine.fits) {
        add(
          fit.productSlug,
          `Fits ${machine.brand} ${machine.model} — ${fit.position.toLowerCase()}`
        );
      }
    }
  }

  // 3. Product text: every query token must appear somewhere in the product.
  // Category names count as product text, so "incline" surfaces the
  // patterns of the MRB CleatMax range.
  for (const product of products) {
    const productCategories = product.categories
      .map((slug) => getCategory(slug))
      .filter((c) => c !== undefined);
    const productTokens = tokenize(
      [
        product.name,
        product.tagline,
        product.sku,
        ...productCategories.flatMap((c) => [c.name, c.subtitle]),
        ...product.applications,
        ...product.standards,
        ...product.features,
        ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
      ].join(" ")
    );
    if (queryTokens.every((t) => tokenHit(t, productTokens))) {
      add(product.slug, `Matches "${query.trim()}"`);
    }
  }

  return [...matches.values()];
}
