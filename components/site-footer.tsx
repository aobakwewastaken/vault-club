import Link from "next/link";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} Vault Strength Club · All paces welcome.
          </p>
          <nav className="flex items-center gap-5" aria-label="Social media">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={label}
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
