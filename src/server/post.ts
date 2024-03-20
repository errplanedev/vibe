import { whoami } from "@/server/auth";
import { db } from "@/server/db";
import { getPost } from "@/server/user";

export async function post(token: string, content: string) {
  const theUser = await whoami(token);
  const user = await db.user.findUnique({ where: { id: theUser.userId } });
  const post = await db.post.create({ data: {
    userId: user?.id!,
    content,
  } });

  return getPost(post.id);
}