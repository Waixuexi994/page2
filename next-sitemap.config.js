/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://apicore.ai", // 👈 替换成你部署的 vercel 域名
  generateRobotsTxt: true,
  outDir: "./public",
  exclude: ["/404", "/500"]
};
