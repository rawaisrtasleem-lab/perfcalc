import { gtaSetting1 } from "@/lib/blogs/gta-setting1";

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
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}