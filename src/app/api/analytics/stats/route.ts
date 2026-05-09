import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pageId = searchParams.get("pageId")
    const days = parseInt(searchParams.get("days") || "30")

    if (!pageId) {
      return NextResponse.json({ error: "pageId required" }, { status: 400 })
    }

    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const [pageViews, uniqueVisitors, formSubmissions, ctaClicks, topReferrers] =
      await Promise.all([
        prisma.pageView.count({
          where: { pageId, createdAt: { gte: startDate } },
        }),
        prisma.pageView
          .findMany({
            where: { pageId, createdAt: { gte: startDate } },
            select: { sessionId: true },
            distinct: ["sessionId"],
          })
          .then((r) => r.length),
        prisma.event.count({
          where: {
            pageId,
            eventType: "form_submit",
            createdAt: { gte: startDate },
          },
        }),
        prisma.event.count({
          where: {
            pageId,
            eventType: "cta_click",
            createdAt: { gte: startDate },
          },
        }),
        prisma.$queryRaw<{ referrer: string | null; count: bigint }[]>`
          SELECT referrer, COUNT::bigint as count
          FROM "PageView"
          WHERE "pageId" = ${pageId} AND "createdAt" >= ${startDate} AND referrer IS NOT NULL
          GROUP BY referrer
          ORDER BY count DESC
          LIMIT 10
        `,
      ])

    const viewsOverTime = await prisma.$queryRaw<
      { date: string; views: bigint }[]
    >`
      SELECT DATE("createdAt") as date, COUNT(*)::bigint as views
      FROM "PageView"
      WHERE "pageId" = ${pageId} AND "createdAt" >= ${startDate}
      GROUP BY DATE("createdAt")
      ORDER BY date ASC
    `

    const conversionsOverTime = await prisma.$queryRaw<
      { date: string; conversions: bigint }[]
    >`
      SELECT DATE("createdAt") as date, COUNT(*)::bigint as conversions
      FROM "Event"
      WHERE "pageId" = ${pageId} AND "eventType" = 'form_submit' AND "createdAt" >= ${startDate}
      GROUP BY DATE("createdAt")
      ORDER BY date ASC
    `

    const conversionRate =
      uniqueVisitors > 0 ? formSubmissions / uniqueVisitors : 0

    return NextResponse.json({
      pageViews,
      uniqueVisitors,
      formSubmissions,
      ctaClicks,
      conversionRate,
      bounceRate: 0,
      avgTimeOnPage: 0,
      viewsOverTime: viewsOverTime.map((v) => ({
        date: v.date,
        views: Number(v.views),
      })),
      conversionsOverTime: conversionsOverTime.map((c) => ({
        date: c.date,
        conversions: Number(c.conversions),
      })),
      topReferrers: topReferrers
        .filter((r) => r.referrer)
        .map((r) => ({
          referrer: r.referrer || "Direct",
          count: Number(r.count),
        })),
    })
  } catch (error) {
    console.error("Analytics fetch error:", error)
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    )
  }
}
