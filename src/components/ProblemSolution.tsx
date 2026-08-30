import { CheckCircle2, Store } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="bg-white px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 rounded-lg border border-blue-100 bg-slate-50 p-5 shadow-sm md:grid-cols-2 md:p-7">
        <div className="flex gap-5">
          <span className="grid size-14 shrink-0 place-items-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-100">
            <Store className="size-7" />
          </span>
          <div>
            <h2 className="text-sm font-extrabold text-blue-700">The Problem</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Businesses manage files across email, WhatsApp, folders, and spreadsheets. This leads
              to chaos, delays, missed deadlines, and compliance risks.
            </p>
          </div>
        </div>

        <div className="flex gap-5 border-t border-blue-100 pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
          <span className="grid size-14 shrink-0 place-items-center rounded-lg bg-emerald-500 text-white shadow-lg shadow-emerald-100">
            <CheckCircle2 className="size-7" />
          </span>
          <div>
            <h2 className="text-sm font-extrabold text-emerald-700">The Solution</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Zekwise centralizes documents, automates compliance checks, streamlines approvals, and
              gives complete visibility and control in one secure workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
