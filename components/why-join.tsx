import { Users, Zap, Heart } from "lucide-react";

const REASONS = [
  {
    icon: Users,
    title: "All paces welcome",
    copy: "First 5K or chasing a PB—we run together and nobody gets left behind.",
  },
  {
    icon: Zap,
    title: "Weekly meetups",
    copy: "Morning 5Ks, evening tempos, long runs. Pick your vibe and show up.",
  },
  {
    icon: Heart,
    title: "Real community",
    copy: "Not just a run—coffee after, group chats, and people who actually show up.",
  },
];

export function WhyJoin() {
  return (
    <section id="why" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl md:text-5xl">
          WHY RUN WITH US?
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground text-lg">
          Because running solo is fine—but running with the crew hits different.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, copy }) => (
            <li
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-foreground/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-muted-foreground">{copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
