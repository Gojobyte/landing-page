import { Zap, Shield, BarChart3, Users, Globe, Layers } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed. Your dashboard loads in milliseconds, not seconds." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption and SSO support." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time insights into your team's productivity and project health." },
  { icon: Users, title: "Team Collaboration", desc: "Built-in comments, mentions, and real-time updates keep everyone aligned." },
  { icon: Globe, title: "Global Scale", desc: "Deploy to 30+ regions worldwide with automatic failover and CDN." },
  { icon: Layers, title: "Integrations", desc: "Connect with 100+ tools including Slack, GitHub, Jira, and Figma." },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to ship</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Powerful features designed for modern product teams.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <f.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
