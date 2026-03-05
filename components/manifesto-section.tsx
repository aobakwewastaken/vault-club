import Link from "next/link";

export function ManifestoSection() {
  return (
    <section className="bg-black px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="max-w-4xl">
        <h2 className="font-display text-5xl leading-[0.95] text-white md:text-7xl lg:text-8xl">
          THIS IS NOT
          <br />
          A JOG.
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
          We don&apos;t do casual. We do commitment, consistency, and crews that
          pull you forward. Standard over comfort.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/runs"
            className="inline-block border-2 border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all hover:bg-transparent hover:text-white"
          >
            Join a Run
          </Link>
          <Link
            href="/start-here"
            className="inline-block border-2 border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
