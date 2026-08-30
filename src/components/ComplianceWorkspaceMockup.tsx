import {
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  FolderKanban,
  LayoutList,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const workspaceNav = [
  { label: "Documents", icon: FileText, active: true },
  { label: "Clients", icon: FolderKanban },
  { label: "Compliance", icon: ShieldCheck },
  { label: "Approvals", icon: ClipboardCheck },
  { label: "Deadlines", icon: CalendarClock },
];

const records = [
  { name: "Client onboarding pack", type: "Client record", compliance: "Complete", deadline: "Jun 24", owner: "Amina Y.", review: "Approved" },
  { name: "Company registration", type: "Legal document", compliance: "Needs review", deadline: "Jun 27", owner: "Omar H.", review: "In review" },
  { name: "KYC verification file", type: "Compliance file", compliance: "Missing item", deadline: "Jul 01", owner: "Amina Y.", review: "Action needed" },
  { name: "Annual licence renewal", type: "Licence", compliance: "Expiring soon", deadline: "Jul 04", owner: "Sara K.", review: "Pending" },
];

const complianceStyle: Record<string, string> = {
  Complete: "bg-emerald-50 text-emerald-700",
  "Needs review": "bg-amber-50 text-amber-700",
  "Missing item": "bg-red-50 text-red-700",
  "Expiring soon": "bg-blue-50 text-blue-700",
};

export function ComplianceWorkspaceMockup() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/80">
      <div className="flex min-h-[430px]">
        <aside className="hidden w-36 shrink-0 border-r border-slate-200 bg-slate-50 p-3 md:block">
          <div className="mb-6 flex items-center gap-2 text-sm font-extrabold text-slate-950">
            <span className="grid size-7 place-items-center rounded-lg bg-blue-600 text-white"><CheckCircle2 className="size-4" /></span>
            Zekwise
          </div>
          <nav className="space-y-1">
            {workspaceNav.map((item) => (
              <div key={item.label} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] font-bold ${item.active ? "bg-blue-100 text-blue-700" : "text-slate-600"}`}>
                <item.icon className="size-3.5" />
                {item.label}
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-500">
              <Search className="size-3.5 shrink-0" />
              <span className="truncate">Search documents and clients...</span>
            </div>
            <span className="hidden rounded-lg bg-slate-100 px-2.5 py-2 text-[11px] font-bold text-slate-600 sm:inline">This week</span>
          </div>

          <div className="p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[11px] font-bold text-blue-600">ABC CONSULTANTS</p>
                <h3 className="mt-1 text-base font-extrabold text-slate-950">Document workspace</h3>
                <p className="mt-1 text-[11px] text-slate-500">Review active client records and compliance requirements.</p>
              </div>
              <button type="button" className="inline-flex items-center gap-2 self-start rounded-lg bg-blue-600 px-3 py-2 text-[11px] font-extrabold text-white">
                <FileText className="size-3.5" />
                Add document
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <Summary label="Active records" value="24" icon={LayoutList} color="text-blue-600" bg="bg-blue-50" />
              <Summary label="Needs attention" value="9" icon={ShieldCheck} color="text-amber-600" bg="bg-amber-50" />
              <Summary label="Due this week" value="7" icon={CalendarClock} color="text-emerald-600" bg="bg-emerald-50" />
            </div>

            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
              <div className="grid grid-cols-[minmax(148px,1.7fr)_0.9fr_0.8fr] gap-3 border-b border-slate-200 bg-slate-50 px-3 py-2.5 text-[10px] font-extrabold uppercase text-slate-500 sm:grid-cols-[minmax(160px,1.7fr)_0.9fr_0.9fr_0.7fr_0.75fr]">
                <span>Document</span><span>Compliance</span><span>Deadline</span><span className="hidden sm:block">Owner</span><span className="hidden sm:block">Review</span>
              </div>
              {records.map((record) => (
                <div key={record.name} className="grid grid-cols-[minmax(148px,1.7fr)_0.9fr_0.8fr] gap-3 border-b border-slate-100 px-3 py-3 last:border-b-0 sm:grid-cols-[minmax(160px,1.7fr)_0.9fr_0.9fr_0.7fr_0.75fr]">
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-extrabold text-slate-800">{record.name}</p>
                    <p className="mt-1 truncate text-[10px] text-slate-500">{record.type}</p>
                  </div>
                  <span className={`self-start truncate rounded-md px-2 py-1 text-[10px] font-extrabold ${complianceStyle[record.compliance]}`}>{record.compliance}</span>
                  <span className="self-center text-[11px] font-bold text-slate-700">{record.deadline}</span>
                  <span className="hidden items-center gap-1 self-center text-[11px] font-semibold text-slate-600 sm:flex"><UserRound className="size-3" />{record.owner}</span>
                  <span className="hidden self-center text-[11px] font-semibold text-slate-600 sm:block">{record.review}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Summary({ label, value, icon: Icon, color, bg }: { label: string; value: string; icon: typeof LayoutList; color: string; bg: string }) {
  return (
    <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-2.5">
      <div className="flex items-center justify-between gap-2"><p className="truncate text-[10px] font-bold text-slate-500">{label}</p><span className={`grid size-5 shrink-0 place-items-center rounded-md ${bg} ${color}`}><Icon className="size-3" /></span></div>
      <p className="mt-2 text-base font-extrabold text-slate-950">{value}</p>
    </div>
  );
}
