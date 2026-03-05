import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="flex h-16 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/vsc-logo-text-black.png"
            alt="VSC"
            width={160}
            height={90}
            unoptimized
            className="h-9 w-auto rounded-lg md:h-10"
          />
        </Link>
        <nav className="flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
          <Link href="/start-here" className="transition-colors hover:text-white">
            System
          </Link>
          <Link href="/runs" className="transition-colors hover:text-white">
            Runs
          </Link>
          <Link href="/membership" className="transition-colors hover:text-white">
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
