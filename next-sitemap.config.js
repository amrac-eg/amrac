/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://artx.sa",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // لو عايز sitemap واحد فقط
  outDir: "./public",

  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/services"),
    await config.transform(config, "/our-work"),
    await config.transform(config, "/contact"),
    // ضيف كل صفحاتك هنا
  ],
};
