import {
  AlertTriangle,
  BarChart3,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  CalendarClock,
  FileText,
  FolderKanban,
  Gauge,
  LayoutDashboard,
  ListChecks,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Documents", icon: FileText },
  { label: "Compliance", icon: ShieldCheck },
  { label: "Approvals", icon: ClipboardCheck },
  { label: "Tasks", icon: ListChecks },
  { label: "Deadlines", icon: CalendarClock },
  { label: "Reports", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const stats = [
  { label: "Total Docs", value: "1,248", note: "+12%", icon: FolderKanban, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Health", value: "82%", note: "+6%", icon: Gauge, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Approvals", value: "23", note: "5 urgent", icon: Clock3, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Tasks Due", value: "18", note: "2 overdue", icon: ListChecks, color: "text-indigo-600", bg: "bg-indigo-50" },
];

const warnings = ["Missing expiry date", "Data mismatch", "Unsigned file"];

const deadlineItems = [
  { label: "Due This Week", value: "7", color: "text-slate-950" },
  { label: "Expiring Soon", value: "12", color: "text-amber-600" },
  { label: "Missing Documents", value: "9", color: "text-red-600" },
  { label: "Needs Review", value: "16", color: "text-blue-600" },
];

export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-[760px] rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/80 lg:w-[700px] lg:max-w-none lg:shrink-0 lg:-translate-x-6 2xl:w-[760px] 2xl:translate-x-0 ${className}`}>
      <div className="overflow-hidden rounded-xl">
        <div className="flex min-h-[470px]">
          <aside className="hidden w-36 shrink-0 border-r border-slate-200 bg-slate-50 p-3 md:block xl:w-40">
            <div className="mb-5 flex items-center gap-2 text-sm font-extrabold text-slate-950">
              <span className="grid size-7 place-items-center rounded-lg bg-blue-600 text-white">
                <CheckCircle2 className="size-4" />
              </span>
              Zekwise
            </div>

            <nav className="space-y-1">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-bold ${
                    item.active ? "bg-blue-100 text-blue-700" : "text-slate-600"
                  }`}
                >
                  <item.icon className="size-3.5 shrink-0" />
                  {item.label}
                </div>
              ))}
            </nav>

            <div className="mt-10 rounded-lg border border-emerald-100 bg-white p-3 text-[11px] leading-5 text-slate-600">
              <div className="font-extrabold text-slate-900">ABC Consultants</div>
              Business Admin
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-500">
                <Search className="size-3.5 shrink-0" />
                <span className="truncate">Search documents, clients, files...</span>
              </div>
              <Bell className="size-4 shrink-0 text-slate-500" />
              <div className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-600 text-[11px] font-extrabold text-white">
                ZK
              </div>
            </div>

            <div className="space-y-3 bg-white p-3.5 xl:p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-base font-extrabold text-slate-950">Dashboard</h2>
                  <p className="text-[11px] leading-5 text-slate-500">Document control, AI checks, and compliance status.</p>
                </div>
                <div className="rounded-lg border border-slate-200 px-3 py-2 text-[11px] font-bold text-slate-600">
                  This week
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm xl:p-3">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p className="truncate text-[10px] font-extrabold leading-4 text-slate-600 xl:text-[11px]">{stat.label}</p>
                      <span className={`grid size-6 shrink-0 place-items-center rounded-lg ${stat.bg} ${stat.color} xl:size-7`}>
                        <stat.icon className="size-3.5" />
                      </span>
                    </div>
                    <div className="text-lg font-extrabold text-slate-950 xl:text-xl">{stat.value}</div>
                    <div className="mt-1 text-[10px] font-extrabold text-emerald-600 xl:text-[11px]">{stat.note}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-sm xl:p-4">
                  <h3 className="text-xs font-extrabold text-slate-950">Document Status</h3>
                  <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div
                      className="size-24 shrink-0 rounded-full"
                      style={{
                        background:
                          "conic-gradient(#22c55e 0deg 180deg, #f59e0b 180deg 277deg, #ef4444 277deg 331deg, #94a3b8 331deg 360deg)",
                      }}
                    >
                      <div className="m-4 grid size-16 place-items-center rounded-full bg-white text-[11px] font-extrabold text-slate-700">
                        1,248
                      </div>
                    </div>
                    <div className="grid flex-1 gap-2 text-[11px] text-slate-600">
                      <StatusDot color="bg-emerald-500" label="Approved" value="620" />
                      <StatusDot color="bg-amber-500" label="Pending" value="342" />
                      <StatusDot color="bg-red-500" label="Review" value="186" />
                      <StatusDot color="bg-slate-400" label="Draft" value="100" />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-sm xl:p-4">
                  <h3 className="text-xs font-extrabold text-slate-950">AI Warnings</h3>
                  <div className="mt-4 space-y-3">
                    {warnings.map((warning) => (
                      <div key={warning} className="flex items-start gap-2 text-[11px] font-semibold leading-4 text-slate-700">
                        <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
                        {warning}
                      </div>
                    ))}
                  </div>
                  <button type="button" className="mt-4 text-[11px] font-extrabold text-blue-600">
                    View warnings
                  </button>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-sm xl:p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xs font-extrabold text-slate-950">Compliance Deadlines</h3>
                  <span className="text-[11px] font-bold text-slate-500">This week</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4 xl:gap-3">
                  {deadlineItems.map((item) => (
                    <div key={item.label} className="min-w-0 rounded-lg bg-slate-50 px-2.5 py-2.5 xl:px-3 xl:py-3">
                      <p className="min-h-8 text-[10px] font-semibold leading-4 text-slate-500">{item.label}</p>
                      <p className={`mt-1 truncate text-sm font-extrabold ${item.color}`}>{item.value}</p>
                    </div>
                  ))}
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
    <div className="flex items-center justify-between gap-3">
      <span className="flex min-w-0 items-center gap-2">
        <span className={`size-2 shrink-0 rounded-full ${color}`} />
        <span className="truncate">{label}</span>
      </span>
      <span className="font-extrabold text-slate-900">{value}</span>
    </div>
  );
}
