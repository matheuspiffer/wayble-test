import jobs from "@/constants/jobs.data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const id = req.nextUrl.pathname.split("/").pop();
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  return NextResponse.json(job);
};
