import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-data';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['SaaS Animate'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-40 pb-28 px-10">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-fg-dim text-sm mb-10 hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        <span className="inline-block text-xs tracking-widest uppercase text-accent font-medium px-3 py-1.5 bg-accent-soft rounded-full mb-6">
          {post.tag}
        </span>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-6 items-center text-fg-muted text-sm pb-8 border-b border-border">
          <span>By SaaS Animate Team</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="aspect-video rounded-2xl overflow-hidden my-10 bg-bg-2">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none
            [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:font-normal [&>h2]:text-white [&>h2]:mt-12 [&>h2]:mb-4
            [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-normal [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3
            [&>p]:text-fg-dim [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:my-6 [&>ul]:pl-6 [&>ul]:text-fg-dim [&>ul]:space-y-2
            [&>ol]:my-6 [&>ol]:pl-6 [&>ol]:text-fg-dim [&>ol]:space-y-2
            [&>li]:text-base
            [&>strong]:text-white [&>strong]:font-semibold
            [&>blockquote]:border-l-[3px] [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8
            [&>blockquote]:font-serif [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:text-white [&>blockquote]:leading-relaxed
            [&_a]:text-accent [&_a]:no-underline [&_a]:font-medium hover:[&_a]:text-accent-2
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 p-10 bg-bg-2 border border-border rounded-2xl text-center">
          <h3 className="font-serif text-2xl font-normal mb-3">Ready to build your SaaS video?</h3>
          <p className="text-fg-dim mb-6">
            Book a free 30-minute call and get a custom proposal within 24 hours.
          </p>
          <Link href="/booking" className="btn btn-primary">
            Book a Call <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
