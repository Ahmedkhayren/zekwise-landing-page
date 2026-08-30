import { ArrowRight, BriefcaseBusiness, Calculator, Globe2, Plane, UsersRound } from "lucide-react";

const businessTypes = [
  {
    title: "Visa Agencies",
    pain: "Scattered applicant files cause delays and rework.",
    icon: Plane,
    accent: "text-violet-700 bg-violet-50 border-violet-100",
  },
  {
    title: "Recruitment Agencies",
    pain: "Candidate documents are hard to track and verify.",
    icon: UsersRound,
    accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Accounting Firms",
    pain: "Client files and compliance deadlines are complex.",
    icon: Calculator,
    accent: "text-blue-700 bg-blue-50 border-blue-100",
  },
  {
    title: "Import / Export SMEs",
    pain: "Trade documents and licenses are time-sensitive.",
    icon: Globe2,
    accent: "text-orange-700 bg-orange-50 border-orange-100",
  },
  {
    title: "Consulting Companies",
    pain: "Project documents and approvals are scattered.",
    icon: BriefcaseBusiness,
    accent: "text-cyan-700 bg-cyan-50 border-cyan-100",
  },
];

export function BusinessTypes() {
  return (
    <section id="business-types" className="bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-extrabold text-slate-950 md:text-3xl">
          Built for 5 high-pain business types
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {businessTypes.map((type) => (
            <article key={type.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100">
              <span className={`mb-5 grid size-14 place-items-center rounded-lg border ${type.accent}`}>
                <type.icon className="size-7" />
              </span>
              <h3 className="font-extrabold text-slate-950">{type.title}</h3>
              <p className="mt-2 min-h-14 text-sm leading-6 text-slate-600">{type.pain}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
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
