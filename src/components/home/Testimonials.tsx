"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Johnson", role: "CTO", company: "TechCorp", content: "LaunchPad transformed how our team works. We shipped 3x faster in the first month.", rating: 5 },
  { name: "Michael Chen", role: "Product Lead", company: "StartupXYZ", content: "The best project management tool I've ever used. Clean, fast, and intuitive.", rating: 5 },
  { name: "Emily Davis", role: "Engineering Manager", company: "BigCo", content: "Finally a tool that doesn't get in the way. Our team adopted it in days, not weeks.", rating: 5 },
  { name: "David Kim", role: "Founder", company: "IndieHackers", content: "I've tried every tool out there. LaunchPad is the only one that stuck with our team.", rating: 5 },
  { name: "Lisa Wang", role: "VP Engineering", company: "ScaleUp", content: "The analytics alone are worth it. We can finally see where our time goes.", rating: 5 },
  { name: "James Brown", role: "Designer", company: "DesignStudio", content: "Beautiful interface, powerful features. This is what modern software should feel like.", rating: 5 },
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = testimonials.slice(page * perPage, (page + 1) * perPage);

  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Loved by teams worldwide</h2>
          <p className="text-lg text-slate-600">See what our customers have to say.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} at {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-8 h-8 rounded-lg text-sm font-medium ${page === i ? "bg-blue-600 text-white" : "border border-slate-200 hover:bg-slate-50"}`}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
