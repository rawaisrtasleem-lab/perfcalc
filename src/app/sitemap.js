export default async function sitemap() {
  const baseUrl = "https://perfcalcpro.com"

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools/fps-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/dps-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/bottleneck-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/xp-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    
    {
  url: `${baseUrl}/blog`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: `${baseUrl}/blog/gta-6-fps`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},

{
  url: `${baseUrl}/blog/fps-in-video-editing`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url : `${baseUrl}/blog/what-is-a-good-fps`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},



{

  url : `${baseUrl}/blog/can-my-pc-run-it`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url : `${baseUrl}/blog/fps-vs-hz`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url : `${baseUrl}/blog/good-fps-for-gaming`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,

},
{


  url : `${baseUrl}/blog/best-budget-gaming-pc`,
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
}

  ]

  return routes
}
