import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const assignVariantSchema = z.object({
  pageSlug: z.string(),
  sessionId: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pageSlug, sessionId } = assignVariantSchema.parse(body)

    const page = await prisma.page.findUnique({
      where: { slug: pageSlug },
      include: { variants: true },
    })

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 })
    }

    if (page.variants.length === 0) {
      return NextResponse.json({ variantId: null, variantName: null })
    }

    // Weighted random selection
    const totalWeight = page.variants.reduce((sum, v) => sum + v.weight, 0)
    let random = Math.random() * totalWeight
    let selectedVariant = page.variants[0]

    for (const variant of page.variants) {
      random -= variant.weight
      if (random <= 0) {
        selectedVariant = variant
        break
      }
    }

    return NextResponse.json({
      variantId: selectedVariant.id,
      variantName: selectedVariant.name,
      isControl: selectedVariant.isControl,
      content: selectedVariant.content,
    })
  } catch (error) {
    console.error("A/B test error:", error)
    return NextResponse.json(
      { error: "Failed to assign variant" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pageId = searchParams.get("pageId")

    if (!pageId) {
      return NextResponse.json({ error: "pageId required" }, { status: 400 })
    }

    const variants = await prisma.pageVariant.findMany({
      where: { pageId },
      include: {
        _count: {
          select: {
            pageViews: true,
            events: {
              where: { eventType: "form_submit" },
            },
          },
        },
      },
    })

    const result = variants.map((v) => ({
      id: v.id,
      name: v.name,
      isControl: v.isControl,
      weight: v.weight,
      pageViews: v._count.pageViews,
      conversions: v._count.events,
      conversionRate:
        v._count.pageViews > 0
          ? (v._count.events / v._count.pageViews) * 100
          : 0,
    }))

    return NextResponse.json({ variants: result })
  } catch (error) {
    console.error("A/B test fetch error:", error)
    return NextResponse.json(
      { error: "Failed to fetch A/B test data" },
      { status: 500 }
    )
  }
}
