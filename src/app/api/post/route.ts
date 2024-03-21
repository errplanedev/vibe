import { post } from "@/server/post";

export async function POST(req: Request) {
  const body = await req.json();

  const thePost = await post(req.headers.get('Authorization')!, body.content);

  return Response.json(thePost);
}