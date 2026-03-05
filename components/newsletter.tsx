"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    // Replace with your newsletter API (e.g. Resend, Mailchimp, ConvertKit)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  }

  return (
    <section id="newsletter" className="border-t border-border bg-black py-16 sm:py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-xl text-center text-white">
          <h2 className="font-display text-3xl tracking-wide sm:text-4xl">
            GET THE NEXT DROP
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/60">
            RUN REPORTS. ROUTES. RACE CALLS.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="flex-1 bg-black border-white/30 text-white placeholder:text-white/40"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-full bg-white text-black hover:bg-white/90"
            >
              {status === "loading"
                ? "Joining…"
                : status === "success"
                ? "You’re in"
                : "Join the list"}
            </Button>
          </form>
          {status === "success" && (
            <p className="mt-2 text-sm text-white/70">
              See you in the next send. No spam, just miles.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
