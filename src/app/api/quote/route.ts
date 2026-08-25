import { NextResponse } from "next/server";

import { site } from "@/data/site";
import { quoteSchema } from "@/lib/validators/quote";

/* Phase 1.5 email bridge (client direction, Aug 2026): the quote form POSTs
   here and the lead is forwarded as an email via Resend's REST API — no SDK,
   no database. Phase 2 replaces the forward with Lead persistence and keeps
   this route's contract.

   Env (set in Vercel → Project → Settings → Environment Variables):
     RESEND_API_KEY    — Resend API key (required for real delivery)
     QUOTE_TO_EMAIL    — recipient inbox   (default: site.email)
     QUOTE_FROM_EMAIL  — verified sender   (default: Resend's onboarding
                         sender, which only delivers to the Resend account
                         owner — verify malonebelt.com to send to any inbox)

   Without RESEND_API_KEY the route still accepts the lead and writes it to
   the server log (visible in Vercel → Logs), so the form never breaks while
   the key is being provisioned — but nobody gets an email. */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function fieldLines(lead: Record<string, string | undefined>) {
  const labels: Record<string, string> = {
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    urgency: "Urgency",
    productSlug: "Product",
    beltWidth: "Belt width",
    beltLength: "Belt length",
    message: "Message",
  };
  return Object.entries(labels)
    .map(([key, label]) => `${label}: ${lead[key]?.trim() || "—"}`)
    .join("\n");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 422 });
  }
  const lead = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[quote] RESEND_API_KEY not set — lead logged, not emailed:", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const urgencyTag = lead.urgency === "down-now" ? "MACHINE DOWN" : "Planned";
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL ?? "MRB Website <onboarding@resend.dev>",
      to: [process.env.QUOTE_TO_EMAIL ?? site.email],
      reply_to: lead.email,
      subject: `[${urgencyTag}] Quote request — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
      text: `New quote request from the website:\n\n${fieldLines(lead)}\n`,
    }),
  });

  if (!response.ok) {
    console.error("[quote] Resend error", response.status, await response.text());
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
