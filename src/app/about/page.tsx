import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">About LaunchPad</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-4">LaunchPad was founded in 2024 with a simple mission: help teams build better products, faster.</p>
            <p className="text-slate-600 mb-4">We believe that project management software should be powerful yet simple, feature-rich yet fast. That&apos;s why we built LaunchPad from the ground up with modern teams in mind.</p>
            <p className="text-slate-600 mb-4">Today, thousands of teams across 150+ countries use LaunchPad to manage their projects, track their progress, and ship products they&apos;re proud of.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Values</h2>
            <ul className="text-slate-600 space-y-2">
              <li><strong>Simplicity first</strong> — We remove complexity, not features.</li>
              <li><strong>Performance always</strong> — Speed is a feature, not an afterthought.</li>
              <li><strong>Customer obsessed</strong> — Every decision starts with our users.</li>
              <li><strong>Transparency</strong> — Open pricing, honest communication.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
