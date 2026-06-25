import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { CalendlyEmbed } from '@/components/calendly-embed';
import { Clock, Video, FileCheck, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Call — Free Strategy Session',
  description:
    'Book a free 30-minute strategy call via Google Meet. We\'ll discuss your project, scope the work, and send a tailored proposal within 24 hours.',
  openGraph: {
    title: 'Book a Call — Free Strategy Session',
    description:
      'Book a free 30-minute strategy call via Google Meet. We\'ll discuss your project, scope the work, and send a tailored proposal within 24 hours.',
  },
};

const benefits = [
  { icon: Clock, title: '30 Minutes', description: 'Short, focused, and respectful of your time.' },
  { icon: Video, title: 'Google Meet', description: 'Join from anywhere. Link sent on confirmation.' },
  { icon: FileCheck, title: 'Proposal in 24h', description: 'Fixed quote, timeline, and scope after the call.' },
  { icon: Shield, title: 'No Obligation', description: 'Free strategy call. Zero commitment required.' },
];

export default function BookingPage() {
  return (
    <section className="pt-40 pb-28 px-10">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">
              <span className="w-5 h-px bg-accent inline-block" />
              Book a Call
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
              Let&apos;s talk about your <em className="text-accent italic">next video</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-2xl mx-auto">
              Book a free 30-minute strategy call via Google Meet. We&apos;ll discuss your project, scope the work, and send you a tailored proposal within 24 hours. No pressure, no pitch — just a real conversation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-bg-2 border border-border rounded-xl text-center">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mx-auto mb-4 text-accent">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-normal mb-2">{benefit.title}</h4>
                <p className="text-fg-dim text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="bg-bg-2 border border-border rounded-2xl p-4 overflow-hidden">
            <CalendlyEmbed height={700} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
