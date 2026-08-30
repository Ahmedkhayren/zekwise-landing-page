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
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFormError("Please complete the required fields before submitting your request.");
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
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

    setFormError("");
    setSuccessMessage("");
    const storedLeads = localStorage.getItem("zekwise_leads");
    let leads: Lead[] = [];
    try {
      leads = storedLeads ? (JSON.parse(storedLeads) as Lead[]) : [];
    } catch {
      leads = [];
    }

    localStorage.setItem("zekwise_leads", JSON.stringify([...leads, lead]));
    setSuccessMessage("Demo request received");
    form.reset();
  }

  return (
    <section id="contact" className="bg-slate-50 px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-700">Early Access</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl">Request early access</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            This is a demo interaction. Submitted details are saved in this browser only and are not sent to a server.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-100 md:p-6">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" name="fullName" placeholder="Layla Al Mansoori" required />
            <Field label="Business email" name="businessEmail" type="email" placeholder="layla@horizon.ae" required />
            <Field label="Company name" name="companyName" placeholder="Horizon Advisory" required />
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
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              Country
              <select name="country" required defaultValue="" className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
                <option value="" disabled>Select country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Kenya">Kenya</option>
                <option value="Somalia">Somalia</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <Field label="WhatsApp number (optional)" name="whatsappNumber" placeholder="+971 50 123 4567" />
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
            <div role="status" className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              <p className="font-extrabold">{successMessage}</p>
              <p className="mt-1 leading-5">Saved locally in this browser for this prototype.</p>
            </div>
          ) : null}
          {formError ? (
            <p role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-800">
              {formError}
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
