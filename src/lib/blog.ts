import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

export function readingMinutes(body: string | undefined): number {
  const text = (body ?? '').replace(/\s/g, '');
  return Math.max(1, Math.round(text.length / 450));
}

export function postHref(post: Post): string {
  return `/${post.id}/`;
}

export const PAGE_SIZE = 8;

export function pageCount(total: number, size = PAGE_SIZE): number {
  return Math.max(1, Math.ceil(total / size));
}

export function pageSlice<T>(items: T[], page: number, size = PAGE_SIZE) {
  const totalPages = pageCount(items.length, size);
  const current = Number.isFinite(page) ? Math.trunc(page) : 1;
  const safe = Math.min(Math.max(current, 1), totalPages);
  const start = (safe - 1) * size;
  return {
    items: items.slice(start, start + size),
    page: safe,
    totalPages,
    total: items.length,
    from: items.length === 0 ? 0 : start + 1,
    to: Math.min(start + size, items.length),
  };
}

export function pageWindow(page: number, total: number): Array<number | 'gap'> {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);
  const items: Array<number | 'gap'> = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(total - 1, page + 1);
  if (start > 2) items.push('gap');
  for (let number = start; number <= end; number += 1) items.push(number);
  if (end < total - 1) items.push('gap');
  items.push(total);
  return items;
}

export function homePageHref(page: number): string {
  return page <= 1 ? '/' : `/page/${page}/`;
}

export function tagPageHref(tag: string, page: number): string {
  const base = `/tags/${encodeURIComponent(tag)}/`;
  return page <= 1 ? base : `${base}page/${page}/`;
}
