import type { Metadata } from 'next';
import { ArrowLeft, BookOpen, Home } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';

export const metadata: Metadata = {
  title: 'Writing | Priyanshu',
  description: 'Things that i carry a part of. Writing by Priyanshu.',
};

export default function BlogPage() {
  return <>
    <main className="page writing-page">
      <header className="masthead"><a className="writing-back" href="/"><ArrowLeft size={16} aria-hidden="true" /> back home</a></header>
      <section className="writing-content" aria-labelledby="writing-title">
        <h1 id="writing-title">things that i carry a part of</h1>
        <p className="subtle">no posts yet. a few thoughts are taking shape.</p>
      </section>
    </main>
    <nav className="dock" aria-label="Main navigation">
      <a className="dock-item" href="/" aria-label="Home"><Home size={16} /><span className="tooltip">Home</span></a>
      <a className="dock-item active" href="/blog" aria-label="Blog" aria-current="page"><BookOpen size={16} /><span className="tooltip">Blog</span></a>
      <ThemeToggle />
    </nav>
  </>;
}
