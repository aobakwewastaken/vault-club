import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Calendar,
  Sun,
  Users,
  ShoppingBag,
  Handshake,
  Youtube,
} from "lucide-react";

const LINKS = [
  {
    label: "Start Here",
    href: "/start-here",
    icon: Play,
  },
  {
    label: "Upcoming Runs",
    href: "/runs",
    icon: Calendar,
  },
  {
    label: "Long Run Sundays",
    href: "/runs#long-runs",
    icon: Sun,
  },
  {
    label: "Membership",
    href: "/membership",
    icon: Users,
  },
  {
    label: "Product",
    href: "/product",
    icon: ShoppingBag,
  },
  {
    label: "Partnership Enquiries",
    href: "/partners",
    icon: Handshake,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@vaultstrengthclub",
    icon: Youtube,
    external: true,
  },
];

export function LinkHub() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/vault-DKm1acu3.svg"
            alt="VSC"
            width={80}
            height={80}
            className="h-20 w-20"
          />
        </div>

        {/* Bio */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-2xl tracking-wide text-black">
            VSC<sup className="text-[0.5em] ml-0.5">®</sup>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            Performance led movement.
            <br />
            Running is the entry point. Strength is the foundation.
            <br />
            Built on structure. 🖤
          </p>
          <p className="mt-3 text-xs font-medium tracking-wide text-neutral-500">
            Strength in numbers.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-3">
          {LINKS.map(({ label, href, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-5 py-4 text-sm font-medium text-black transition-all hover:border-black hover:bg-neutral-50"
            >
              <span>{label}</span>
              <Icon className="size-4 text-neutral-400 transition-colors group-hover:text-black" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
