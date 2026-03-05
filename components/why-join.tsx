import { Users, Zap, Heart } from "lucide-react";

const REASONS = [
  {
    icon: Users,
    title: "ALL PACES. NO HIERARCHY.",
    copy: "First 5K or chasing a PB — you belong on the start line.",
  },
  {
    icon: Zap,
    title: "SATURDAYS ON LOCK.",
    copy: "Weekly runs that actually happen. Tempo, long, shake-out — we move together.",
  },
  {
    icon: Heart,
    title: "MORE THAN A RUN.",
    copy: "Coffee after. Group chats. People who show up when it counts.",
  },
];

export function WhyJoin() {
  return (
    <section id="why" className="border-t border-border bg-black py-16 sm:py-20 text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl tracking-wide sm:text-4xl md:text-5xl">
          WHY VAULT?
        </h2>
        <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.22em] text-white/60">
          STRENGTH IN NUMBERS. STANDARD OVER COMFORT.
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, copy }) => (
            <li
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition-all hover:bg-white/10 hover:border-white/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold tracking-wide text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-white/80">{copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
