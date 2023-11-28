import { getComments, saveComment } from "@/lib/comments";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const comments = await getComments(slug);
  return NextResponse.json({ comments });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const comment = formData.get("comment") as string;

  await saveComment(username, comment, slug);

  return NextResponse.json("comment saved!");
}
