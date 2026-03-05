import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/vault_strengthclub/", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com/@vaultstrengthclub", icon: Youtube },
];

interface SiteFooterProps {
  variant?: "light" | "dark";
}

export function SiteFooter({ variant = "light" }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const isDark = variant === "dark";

  return (
    <footer
      className={`border-t px-6 py-12 md:px-12 ${
        isDark
          ? "border-white/10 bg-black text-white"
          : "border-black/10 bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src={isDark ? "/logo/vsc-logo-text-black.png" : "/logo/vsc-logo-white.png"}
            alt="VSC"
            width={140}
            height={80}
            unoptimized
            className="h-8 w-auto rounded-lg"
          />
          <p
            className={`text-xs uppercase tracking-[0.2em] ${
              isDark ? "text-white/50" : "text-black/50"
            }`}
          >
            © {year}
          </p>
        </div>
        <nav className="flex items-center gap-6" aria-label="Social media">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark
                  ? "text-white/40 hover:text-white"
                  : "text-black/40 hover:text-black"
              }`}
              aria-label={label}
            >
              <Icon className="size-5" />
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
