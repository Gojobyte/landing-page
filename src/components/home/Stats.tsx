"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50K+", label: "Projects Created" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries" },
];

export function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</p>
            <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
