import { db } from "@/server/db";

export async function getUserWithoutPosts(username: string) {
  const user = await db.user.findUnique({ where: { name: username } });

  return {
    name: user?.name,
    id: user?.id,
    banned: user?.banned,
    admin: user?.admin,
  };
}

export async function getUserWithPosts(username: string) {
  const user = await getUserWithoutPosts(username);
  const posts = await db.post.findMany({ where: { userId: user.id } });

  return {
    ...user,
    posts,
  };
}

export async function getPost(postId: string) {
  const post = await db.post.findUnique({ where: { id: postId } });

  return {
    id: post?.id,
    content: post?.content,
    userId: post?.userId,
    createdAt: post?.postedAt,
  };
}
