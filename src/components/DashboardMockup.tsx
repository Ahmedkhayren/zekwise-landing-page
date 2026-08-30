import {
  AlertTriangle,
  BarChart3,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  FolderKanban,
  Gauge,
  LayoutDashboard,
  ListChecks,
  Search,
  Settings,
  WalletCards,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Documents", icon: FileText },
  { label: "Compliance", icon: ShieldMini },
  { label: "Approvals", icon: ClipboardCheck },
  { label: "Tasks", icon: ListChecks },
  { label: "Finance", icon: WalletCards },
  { label: "Reports", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const stats = [
  { label: "Total Documents", value: "1,248", note: "+12%", icon: FolderKanban, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Compliance Health", value: "82%", note: "+6%", icon: Gauge, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Pending Approvals", value: "23", note: "5 urgent", icon: Clock3, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Tasks Due", value: "18", note: "2 overdue", icon: ListChecks, color: "text-indigo-600", bg: "bg-indigo-50" },
];

const warnings = [
  "Missing expiry date in 7 documents",
  "Inconsistent data in 3 files",
  "Unsigned document detected",
];

const tasks = [
  { label: "Review client KYC file", due: "Today" },
  { label: "Upload bank statement", due: "May 15" },
  { label: "Renew trade license", due: "May 16" },
];

function ShieldMini({ className }: { className?: string }) {
  return <CheckCircle2 className={className} />;
}

export function DashboardMockup() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
      <div className="flex min-h-[560px] overflow-hidden rounded-lg">
        <aside className="hidden w-44 border-r border-slate-200 bg-slate-50 p-4 md:block">
          <div className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-950">
            <span className="grid size-7 place-items-center rounded-lg bg-blue-600 text-white">
              <CheckCircle2 className="size-4" />
            </span>
            Zekwise
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${
                  item.active ? "bg-blue-100 text-blue-700" : "text-slate-600"
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
              </div>
            ))}
          </nav>

          <div className="mt-20 rounded-lg border border-emerald-100 bg-white p-3 text-xs text-slate-600">
            <div className="mb-2 font-bold text-slate-900">ABC Consultants</div>
            Business Admin
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500">
              <Search className="size-4 shrink-0" />
              <span className="truncate">Search documents, clients, files...</span>
            </div>
            <Bell className="size-5 text-slate-500" />
            <div className="grid size-8 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white">
              ZK
            </div>
          </div>

          <div className="space-y-4 bg-white p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-950">Dashboard</h2>
                <p className="text-xs text-slate-500">Document control, AI checks, and compliance status.</p>
              </div>
              <div className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">
                May 12 - May 18, 2026
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-600">{stat.label}</p>
                    <span className={`grid size-8 place-items-center rounded-lg ${stat.bg} ${stat.color}`}>
                      <stat.icon className="size-4" />
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-950">{stat.value}</div>
                  <div className="mt-1 text-xs font-bold text-emerald-600">{stat.note}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-950">Document Status</h3>
                <div className="mt-4 flex items-center gap-5">
                  <div
                    className="size-28 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#22c55e 0deg 180deg, #f59e0b 180deg 277deg, #ef4444 277deg 331deg, #94a3b8 331deg 360deg)",
                    }}
                  >
                    <div className="m-5 grid size-[72px] place-items-center rounded-full bg-white text-xs font-bold text-slate-700">
                      1,248
                    </div>
                  </div>
                  <div className="grid gap-2 text-xs text-slate-600">
                    <StatusDot color="bg-emerald-500" label="Approved" value="620 (50%)" />
                    <StatusDot color="bg-amber-500" label="Pending" value="342 (27%)" />
                    <StatusDot color="bg-red-500" label="Needs Review" value="186 (15%)" />
                    <StatusDot color="bg-slate-400" label="Draft" value="100 (8%)" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-950">AI Warnings</h3>
                <div className="mt-4 space-y-3">
                  {warnings.map((warning) => (
                    <div key={warning} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-500" />
                      {warning}
                    </div>
                  ))}
                </div>
                <button type="button" className="mt-4 text-xs font-bold text-blue-600">
                  View all warnings
                </button>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-950">Tasks</h3>
                <div className="mt-4 space-y-3">
                  {tasks.map((task) => (
                    <div key={task.label} className="flex items-center justify-between gap-3 text-xs">
                      <span className="flex items-center gap-2 text-slate-700">
                        <span className="size-3 rounded border border-blue-400" />
                        {task.label}
                      </span>
                      <span className="font-bold text-slate-500">{task.due}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-950">Finance Summary</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                  <FinanceItem label="Invoices" value="$42,300" color="text-slate-950" />
                  <FinanceItem label="Paid" value="$28,200" color="text-emerald-600" />
                  <FinanceItem label="Due" value="$10,100" color="text-amber-600" />
                  <FinanceItem label="Overdue" value="$4,000" color="text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusDot({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="flex items-center gap-2">
        <span className={`size-2 rounded-full ${color}`} />
        {label}
      </span>
      <span className="font-bold text-slate-900">{value}</span>
    </div>
  );
}

function FinanceItem({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <p className="text-slate-500">{label}</p>
      <p className={`mt-1 text-base font-extrabold ${color}`}>{value}</p>
    </div>
  );
}
