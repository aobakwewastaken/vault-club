import { SiteHeader } from "@/components/site-header";
import { RunSchedule } from "@/components/run-schedule";
import { SiteFooter } from "@/components/site-footer";

export default function RunsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <main>
        <RunSchedule />
      </main>
      <SiteFooter variant="dark" />
    </div>
  );
}
