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
    <section id="newsletter" className="border-t border-border bg-background py-20 sm:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl tracking-wide text-foreground sm:text-4xl">
            STAY IN THE LOOP
          </h2>
          <p className="mt-3 text-muted-foreground">
            Run reminders, club news, and good vibes—straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-2">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="flex-1 bg-background"
            />
            <Button type="submit" disabled={status === "loading"} className="shrink-0">
              {status === "loading" ? "Subscribing…" : status === "success" ? "Subscribed" : "Subscribe"}
            </Button>
          </form>
          {status === "success" && (
            <p className="mt-2 text-sm text-muted-foreground">
              Thanks for subscribing. We&apos;ll be in touch.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
