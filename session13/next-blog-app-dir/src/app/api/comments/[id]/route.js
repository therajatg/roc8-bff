import { comments } from "@/data/comments";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const filteredComments = comments.filter(
    (each) => each.postId === parseInt(params.id)
  );
  return NextResponse.json(filteredComments, { status: 200 });
}
