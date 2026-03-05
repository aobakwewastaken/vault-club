import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CommunityCta() {
  return (
    <section className="border-t border-border bg-neutral-800 py-20 text-white sm:py-28">
      <div className="container max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl tracking-wide sm:text-4xl md:text-5xl">
          THIS IS NOT A JOG
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base text-white/80">
          We don&apos;t do casual. We do commitment, consistency, and crews that pull you forward.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-black hover:bg-white/90"
          >
            <Link href="/runs">Upcoming runs</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/#newsletter">Newsletter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
