import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="py-16 sm:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            PARTNERSHIP ENQUIRIES
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            We collaborate with brands and businesses aligned with our values. Performance. Structure. Community.
          </p>
          <p className="mt-8 text-muted-foreground">
            For partnership enquiries, reach out via{" "}
            <a
              href="https://www.instagram.com/vault_strengthclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
