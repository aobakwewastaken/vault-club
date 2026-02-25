import Image from "next/image";
import { COMMUNITY_PHOTOS } from "@/lib/asset-paths";

export function CommunityPhotos() {
  return (
    <section id="community" className="border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
          COMMUNITY PHOTOS
        </h2>
        <p className="mt-3 text-muted-foreground mb-12 max-w-xl">
          Showing up for something bigger. Every run, every Saturday.
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {COMMUNITY_PHOTOS.map((src, i) => (
            <li key={i} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={src}
                alt={`Community run ${i + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
