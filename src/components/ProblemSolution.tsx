import { CheckCircle2, Store } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 rounded-xl border border-blue-100 bg-slate-50 p-5 shadow-sm md:grid-cols-2 md:p-6">
        <div className="flex gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-100">
            <Store className="size-6" />
          </span>
          <div>
            <h2 className="text-sm font-extrabold text-blue-700">The Problem</h2>
            <p className="mt-1.5 text-sm leading-6 text-slate-700 md:text-base">
              Businesses manage files across email, WhatsApp, folders, and spreadsheets. This leads
              to chaos, delays, missed deadlines, and compliance risks.
            </p>
          </div>
        </div>

        <div className="flex gap-4 border-t border-blue-100 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-emerald-500 text-white shadow-md shadow-emerald-100">
            <CheckCircle2 className="size-6" />
          </span>
          <div>
            <h2 className="text-sm font-extrabold text-emerald-700">The Solution</h2>
            <p className="mt-1.5 text-sm leading-6 text-slate-700 md:text-base">
              Zekwise centralizes documents, automates compliance checks, streamlines approvals, and
              gives complete visibility and control in one secure workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
