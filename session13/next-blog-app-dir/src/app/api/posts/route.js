import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

export async function GET(req, params) {
  //   const { searchParams } = new URL(request.url);
  //   const id = searchParams.get("id");
  //   if (id) {
  //     return NextResponse.json(123, { status: 200 });
  //   }
  //   console.log("params", params);
  console.log("This is all posts page");
  return NextResponse.json(posts, { status: 200 });
}
