import { ArrowRight, BadgeCheck, CalendarDays, LockKeyhole, ShieldCheck, Target } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

const trustItems = [
  { label: "Built for Compliance", icon: ShieldCheck },
  { label: "Bank-Grade Security", icon: LockKeyhole },
  { label: "ISO 27001 Aligned", icon: Target },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            <BadgeCheck className="size-4" />
            AI-Powered. Secure. Built for Small Businesses.
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-normal text-slate-950 md:text-5xl lg:text-6xl">
            AI Document &amp; Compliance Workspace for Document-Heavy Small Businesses
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Manage documents, compliance files, approvals, AI checks, audit trails, tasks, and simple
            finance reports in one secure workspace.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
            >
              Request Early Access
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-blue-600 px-7 py-4 text-base font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Book a Demo
              <CalendarDays className="size-5" />
            </a>
          </div>

          <div className="mt-8 grid gap-4 text-sm font-medium text-slate-600 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <item.icon className="size-4" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}
