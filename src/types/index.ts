export interface LandingPageContent {
  hero: {
    headline: string
    subheadline: string
    ctaText: string
    ctalUrl: string
    secondaryCtaText?: string
    secondaryCtaUrl?: string
    socialProof: {
      testimonialCount: string
      companyLogos: string[]
      rating: string
    }
  }
  features: {
    id: string
    icon: string
    title: string
    description: string
  }[]
  howItWorks: {
    id: string
    step: number
    title: string
    description: string
    icon: string
  }[]
  pricing: {
    plans: {
      id: string
      name: string
      price: number
      priceAnnual: number
      description: string
      features: string[]
      highlighted: boolean
      ctaText: string
    }[]
  }
  testimonials: {
    id: string
    name: string
    role: string
    company: string
    content: string
    rating: number
    avatar?: string
  }[]
  faq: {
    id: string
    question: string
    answer: string
  }[]
  cta: {
    headline: string
    subheadline: string
    buttonText: string
  }
}

export interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  conversionRate: number
  bounceRate: number
  avgTimeOnPage: number
  formSubmissions: number
  ctaClicks: number
  viewsOverTime: { date: string; views: number }[]
  conversionsOverTime: { date: string; conversions: number }[]
  topReferrers: { referrer: string; count: number }[]
}

export interface ABTestVariant {
  id: string
  name: string
  isControl: boolean
  weight: number
  pageViews: number
  conversions: number
  conversionRate: number
  improvement?: number
  isWinner?: boolean
}

export interface ABTest {
  id: string
  pageId: string
  pageSlug: string
  status: "running" | "paused" | "completed"
  variants: ABTestVariant[]
  createdAt: string
}
