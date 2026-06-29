import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export const metadata = {
  title: "PerfCalcPro Blog",
  description: "Gaming FPS and PC performance blogs",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          PerfCalcPro Blog
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
    
                  className="object-cover"
                   sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h2 className="text-2xl font-bold mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-400 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  );
}