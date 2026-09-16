"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { roles } from "@/lib/content";

export function JoinLetter() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function seal(form: HTMLFormElement) {
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const payload = Object.fromEntries(new FormData(form).entries());
    const existing = JSON.parse(sessionStorage.getItem("bh-letters") || "[]");
    sessionStorage.setItem(
      "bh-letters",
      JSON.stringify([...existing, { ...payload, at: new Date().toISOString() }]),
    );
    setName(String(payload.name || ""));
    setSent(true);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    seal(e.currentTarget);
  }

  if (sent) {
    return (
      <div className="letter-sheet relative overflow-hidden px-8 py-20 text-center md:px-16">
        <motion.div
          className="wax-seal mx-auto mb-10 grid size-28 place-items-center rounded-full bg-gold text-brown-ink"
          initial={{ scale: 0.2, rotate: -28, y: -40, opacity: 0 }}
          animate={{ scale: 1, rotate: -8, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          <Image
            src="/brand/bina-horizon-mark.png"
            alt=""
            width={48}
            height={48}
            className="size-12 object-contain"
          />
        </motion.div>
        <p className="chapter">Sealed</p>
        <h2 className="mt-4 font-display text-4xl italic md:text-5xl">
          {name ? `${name.split(" ")[0]}, the line moved.` : "The line moved."}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-charcoal/75">
          Your letter lives on this device for now. When the association’s
          post is open, a coordinator will write back — as a person, not a
          ticket.
        </p>
      </div>
    );
  }

  return (
    <form
      action="#"
      method="post"
      onSubmit={onSubmit}
      className="letter-sheet relative z-10 overflow-hidden px-8 py-12 md:px-16 md:py-16"
    >
      <div className="letter-margin" aria-hidden />
      <p className="chapter">A letter of intent</p>
      <p className="mt-5 font-display text-4xl italic leading-tight md:text-5xl">
        Dear Bina Horizon,
      </p>
      <p className="mt-6 max-w-xl text-charcoal/75">
        Not an application. A letter. Write the way you would to a mentor who
        will still know your name in ten years.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">My name is</Label>
          <Input id="name" name="name" required placeholder="Full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="place">I write from</Label>
          <Input id="place" name="place" placeholder="City, country" />
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <Label htmlFor="role">I am writing as</Label>
        <select
          id="role"
          name="role"
          required
          className="h-12 w-full border-0 border-b border-copper/50 bg-transparent text-base focus-visible:border-gold focus-visible:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Choose a path
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 space-y-2">
        <Label htmlFor="letter">This is why I am writing</Label>
        <Textarea
          id="letter"
          name="letter"
          required
          placeholder="I want to join because…"
        />
      </div>

      <div className="mt-8 space-y-2">
        <Label htmlFor="contact">How we may reach you</Label>
        <Input
          id="contact"
          name="contact"
          type="email"
          required
          placeholder="Email address"
        />
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-sm text-sm text-copper">
          Sealing this letter is a quiet yes to the Five R’s.
        </p>
        <Button
          type="button"
          size="lg"
          id="seal-letter"
          className="btn-rise relative z-10 scroll-mt-28"
          onClick={(e) => {
            const form = e.currentTarget.closest("form");
            if (form instanceof HTMLFormElement) seal(form);
          }}
        >
          Seal the letter
        </Button>
      </div>
    </form>
  );
}
