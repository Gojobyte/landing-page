"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        message: data.get("message"),
      }),
    });
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center">Get in touch</h1>
          <p className="text-lg text-slate-600 text-center mb-12">Have a question? We&apos;d love to hear from you.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Mail className="w-6 h-6 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
              <p className="text-sm text-slate-600">hello@launchpad.app</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
              <p className="text-sm text-slate-600">San Francisco, CA</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Phone className="w-6 h-6 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
              <p className="text-sm text-slate-600">+1 (555) 123-4567</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Message sent!</h3>
              <p className="text-green-600">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input name="name" type="text" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input name="email" type="email" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                <input name="company" type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea name="message" rows={5} required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
