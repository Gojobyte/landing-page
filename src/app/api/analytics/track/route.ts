import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const trackEventSchema = z.object({
  pageId: z.string(),
  sessionId: z.string(),
  eventType: z.enum([
    "page_view",
    "click",
    "scroll",
    "form_start",
    "form_submit",
    "cta_click",
    "signup",
  ]),
  eventData: z.record(z.string(), z.unknown()).optional(),
  referrer: z.string().optional(),
  userAgent: z.string().optional(),
  pathname: z.string().optional(),
  variantId: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = trackEventSchema.parse(body)

    if (data.eventType === "page_view") {
      await prisma.pageView.create({
        data: {
          pageId: data.pageId,
          variantId: data.variantId ?? null,
          sessionId: data.sessionId,
          referrer: data.referrer || null,
          userAgent: data.userAgent || null,
          pathname: data.pathname || null,
        },
      })
    }

    await prisma.event.create({
      data: {
        pageId: data.pageId,
        variantId: data.variantId ?? null,
        sessionId: data.sessionId,
        eventType: data.eventType,
        eventData: data.eventData ?? {},
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Analytics tracking error:", error)
    return NextResponse.json(
      { error: "Failed to track event" },
      { status: 500 }
    )
  }
}
