import {
  BellRing,
  Bot,
  ClipboardCheck,
  FileBadge,
  FolderOpen,
  GitBranch,
  ListTodo,
  ReceiptText,
} from "lucide-react";

const features = [
  {
    title: "Document Workspace",
    description: "Centralize, store, and organize all your business documents securely.",
    icon: FolderOpen,
    accent: "text-blue-700 bg-blue-50",
  },
  {
    title: "Compliance Files",
    description: "Manage licenses, certificates, KYC, tax, and regulatory documents.",
    icon: FileBadge,
    accent: "text-emerald-700 bg-emerald-50",
  },
  {
    title: "Business-Type Workflows",
    description: "Pre-built workflows tailored to your industry and compliance needs.",
    icon: GitBranch,
    accent: "text-violet-700 bg-violet-50",
  },
  {
    title: "AI Document Checks",
    description: "AI scans documents for missing data, risks, and compliance issues.",
    icon: Bot,
    accent: "text-cyan-700 bg-cyan-50",
  },
  {
    title: "Approvals",
    description: "Multi-level approvals with role-based access and clear ownership.",
    icon: ClipboardCheck,
    accent: "text-orange-700 bg-orange-50",
  },
  {
    title: "Audit Trail",
    description: "Complete activity logs for transparency and accountability.",
    icon: BellRing,
    accent: "text-sky-700 bg-sky-50",
  },
  {
    title: "Tasks & Reminders",
    description: "Assign tasks, set reminders, and never miss a deadline.",
    icon: ListTodo,
    accent: "text-emerald-700 bg-emerald-50",
  },
  {
    title: "Basic Finance Reports",
    description: "Track invoices, payments, dues, and simple reports in one place.",
    icon: ReceiptText,
    accent: "text-indigo-700 bg-indigo-50",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-50 px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-extrabold text-slate-950 md:text-3xl">
          Everything you need in one workspace
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <span className={`grid size-12 place-items-center rounded-lg ${feature.accent}`}>
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-extrabold text-slate-950">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
