import { HeroStatement } from "@/components/hero-statement";
import { Marquee } from "@/components/marquee";
import { ManifestoSection } from "@/components/manifesto-section";
import { GalleryStrip } from "@/components/gallery-strip";
import { JoinSection } from "@/components/join-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroStatement />
      <Marquee />
      <ManifestoSection />
      <GalleryStrip />
      <JoinSection />
      <SiteFooter />
    </main>
  );
}
