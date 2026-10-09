zhuliuwu 的个人博客。

热爱生活，热爱运动，热爱户外。喜欢探索新事物，不安于现状。

站点用 [Astro](https://astro.build) 和 Tailwind CSS 生成静态页面，文章是 `src/content/blog` 里的 Markdown。

```bash
npm ci
npm run dev
```

本地预览在 <http://localhost:4321>。`npm run build` 会把站点生成到 `dist/`。

推到 `master` 后，GitHub Actions 会发布到 GitHub Pages。仓库的 Pages 来源需要设成 GitHub Actions。

新文章：在 `src/content/blog` 新建一个 `.md`，写上 `title`、`description`、`pubDate`、`category`、`tags`。图片放在 `public/images`，文中用 `/images/文件名`。
