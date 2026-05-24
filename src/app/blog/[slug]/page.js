import Link from "next/link";

import {
  ArrowLeft,
  SearchX,
} from "lucide-react";

import { posts } from "@/data/posts";
import BlogContent from "@/components/BlogContent";

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | PerfCalcPro",
      description:
        "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | PerfCalcPro Blog`,
    description: post.description,

    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      url: `https://perfcalcpro.com/blog/${slug}`,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },

    alternates: {
      canonical: `https://perfcalcpro.com/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }) {

  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main
        className="
        relative min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
        flex items-center justify-center
        px-4
        "
      >

        {/* Background Glow */}
        <div
          className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]
          "
        />

        <div
          className="
          w-full max-w-2xl
          rounded-3xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-8 sm:p-12
          text-center
          shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]
          "
        >

          {/* Icon */}
          <div
            className="
            mx-auto mb-6
            flex h-20 w-20 items-center justify-center
            rounded-full
            bg-red-500/10
            border border-red-500/20
            "
          >
            <SearchX
              size={40}
              className="text-red-400"
            />
          </div>

          {/* Title */}
          <h1
            className="
            text-4xl sm:text-5xl
            font-black tracking-tight
            mb-4
            "
          >
            Post Not Found
          </h1>

          {/* Description */}
          <p
            className="
            text-zinc-400
            text-lg
            leading-relaxed
            mb-10
            "
          >
            The article you are trying to access
            may have been removed or does not exist.
          </p>

          {/* Button */}
          <Link
            href="/blog"
            className="
            inline-flex items-center gap-2
            rounded-xl
            bg-blue-600
            hover:bg-blue-500
            px-6 py-3
            font-semibold
            transition-all duration-300
            hover:scale-105
            "
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main
      className="
      relative min-h-screen
      overflow-hidden
      bg-[#050505]
      "
    >

      {/* Background Effects */}
      <div
        className="
        fixed inset-0 -z-10
        bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]
        "
      />

      {/* Article */}
      <div
        className="
        relative z-10
        "
      >
        <BlogContent post={post} />
      </div>
    </main>
  );
}