"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { HERO_IMAGES } from "@/lib/asset-paths";

export function HeroVideo() {
  const primaryHero = HERO_IMAGES[0];

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-neutral-900">
      {/* Hero photo background */}
      <div
        className="absolute inset-0 hero-bg-in"
        style={{
          backgroundImage: `url(${primaryHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Hard gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center">
        <Image
          src="/vault-DKm1acu3.svg"
          alt="Vault Strength Club"
          width={120}
          height={120}
          className="mb-6 h-20 w-20 shrink-0 invert sm:h-24 sm:w-24 md:h-28 md:w-28 animate-in fade-in zoom-in duration-500 delay-150"
        />
        <h1 className="font-display text-5xl tracking-tight text-white drop-shadow-xl sm:text-6xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-600 delay-250">
          STRENGTH IN NUMBERS
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/85 sm:text-xl md:mt-6 animate-in fade-in duration-500 delay-300">
          Every Saturday. All paces. No excuses.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-black hover:bg-white/90"
          >
            <Link href="/runs">Join the next run</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/#newsletter">Get the newsletter</Link>
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#why"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition hover:text-white animate-in fade-in duration-700 delay-700"
        aria-label="Scroll down"
      >
        <ChevronDown className="size-8 animate-bounce" />
      </a>
    </section>
  );
}
