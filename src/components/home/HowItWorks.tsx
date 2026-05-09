import { MousePointerClick, Settings, Rocket } from "lucide-react";

const steps = [
  { icon: MousePointerClick, title: "Sign up", desc: "Create your free account in seconds. No credit card required." },
  { icon: Settings, title: "Configure", desc: "Set up your workspace, invite team members, and customize your workflow." },
  { icon: Rocket, title: "Launch", desc: "Start managing projects and shipping products faster than ever." },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get started in minutes</h2>
          <p className="text-lg text-slate-600">Three simple steps to transform your workflow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-xs font-bold text-blue-600 mb-2">STEP {i + 1}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
