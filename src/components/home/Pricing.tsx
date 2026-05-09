"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: 0,
    priceAnnual: 0,
    description: "Perfect for getting started",
    features: ["Up to 3 projects", "5 team members", "Basic analytics", "1GB storage", "Community support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 29,
    priceAnnual: 24,
    description: "For growing teams",
    features: ["Unlimited projects", "25 team members", "Advanced analytics", "50GB storage", "Priority support", "Custom integrations", "API access"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: 79,
    priceAnnual: 66,
    description: "For large organizations",
    features: ["Everything in Pro", "Unlimited members", "SSO & SAML", "Unlimited storage", "Dedicated support", "Custom contracts", "SLA guarantee"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-600 mb-8">No hidden fees. No surprises.</p>
          <div className="inline-flex items-center gap-3 bg-slate-100 rounded-full p-1">
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-white shadow-sm text-slate-900" : "text-slate-600"}`}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${annual ? "bg-white shadow-sm text-slate-900" : "text-slate-600"}`}>
              Annual <span className="text-green-600 text-xs ml-1">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 ${plan.highlighted ? "bg-gradient-to-b from-blue-600 to-purple-700 text-white shadow-xl shadow-blue-500/25 scale-105" : "bg-white border border-slate-200"}`}>
              {plan.highlighted && <div className="text-xs font-bold text-blue-200 mb-2">MOST POPULAR</div>}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlighted ? "text-blue-200" : "text-slate-500"}`}>{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${annual ? plan.priceAnnual : plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-blue-200" : "text-slate-500"}`}>/mo</span>
              </div>
              <Link href="/register" className={`block w-full py-3 rounded-xl text-center font-semibold text-sm mb-6 transition-colors ${plan.highlighted ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                {plan.cta}
              </Link>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-blue-200" : "text-blue-600"}`} />
                    <span className={plan.highlighted ? "text-blue-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
