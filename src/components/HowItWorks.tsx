const steps = [
  {
    title: "Upload documents",
    text: "Bring the records your team needs into one workspace.",
  },
  {
    title: "Organize by client and workflow",
    text: "Create a clear structure for each case, client, or process.",
  },
  {
    title: "Check missing data and deadlines",
    text: "Surface gaps and upcoming requirements before they become urgent.",
  },
  {
    title: "Review, approve and track progress",
    text: "Keep decisions, responsibilities, and activity visible to the team.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-extrabold text-slate-950 md:text-3xl">
          How Zekwise works
        </h2>

        <div className="relative mt-9 grid gap-7 md:grid-cols-4 md:gap-5">
          <div className="absolute left-[18%] right-[18%] top-5 hidden h-px bg-blue-100 md:block" />
          {steps.map((step, index) => (
            <article key={step.title} className="relative border-l border-blue-100 pl-6 md:border-l-0 md:px-3 md:pl-0">
              <div className="grid size-10 place-items-center rounded-full bg-blue-600 text-sm font-extrabold text-white shadow-md shadow-blue-100 md:mx-auto">
                {index + 1}
              </div>
              <h3 className="mt-4 font-extrabold leading-6 text-slate-950 md:text-center">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 md:text-center">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
