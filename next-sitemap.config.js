/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://abhidekho.online/', // Apni site ka actual URL daalo
  generateRobotsTxt: true, // robots.txt bhi generate hoga
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*'], // Agar koi pages exclude karne hain
  additionalPaths: async (config) => [
    await config.transform(config, '/api/download-apk'), // APK download link add
  ],
};
