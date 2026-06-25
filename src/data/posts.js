import { gtaSetting1 } from "@/lib/blogs/gta-setting1";
import { blog2 } from "@/lib/blogs/blog2";
import { blog3 } from "@/lib/blogs/blog3";
import { blog4 } from "@/lib/blogs/blog4";
import { blog5 } from "@/lib/blogs/blog5";
import {blog6} from "@/lib/blogs/blog6";
import {blog7} from "@/lib/blogs/blog7";
import {blog8} from "@/lib/blogs/blog8";
import {blog9} from "@/lib/blogs/blog9";
import {blog10} from "@/lib/blogs/blog10";
import {blog11} from "@/lib/blogs/blog11";

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
    slug: "best-budget-gaming-pc",
    title: "Best Budget Gaming PC in 2026: Top Picks Under $1000",
    description:
      "Find the best budget gaming PC in 2026. Top picks for smooth 1080p gaming at prices that won't empty your wallet.",
    date: "2024-06-20",
    author: "PerfCalcPro",
    image: "/blog-images/blog33-1.png",
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
  },

  {
    id: 5,
    slug: "fps-vs-hz",
    title: "FPS vs Hz: 7 Key Differences Every Gamer Must Know",
    description:
      "Confused about FPS vs Hz? Learn how frame rate and refresh rate differ, work together, and affect your gaming experience. Don't miss this.",

    date: "2024-06-30",
    author: "PerfCalcPro",
    image: "/blog-images/blog5-2.png",
    content: blog5,
  },

  {


    id: 6,
    slug: "good-fps-for-gaming",
    title: "What Is a Good FPS for Gaming? 30 vs 60 vs 144 Explained",
    description:
      "Not sure what is a good FPS for gaming? This guide covers every target from 30 to 240 FPS so your setup always feels smooth. ",
    date: "2024-07-05",
    author: "GamerPro",
    image: "/blog-images/blog6-1.png",
    content: blog6,
  },


  {
    id :7,
    slug: "cloud-gaming-vs-console-gaming",
    title: "Cloud Gaming vs Console Gaming: Pros, Cons & Key Differences (2026)",
    description:
      "Compare cloud gaming vs console gaming — performance, cost, latency and ownership explained. Find out which platform suits your gaming style in 2026.",
    date: "2024-07-10",
    author: "PerfCalcPro",
    image: "/blog-images/blog7-1.png",
    content: blog7,
  },
  {
    id: 8,
    slug: "star-citizen-dps-calculator",
    title: "Star Citizen Dps Calculator - How to calculate DPS in Star Citizen",
    description:" Stop optimizing for on-paper DPS. This guide covers real Effective Damage Per Second in Alpha 4.5 Maelstrom armor, Resource Network limits, TTK targeting, and fleet roles.",
    date :"2024-07-15",
    author:"perfcalcpro",
    image:"/blog-images/blog8-1.png",
    content:blog8,
  },{
    id: 9,
    slug: "fps-in-minecraft",
    title: "How to Improve FPS in Minecraft: A Complete Guide",
    description: "Discover simple tweaks to boost FPS in Minecraft. Optimize settings, install performance mods, and fix lag for smoother, faster gameplay today.",
    date: "2024-07-20",
    author: "PerfCalcPro",
    image: "/blog-images/blog9-1.png",
    content: blog9,
  },

  {
  id: 10,
  slug: "counter-strike-2-online-play-guide",
  title: "Counter-Strike 2 Online Play Guide: How to Get Started and Play Smoothly in 2026",
  description:
    "Learn how to install, set up, and play Counter-Strike 2 online smoothly in 2026. Covers Steam setup, game modes, maps, CSO2 spin-off, FPS optimization, and FAQs.",
  date: "2026-06-23",
  author: "PerfCalcPro",
  image: "/blog-images/counter-striker1.png",
  content: blog10,
},
{
  id: 11,
    slug: "is-pubg-cross-platform",
    title: "Is PUBG Cross Platform in 2026? Crossplay Guide for All Platforms ",

    description: "PUBG crossplay works on console and PC — but not between them. See every platform combo, what changed in Nov 2025, and what crossplay off does to your lobbies.",

    excerpt: "PUBG runs three separate matchmaking pools. Console crossplay works, PC stays separate, and mobile connects only within iOS and Android. This guide covers every platform combo, including the ones that quietly ruin your experience.",
    image: "/blog-images/pubg1.png",
    
    author: "Rao Awais",
    date: "June 25, 2026",
    readTime: "10 min read",
    content:blog11,
}


];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}