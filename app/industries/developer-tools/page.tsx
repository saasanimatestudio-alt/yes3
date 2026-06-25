import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Code, Terminal, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Developer Tools Video Production — SaaS Animate',
  description: 'Technical explainer videos for developer tools, APIs, and infrastructure platforms. Speak directly to engineers with clear, code-aware content.',
  openGraph: {
    title: 'Developer Tools Video Production — SaaS Animate',
    description: 'Technical explainer videos for developer tools, APIs, and infrastructure platforms. Speak directly to engineers with clear, code-aware content.',
  },
};

const benefits = [
  {
    icon: Code,
    title: 'Speak Developer Language',
    description: 'We create content that respects technical depth while remaining accessible to all skill levels.',
  },
  {
    icon: Terminal,
    title: 'Code-Friendly Visuals',
    description: 'Showcase your API, SDK, or CLI with clean, readable code snippets and terminal animations.',
  },
  {
    icon: Users,
    title: 'Multi-Level Targeting',
    description: 'Craft messages that resonate with individual devs, engineering managers, and CTOs alike.',
  },
  {
    icon: Zap,
    title: 'Drive Adoption',
    description: 'Clear explanations reduce onboarding friction and accelerate time to first successful integration.',
  },
];

const useCases = [
  {
    title: 'API Explainer',
    description: 'Show developers how your API solves their problems in under 90 seconds.',
  },
  {
    title: 'Product Demo',
    description: 'Walk through key features and integrations with real code examples.',
  },
  {
    title: 'Documentation Intro',
    description: 'Welcome developers to your docs with an engaging overview video.',
  },
  {
    title: 'Conference Launch',
    description: 'Make a splash at tech conferences with a polished product reveal.',
  },
];

export default function DeveloperToolsIndustryPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">Developer Tools Video Production</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                Explain dev tools without <em className="text-accent">dumbing it down</em>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                From APIs to infrastructure, CI/CD to observability—we create videos that earn developer trust and drive adoption.
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
              Videos for every <em className="text-accent">dev rel use case</em>.
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
              Ready to ship your <em className="text-accent">dev tool video</em>?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free consultation to discuss your developer tools video project.
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
