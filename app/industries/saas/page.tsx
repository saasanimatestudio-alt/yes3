import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Video Production — SaaS Animate',
  description: 'Specialized explainer videos, demo videos, and launch films for SaaS companies. Drive conversions with video built for the SaaS buyer journey.',
  openGraph: {
    title: 'SaaS Video Production — SaaS Animate',
    description: 'Specialized explainer videos, demo videos, and launch films for SaaS companies. Drive conversions with video built for the SaaS buyer journey.',
  },
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven Conversion Lift',
    description: 'SaaS clients see an average 41% increase in homepage conversion rates after launching their explainer video.',
  },
  {
    icon: Users,
    title: 'Built for PLG & Sales-Led',
    description: 'Videos optimized for both product-led growth funnels and enterprise sales cycles.',
  },
  {
    icon: Zap,
    title: 'Fast Time to Value',
    description: 'Our streamlined process gets your video live in 4-6 weeks, not months.',
  },
  {
    icon: CheckCircle,
    title: 'SaaS-First Approach',
    description: 'We only work with software companies. Your video will speak directly to your buyers.',
  },
];

const caseStudies = [
  {
    company: 'ProjectFlow',
    result: '+67% trial signups',
    video: 'Homepage explainer for project management SaaS',
  },
  {
    company: 'DataSync',
    result: '3.2× demo requests',
    video: 'Product demo video for data integration platform',
  },
  {
    company: 'SecureAuth',
    result: '+52% homepage conversions',
    video: 'Launch video for enterprise security platform',
  },
];

export default function SaaSIndustryPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">SaaS Video Production</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                Explainer videos built for the <em className="text-accent">SaaS buyer journey</em>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                From homepage explainers to Product Hunt launch films, we create videos that drive trials, demos, and revenue for SaaS companies.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {benefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="service-card">
                  <div className="w-14 h-14 rounded-xl bg-accent-soft flex items-center justify-center mb-7 text-accent">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight mb-3">{benefit.title}</h3>
                  <p className="text-fg-dim text-base leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mb-16">
              Results from <em className="text-accent">SaaS teams</em> like yours.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-bg-2 rounded-2xl p-8 border border-border">
                  <div className="text-accent text-sm font-medium mb-4">Case Study</div>
                  <h3 className="font-serif text-2xl mb-2">{study.company}</h3>
                  <p className="text-3xl font-semibold text-accent mb-4">{study.result}</p>
                  <p className="text-fg-dim text-sm">{study.video}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-10 text-center relative overflow-hidden border-t border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,255,62,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Ready to grow with <em className="text-accent">video</em>?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free strategy call to discuss your SaaS video project.
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
