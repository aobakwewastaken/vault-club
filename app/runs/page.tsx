import { SiteHeader } from "@/components/site-header";
import { RunSchedule } from "@/components/run-schedule";
import { SiteFooter } from "@/components/site-footer";

export default function RunsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <RunSchedule />
      </main>
      <SiteFooter />
    </div>
  );
}
