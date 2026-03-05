import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="flex min-h-[70vh] flex-col justify-end px-6 pb-20 pt-24 md:px-12 lg:px-20">
          <h1 className="font-display text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
            PARTNERS
          </h1>
          <p className="mt-8 max-w-lg text-lg text-white/60">
            We collaborate with brands aligned with our values. Performance.
            Structure. Discipline.
          </p>
        </section>

        {/* Contact */}
        <section className="border-t border-white/10 bg-white px-6 py-24 text-black md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/40">
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              LET&apos;S TALK
            </h2>
            <p className="mt-6 text-lg text-black/60">
              For partnership enquiries, reach out via Instagram.
            </p>
            <a
              href="https://www.instagram.com/vault_strengthclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-2 border-black bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-transparent hover:text-black"
            >
              @vault_strengthclub
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
