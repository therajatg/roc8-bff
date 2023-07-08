import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(posts, { status: 200 });
}
