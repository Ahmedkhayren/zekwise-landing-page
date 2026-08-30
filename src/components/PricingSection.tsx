import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small teams testing document control",
    cta: "Request Early Access",
    highlight: false,
  },
  {
    name: "Professional",
    description: "For growing document-heavy businesses",
    cta: "Book Demo",
    highlight: true,
  },
  {
    name: "Custom",
    description: "For agencies and firms with specific workflows",
    cta: "Contact Us",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-blue-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">
            Early access pricing for validation teams
          </h2>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border p-7 shadow-lg ${
                plan.highlight
                  ? "border-blue-200 bg-blue-50 shadow-blue-100"
                  : "border-slate-200 bg-white shadow-slate-100"
              }`}
            >
              <h3 className="text-xl font-extrabold text-slate-950">{plan.name}</h3>
              <p className="mt-3 min-h-12 leading-7 text-slate-600">{plan.description}</p>
              <p className="mt-6 text-2xl font-extrabold text-slate-950">Coming soon</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">Early access pricing</p>
              <a
                href="#contact"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-600 text-blue-700 hover:bg-blue-50"
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
