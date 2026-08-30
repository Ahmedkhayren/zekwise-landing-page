import { Archive, ClipboardList, Eye, FileDown, History, KeyRound } from "lucide-react";

const securityItems = [
  { title: "Role-based access", icon: KeyRound },
  { title: "Audit logs", icon: ClipboardList },
  { title: "Secure document storage", icon: Archive },
  { title: "Approval history", icon: History },
  { title: "Data visibility control", icon: Eye },
  { title: "Exportable reports", icon: FileDown },
];

export function SecuritySection() {
  return (
    <section id="security" className="bg-slate-950 px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-300">Security</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal md:text-4xl">
            Built for sensitive business documents
          </h2>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <span className="grid size-12 place-items-center rounded-lg bg-emerald-400/15 text-emerald-300">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Designed to help teams protect records, prove accountability, and control access.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
