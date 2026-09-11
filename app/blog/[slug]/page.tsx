import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { getPosts, formatPostDate } from '../../../lib/posts';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find(item => item.slug === slug);
  if (!post) return { title: 'Post not found | Priyanshu' };
  return { title: `${post.title} | Priyanshu`, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPosts().find(item => item.slug === slug);
  if (!post) notFound();
  return <main className="page writing-page">
    <header className="masthead"><a className="writing-back" href="/blog"><ArrowLeft size={16} aria-hidden="true" /> all writing</a></header>
    <article className="writing-content">
      <h1>{post.title}</h1>
      <time className="date post-date" dateTime={post.date}>{formatPostDate(post.date)}</time>
      <div className="prose"><Markdown skipHtml>{post.content}</Markdown></div>
    </article>
  </main>;
}
