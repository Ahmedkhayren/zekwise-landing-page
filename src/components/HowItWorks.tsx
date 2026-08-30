const steps = [
  "Upload or create documents",
  "Organize by client, business type, and workflow",
  "AI checks missing data, risks, and deadlines",
  "Approvals, tasks, and reports stay in one place",
];

export function HowItWorks() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-extrabold text-slate-950 md:text-3xl">
          How Zekwise works
        </h2>

        <div className="mt-9 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid size-10 place-items-center rounded-lg bg-blue-600 text-sm font-extrabold text-white">
                {index + 1}
              </div>
              <p className="mt-5 text-base font-bold leading-7 text-slate-900">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
