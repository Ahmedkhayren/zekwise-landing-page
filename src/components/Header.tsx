"use client";

import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Business Types", href: "#business-types" },
  { label: "Early Access", href: "#pricing" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Zekwise home">
          <span className="grid size-9 place-items-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-200">
            <ShieldCheck className="size-5" />
          </span>
          <span className="text-xl font-extrabold tracking-normal text-slate-950">Zekwise</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 lg:inline-flex"
        >
          Request Early Access
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-50 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              Request Early Access
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
