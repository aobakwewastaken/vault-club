import { SiteHeader } from "@/components/site-header";
import { CommunityPhotos } from "@/components/community-photos";
import { SiteFooter } from "@/components/site-footer";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <CommunityPhotos />
      </main>
      <SiteFooter />
    </div>
  );
}
