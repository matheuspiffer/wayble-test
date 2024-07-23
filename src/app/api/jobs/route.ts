import { NextResponse } from "next/server";
import jobs from "@/constants/jobs.data";
export const GET = async (req: Request) => {
  return NextResponse.json(jobs);
};
