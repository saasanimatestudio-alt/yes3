import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Megaphone, CheckCircle, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Promo Videos | SaaS Animate',
  description: 'Short-form promo videos engineered for paid social, display ads and landing pages. We create 6, 15 and 30-second cuts that stop scroll and drive conversions.',
  keywords: 'SaaS promo video, social media video ads, paid social video, short-form video ads, SaaS advertising video, LinkedIn video ads, YouTube pre-roll, display ad video',
};

const benefits = [
  {
    icon: Zap,
    title: 'Stop-Scroll Creative',
    description: 'Our promo videos are designed to grab attention in the first 2 seconds. Bold visuals, punchy messaging, and strategic hooks that make viewers pause.',
  },
  {
    icon: Target,
    title: 'Platform Optimized',
    description: 'Every cut is tailored for its platform—whether that's LinkedIn, Instagram, YouTube, or display networks. We optimize aspect ratios, captions, and CTAs.',
  },
  {
    icon: Megaphone,
    title: 'Conversion Focused',
    description: 'These aren't just brand awareness pieces. Every promo video has a clear CTA and is engineered to drive clicks, signups, and demos.',
  },
];

const useCases = [
  {
    title: 'Paid Social Ads',
    description: 'Thumb-stopping creative for LinkedIn, Twitter/X, Facebook, and Instagram. Designed to interrupt scrolling and capture attention.',
  },
  {
    title: 'YouTube Pre-Roll',
    description: '6-second bumpers and 15-second skippable ads that maximize view-through rates and minimize skip rates.',
  },
  {
    title: 'Display & Programmatic',
    description: 'Silent-autoplay optimized videos for display networks. Visual storytelling that works without sound.',
  },
  {
    title: 'Landing Page Heroes',
    description: 'Short, punchy videos above the fold that increase conversion rates and communicate value instantly.',
  },
  {
    title: 'Product Launch Campaigns',
    description: 'Coordinated video assets across channels for maximum launch impact. Consistent messaging, varied formats.',
  },
  {
    title: 'Retargeting Campaigns',
    description: 'Specific messages for specific audiences. Retarget cart abandoners, trial users, or pricing page visitors.',
  },
];

const process = [
  {
    num: '01',
    title: 'Strategy & Brief',
    description: 'Defining your target audience, campaign goals, and key messages. Selecting the right platforms and formats.',
  },
  {
    num: '02',
    title: 'Creative Development',
    description: 'Crafting hooks, storyboards, and scripts optimized for short-form. Multiple variations for A/B testing.',
  },
  {
    num: '03',
    title: 'Production & Editing',
    description: 'Creating the hero asset and cutting it into platform-specific versions. Adding captions, CTAs, and end cards.',
  },
  {
    num: '04',
    title: 'Launch & Optimize',
    description: 'Deploying across channels with proper tracking. Analyzing performance and iterating on winners.',
  },
];

const stats = [
  { value: '3x', label: 'Higher CTR vs Static' },
  { value: '67%', label: 'Lower CPA' },
  { value: '85%', label: 'Better Recall' },
  { value: '2.4x', label: 'More Conversions' },
];

export default function PromoVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">SaaS Promo Videos</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Short-form content that <em className="text-accent">converts</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              Short-form content engineered for paid social, display ads and landing pages. 
              6, 15 and 30-second cuts designed to stop scroll, capture attention, and drive action.
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
              Why <em className="text-accent">promo videos</em> outperform?
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
              From paid social to programmatic display, our promo videos perform across every 
              channel where attention is scarce and competition is fierce.
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
              Ready to launch your <em className="text-accent">ad campaigns</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're scaling paid social, launching on Product Hunt, or running 
              multi-channel campaigns, our promo videos help SaaS companies maximize ROAS.
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
                  <h4 className="font-medium text-white mb-1">A/B Test Ready</h4>
                  <p className="text-fg-dim text-sm">Multiple variations for testing hooks, CTAs, and creative approaches.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Platform Native</h4>
                  <p className="text-fg-dim text-sm">Optimized for each platform's specs, audience behavior, and best practices.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Fast Turnaround</h4>
                  <p className="text-fg-dim text-sm">Campaign-ready videos in 2-3 weeks so you can launch faster.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
