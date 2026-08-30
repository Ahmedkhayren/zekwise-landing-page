import {
  BellRing,
  Bot,
  ClipboardCheck,
  FileBadge,
  FolderOpen,
  ListTodo,
} from "lucide-react";

const features = [
  {
    title: "Document Workspace",
    description: "Centralize, store, and organize business documents securely.",
    icon: FolderOpen,
    accent: "text-blue-700 bg-blue-50",
  },
  {
    title: "Compliance Files",
    description: "Manage licenses, certificates, KYC, tax, and regulatory files.",
    icon: FileBadge,
    accent: "text-emerald-700 bg-emerald-50",
  },
  {
    title: "AI Document Checks",
    description: "Scan files for missing data, risks, and compliance issues.",
    icon: Bot,
    accent: "text-cyan-700 bg-cyan-50",
  },
  {
    title: "Approvals",
    description: "Route approvals with role-based access and clear ownership.",
    icon: ClipboardCheck,
    accent: "text-orange-700 bg-orange-50",
  },
  {
    title: "Audit Trail",
    description: "Track activity history for transparency and accountability.",
    icon: BellRing,
    accent: "text-sky-700 bg-sky-50",
  },
  {
    title: "Tasks & Reminders",
    description: "Assign tasks, set reminders, and stay ahead of deadlines.",
    icon: ListTodo,
    accent: "text-emerald-700 bg-emerald-50",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-50 px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-extrabold text-slate-950 md:text-3xl">
          Everything you need in one workspace
        </h2>

        <div className="mx-auto mt-8 grid max-w-6xl items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className={`grid size-11 place-items-center rounded-lg ${feature.accent}`}>
                <feature.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-extrabold text-slate-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
