import { ShieldCheck } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Business Types", href: "#business-types" },
  { label: "Pricing", href: "#pricing" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg bg-blue-600 text-white">
              <ShieldCheck className="size-5" />
            </span>
            <span className="text-xl font-extrabold text-slate-950">Zekwise</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            AI Document &amp; Compliance Workspace for document-heavy small businesses.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-600">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Zekwise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
