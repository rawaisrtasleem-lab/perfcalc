import {
  CalendarDays,
  User,
  Clock3,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const authors = {
  "rao-awais": {
    name: "Rao Awais",
    role: "Founder & Writer",
    bio: "Writes about gaming FPS, PC performance, and building fast, SEO-friendly websites.",
    image: "/founder.png",
    twitter: "https://twitter.com/raoawais",
    linkedin:
      "https://www.linkedin.com/in/awais-tasleem-142457412/?isSelfProfile=true",
  },
};

/*
  We keep 4 candidates here and display only 3.
  If the current article is one of these, it is automatically removed,
  so the reader still sees 3 other articles.
*/
const relatedArticles = [
  {
    title: "Best Gaming PC for Budget: Top Picks for 2026",
    description:
      "Find practical budget gaming PC options and learn which hardware matters most for smooth gaming performance.",
    href: "/blog/best-budget-gaming-pc",
    slug: "best-budget-gaming-pc",
    date: "Sep 6, 2026",
    category: "Gaming Hardware",
  },
  {
    title: "Ryzen vs Intel for Gaming: Which CPU Should You Buy in 2026?",
    description:
      "Compare AMD Ryzen and Intel processors for gaming, performance, power efficiency, and overall value.",
    href: "/blog/which-is-better-ryzen-or-intel-for-gaming",
    slug: "which-is-better-ryzen-or-intel-for-gaming",
    date: "Jul 28, 2026",
    category: "PC Performance",
  },
  {
    title: "Can My PC Run It? 4 Easy Ways to Check",
    description:
      "Learn how to compare your PC specs, system requirements, and expected FPS before buying or installing a game.",
    href: "/blog/can-my-pc-run-it",
    slug: "can-my-pc-run-it",
    date: "Jun 25, 2024",
    category: "Gaming Performance",
  },
  {
    title: "How Much FPS Can You Get in GTA 6?",
    description:
      "Explore expected GTA 6 performance, hardware requirements, and the factors that can affect your frame rate.",
    href: "/blog/gta-6-fps",
    slug: "gta-6-fps",
    date: "May 21, 2026",
    category: "FPS Guides",
  },
];

export default function BlogContent({ post }) {
  const currentSlug = post?.slug || "";

  const recommendedArticles = relatedArticles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);

  const authorKey = post?.author
    ? post.author
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    : null;

  const authorInfo = authorKey ? authors[authorKey] : null;

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* =====================================================
          BLOG HEADER
      ====================================================== */}
      <div className="relative bg-[#0f172a] px-4 py-6 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-wide text-blue-300 sm:text-3xl">
            <span className="inline-block h-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
            PerfCalcPro Blog
          </h2>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm !text-white !no-underline transition hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative">
        <div className="relative h-[100px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-[#0f172a]/10" />
        </div>

        <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-4 sm:-mt-20 sm:px-6 lg:-mt-24">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8">
            <span className="mb-3 inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-200 sm:text-sm">
              Gaming Performance Guide
            </span>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* META */}
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 text-zinc-300">
              <div className="flex items-center gap-2 rounded-full bg-zinc-800/60 px-3 py-1.5 text-xs sm:text-sm">
                <User size={16} />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-zinc-800/60 px-3 py-1.5 text-xs sm:text-sm">
                <CalendarDays size={14} />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-zinc-800/60 px-3 py-1.5 text-xs sm:text-sm">
                <Clock3 size={14} />
                <span>8 min read</span>
              </div>

              <a
                href={`https://twitter.com/intent/tweet?url=https://perfcalcpro.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold !text-white !no-underline shadow transition hover:bg-blue-500 sm:text-sm"
                title="Share on Twitter"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLE CONTENT
      ====================================================== */}
      <section className="relative py-10 sm:py-16">
        <article className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl p-2 sm:p-4 lg:p-6">
            <div
              className="
                prose prose-invert max-w-none

                prose-headings:font-extrabold
                prose-headings:tracking-tight
                prose-headings:text-white

                prose-h2:mt-8
                prose-h2:mb-3
                prose-h2:border-b
                prose-h2:border-white/10
                prose-h2:pb-3
                prose-h2:text-3xl

                prose-h3:mt-6
                prose-h3:mb-3
                prose-h3:text-xl

                prose-p:mt-2
                prose-p:mb-4
                prose-p:leading-7
                prose-p:text-zinc-300

                prose-strong:text-white

                prose-a:text-blue-400
                hover:prose-a:text-blue-300

                prose-li:text-zinc-300
                prose-li:marker:text-blue-400
                prose-ul:space-y-2

                prose-table:w-full
                prose-table:border-collapse

                prose-th:border
                prose-th:border-white/10
                prose-th:bg-white/5
                prose-th:p-3
                prose-th:font-semibold
                prose-th:text-white

                prose-td:border
                prose-td:border-white/10
                prose-td:p-3
                prose-td:text-zinc-300

                prose-blockquote:rounded-xl
                prose-blockquote:border-l-4
                prose-blockquote:border-blue-500
                prose-blockquote:bg-white/5
                prose-blockquote:px-5
                prose-blockquote:py-2
                prose-blockquote:text-zinc-300
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* =====================================================
                AUTHOR BOX
            ====================================================== */}
            <div className="mt-16 border-t border-white/10 pt-10">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                  {/* AUTHOR */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    {authorInfo ? (
                      <>
                        {/* REAL AUTHOR IMAGE */}
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-900 shadow-[0_12px_35px_rgba(37,99,235,0.16)] sm:h-28 sm:w-28">
                          <Image
                            src={authorInfo.image}
                            alt={`${authorInfo.name}, ${authorInfo.role}`}
                            fill
                            sizes="112px"
                            className="object-cover object-top"
                          />
                        </div>

                        <div className="max-w-xl">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                            Written by
                          </p>

                          <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                            {authorInfo.name}
                          </h3>

                          <p className="mt-1 text-sm font-semibold text-slate-400">
                            {authorInfo.role}
                          </p>

                          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-[15px]">
                            {authorInfo.bio}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                            {authorInfo.twitter && (
                              <a
                                href={authorInfo.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="!text-blue-400 !no-underline transition hover:!text-blue-300"
                              >
                                Twitter
                              </a>
                            )}

                            {authorInfo.linkedin && (
                              <a
                                href={authorInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="!text-blue-400 !no-underline transition hover:!text-blue-300"
                              >
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-400">Written by</p>

                        <p className="text-xl font-bold text-white">
                          {post.author}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* BLOG BUTTON */}
                  <Link
                    href="/blog"
                    className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-bold !text-white !no-underline shadow-[0_12px_35px_rgba(37,99,235,0.18)] transition hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Read More Articles

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* =====================================================
          MORE FROM PERFCALCPRO
      ====================================================== */}
      <section className="border-t border-white/5 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          {/* HEADING */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
              Keep Reading
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              More From the{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                PerfCalcPro Blog
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Explore more practical gaming guides, PC performance advice, and
              hardware comparisons from PerfCalcPro.
            </p>
          </div>

          {/* 3 BLOG BOXES */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recommendedArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={article.href}
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 !no-underline transition duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-white/[0.055]"
              >
                {/* TOP GRADIENT */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-violet-400/0 via-blue-400/80 to-cyan-300/0 opacity-60 transition group-hover:opacity-100"
                />

                {/* NUMBER + CATEGORY */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black tracking-[0.2em] text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-blue-300/10 bg-blue-500/10 px-3 py-1 text-[11px] font-bold text-blue-300">
                    {article.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-7 text-xl font-extrabold leading-7 text-white transition-colors group-hover:text-blue-300">
                  {article.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {article.description}
                </p>

                {/* DATE */}
                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <CalendarDays size={14} />
                  <span>{article.date}</span>
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center border-t border-white/10 pt-5 text-sm font-bold text-cyan-300">
                  Read article

                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* ALL BLOGS BUTTON */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="group inline-flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold !text-white !no-underline transition hover:border-blue-400/30 hover:bg-white/[0.07]"
            >
              Explore All Articles

              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}