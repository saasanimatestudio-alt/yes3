import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — SaaS Video Insights',
  description:
    'Practical guides, case studies and frameworks from a studio that\'s shipped 300+ videos for SaaS companies.',
  openGraph: {
    title: 'Blog — SaaS Video Insights',
    description:
      'Practical guides, case studies and frameworks from a studio that\'s shipped 300+ videos for SaaS companies.',
  },
};

export default function BlogPage() {
  return (
    <section className="pt-40 pb-28 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <Reveal>
            <div className="section-label">The SaaS Animate Blog</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
              Insights on <em className="text-accent">SaaS video</em>, storytelling & growth.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-base max-w-md">
              Practical guides, case studies and frameworks from a studio that&apos;s shipped 300+ videos for SaaS companies.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 50}>
              <Link href={`/blog/${post.slug}`} className="blog-card block">
                <div className="aspect-video bg-gradient-to-br from-bg-3 to-bg-4 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex gap-4 items-center text-xs text-fg-muted mb-3 tracking-wide uppercase">
                    <span className="text-accent font-medium">{post.tag}</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl leading-tight tracking-tight mb-3">{post.title}</h2>
                  <p className="text-fg-dim text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-medium">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
