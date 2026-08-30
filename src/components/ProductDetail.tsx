import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ComplianceWorkspaceMockup } from "./ComplianceWorkspaceMockup";

const benefits = [
  "Know which documents are missing before a client or review follows up.",
  "Track approvals and responsibilities without chasing updates across channels.",
  "See upcoming compliance deadlines alongside the records they affect.",
];

export function ProductDetail() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:gap-12">
        <div className="max-w-xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-blue-600">Document control, made visible</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950 md:text-4xl">
            One clear place to see what needs attention
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Zekwise brings files, responsibilities, and review status into a shared workspace so teams can move work forward with context.
          </p>

          <ul className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-blue-600 transition hover:text-blue-700">
            Request Early Access
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="min-w-0 xl:pl-4">
          <div className="origin-center scale-[0.94] sm:scale-100">
            <ComplianceWorkspaceMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
