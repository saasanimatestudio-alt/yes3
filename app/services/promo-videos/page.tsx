import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Megaphone, CheckCircle, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Promo Videos | SaaS Animate',
  description: 'High-impact promo videos for SaaS companies. Short-form content optimized for paid social, display ads, landing pages, and product launches. 6, 15, and 30-second cuts that convert.',
  keywords: 'SaaS promo video, software promo, product launch video, social media video ads, SaaS advertising, short-form video content, paid social video, LinkedIn ads, YouTube ads, conversion video',
};

const benefits = [
  {
    icon: Zap,
    title: 'Scroll-Stopping Creative',
    description: "Designed to halt the scroll in crowded feeds. Bold visuals, punchy messaging, and immediate value propositions that capture attention in under 3 seconds.",
  },
  {
    icon: Target,
    title: 'Platform Optimized',
    description: "Every promo is crafted for specific platforms—LinkedIn, Twitter/X, YouTube, Instagram, TikTok. Aspect ratios, lengths, and CTAs tailored to each channel.",
  },
  {
    icon: Megaphone,
    title: 'Conversion Focused',
    description: "Promo videos aren't just creative—they're engineered to drive action. Clear CTAs, urgency triggers, and benefit-led messaging maximize ROAS.",
  },
];

const process = [
  {
    num: '01',
    title: 'Strategy & Brief',
    description: 'We define your target audience, campaign objectives, and key messages. Platform selection and budget allocation inform creative direction.',
  },
  {
    num: '02',
    title: 'Creative Development',
    description: 'Our team develops concepts specifically for short-form performance. Hook-first storytelling with rapid value delivery in every second.',
  },
  {
    num: '03',
    title: 'Production & Variants',
    description: 'Master assets are produced, then cut into platform-specific variants. Different hooks, lengths, and CTAs for A/B testing at scale.',
  },
  {
    num: '04',
    title: 'Launch & Iterate',
    description: 'Deploy across channels with tracking in place. We analyze performance data and iterate on winners to continuously improve ROAS.',
  },
];

const useCases = [
  {
    title: 'Paid Social Ads',
    description: 'LinkedIn, Twitter/X, and Facebook ads that stop the scroll. 6-15 second promos with clear CTAs driving trial signups or demo requests.',
  },
  {
    title: 'YouTube Pre-Roll',
    description: 'Skippable and non-skippable ads optimized for the first 5 seconds. Hook viewers before they can skip and drive them to your landing page.',
  },
  {
    title: 'Landing Page Headers',
    description: 'Replace static hero images with dynamic promo loops. Video headers increase engagement and time-on-page significantly.',
  },
  {
    title: 'Product Hunt Launches',
    description: 'Launch day promos that generate excitement and drive upvotes. Short, energetic cuts perfect for the Product Hunt community.',
  },
  {
    title: 'Email Campaigns',
    description: 'Embed promo GIFs or video thumbnails in email campaigns. Video in email increases click-through rates by 300%+.',
  },
  {
    title: 'Retargeting Campaigns',
    description: 'Re-engage visitors who didn't convert with targeted promo content. Different messages for different stages of the funnel.',
  },
];

const stats = [
  { value: '1200%', label: 'More Shares Than Text' },
  { value: '300%', label: 'Higher Email CTR' },
  { value: '85%', label: 'Better Ad Recall' },
  { value: '64%', label: 'Increased Purchase Intent' },
];

export default function PromoVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">SaaS Promo Videos</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Short-form content that <em className="text-accent">stops the scroll</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              Promo videos are engineered for paid social, display ads, and landing pages. 
              We create 6, 15, and 30-second cuts that capture attention instantly and drive 
              measurable conversions across every platform.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="text-center p-6 bg-bg-2 rounded-xl border border-border">
                  <div className="text-accent font-serif text-3xl md:text-4xl mb-2">{stat.value}</div>
                  <div className="text-fg-muted text-sm">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-4xl mb-16">
              Why invest in <em className="text-accent">promo content</em>?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="service-card h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent-soft flex items-center justify-center mb-7 text-accent">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight mb-4">{benefit.title}</h3>
                  <p className="text-fg-dim text-base leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-10 border-t border-border bg-bg-2">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-4xl mb-6">
              Where promo videos <em className="text-accent">drive results</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              From paid acquisition to retention campaigns, promo content performs across 
              every stage of the customer journey.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="p-8 bg-bg rounded-xl border border-border hover:border-accent/50 transition-colors">
                  <h3 className="font-serif text-xl mb-3">{useCase.title}</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">{useCase.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-4xl mb-20">
              Our <em className="text-accent">production process</em>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {process.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`process-step ${i < 3 ? 'lg:border-r' : ''} ${i >= 2 ? 'border-b md:border-b-0 lg:border-b-0' : ''}`}>
                  <div className="text-accent text-sm font-medium mb-6 tracking-wide">{step.num}</div>
                  <h3 className="font-serif text-2xl mb-4 leading-tight">{step.title}</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-10 border-t border-border bg-bg-2">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-4xl mb-8">
              Ready to launch your <em className="text-accent">promo campaign</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're scaling paid acquisition, launching a new feature, or running 
              a time-sensitive promotion, our promo videos help SaaS companies capture 
              attention and convert at scale.
            </p>
          </Reveal>

          <div className="flex flex-col sm:flex-row gap-4">
            <Reveal delay={100}>
              <Link href="/booking" className="btn btn-primary">
                Book a Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Reveal>
            <Reveal delay={200}>
              <Link href="/portfolio" className="btn btn-secondary">
                View Promo Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Platform Expertise</h4>
                  <p className="text-fg-dim text-sm">We know what works on LinkedIn, YouTube, Twitter, and beyond.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">A/B Testing Ready</h4>
                  <p className="text-fg-dim text-sm">Multiple variants built for systematic testing and optimization.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Fast Turnaround</h4>
                  <p className="text-fg-dim text-sm">Launch-ready promos in 2-3 weeks for time-sensitive campaigns.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
