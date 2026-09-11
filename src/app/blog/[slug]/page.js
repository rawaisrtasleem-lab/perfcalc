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
      
        text-white
        flex items-center justify-center
        px-4
        "
      >

        {/* Background Glow */}
      


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

      </main>
    );
  }

  return (
    <main
      className="
      relative min-h-screen w-full
      overflow-hidden
      bg-[#0f172a]
      "
    >

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