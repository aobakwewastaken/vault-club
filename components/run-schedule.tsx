import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { RUN_IMAGES } from "@/lib/asset-paths";

const UPCOMING_RUN = {
  date: "This Saturday",
  time: "Arrival from 06:00",
  title: "Community Run",
  location: "In collaboration with @thegrindza cafe",
  distance: "5K / 10K options",
  imageSrc: RUN_IMAGES.upcoming,
};

const PAST_RUN = {
  title: "Sunday Long Runs",
  caption: "As the community grows and gets stronger, we raise the standard.",
  images: RUN_IMAGES.past,
};

export function RunSchedule() {
  return (
    <section id="runs" className="border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
          UPCOMING RUNS
        </h2>
        <p className="mt-3 text-muted-foreground mb-12 max-w-xl">
          Structured weekly sessions. Show up ready.
        </p>

        {/* Upcoming: This Saturday */}
        <article className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm transition-all hover:shadow-md hover:border-foreground/20">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[240px]">
              <Image
                src={UPCOMING_RUN.imageSrc}
                alt={UPCOMING_RUN.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                <span>{UPCOMING_RUN.date}</span>
                <span>·</span>
                <span>{UPCOMING_RUN.time}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{UPCOMING_RUN.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5 shrink-0" />
                {UPCOMING_RUN.location}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">{UPCOMING_RUN.distance}</p>
            </div>
          </div>
        </article>

        {/* Past run: Last Saturday / Sunday Long Runs */}
        <div className="mt-16">
          <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
            PAST RUN
          </h3>
          <p className="mt-2 text-muted-foreground mb-6">{PAST_RUN.caption}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PAST_RUN.images.map((src, i) => (
              <li
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted"
              >
                <Image
                  src={src}
                  alt={`${PAST_RUN.title} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
