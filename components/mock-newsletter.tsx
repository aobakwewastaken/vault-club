import { Mail } from "lucide-react";

const MOCK_ISSUE = {
  title: "No risk, no story 🔐🖤",
  date: "This week",
  preview:
    "Every Saturday, community moving as one. It's about commitment and consistency. Here's what's coming up: This Saturday we're teaming up with @thegrindza — arrival from 06:00, all runners welcome. Sunday Long Runs are here; as we grow, we raise the standard. See you on the road.",
  cta: "Subscribe below to get the next one in your inbox.",
};

export function MockNewsletter() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
          LATEST FROM THE VAULT
        </h2>
        <p className="mt-3 text-muted-foreground mb-8 max-w-xl">
          A peek at what we send to the list. Demo only—subscribe to get the real thing.
        </p>
        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
              <Mail className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground">{MOCK_ISSUE.date}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{MOCK_ISSUE.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{MOCK_ISSUE.preview}</p>
              <p className="mt-4 text-sm font-medium text-foreground">{MOCK_ISSUE.cta}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
