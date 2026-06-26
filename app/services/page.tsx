import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import {
  Clock,
  MonitorPlay,
  Layout,
  Boxes,
  Heart,
  Megaphone,
  Zap,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — SaaS Video Production',
  description:
    'We produce SaaS explainer videos, demo videos, UX/UI motion, product films, brand videos, promo content, and launch videos — all engineered for conversion.',
  openGraph: {
    title: 'Services — SaaS Video Production',
    description:
      'We produce SaaS explainer videos, demo videos, UX/UI motion, product films, brand videos, promo content, and launch videos — all engineered for conversion.',
  },
};

const services = [
  {
    icon: Clock,
    title: 'SaaS Explainer Videos',
    description: 'The cornerstone of any SaaS marketing stack. A 60–120 second animated story that explains what you do, who it\'s for, and why it matters.',
    href: '/services/explainer-videos',
  },
  {
    icon: MonitorPlay,
    title: 'Demo Videos',
    description: 'Turn your product walkthrough into something people want to watch. We combine real UI capture with cinematic motion design.',
    href: '/services/demo-videos',
  },
  {
    icon: Layout,
    title: 'UX/UI Videos',
    description: 'Showcase your design system, user flows and interface polish with purpose-built motion pieces.',
    href: '/services/ux-ui-videos',
  },
  {
    icon: Boxes,
    title: 'Product Videos',
    description: 'Hero films that make your product feel like the only option. We blend motion graphics, live action and UI animation.',
    href: '/services/product-films',
  },
  {
    icon: Heart,
    title: 'Brand Videos',
    description: 'Manifesto films, culture pieces and origin stories. Less about features, more about feeling.',
    href: '#',
  },
  {
    icon: Megaphone,
    title: 'Promo Videos',
    description: 'Short-form content engineered for paid social, display ads and landing pages. 6, 15 and 30-second cuts.',
    href: '#',
  },
  {
    icon: Zap,
    title: 'Launch Videos',
    description: 'Event-grade films for Product Hunt, TechCrunch, conference keynotes and major releases.',
    href: '/services/launch-videos',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', description: 'We deep-dive into your product, audience, and goals in a focused 45-minute kickoff to map out the story that converts.' },
  { num: '02', title: 'Script & storyboard', description: 'One outcome per video. Approved before a single frame moves.' },
  { num: '03', title: 'Design & animation', description: 'On-brand boards, then full animation in After Effects, Rive or Lottie.' },
  { num: '04', title: 'Launch & cutdowns', description: 'Hero film plus paid social, vertical and silent-autoplay variants.' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">Our Services</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
                Every video your SaaS needs, made by <em className="text-accent">one specialist studio</em>.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                We work exclusively with software and tech companies. That focus is why our videos convert.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link href={service.href} className="service-card block">
                  <div className="w-14 h-14 rounded-xl bg-accent-soft flex items-center justify-center mb-7 text-accent">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight mb-3">{service.title}</h3>
                  <p className="text-fg-dim text-base leading-relaxed">{service.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-10 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl mb-20">
              Predictable production. <em className="text-accent">Premium output.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className={`process-step ${i < processSteps.length - 1 ? 'lg:border-r' : ''} ${i < 2 ? 'border-b md:border-b-0 lg:border-b-0' : ''}`}>
                  <div className="text-accent text-sm font-medium mb-6 tracking-wide">{step.num}</div>
                  <h3 className="font-serif text-2xl mb-4 leading-tight">{step.title}</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">{step.description}</p>
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
              Let&apos;s build your next <em className="text-accent">hero video</em>.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free 30-minute call to scope your project.
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
