"use client";

import Image from "next/image";
import { HERO_IMAGES } from "@/lib/asset-paths";

export function HeroStatement() {
  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Full-bleed background image with grayscale */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGES[0]}
          alt="VSC runners"
          fill
          priority
          className="object-cover object-center grayscale contrast-125"
        />
        {/* Hard gradient from bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content - positioned at bottom left */}
      <div className="relative z-10 w-full px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-24">
        <h1 className="font-display text-[15vw] leading-[0.85] tracking-tight text-white md:text-[12vw] lg:text-[10vw]">
          STRENGTH
          <br />
          IN NUMBERS
        </h1>
        <p className="mt-6 max-w-md text-sm uppercase tracking-[0.25em] text-white/70 md:text-base">
          Every Saturday. All paces. No excuses.
        </p>
      </div>

      {/* Logo mark - top left */}
      <div className="absolute left-6 top-6 z-10 md:left-12 md:top-12">
        <div className="relative h-14 w-14 overflow-hidden rounded-full md:h-16 md:w-16">
          <Image
            src="/logo/vsc-logo-text-black.png"
            alt="VSC"
            width={400}
            height={227}
            unoptimized
            className="absolute left-1/2 h-auto w-[180%] max-w-none -translate-x-1/2"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 z-10 md:bottom-12 md:right-12">
        <span className="text-xs uppercase tracking-[0.3em] text-white/50">
          Scroll
        </span>
      </div>
    </section>
  );
}
