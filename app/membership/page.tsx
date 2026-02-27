import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="py-16 sm:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            MEMBERSHIP
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Join the structure. Coming soon.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
