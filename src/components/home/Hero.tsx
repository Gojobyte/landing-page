"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          Now in public beta — Try it free
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Build products
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> faster</span>
          <br />than ever
        </h1>

        <p className={`text-xl text-slate-600 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          The all-in-one platform for modern teams. Manage projects, track tasks, and ship products with confidence.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="/register" className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25">
            Start for free <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="flex items-center gap-2 px-8 py-3.5 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <Play className="w-4 h-4" /> Watch demo
          </button>
        </div>

        <div className={`mt-12 flex items-center justify-center gap-8 text-sm text-slate-500 transition-all duration-700 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <span>✓ Free 14-day trial</span>
          <span>✓ No credit card</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
