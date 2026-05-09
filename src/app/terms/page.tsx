import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
          <p className="text-slate-500 mb-8">Last updated: January 1, 2025</p>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>These Terms of Service govern your use of LaunchPad&apos;s website and services.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these terms.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Use of Services</h2>
            <p>You may use our services only in compliance with these terms and all applicable laws.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Account Responsibilities</h2>
            <p>You are responsible for maintaining the security of your account and for all activities that occur under your account.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Limitation of Liability</h2>
            <p>LaunchPad shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
