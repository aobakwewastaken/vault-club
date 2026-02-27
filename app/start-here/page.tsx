import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import {
  Calendar,
  Sun,
  Dumbbell,
  Heart,
  Sparkles,
  ShoppingBag,
  Users,
  Handshake,
} from "lucide-react";

const PILLARS = [
  {
    id: "running",
    title: "Running",
    icon: Calendar,
    description:
      "Running is the entry point. It brings people together consistently in the same place, at the same time, under shared standards. Saturday runs and Long Run Sundays are the spine of the community. They build consistency, resilience, and accountability.",
    link: "/runs",
  },
  {
    id: "strength",
    title: "Strength",
    icon: Dumbbell,
    description:
      "Strength training is core to the system. Structured strength classes and performance sessions exist to support better movement, injury prevention, and long term physical confidence. We train to last.",
  },
  {
    id: "wellness",
    title: "Wellness",
    icon: Heart,
    description:
      "Wellness is part of the process. VSC® hosts wellness events, recovery sessions, breath work, education workshops, and community experiences designed to support sustainability, not burnout. Rest, recovery, and routine are treated as seriously as performance.",
  },
  {
    id: "events",
    title: "Events",
    icon: Sparkles,
    description:
      "VSC® builds culture through intentional events. From performance driven sessions to curated wellness gatherings, every activation supports the same goal: disciplined movement done together.",
  },
  {
    id: "product",
    title: "Product",
    icon: ShoppingBag,
    description:
      "Product within VSC® is not merchandise. It is equipment for participation. Everything created is designed to support showing up, training, and belonging to the system.",
    link: "/product",
  },
  {
    id: "membership",
    title: "Membership",
    icon: Users,
    description:
      "Join the structure. Access to programming, community sessions, and the full VSC® system.",
    link: "/membership",
  },
  {
    id: "partners",
    title: "Partners",
    icon: Handshake,
    description:
      "We collaborate with brands and businesses aligned with our values. Performance. Structure. Discipline.",
    link: "/partners",
  },
];

export default function StartHerePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="py-16 sm:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          {/* About Section */}
          <section className="mb-16">
            <h1 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              ABOUT VSC<sup className="text-[0.5em] ml-0.5">®</sup>
            </h1>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                VSC® is a performance led movement built on structure, discipline, and shared effort.
              </p>
              <p>
                Running is the entry point. It brings people together consistently in the same place, at the same time, under shared standards. Saturday runs and Long Run Sundays are the spine of the community. They build consistency, resilience, and accountability.
              </p>
              <p>
                But VSC® does not stop at running.
              </p>
              <p>
                Strength training is core to the system. Structured strength classes and performance sessions exist to support better movement, injury prevention, and long term physical confidence. We train to last.
              </p>
              <p>
                Wellness is part of the process. VSC® hosts wellness events, recovery sessions, breath work, education workshops, and community experiences designed to support sustainability, not burnout. Rest, recovery, and routine are treated as seriously as performance.
              </p>
              <p>
                VSC® also builds culture through intentional events. From performance driven sessions to curated wellness gatherings, every activation supports the same goal: disciplined movement done together.
              </p>
              <p>
                Product within VSC® is not merchandise. It is equipment for participation. Everything created is designed to support showing up, training, and belonging to the system.
              </p>
            </div>
          </section>

          {/* Standards */}
          <section className="mb-16 rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
              STANDARDS
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Everyone is welcome. Standards are non negotiable. Respect the space. Respect the timing. Respect the effort of others.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              VSC® is not built on hype. It is built on repetition.
            </p>
            <p className="mt-6 font-medium text-foreground">
              We build strong humans through disciplined movement, together.
            </p>
            <p className="mt-2 font-display text-lg tracking-wide text-foreground">
              Strength in numbers.
            </p>
          </section>

          {/* The System */}
          <section>
            <h2 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
              THE SYSTEM
            </h2>
            <p className="mt-3 text-muted-foreground">
              How we operate. What we offer. How to participate.
            </p>

            <div className="mt-8 space-y-4">
              {PILLARS.map(({ id, title, icon: Icon, description, link }) => (
                <article
                  key={id}
                  id={id}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-foreground/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                      <Icon className="size-4" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                      {link && (
                        <Link
                          href={link}
                          className="mt-3 inline-block text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                        >
                          Learn more →
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
