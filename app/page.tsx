import { SiteHeader } from "@/components/site-header";
import { HeroVideo } from "@/components/hero-video";
import { WhyJoin } from "@/components/why-join";
import { CommunityCta } from "@/components/community-cta";
import { MockNewsletter } from "@/components/mock-newsletter";
import { Newsletter } from "@/components/newsletter";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroVideo />
        <WhyJoin />
        <CommunityCta />
        <MockNewsletter />
        <Newsletter />
        <SiteFooter />
      </main>
    </div>
  );
}
