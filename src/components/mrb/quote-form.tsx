"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import { localizeCategory, localizeProduct } from "@/i18n/localize";
import { makeQuoteSchema, type QuoteFormValues } from "@/lib/validators/quote";
import { cn } from "@/lib/utils";

/* Quote-request form. Phase 1 is UI-only: client-side Zod validation and an
   inline success state — no network request. The payload shape mirrors the
   Prisma Lead model so Phase 2 can wire it straight to the database. */
export function QuoteForm({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const dict = getDictionary(locale);

  const urgencyParam = searchParams.get("urgency");
  const productParam = searchParams.get("product");

  const schema = useMemo(
    () =>
      makeQuoteSchema({
        name: dict.quoteForm.errName,
        email: dict.quoteForm.errEmail,
        message: dict.quoteForm.errMessage,
      }),
    [dict]
  );

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(schema),
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
    // Phase 2: POST the validated QuoteFormValues to a route handler and
    // persist as a Lead.
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
          {dict.quoteForm.successTitle}
        </h2>
        <p className="text-sm leading-relaxed text-body-muted">
          {dict.quoteForm.successBody}
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
              <FormLabel>{dict.quoteForm.urgencyLabel}</FormLabel>
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
                          {dict.quoteForm.downNowTitle}
                        </span>
                        <span className="mt-0.5 block text-caption text-body-muted">
                          {dict.quoteForm.downNowSub}
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
                          {dict.quoteForm.plannedTitle}
                        </span>
                        <span className="mt-0.5 block text-caption text-body-muted">
                          {dict.quoteForm.plannedSub}
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
                <FormLabel>{dict.quoteForm.name}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={dict.quoteForm.namePlaceholder}
                    autoComplete="name"
                    {...field}
                  />
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
                <FormLabel>{dict.quoteForm.company}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={dict.quoteForm.companyPlaceholder}
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
                <FormLabel>{dict.quoteForm.email}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={dict.quoteForm.emailPlaceholder}
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
                <FormLabel>{dict.quoteForm.phone}</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder={dict.quoteForm.phonePlaceholder}
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
              <FormLabel>{dict.quoteForm.product}</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger className="h-12 w-full rounded-track border-[1.5px] border-petrol-200 bg-surface px-[18px]">
                    <SelectValue
                      placeholder={dict.quoteForm.productPlaceholder}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* One entry per product, grouped under its primary
                      category so the list reads like the catalog */}
                  {categories.map((category) => {
                    const categoryProducts = products.filter(
                      (p) => p.categories[0] === category.slug
                    );
                    if (categoryProducts.length === 0) return null;
                    return (
                      <SelectGroup key={category.slug}>
                        <SelectLabel>
                          {localizeCategory(category, locale).name}
                        </SelectLabel>
                        {categoryProducts.map((product) => (
                          <SelectItem key={product.slug} value={product.slug}>
                            {localizeProduct(product, locale).name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    );
                  })}
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
                <FormLabel>{dict.quoteForm.beltWidth}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={dict.quoteForm.beltWidthPlaceholder}
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
                <FormLabel>{dict.quoteForm.beltLength}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={dict.quoteForm.beltLengthPlaceholder}
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
              <FormLabel>{dict.quoteForm.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={dict.quoteForm.messagePlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="primary" size="lg" block>
          {dict.quoteForm.submit}
        </Button>
      </form>
    </Form>
  );
}
