import Post from "@/components/Post";

export default function Home() {
  return (
    <main className="text-center max-w-2xl mx-auto my-2 space-y-8">
      <h1>vibe</h1>
      <p>a simple social media.</p>
      <button>get started</button>
      <Post className="-rotate-1" post={{ author: 'zr', content: 'i love vibe, it is the best social media', createdAt: 1710895580462 }}/>
      <Post className="rotate-2" post={{ author: 'lily', content: 'vibe is a great social media' }}/>
    </main>
  );
}
