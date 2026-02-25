import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-6xl items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/vault-DKm1acu3.svg"
            alt=""
            width={36}
            height={36}
            className="shrink-0"
          />
          <span className="font-display text-xl tracking-wide text-foreground sm:text-2xl">
            VAULT STRENGTH CLUB
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/runs" className="transition-colors hover:text-foreground">
            Runs
          </Link>
          <Link href="/community" className="transition-colors hover:text-foreground">
            Community
          </Link>
          <Link href="/#newsletter" className="transition-colors hover:text-foreground">
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
