import { CalendarDays, User, Clock3, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogContent({ post }) {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 animate-gradient bg-[conic-gradient(at_top_left,_#6366f1_10%,_#a855f7_40%,_#06b6d4_70%,_#6366f1_100%)] opacity-30 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_40%)]" />
      </div>

      {/* Blog Header */}
      <div className="relative px-4 sm:px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 tracking-wide flex items-center gap-2">
            <span className="inline-block w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            PerfCalcPro Blog
          </h2>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full h-[100px] sm:h-[100px] lg:h-[100px] overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/70 to-black/10" />

          {/* Back Button */}
          <div className="absolute top-4 left-6 z-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2 text-sm text-white hover:bg-black/60 transition"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 lg:-mt-24 z-10">
          <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] ring-1 ring-blue-500/10">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-3 py-1 text-xs sm:text-sm font-semibold text-blue-200 tracking-wide mb-3 shadow">
              Gaming Performance Guide
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-zinc-300 border-t border-white/10 pt-3">
              <div className="flex items-center gap-2 bg-zinc-800/60 rounded-full px-3 py-1 text-xs sm:text-sm">
                <User size={14} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/60 rounded-full px-3 py-1 text-xs sm:text-sm">
                <CalendarDays size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-800/60 rounded-full px-3 py-1 text-xs sm:text-sm">
                <Clock3 size={14} />
                <span>8 min read</span>
              </div>
              <a
                href={`https://twitter.com/intent/tweet?url=https://perfcalcpro.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full px-3 py-1 text-xs sm:text-sm transition shadow"
                title="Share on Twitter"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="relative py-10 sm:py-16">
        <article className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 lg:p-10">
            <div
              className="
              prose prose-invert max-w-none
              prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-zinc-300 prose-p:leading-7 prose-p:mt-2 prose-p:mb-5
              prose-strong:text-white
              prose-a:text-blue-400 hover:prose-a:text-blue-300
              prose-li:text-zinc-300 prose-li:marker:text-blue-400 prose-ul:space-y-2
              prose-table:w-full prose-table:border-collapse prose-table:rounded-xl
              prose-th:bg-white/5 prose-th:text-white prose-th:font-semibold prose-th:p-3 prose-th:border prose-th:border-white/10
              prose-td:p-3 prose-td:text-zinc-300 prose-td:border prose-td:border-white/10
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:text-zinc-300 prose-blockquote:bg-white/5 prose-blockquote:rounded-xl prose-blockquote:px-5 prose-blockquote:py-2
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </section>
    </main>
  );
}
