import { login, register } from "@/server/auth";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await register(body.username, body.password);
    const user = await login(body.username, body.password);

    return Response.json({ token: user.token });
  } catch(err: any) {
    return Response.json({ error: err.message });
  }
}