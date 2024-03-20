import { whoami } from "@/server/auth";

export async function GET(req: Request) {
  const user = await whoami(req.headers.get('Authorization')!);

  return Response.json({ id: user.userId });
}