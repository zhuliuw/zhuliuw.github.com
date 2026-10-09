import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'zhuliuwu',
    description: 'zhuliuwu 的个人博客。热爱生活，热爱运动，热爱户外。',
    site: context.site ?? 'https://zhuliuw.github.io',
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.id}/`,
    })),
    customData: '<language>zh-cn</language>',
  });
}
