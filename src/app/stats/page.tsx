// @ts-nocheck

'use server';

import { db } from "@/server/db";
import Card from "@/components/Card";

export default async function Stats() {
  const users = await db.user.count();
  const posts = await db.post.count();
  const admins = await db.user.count({ where: {
    admin: true
  } })

  return (
    <main className="flex min-h-screen flex-col mx-auto flex-1 px-4 pb-2 space-y-4 max-w-4xl">
      <h1>statistics</h1>
      <Card>
        <h1 className="text-7xl">{users}</h1>
        <p>users</p>
      </Card>
      <Card>
        <h1 className="text-7xl">{posts}</h1>
        <p>posts</p>
      </Card>
    </main>
  )
}