import { likePost } from "@/server/post";
import { getPost } from "@/server/user";

export async function POST(req: Request, { params }) {
  await likePost(req.headers.get('Authorization')!, params.id);

  return Response.json(await getPost(params.id));
}