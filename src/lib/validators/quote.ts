import { z } from "zod";

/* Mirrors the Prisma `Lead` model (prisma/schema.prisma) so Phase 2 can wire
   this form to the database without reshaping the payload. */
export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  urgency: z.enum(["down-now", "planned"]),
  productSlug: z.string().optional(),
  beltWidth: z.string().optional(),
  beltLength: z.string().optional(),
  message: z.string().max(2000, "Message is too long").optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
