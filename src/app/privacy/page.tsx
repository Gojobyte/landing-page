import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-500 mb-8">Last updated: January 1, 2025</p>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
            <p>At LaunchPad, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@launchpad.app.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
