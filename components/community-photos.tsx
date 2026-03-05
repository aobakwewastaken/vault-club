import Image from "next/image";
import { COMMUNITY_PHOTOS } from "@/lib/asset-paths";

export function CommunityPhotos() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pb-8 pt-24 md:px-12 md:pt-32 lg:px-20">
        <h1 className="font-display text-6xl leading-[0.9] md:text-8xl">
          COMMUNITY
        </h1>
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/50">
          This was never just about a run.
        </p>
      </section>

      {/* Photo Grid */}
      <section id="community" className="px-6 pb-20 pt-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          {COMMUNITY_PHOTOS.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={src}
                alt={`Community ${i + 1}`}
                fill
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
