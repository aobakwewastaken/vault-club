import Image from "next/image";
import { HERO_IMAGES } from "@/lib/asset-paths";

export function GalleryStrip() {
  // Use a subset of hero images for the strip
  const images = HERO_IMAGES.slice(1, 5);

  return (
    <section className="bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`VSC community ${i + 1}`}
              fill
              className="object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
