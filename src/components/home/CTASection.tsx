import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-12 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">Join thousands of teams already using LaunchPad to build better products.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Start for free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
