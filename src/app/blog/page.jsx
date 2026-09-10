import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";
import { User, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "PerfCalcPro Blog",
  description: "Gaming FPS and PC performance blogs",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <section className="border-b border-white/5 bg-[#0b1222] px-4 py-10 text-center sm:px-6 sm:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="flex flex-col gap-0.5" aria-hidden="true">
              <span className="h-1.5 w-10 rounded-r-full bg-lime-400" />
              <span className="h-1.5 w-10 rounded-r-full bg-cyan-400" />
              <span className="h-1.5 w-10 rounded-r-full bg-orange-400" />
            </div>

            <BookOpen size={36} strokeWidth={2.25} className="text-cyan-400" />
          </div>

          <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            PerfCalcPro Blogs
          </h1>

          <p className="mx-auto mt-4 max-w-5xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            Discover gaming performance tips, PC hardware guides, FPS advice, and
            practical tools to help you get more from your setup.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">

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