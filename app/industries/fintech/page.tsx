import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, TrendingUp, Shield, Zap, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fintech Video Production — SaaS Animate',
  description: 'Explainer videos and product demos for fintech companies. Simplify complex financial products with clear, compliant video content.',
  openGraph: {
    title: 'Fintech Video Production — SaaS Animate',
    description: 'Explainer videos and product demos for fintech companies. Simplify complex financial products with clear, compliant video content.',
  },
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Simplify Complex Products',
    description: 'Turn intricate financial concepts into clear, compelling narratives that anyone can understand.',
  },
  {
    icon: Shield,
    title: 'Compliance-Ready Content',
    description: 'We work with your legal team to ensure all claims are accurate and compliant.',
  },
  {
    icon: Zap,
    title: 'Build Trust Fast',
    description: 'Professional video establishes credibility in an industry where trust is everything.',
  },
  {
    icon: Building2,
    title: 'B2B & B2C Expertise',
    description: 'Whether you sell to banks or consumers, we craft videos that resonate with your audience.',
  },
];

const useCases = [
  {
    title: 'Homepage Explainer',
    description: 'Introduce your fintech platform and drive signups or demo requests.',
  },
  {
    title: 'Product Demo',
    description: 'Show how your solution works without revealing sensitive IP.',
  },
  {
    title: 'Investor Pitch',
    description: 'Communicate your vision and traction to potential investors.',
  },
  {
    title: 'Sales Enablement',
    description: 'Equip your sales team with videos that shorten deal cycles.',
  },
];

export default function FintechIndustryPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">Fintech Video Production</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                Make complex finance <em className="text-accent">simple and compelling</em>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                From payments to lending, wealth tech to insurtech—we create videos that explain your product and build trust with regulators, investors, and customers.
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
              Videos for every <em className="text-accent">fintech use case</em>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-bg-2 rounded-2xl p-8 border border-border">
                  <h3 className="font-serif text-2xl mb-3">{useCase.title}</h3>
                  <p className="text-fg-dim text-base">{useCase.description}</p>
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
              Let&apos;s simplify your <em className="text-accent">fintech story</em>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free consultation to discuss your fintech video project.
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
