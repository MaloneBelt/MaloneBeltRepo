import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SealMark } from "@/components/mrb/seal-mark";

export default function NotFound() {
  return (
    <section className="container-shell flex flex-col items-center py-24 text-center">
      <SealMark size={96} className="text-petrol-200" />
      <Badge variant="mono" className="mt-6">
        404 · NO MATCH FOUND
      </Badge>
      <h1 className="mt-4 font-display text-h2 font-black tracking-tight text-ink-2">
        This line stopped moving.
      </h1>
      <p className="mt-3 max-w-md text-body-muted">
        The page you&apos;re looking for doesn&apos;t exist — but your belt
        probably does. Try the products catalog or ask us directly.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button asChild variant="primary">
          <Link href="/products">Browse products</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </section>
  );
}
