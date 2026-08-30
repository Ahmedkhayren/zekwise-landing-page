"use client";

import { FormEvent, useState } from "react";

const businessTypes = [
  "Visa Agency",
  "Recruitment Agency",
  "Accounting Firm",
  "Import / Export SME",
  "Consulting Company",
  "Other",
];

type Lead = {
  fullName: string;
  businessEmail: string;
  companyName: string;
  businessType: string;
  country: string;
  whatsappNumber: string;
  message: string;
  submittedAt: string;
};

export function LeadForm() {
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lead: Lead = {
      fullName: String(formData.get("fullName") ?? ""),
      businessEmail: String(formData.get("businessEmail") ?? ""),
      companyName: String(formData.get("companyName") ?? ""),
      businessType: String(formData.get("businessType") ?? ""),
      country: String(formData.get("country") ?? ""),
      whatsappNumber: String(formData.get("whatsappNumber") ?? ""),
      message: String(formData.get("message") ?? ""),
      submittedAt: new Date().toISOString(),
    };

    const storedLeads = localStorage.getItem("zekwise_leads");
    const leads: Lead[] = storedLeads ? (JSON.parse(storedLeads) as Lead[]) : [];
    const updatedLeads = [...leads, lead];

    localStorage.setItem("zekwise_leads", JSON.stringify(updatedLeads));
    console.log("Zekwise early access lead:", lead);
    setSuccessMessage("Thanks. We received your request and will contact you soon.");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-slate-50 px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-700">Early Access</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">Request early access</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Tell us about your document and compliance workflow. We will use requests to shape the
            first MVP cohorts and demo schedule.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" name="fullName" placeholder="Amina Yusuf" required />
            <Field label="Business email" name="businessEmail" type="email" placeholder="amina@company.com" required />
            <Field label="Company name" name="companyName" placeholder="ABC Consultants" required />
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Business type
              <select
                name="businessType"
                required
                className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select business type
                </option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <Field label="Country" name="country" placeholder="Somalia" required />
            <Field label="WhatsApp number optional" name="whatsappNumber" placeholder="+252..." />
          </div>

          <label className="mt-5 grid gap-2 text-sm font-bold text-slate-800">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="What document or compliance workflow do you want to improve?"
              className="resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
          >
            Request Early Access
          </button>

          {successMessage ? (
            <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-800">
              {successMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-800">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 rounded-lg border border-slate-200 px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}
