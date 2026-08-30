import { ArrowRight, BriefcaseBusiness, Calculator, Plane } from "lucide-react";

const businessTypes = [
  {
    title: "Visa & Immigration Agencies",
    pain: "Keep applicant passports, supporting evidence, expiry dates, and case progress together.",
    icon: Plane,
    accent: "text-violet-700 bg-violet-50 border-violet-100",
  },
  {
    title: "Accounting Firms",
    pain: "See which client records, tax documents, and review tasks still need attention.",
    icon: Calculator,
    accent: "text-blue-700 bg-blue-50 border-blue-100",
  },
  {
    title: "Consulting Firms",
    pain: "Bring client deliverables, approvals, and sensitive project records into one process.",
    icon: BriefcaseBusiness,
    accent: "text-cyan-700 bg-cyan-50 border-cyan-100",
  },
];

export function BusinessTypes() {
  return (
    <section id="business-types" className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-extrabold text-slate-950 md:text-3xl">
          Built for document-heavy service teams
        </h2>

        <div className="mx-auto mt-8 grid max-w-5xl items-stretch gap-5 md:grid-cols-3">
          {businessTypes.map((type) => (
            <article
              key={type.title}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-100"
            >
              <span className={`mb-4 grid size-12 place-items-center rounded-lg border ${type.accent}`}>
                <type.icon className="size-6" />
              </span>
              <h3 className="font-extrabold text-slate-950">{type.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{type.pain}</p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                See workflow
                <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
