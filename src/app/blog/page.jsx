export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Understanding GPU Bottleneck",
      date: "April 20, 2024",
      excerpt: "Learn how to identify and understand GPU bottlenecks in your gaming setup.",
      category: "Gaming",
    },
    {
      id: 2,
      title: "FPS Tips & Tricks",
      date: "April 15, 2024",
      excerpt: "Discover the best ways to optimize your FPS and improve gaming performance.",
      category: "Performance",
    },
    {
      id: 3,
      title: "DPS Calculator Guide",
      date: "April 10, 2024",
      excerpt: "A comprehensive guide to using our DPS calculator for RPG games.",
      category: "Guides",
    },
    {
      id: 4,
      title: "CPU vs GPU: Which Matters More?",
      date: "April 5, 2024",
      excerpt: "Understand the differences and which component is more important for gaming.",
      category: "Gaming",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10 text-gray-100">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">GameTools Blog</h1>
        <p className="text-gray-400 text-lg">
          Tips, guides, and insights for gaming enthusiasts and PC builders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-cyan-300 bg-cyan-400/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time className="text-sm text-gray-500">{post.date}</time>
            </div>

            <h2 className="text-xl font-bold mb-3 text-white hover:text-cyan-300 transition-colors">
              {post.title}
            </h2>

            <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>

            <button className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors flex items-center gap-2">
              Read More →
            </button>
          </article>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 mt-12">
        <h2 className="text-2xl font-bold mb-3">Coming Soon</h2>
        <p className="text-gray-400">
          We're working on more blog posts covering advanced gaming topics, tool tutorials, and gaming trends.
          Check back soon for more content!
        </p>
      </div>
    </section>
  );
}
