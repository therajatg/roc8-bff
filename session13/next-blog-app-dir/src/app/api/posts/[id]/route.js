import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const post = posts.find((each) => each.id === parseInt(params.id));
  return NextResponse.json(post, { status: 200 });
}
