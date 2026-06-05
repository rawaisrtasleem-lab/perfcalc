import { gtaSetting1 } from "@/lib/blogs/gta-setting1";
import { blog2 } from "@/lib/blogs/blog2";
import { blog3 } from "@/lib/blogs/blog3";
import { blog4 } from "@/lib/blogs/blog4";

export const posts = [
  {
    id: 1,
    slug: "gta-6-fps",
    title: "How Much FPS Can You Get in GTA 6?",
    description:
      "GTA 6 is the next big title in the Grand Theft Auto series. Players expect a huge map with advanced gameplay systems.",
    date: "2026-05-21",
    author: "PerfCalcPro",
    image: "/blog-images/image.png",
    content: gtaSetting1,
  },
  {
    id: 2,
    slug: "fps-in-video-editing",
    title: "What Is FPS in Video Editing? Complete Beginner Guide",
    description:
      "FPS, or frames per second, is a crucial concept in video editing that determines the smoothness and quality of your videos. In this beginner's guide, we'll explore what FPS is, how it affects your video projects, and how to choose the right FPS for different types of content.",
    date: "2024-06-15",
    author: "VideoEditingPro",
    image: "/blog-images/blog2-1.png",
    content: blog2,
  },
  {
    id: 3,
    slug: "what-is-a-good-fps",
    title: "What Is a Good FPS for Gaming? 30 vs 60 vs 144 Explained",
    description:
      "Discover what good FPS for gaming means. 60 FPS suits casual players. 144 FPS wins competitive matches. Find your perfect frame rate today.",
    date: "2024-06-20",
    author: "GamerPro",
    image: "/blog-images/blog3-1.png",
    content: blog3,
  },
  {
    id: 4,
    slug: "can-my-pc-run-it",
    title: "Can My PC Run It? 4 Easy Ways to Check",
    description:
      "Not sure if your PC can run it? Check game system   requirements in 60 seconds — free tools, no downloads needed. ",
        
    date: "2024-06-25",
    author: "PerfCalcPro",
    image: "/blog-images/blog4-1.png",
    content: blog4,
  }
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}