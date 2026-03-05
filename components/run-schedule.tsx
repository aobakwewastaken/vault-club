import Image from "next/image";
import { RUN_IMAGES } from "@/lib/asset-paths";

const UPCOMING_RUN = {
  date: "THIS SATURDAY",
  time: "06:00",
  title: "COMMUNITY RUN",
  location: "@thegrindza cafe",
  distance: "5K / 10K",
  imageSrc: RUN_IMAGES.upcoming,
};

const PAST_RUN = {
  title: "SUNDAY LONG RUNS",
  images: RUN_IMAGES.past,
};

export function RunSchedule() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-8 pt-24 md:px-12 md:pt-32 lg:px-20">
        <h1 className="font-display text-6xl leading-[0.9] md:text-8xl">
          RUNS
        </h1>
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/50">
          Show up. Every week.
        </p>
      </section>

      {/* Upcoming Run */}
      <section id="runs" className="px-6 py-12 md:px-12 lg:px-20">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
          Next up
        </span>
        <article className="mt-6 grid gap-0 overflow-hidden border border-white/10 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
            <Image
              src={UPCOMING_RUN.imageSrc}
              alt={UPCOMING_RUN.title}
              fill
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-white/5 p-8 md:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
              {UPCOMING_RUN.date} · {UPCOMING_RUN.time}
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              {UPCOMING_RUN.title}
            </h2>
            <p className="mt-4 text-sm text-white/60">{UPCOMING_RUN.location}</p>
            <p className="mt-2 text-lg font-semibold">{UPCOMING_RUN.distance}</p>
          </div>
        </article>
      </section>

      {/* Long Runs */}
      <section id="long-runs" className="border-t border-white/10 px-6 py-20 md:px-12 lg:px-20">
        <h2 className="font-display text-4xl md:text-5xl">{PAST_RUN.title}</h2>
        <p className="mt-4 text-sm text-white/50">
          As the community grows, we raise the standard.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {PAST_RUN.images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={src}
                alt={`${PAST_RUN.title} ${i + 1}`}
                fill
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
