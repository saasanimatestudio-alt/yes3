import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Heart, Shield, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Video Production — SaaS Animate',
  description: 'Patient-friendly and HIPAA-compliant explainer videos for healthcare companies, digital health startups, and medical device manufacturers.',
  openGraph: {
    title: 'Healthcare Video Production — SaaS Animate',
    description: 'Patient-friendly and HIPAA-compliant explainer videos for healthcare companies, digital health startups, and medical device manufacturers.',
  },
};

const benefits = [
  {
    icon: Heart,
    title: 'Patient-Centric Storytelling',
    description: 'Create empathy-driven content that resonates with patients, providers, and payers alike.',
  },
  {
    icon: Shield,
    title: 'HIPAA-Compliant Process',
    description: 'We follow strict privacy protocols and work within your compliance requirements.',
  },
  {
    icon: Users,
    title: 'Multi-Audience Appeal',
    description: 'Craft messages that work for patients, clinicians, administrators, and investors.',
  },
  {
    icon: Clock,
    title: 'Faster Adoption',
    description: 'Clear explanations reduce training time and accelerate product adoption.',
  },
];

const useCases = [
  {
    title: 'Patient Education',
    description: 'Explain conditions, treatments, and how your solution improves outcomes.',
  },
  {
    title: 'Provider Training',
    description: 'Onboard clinicians and staff with engaging, memorable video content.',
  },
  {
    title: 'Investor Pitches',
    description: 'Communicate your vision and market opportunity to healthcare investors.',
  },
  {
    title: 'Sales Enablement',
    description: 'Support your sales team with videos that shorten hospital procurement cycles.',
  },
];

export default function HealthcareIndustryPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">Healthcare Video Production</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                Explain healthcare with <em className="text-accent">clarity and care</em>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                From digital health apps to medical devices, we create videos that educate patients, support providers, and drive adoption in the complex healthcare ecosystem.
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
              Videos for every <em className="text-accent">healthcare stakeholder</em>.
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
              Ready to improve <em className="text-accent">patient outcomes</em>?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free consultation to discuss your healthcare video project.
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
