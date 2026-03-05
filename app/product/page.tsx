import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

const CATEGORIES = [
  { title: "RUN", description: "Gear for Saturday runs and long run Sundays." },
  { title: "STRENGTH", description: "Equipment and apparel for strength sessions." },
  { title: "RECOVERY", description: "Tools to support rest and regeneration." },
  { title: "ESSENTIALS", description: "Core items for showing up ready." },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="px-6 pb-8 pt-24 md:px-12 md:pt-32 lg:px-20">
          <h1 className="font-display text-6xl leading-[0.9] md:text-8xl">
            PRODUCT
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/60">
            Not merchandise. Equipment for participation.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="px-6 py-12 md:px-12 lg:px-20">
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {CATEGORIES.map(({ title, description }) => (
              <div
                key={title}
                className="bg-black p-8 transition-colors hover:bg-white/5 md:p-12"
              >
                <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
                <p className="mt-4 text-sm text-white/50">{description}</p>
                <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-white/30">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10 bg-white px-6 py-20 text-black md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl">
              GET NOTIFIED
            </h2>
            <p className="mt-4 text-black/60">
              Be first to know when product drops.
            </p>
            <Link
              href="/#newsletter"
              className="mt-8 inline-block border-2 border-black bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-transparent hover:text-black"
            >
              Join Newsletter
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
