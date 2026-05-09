import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const submission = await prisma.formSubmission.create({
    data: {
      pageId: "home",
      name: body.name || "",
      email: body.email || "",
      company: body.company,
      message: body.message,
      source: "contact-form",
    },
  });
  return NextResponse.json(submission, { status: 201 });
}
