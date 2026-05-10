"use client";

import { useState } from "react";
import {
  Code2, Zap, Shield, Globe, ArrowRight, Check, Star,
  Menu, X, Github, Twitter, Linkedin, Mail, Phone,
  ChevronDown, ChevronUp, ExternalLink, Heart,
} from "lucide-react";

// ─── Navbar ─────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#projets" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-bold text-gray-900">Adoum.Dev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-lg font-medium transition-colors">
              Démarrer un projet
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-600">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="block text-gray-600 hover:text-gray-900 py-2 text-sm" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block bg-blue-600 text-white text-sm px-5 py-2 rounded-lg font-medium text-center mt-2">
              Démarrer un projet
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-blue-700 text-sm font-medium">Disponible pour de nouveaux projets</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Développeur Full-Stack
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            React & Next.js
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Je transforme vos idées en applications web performantes et élégantes.
          Spécialisé en React, Next.js et TypeScript.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
            Discuter de votre projet
            <ArrowRight size={18} />
          </a>
          <a href="#projets" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
            Voir mes projets
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16">
          {[
            { value: "5+", label: "Projets livrés" },
            { value: "100%", label: "Satisfaction" },
            { value: "24h", label: "Réponse" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: Code2,
      title: "Applications Web",
      description: "Applications React/Next.js modernes, performantes et optimisées SEO. De la landing page au SaaS complet.",
      features: ["React & Next.js", "TypeScript", "API REST/GraphQL"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Performance & Audit",
      description: "Optimisation de la vitesse, du SEO et de l'accessibilité de vos applications existantes.",
      features: ["Core Web Vitals", "SEO technique", "Accessibilité"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Backend & API",
      description: "Architecture robuste avec bases de données, authentification et services cloud.",
      features: ["Node.js & Prisma", "PostgreSQL", "Auth & Sécurité"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Globe,
      title: "Déploiement & DevOps",
      description: "Mise en production, CI/CD, monitoring et maintenance de vos applications.",
      features: ["Vercel & Docker", "CI/CD GitHub Actions", "Monitoring"],
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Des solutions complètes pour donner vie à vos projets numériques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span key={f} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ───────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      title: "CHADIA — Plateforme ONG",
      description: "Gestion des appels d'offres avec analyse IA (Mistral), workflow avancé et notifications en temps réel.",
      tags: ["Next.js 15", "Prisma", "Mistral AI", "PostgreSQL"],
      gradient: "from-blue-600 to-violet-600",
      status: "En production",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Dashboard analytics complet avec graphiques, gestion des commandes et suivi des revenus en temps réel.",
      tags: ["React 19", "Recharts", "Tailwind", "TypeScript"],
      gradient: "from-emerald-600 to-teal-600",
      status: "Live",
    },
    {
      title: "TaskFlow — SaaS",
      description: "Application de gestion de tâches avec tableau Kanban, collaboration d'équipe et rapports.",
      tags: ["Next.js", "Kanban", "Real-time", "API"],
      gradient: "from-orange-500 to-red-600",
      status: "Live",
    },
  ];

  return (
    <section id="projets" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projets</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Quelques réalisations récentes qui démontrent mon expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all">
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-white/20 text-6xl font-bold">{project.title[0]}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: "Essentiel",
      price: "350",
      description: "Pour un projet simple et rapide",
      features: [
        "Landing page ou site vitrine",
        "Design responsive",
        "SEO de base",
        "Livraison en 5 jours",
        "1 révision incluse",
      ],
      highlighted: false,
    },
    {
      name: "Professionnel",
      price: "750",
      description: "Pour un projet sur mesure",
      features: [
        "Application web complète",
        "Dashboard admin",
        "Base de données",
        "Authentification",
        "API intégrée",
        "Livraison en 14 jours",
        "3 révisions incluses",
        "Support 30 jours",
      ],
      highlighted: true,
    },
    {
      name: "Sur Mesure",
      price: "Sur devis",
      description: "Pour les projets complexes",
      features: [
        "SaaS ou plateforme complète",
        "Architecture scalable",
        "IA / ML intégré",
        "CI/CD & DevOps",
        "Tests automatisés",
        "Documentation complète",
        "Support 90 jours",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="tarifs" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tarifs</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Des prix transparents, sans surprise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 ${
                plan.highlighted
                  ? "bg-blue-600 text-white ring-4 ring-blue-200 scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Populaire
                </span>
              )}
              <h3 className={`text-xl font-bold mt-3 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <div className="mt-2">
                {plan.price === "Sur devis" ? (
                  <span className={`text-2xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    Sur devis
                  </span>
                ) : (
                  <>
                    <span className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                      {plan.price}€
                    </span>
                    <span className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-gray-500"}`}> /projet</span>
                  </>
                )}
              </div>
              <p className={`text-sm mt-2 ${plan.highlighted ? "text-blue-100" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check size={16} className={plan.highlighted ? "text-blue-200" : "text-blue-600"} />
                    <span className={plan.highlighted ? "text-blue-50" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center mt-6 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Commencer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      name: "Directeur CHADIA",
      role: "ONG Internationale",
      text: "Adoum a livré une plateforme de gestion d'appels d'offres qui a transformé notre processus. Travail impeccable.",
      rating: 5,
    },
    {
      name: "Client Freelance",
      role: "E-Commerce",
      text: "Professionnel, réactif et de qualité. Le dashboard dépasse nos attentes. Je recommande vivement.",
      rating: 5,
    },
    {
      name: "Startup CEO",
      role: "SaaS",
      text: "Excellent travail sur notre MVP. Adoum comprend vite les besoins et propose des solutions élégantes.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Témoignages</h2>
          <p className="text-gray-600">Ce que mes clients disent</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4">"{t.text}"</p>
              <div>
                <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "Quels technologies utilisez-vous ?", a: "Principalement React, Next.js, TypeScript, Tailwind CSS, Prisma et PostgreSQL. Je m'adapte aussi à d'autres stacks selon le projet." },
    { q: "Combien de temps pour livrer un projet ?", a: "Un site vitrine en 5 jours, une application web en 2-3 semaines, un SaaS complexe en 1-2 mois. Tout dépend de la complexité." },
    { q: "Proposez-vous un support après livraison ?", a: "Oui, chaque formule inclut une période de support. Le plan Pro offre 30 jours et le Sur Mesure 90 jours de support." },
    { q: "Travaillez-vous avec des clients internationaux ?", a: "Absolument ! Je travaille à distance avec des clients du monde entier. La communication se fait par Telegram, email ou visio." },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
          <p className="text-gray-600">Questions fréquentes</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600">Parlons de votre projet</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Envoyez-moi un message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Projet</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                  <option>Site vitrine</option>
                  <option>Application web</option>
                  <option>E-commerce</option>
                  <option>SaaS</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="Décrivez votre projet..." />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Mail size={18} />
                Envoyer le message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">sadoumachi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <Phone size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="text-sm font-medium text-gray-900">+235 66 XX XX XX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
                  <Globe size={18} className="text-violet-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
                  <p className="text-sm font-medium text-gray-900">N'Djamena, Tchad 🌍</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Retrouvez-moi sur</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                ].map((social) => (
                  <button key={social.label} className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors">
                    <social.icon size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm">Adoum.Dev</span>
          </div>
          <p className="text-sm flex items-center gap-1">
            Fait avec <Heart size={14} className="text-red-400 fill-red-400" /> au Tchad 🇹🇩 · © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ─────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
