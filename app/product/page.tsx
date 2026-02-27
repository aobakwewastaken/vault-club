import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Dumbbell, Footprints, Heart, Package } from "lucide-react";

const CATEGORIES = [
  {
    title: "Run",
    icon: Footprints,
    description: "Gear for Saturday runs and long run Sundays.",
  },
  {
    title: "Strength",
    icon: Dumbbell,
    description: "Equipment and apparel for strength sessions.",
  },
  {
    title: "Recovery",
    icon: Heart,
    description: "Tools to support rest and regeneration.",
  },
  {
    title: "Essentials",
    icon: Package,
    description: "Core items for showing up ready.",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="py-16 sm:py-24">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            PRODUCT
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Product within VSC® is not merchandise. It is equipment for participation. Everything created is designed to support showing up, training, and belonging to the system.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {CATEGORIES.map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-foreground">
                  {title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
                <p className="mt-4 text-xs text-muted-foreground/60">
                  Coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
