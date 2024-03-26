import { whoami } from "@/server/auth";
import { db } from "@/server/db";
import { getPost } from "@/server/user";

export async function post(token: string, content: string) {
  const theUser = await whoami(token);
  const user = await db.user.findUnique({ where: { id: theUser.userId } });
  console.log(user);
  const post = await db.post.create({ data: {
    userId: user?.id,
    content,
  } });

  return getPost(post.id);
}


export async function likePost(token: string, id: string) {
  const user = await whoami(token);
  const dbUser = await db.user.findUnique({ where: { id: user.userId } });
  const post = await db.post.findUnique({ where: { id } });

  if (!post) {
    throw new Error("post not found");
  }

  // Check if the user already loves the post
  const alreadyLiked = post.loves.some(love => love.id === dbUser?.id);
  if (alreadyLiked) {
    throw new Error("you've already liked this post");
  }

  // Update the post's loves array with the user who liked it
  await db.post.update({
    where: { id: id },
    data: {
      loves: {
        connect: { id: dbUser?.id }
      }
    }
  });

  return await getPost(id);
}
