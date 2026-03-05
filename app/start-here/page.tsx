import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/asset-paths";

const PILLARS = [
  {
    id: "running",
    title: "RUNNING",
    description: "The entry point. Saturday runs and Long Run Sundays are the spine.",
    link: "/runs",
  },
  {
    id: "strength",
    title: "STRENGTH",
    description: "Core to the system. We train to last.",
  },
  {
    id: "wellness",
    title: "WELLNESS",
    description: "Rest, recovery, and routine. Treated as seriously as performance.",
  },
  {
    id: "events",
    title: "EVENTS",
    description: "Culture through intentional activations.",
  },
  {
    id: "product",
    title: "PRODUCT",
    description: "Equipment for participation. Not merchandise.",
    link: "/product",
  },
  {
    id: "membership",
    title: "MEMBERSHIP",
    description: "Join the structure.",
    link: "/membership",
  },
];

export default function StartHerePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGES[2]}
            alt="VSC community"
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20">
          <h1 className="font-display text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
            THE
            <br />
            SYSTEM
          </h1>
        </div>
      </section>

      <main>
        {/* Manifesto */}
        <section className="border-t border-white/10 px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed text-white/80 md:text-2xl">
              VSC® is a performance led movement built on structure, discipline,
              and shared effort. Running is the entry point. Strength is the
              foundation.
            </p>
            <p className="mt-8 text-xl leading-relaxed text-white/80 md:text-2xl">
              We don&apos;t do hype. We do repetition.
            </p>
          </div>
        </section>

        {/* Standards */}
        <section className="border-t border-white/10 bg-white px-6 py-20 text-black md:px-12 md:py-28 lg:px-20">
          <div className="max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/50">
              Non-negotiable
            </span>
            <h2 className="mt-4 font-display text-5xl leading-[0.9] md:text-6xl">
              STANDARDS
            </h2>
            <div className="mt-8 space-y-4 text-lg text-black/70">
              <p>Everyone is welcome. Standards are non-negotiable.</p>
              <p>Respect the space. Respect the timing. Respect the effort.</p>
            </div>
            <p className="mt-12 font-display text-2xl md:text-3xl">
              STRENGTH IN NUMBERS.
            </p>
          </div>
        </section>

        {/* The System Grid */}
        <section className="border-t border-white/10 px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <h2 className="font-display text-5xl md:text-6xl">THE PILLARS</h2>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ id, title, description, link }) => (
              <article
                key={id}
                className="group bg-black p-8 transition-colors hover:bg-white/5"
              >
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm text-white/60">{description}</p>
                {link && (
                  <Link
                    href={link}
                    className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
                  >
                    Explore →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter variant="dark" />
    </div>
  );
}
