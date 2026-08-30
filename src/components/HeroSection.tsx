import { ArrowRight, BadgeCheck, CalendarDays, ClipboardCheck, ShieldCheck } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

const trustItems = [
  { label: "Compliance workflows", icon: ShieldCheck },
  { label: "Role-aware access", icon: ClipboardCheck },
  { label: "Activity visibility", icon: BadgeCheck },
];

export function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-slate-100 bg-gradient-to-b from-white to-slate-50/60">
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 px-5 py-12 lg:px-6 lg:py-14 xl:grid-cols-[minmax(0,0.47fr)_minmax(620px,0.53fr)] xl:gap-14 xl:px-8 xl:py-16 2xl:px-0">
        <div className="max-w-[580px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
            <BadgeCheck className="size-4" />
            AI-powered document control
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-normal text-slate-950 sm:text-5xl xl:text-[48px]">
            Document Control for Compliance-Driven Teams
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Organize documents, track compliance requirements, manage approvals, and keep important
            deadlines visible in one shared workspace.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
            >
              Request Early Access
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-blue-600 bg-white px-6 py-3.5 text-base font-bold text-blue-700 transition hover:bg-blue-50"
            >
              View Demo
              <CalendarDays className="size-5" />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-600">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                  <item.icon className="size-4" />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 justify-center xl:justify-start">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
