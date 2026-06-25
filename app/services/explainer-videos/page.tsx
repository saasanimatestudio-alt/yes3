import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Clock, CheckCircle, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Explainer Videos | SaaS Animate',
  description: 'Professional SaaS explainer videos that convert. We create 60-120 second animated stories that explain what your software does, who it\'s for, and why it matters. Perfect for landing pages, demos, and marketing campaigns.',
  keywords: 'SaaS explainer video, software explainer animation, product demo video, SaaS marketing video, animated explainer video, startup explainer video, B2B SaaS video, tech explainer animation, software demonstration video, SaaS launch video',
};

const benefits = [
  {
    icon: Target,
    title: 'One Outcome Per Video',
    description: 'We focus each explainer on a single, clear objective—whether that's driving sign-ups, explaining a feature, or supporting sales conversations. This laser focus maximizes conversion impact.',
  },
  {
    icon: Clock,
    title: '60-120 Second Sweet Spot',
    description: 'Research shows 90 seconds is the optimal length for explainer videos. Long enough to tell a compelling story, short enough to maintain attention throughout. We craft every second with purpose.',
  },
  {
    icon: CheckCircle,
    title: 'Conversion Engineered',
    description: 'Our explainers aren't just beautiful—they're built to convert. Strategic CTAs, benefit-focused messaging, and visual hierarchy guide viewers toward your desired action.',
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We start with a deep dive into your product, audience personas, competitive landscape, and conversion goals. This foundation ensures the final video resonates with your ideal customers.',
  },
  {
    num: '02',
    title: 'Script & Storyboard',
    description: 'Our copywriters craft scripts that speak directly to pain points and outcomes. Approved storyboards map every scene before animation begins, ensuring alignment on vision and messaging.',
  },
  {
    num: '03',
    title: 'Design & Animation',
    description: 'Our motion designers bring your brand to life with custom illustrations, smooth animations, and professional voiceover. Every frame is polished to reflect the quality of your software.',
  },
  {
    num: '04',
    title: 'Launch & Optimize',
    description: 'Receive your hero explainer plus optimized cuts for social media, ads, and email. We provide guidance on placement and A/B testing to maximize performance across channels.',
  },
];

const useCases = [
  {
    title: 'Homepage Hero Video',
    description: 'Capture visitor attention within seconds. A compelling explainer above the fold can increase conversions by 80%+ and reduce bounce rates significantly.',
  },
  {
    title: 'Product-Led Growth',
    description: 'Guide free trial users through key features and "aha moments." Contextual explainers embedded in onboarding flows boost activation rates and time-to-value.',
  },
  {
    title: 'Sales Enablement',
    description: 'Arm your sales team with a video that consistently articulates value. Shorten sales cycles by ensuring every prospect understands your solution before the first call.',
  },
  {
    title: 'Paid Advertising',
    description: 'Stop scroll with engaging visuals. Our 15, 30, and 60-second cuts are optimized for LinkedIn, YouTube, and display ads to maximize ROAS.',
  },
  {
    title: 'Investor Pitches',
    description: 'Communicate your vision clearly and memorably. A polished explainer demonstrates traction, market understanding, and execution capability to potential investors.',
  },
  {
    title: 'Customer Onboarding',
    description: 'Reduce support tickets and accelerate adoption. Welcome videos and feature explainers help new users get started confidently and discover value faster.',
  },
];

const stats = [
  { value: '80%', label: 'Higher Conversion Rates' },
  { value: '2.3x', label: 'More Time on Page' },
  { value: '70%', label: 'Better Message Retention' },
  { value: '64%', label: 'Increased Purchase Intent' },
];

export default function ExplainerVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">SaaS Explainer Videos</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              The cornerstone of <em className="text-accent">SaaS marketing</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              A 60-120 second animated story that explains what you do, who it's for, and why it matters. 
              Our SaaS explainer videos are engineered to convert visitors into users, trials into customers, 
              and prospects into advocates.
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
              Why invest in a <em className="text-accent">professional explainer</em>?
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
              Where explainer videos <em className="text-accent">drive results</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              From homepage hero sections to sales enablement, our explainers perform across every 
              touchpoint in the customer journey.
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
              Our <em className="text-accent">proven process</em>.
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
              Ready to explain your <em className="text-accent">SaaS story</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're launching a new product, entering a new market, or optimizing 
              conversion funnels, our explainer videos help SaaS companies communicate value 
              clearly and convert more visitors.
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
                View Explainer Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">SaaS Specialist Studio</h4>
                  <p className="text-fg-dim text-sm">We work exclusively with software companies. That focus is why our videos convert.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Conversion-Focused</h4>
                  <p className="text-fg-dim text-sm">Every frame is designed to move viewers toward your desired action.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Fast Turnaround</h4>
                  <p className="text-fg-dim text-sm">Launch-ready explainer videos in 4-6 weeks without compromising quality.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
