import { login } from "@/server/auth";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await login(body.username, body.password);

  return Response.json({ token: user.token });
}