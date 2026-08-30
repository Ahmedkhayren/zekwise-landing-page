import { Archive, ClipboardList, Eye, FileDown, History, KeyRound } from "lucide-react";

const securityItems = [
  {
    title: "Role-based access",
    description: "Control who can view, edit, approve, or manage sensitive records.",
    icon: KeyRound,
  },
  {
    title: "Audit logs",
    description: "Keep a traceable history of important document and workflow activity.",
    icon: ClipboardList,
  },
  {
    title: "Secure document storage",
    description: "Keep business records organized in a controlled workspace.",
    icon: Archive,
  },
  {
    title: "Approval history",
    description: "See who approved a record and when the decision was made.",
    icon: History,
  },
  {
    title: "Data visibility control",
    description: "Restrict sensitive information based on user responsibility.",
    icon: Eye,
  },
  {
    title: "Exportable reports",
    description: "Generate structured records for reviews and internal reporting.",
    icon: FileDown,
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="bg-gradient-to-b from-slate-50 to-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-700">Security</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 md:text-4xl">
            Built for sensitive business documents
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Practical controls for small businesses that need trustworthy document operations without enterprise complexity.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="grid size-11 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
