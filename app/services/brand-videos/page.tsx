import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Heart, CheckCircle, Target, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Brand Videos | SaaS Animate',
  description: 'Cinematic brand videos that tell your SaaS story. Manifesto films, culture pieces, and origin stories that connect emotionally with your audience and build lasting brand affinity.',
  keywords: 'SaaS brand video, software brand film, company culture video, SaaS manifesto, brand storytelling, corporate video production, SaaS origin story, brand documentary, emotional brand video, B2B brand film',
};

const benefits = [
  {
    icon: Heart,
    title: 'Emotional Connection',
    description: "Brand videos go beyond features to tap into the deeper why behind your company. They build emotional resonance that transforms viewers into advocates.",
  },
  {
    icon: Target,
    title: 'Brand Positioning',
    description: "Articulate your unique perspective on the market, your values, and what you stand for. Brand videos position you as a leader, not just another tool.",
  },
  {
    icon: Globe,
    title: 'Multi-Platform Impact',
    description: "From homepage hero sections to conference keynotes, recruitment pages to investor decks—brand videos work everywhere your story needs to be told.",
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery & Insight',
    description: 'We immerse ourselves in your company culture, interview founders and team members, and uncover the authentic story that makes your brand unique.',
  },
  {
    num: '02',
    title: 'Narrative Development',
    description: 'Our writers craft a compelling narrative arc that balances emotion with authenticity. Every word serves the larger story of who you are and why you exist.',
  },
  {
    num: '03',
    title: 'Production & Direction',
    description: 'Whether live-action, animated, or hybrid, we direct with intention. Cinematography, pacing, music—all chosen to evoke the right feeling.',
  },
  {
    num: '04',
    title: 'Distribution Strategy',
    description: 'Receive your brand film plus optimized cuts for social media, events, and internal communications. We help you maximize reach and impact.',
  },
];

const useCases = [
  {
    title: 'Homepage Brand Film',
    description: 'Set the tone for your entire brand experience. A powerful brand film above the fold creates immediate emotional connection and memorability.',
  },
  {
    title: 'About Us / Culture Page',
    description: 'Show potential hires and customers who you really are. Authentic culture videos attract talent and build trust with enterprise buyers.',
  },
  {
    title: 'Founder Story',
    description: "Share the origin story that makes your company unique. Founder-led narratives build credibility and humanize your brand.",
  },
  {
    title: 'Conference Keynotes',
    description: 'Open your product launches and company events with cinematic impact. Brand films set the emotional stage for everything that follows.',
  },
  {
    title: 'Investor Relations',
    description: "Communicate vision, values, and long-term thinking to current and potential investors. Brand videos demonstrate strategic clarity.",
  },
  {
    title: 'Recruitment & Hiring',
    description: 'Attract top talent by showcasing your culture, mission, and the impact employees can make. Brand videos are powerful recruiting tools.',
  },
];

const stats = [
  { value: '73%', label: 'Higher Brand Recall' },
  { value: '4.5x', label: 'More Social Shares' },
  { value: '85%', label: 'Better Message Retention' },
  { value: '67%', label: 'Increased Trust' },
];

export default function BrandVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">SaaS Brand Videos</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Stories that make people <em className="text-accent">feel something</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              Brand videos transcend product features to tell the deeper story of who you are, 
              what you believe, and why you exist. They build emotional connections that turn 
              viewers into advocates and employees into ambassadors.
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
              Why invest in a <em className="text-accent">brand film</em>?
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
              Where brand videos <em className="text-accent">create impact</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              From recruitment to investor relations, brand films communicate your essence 
              across every critical touchpoint.
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
              Our <em className="text-accent">storytelling process</em>.
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
              Ready to share your <em className="text-accent">brand story</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're building awareness, attracting talent, or positioning for acquisition, 
              our brand videos help SaaS companies connect emotionally and build lasting relationships.
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
                View Brand Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Authentic Storytelling</h4>
                  <p className="text-fg-dim text-sm">We uncover and amplify the real stories that make your company unique.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Cinematic Quality</h4>
                  <p className="text-fg-dim text-sm">Professional production that reflects the caliber of your brand.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Strategic Distribution</h4>
                  <p className="text-fg-dim text-sm">Maximize impact with optimized cuts for every platform and use case.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
