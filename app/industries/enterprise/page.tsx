import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Building2, TrendingUp, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Software Video Production — SaaS Animate',
  description: 'Strategic explainer videos and sales enablement content for enterprise software companies. Win more deals with video built for complex sales cycles.',
  openGraph: {
    title: 'Enterprise Software Video Production — SaaS Animate',
    description: 'Strategic explainer videos and sales enablement content for enterprise software companies. Win more deals with video built for complex sales cycles.',
  },
};

const benefits = [
  {
    icon: Building2,
    title: 'Built for Enterprise Sales',
    description: 'Videos designed to support multi-stakeholder, long-cycle B2B sales processes.',
  },
  {
    icon: TrendingUp,
    title: 'Executive-Level Messaging',
    description: 'Craft narratives that resonate with C-suite buyers and economic decision-makers.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance Ready',
    description: 'Address enterprise concerns around security, compliance, and integration upfront.',
  },
  {
    icon: Users,
    title: 'Multi-Audience Content',
    description: 'Create variants for technical evaluators, business users, and executive sponsors.',
  },
];

const useCases = [
  {
    title: 'Sales Deck Video',
    description: 'Embed a polished explainer in your pitch deck to capture attention instantly.',
  },
  {
    title: 'RFP Response',
    description: 'Stand out in competitive bids with a clear, professional product overview.',
  },
  {
    title: 'Customer Onboarding',
    description: 'Accelerate time-to-value with engaging onboarding and training videos.',
  },
  {
    title: 'Analyst Briefings',
    description: 'Communicate your vision clearly to Gartner, Forrester, and other analysts.',
  },
];

export default function EnterpriseIndustryPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">Enterprise Software Video Production</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                Win enterprise deals with <em className="text-accent">strategic video</em>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                From Fortune 500 pitches to analyst briefings, we create videos that support complex enterprise sales cycles and drive revenue growth.
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
              Videos for every <em className="text-accent">enterprise touchpoint</em>.
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
              Ready to close more <em className="text-accent">enterprise deals</em>?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free consultation to discuss your enterprise video strategy.
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
