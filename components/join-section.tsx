"use client";

import { useState } from "react";
import Link from "next/link";

export function JoinSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="max-w-4xl">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/50">
          The Vault Report
        </span>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] text-black md:text-7xl">
          STAY IN
          <br />
          THE LOOP.
        </h2>
        <p className="mt-6 max-w-md text-base text-black/60">
          Weekly runs. Community updates. No spam.
        </p>

        {status === "success" ? (
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-black">
            You&apos;re in.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex max-w-md gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 border-2 border-black bg-transparent px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="border-2 border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:bg-transparent hover:text-black disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Join"}
            </button>
          </form>
        )}

        {/* Quick links */}
        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-8">
          <Link
            href="/runs"
            className="text-sm font-medium uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-black"
          >
            Runs
          </Link>
          <Link
            href="/membership"
            className="text-sm font-medium uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-black"
          >
            Membership
          </Link>
          <Link
            href="/start-here"
            className="text-sm font-medium uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-black"
          >
            Start Here
          </Link>
          <Link
            href="/partners"
            className="text-sm font-medium uppercase tracking-[0.15em] text-black/60 transition-colors hover:text-black"
          >
            Partners
          </Link>
        </div>
      </div>
    </section>
  );
}
