"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/products";
import { quoteSchema, type QuoteFormValues } from "@/lib/validators/quote";
import { cn } from "@/lib/utils";

/* Quote-request form. Phase 1 is UI-only: client-side Zod validation and an
   inline success state — no network request. The payload shape mirrors the
   Prisma Lead model so Phase 2 can wire it straight to the database. */
export function QuoteForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const urgencyParam = searchParams.get("urgency");
  const productParam = searchParams.get("product");

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      urgency: urgencyParam === "down-now" ? "down-now" : "planned",
      productSlug: products.some((p) => p.slug === productParam)
        ? (productParam as string)
        : undefined,
      beltWidth: "",
      beltLength: "",
      message: "",
    },
  });

  function onSubmit() {
    // Phase 2: POST the validated QuoteFormValues to a server action / API
    // route and persist as a Lead.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-3 rounded-xl border border-stock-line bg-stock-tint p-8"
      >
        <CheckCircle2
          className="size-8 text-stock"
          strokeWidth={2}
          aria-hidden="true"
        />
        <h2 className="font-display text-h3 font-extrabold text-ink-2">
          Quote request received.
        </h2>
        <p className="text-sm leading-relaxed text-body-muted">
          We&apos;ll get back to you within one business hour with a
          cross-referenced spec and straight pricing. If your machine is down,
          call us — stocked belts ship today.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="space-y-5"
      >
        <FormField
          control={form.control}
          name="urgency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How urgent is it?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <FormItem>
                    <FormLabel
                      className={cn(
                        "flex w-full cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors",
                        field.value === "down-now"
                          ? "border-down-line bg-down-tint"
                          : "border-line bg-surface hover:border-down-line"
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="down-now" />
                      </FormControl>
                      <span>
                        <span className="block text-sm font-bold text-down-strong">
                          Machine is down now
                        </span>
                        <span className="mt-0.5 block text-caption text-body-muted">
                          We prioritize and ship same day
                        </span>
                      </span>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormLabel
                      className={cn(
                        "flex w-full cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors",
                        field.value === "planned"
                          ? "border-stock-line bg-stock-tint"
                          : "border-line bg-surface hover:border-stock-line"
                      )}
                    >
                      <FormControl>
                        <RadioGroupItem value="planned" />
                      </FormControl>
                      <span>
                        <span className="block text-sm font-bold text-stock-strong">
                          Planned purchase
                        </span>
                        <span className="mt-0.5 block text-caption text-body-muted">
                          Quote for an upcoming belt change
                        </span>
                      </span>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Company (optional)"
                    autoComplete="organization"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Phone (optional)"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="productSlug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger className="h-12 w-full rounded-track border-[1.5px] border-petrol-200 bg-surface px-[18px]">
                    <SelectValue placeholder="Not sure — help me match it" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.slug} value={product.slug}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="beltWidth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Belt width</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 1000 mm"
                    className="font-mono"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="beltLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Belt length</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. 7150 mm"
                    className="font-mono"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Machine model, OEM part number, or anything else that helps us match the belt"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="primary" size="lg" block>
          Request my quote
        </Button>
      </form>
    </Form>
  );
}
