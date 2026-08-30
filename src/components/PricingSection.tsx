import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small teams testing a structured document workflow.",
    features: ["Core document workspace", "Basic compliance tracking", "Tasks and reminders"],
    cta: "Request Early Access",
    highlight: false,
  },
  {
    name: "Professional",
    description: "For teams managing multiple clients and compliance processes.",
    features: ["Everything in Starter", "Approval workflows", "AI document checks", "Audit trail"],
    cta: "View Demo",
    highlight: true,
  },
  {
    name: "Custom",
    description: "For organizations that need tailored workflows and access controls.",
    features: ["Tailored workflows", "Custom permissions", "Organization-specific setup"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-blue-600">Validation plans</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
            Early Access Plans
          </h2>
        </div>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col rounded-xl border p-6 shadow-lg ${
                plan.highlight
                  ? "border-blue-200 bg-blue-50 shadow-blue-100"
                  : "border-slate-200 bg-white shadow-slate-100"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-extrabold text-slate-950">{plan.name}</h3>
                <span className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-extrabold text-blue-700">Early access</span>
              </div>
              <p className="mt-6 leading-7 text-slate-600">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-slate-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-600 bg-white text-blue-700 hover:bg-blue-50"
                }`}
              >
                {plan.cta}
                <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
