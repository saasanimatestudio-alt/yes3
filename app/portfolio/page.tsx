'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { VideoCard } from '@/components/video-card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'explainer', label: 'Explainer' },
  { id: 'demo', label: 'Demo' },
  { id: 'uxui', label: 'UX/UI' },
  { id: 'product', label: 'Product' },
  { id: 'brand', label: 'Brand' },
  { id: 'launch', label: 'Launch' },
];

const portfolioItems = [
  {
    videoId: 'IawDTvGuWo4',
    title: 'SaaS Explainer Video',
    subtitle: '90s · Product Launch',
    category: 'explainer',
    catLabel: 'SaaS Explainer',
    layout: 'wide' as const,
  },
  {
    videoId: '4SDvXMt7P5c',
    title: 'Product Demo Video',
    subtitle: '2:30 · Feature Showcase',
    category: 'demo',
    catLabel: 'Product Demo',
    layout: 'narrow' as const,
  },
  {
    videoId: 'A9qRIhEcZIY',
    title: 'UX/UI Animation',
    subtitle: '60s · Interface Design',
    category: 'uxui',
    catLabel: 'UX/UI Video',
    layout: 'narrow' as const,
  },
  {
    videoId: 'BGqK-Yioarw',
    title: 'Brand Launch Film',
    subtitle: '1:15 · Campaign Launch',
    category: 'launch',
    catLabel: 'Launch Video',
    layout: 'wide' as const,
  },
  {
    videoId: 'L8eXTx2C-J0',
    title: 'Brand Story Video',
    subtitle: '2:00 · Company Culture',
    category: 'brand',
    catLabel: 'Brand Film',
    layout: 'half' as const,
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-12">
            <Reveal>
              <div className="section-label">Our Work</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                Recent projects we&apos;re <em className="text-accent">proud of</em>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                A sample of the 300+ videos we&apos;ve shipped for SaaS teams from pre-seed to IPO. Click play to watch directly below.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-bg-2 border border-border rounded-full w-fit">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                    activeFilter === cat.id
                      ? 'bg-accent text-[#0a0a0a]'
                      : 'text-fg-dim hover:text-white'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {filteredItems.length === 0 ? (
            <Reveal>
              <div className="text-center py-20 text-fg-muted">
                No videos in this category yet.
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-12 gap-6">
              {filteredItems.map((item, i) => (
                <Reveal
                  key={item.videoId}
                  delay={i * 80}
                  className={cn(
                    item.layout === 'wide' && 'col-span-12 lg:col-span-7',
                    item.layout === 'narrow' && 'col-span-12 lg:col-span-5',
                    item.layout === 'half' && 'col-span-12 lg:col-span-6 lg:col-start-4'
                  )}
                >
                  <VideoCard
                    videoId={item.videoId}
                    title={item.title}
                    subtitle={item.subtitle}
                    category={item.catLabel}
                  />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-10 text-center relative overflow-hidden border-t border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,255,62,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Want results like <em className="text-accent">these</em>?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free call to discuss your next video project.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link href="/booking" className="btn btn-primary">
              Book a Call <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
