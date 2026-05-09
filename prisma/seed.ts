import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const testimonials = [
  { name: "Sarah Johnson", role: "CTO", company: "TechCorp", content: "LaunchPad transformed how our team works. We shipped 3x faster in the first month.", rating: 5, featured: true, order: 1 },
  { name: "Michael Chen", role: "Product Lead", company: "StartupXYZ", content: "The best project management tool I've ever used. Clean, fast, and intuitive.", rating: 5, featured: true, order: 2 },
  { name: "Emily Davis", role: "Engineering Manager", company: "BigCo", content: "Finally a tool that doesn't get in the way. Our team adopted it in days.", rating: 5, featured: true, order: 3 },
  { name: "David Kim", role: "Founder", company: "IndieHackers", content: "I've tried every tool out there. LaunchPad is the only one that stuck.", rating: 5, featured: false, order: 4 },
  { name: "Lisa Wang", role: "VP Engineering", company: "ScaleUp", content: "The analytics alone are worth it. We can finally see where our time goes.", rating: 5, featured: false, order: 5 },
  { name: "James Brown", role: "Designer", company: "DesignStudio", content: "Beautiful interface, powerful features. This is what modern software should feel like.", rating: 5, featured: false, order: 6 },
];

const faqs = [
  { question: "How does the free trial work?", answer: "You get full access to all Pro features for 14 days. No credit card required.", category: "billing", order: 1 },
  { question: "Can I change plans later?", answer: "Yes! You can upgrade or downgrade at any time. Changes take effect immediately.", category: "billing", order: 2 },
  { question: "Is my data secure?", answer: "Absolutely. We use enterprise-grade encryption and are SOC 2 Type II compliant.", category: "security", order: 3 },
  { question: "Do you offer refunds?", answer: "Yes, we offer a 30-day money-back guarantee on all paid plans.", category: "billing", order: 4 },
  { question: "Can I invite my team?", answer: "Yes! Depending on your plan, you can invite 5 to unlimited team members.", category: "general", order: 5 },
  { question: "What integrations do you support?", answer: "We integrate with 100+ tools including Slack, GitHub, Jira, and Figma.", category: "integrations", order: 6 },
  { question: "Is there an API?", answer: "Yes, our REST API gives you full access to your data with webhooks support.", category: "integrations", order: 7 },
  { question: "What kind of support do you offer?", answer: "Community support for free, priority email for Pro, dedicated support for Team.", category: "support", order: 8 },
];

const pricingPlans = [
  { name: "Free", price: 0, priceAnnual: 0, description: "Perfect for getting started", features: ["Up to 3 projects", "5 team members", "Basic analytics", "1GB storage"], highlighted: false, ctaText: "Get Started", order: 1 },
  { name: "Pro", price: 29, priceAnnual: 24, description: "For growing teams", features: ["Unlimited projects", "25 team members", "Advanced analytics", "50GB storage", "Priority support", "API access"], highlighted: true, ctaText: "Start Free Trial", order: 2 },
  { name: "Team", price: 79, priceAnnual: 66, description: "For large organizations", features: ["Everything in Pro", "Unlimited members", "SSO & SAML", "Unlimited storage", "Dedicated support", "SLA guarantee"], highlighted: false, ctaText: "Contact Sales", order: 3 },
];

async function main() {
  console.log("🌱 Seeding landing-page...");

  await prisma.testimonial.deleteMany();
  await prisma.fAQ.deleteMany();
  await prisma.pricingPlan.deleteMany();

  for (const t of testimonials) await prisma.testimonial.create({ data: t });
  for (const f of faqs) await prisma.fAQ.create({ data: f });
  for (const p of pricingPlans) await prisma.pricingPlan.create({ data: p });

  console.log("✅ Seed complete!");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
