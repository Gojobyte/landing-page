import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BarChart3, Users, MousePointerClick, TrendingUp } from "lucide-react";

const stats = [
  { label: "Page Views", value: "12,847", change: "+12.5%", icon: BarChart3 },
  { label: "Unique Visitors", value: "3,421", change: "+8.2%", icon: Users },
  { label: "Conversions", value: "284", change: "+23.1%", icon: MousePointerClick },
  { label: "Conversion Rate", value: "2.2%", change: "+0.4%", icon: TrendingUp },
];

const topPages = [
  { page: "/", views: 5420, conversions: 120 },
  { page: "/#features", views: 3210, conversions: 84 },
  { page: "/#pricing", views: 2890, views2: 2890, conversions: 56 },
  { page: "/#testimonials", views: 1327, conversions: 24 },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-900 mb-6">Analytics Dashboard</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <stat.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-900 mb-4">Top Pages</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-3 text-xs font-semibold text-slate-500 uppercase">Page</th>
                  <th className="text-left py-3 text-xs font-semibold text-slate-500 uppercase">Views</th>
                  <th className="text-left py-3 text-xs font-semibold text-slate-500 uppercase">Conversions</th>
                  <th className="text-left py-3 text-xs font-semibold text-slate-500 uppercase">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topPages.map((p) => (
                  <tr key={p.page}>
                    <td className="py-3 text-sm font-medium text-slate-900">{p.page}</td>
                    <td className="py-3 text-sm text-slate-600">{p.views.toLocaleString()}</td>
                    <td className="py-3 text-sm text-slate-600">{p.conversions}</td>
                    <td className="py-3 text-sm text-slate-600">{((p.conversions / p.views) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
