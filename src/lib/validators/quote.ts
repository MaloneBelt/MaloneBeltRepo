import { z } from "zod";

/* Mirrors the Prisma `Lead` model (prisma/schema.prisma) so Phase 2 can wire
   this form to the database without reshaping the payload. Validation
   messages are injected per locale by the quote form. */

export interface QuoteMessages {
  name: string;
  email: string;
  message: string;
}

export function makeQuoteSchema(messages: QuoteMessages) {
  return z.object({
    name: z.string().min(2, messages.name),
    company: z.string().optional(),
    email: z.string().email(messages.email),
    phone: z.string().optional(),
    urgency: z.enum(["down-now", "planned"]),
    productSlug: z.string().optional(),
    beltWidth: z.string().optional(),
    beltLength: z.string().optional(),
    message: z.string().max(2000, messages.message).optional(),
  });
}

/* Default schema keeps the original English messages for any Phase 2
   server-side reuse. */
export const quoteSchema = makeQuoteSchema({
  name: "Please enter your name",
  email: "Please enter a valid email address",
  message: "Message is too long",
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
