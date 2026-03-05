import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="flex min-h-[70vh] flex-col justify-end px-6 pb-20 pt-24 md:px-12 lg:px-20">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Join the structure
          </span>
          <h1 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
            MEMBERSHIP
          </h1>
          <p className="mt-8 max-w-lg text-lg text-white/60">
            Access to programming, community sessions, and the full VSC® system.
          </p>
        </section>

        {/* Coming Soon */}
        <section className="border-t border-white/10 bg-white px-6 py-24 text-black md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl">COMING SOON</h2>
            <p className="mt-6 text-lg text-black/60">
              We&apos;re building something intentional. Sign up to be first in line.
            </p>
            <Link
              href="/#newsletter"
              className="mt-8 inline-block border-2 border-black bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-transparent hover:text-black"
            >
              Get Notified
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
