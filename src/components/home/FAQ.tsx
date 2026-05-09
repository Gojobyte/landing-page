"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How does the free trial work?", a: "You get full access to all Pro features for 14 days. No credit card required. At the end of the trial, you can choose to upgrade or continue with our free plan." },
  { q: "Can I change plans later?", a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences." },
  { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption, regular security audits, and are SOC 2 Type II compliant. Your data is backed up daily across multiple regions." },
  { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund." },
  { q: "Can I invite my team?", a: "Yes! Depending on your plan, you can invite 5 to unlimited team members. Each member gets their own account with role-based permissions." },
  { q: "What integrations do you support?", a: "We integrate with 100+ tools including Slack, GitHub, Jira, Figma, Google Workspace, Microsoft 365, and many more. We also offer a REST API for custom integrations." },
  { q: "Is there an API?", a: "Yes, our REST API gives you full access to your data. We also offer webhooks for real-time events. API access is available on Pro and Team plans." },
  { q: "What kind of support do you offer?", a: "Free plans get community support. Pro plans include priority email support with 4-hour response time. Team plans get dedicated support with 1-hour response time." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
          <p className="text-lg text-slate-600">Everything you need to know.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-medium text-slate-900">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
