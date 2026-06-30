import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { User, Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "PerfCalcPro Blog",
  description: "Gaming FPS and PC performance blogs",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">PerfCalcPro Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition"
            >
              {/* Cover image */}
              <div className="relative w-full h-56 shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                {/* Title clamped so every card is the same height */}
                <h2 className="text-2xl font-bold leading-snug line-clamp-2 min-h-[3.5rem]">
                  {post.title}
                </h2>

                {/* Bottom block — always pinned to the bottom */}
                <div className="mt-auto pt-4 space-y-2">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>

                  <span className="mt-3 mb-1 inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-500">
                    Read More
                    <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}