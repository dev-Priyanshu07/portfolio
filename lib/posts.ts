import 'server-only';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

export type Post = { slug: string; title: string; date: string; description: string; content: string };

const postsDirectory = join(process.cwd(), 'content', 'posts');

export function getPosts(): Post[] {
  return readdirSync(postsDirectory, { withFileTypes: true }).filter(entry => entry.isFile() && entry.name.endsWith('.md')).flatMap(entry => {
    const path = join(postsDirectory, entry.name);
    const source = readFileSync(path, 'utf8');
    const { data, content } = matter(source);
    if (data.draft === true) return [];
    const slug = entry.name.slice(0, -3);
    const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || typeof data.title !== 'string' || !data.title.trim() || typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
      throw new Error(`Invalid post metadata in ${path}: use a lowercase-hyphen filename, title, and valid YYYY-MM-DD date.`);
    }
    if (data.draft !== undefined && typeof data.draft !== 'boolean') throw new Error(`Use draft: true or draft: false in ${path}.`);
    return [{ slug, title: data.title, date, description: typeof data.description === 'string' ? data.description : '', content }];
  }).sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(date));
}
