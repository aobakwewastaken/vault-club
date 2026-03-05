"use client";

const MARQUEE_TEXT = "VSC® — PERFORMANCE LED MOVEMENT — RUNNING IS THE ENTRY POINT — STRENGTH IS THE FOUNDATION — BUILT ON STRUCTURE — ";

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80"
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
