import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Heart, CheckCircle, Target, Film } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Brand Videos | SaaS Animate',
  description: 'Manifesto films, culture pieces and origin stories for SaaS companies. We create emotional brand videos that connect with your audience on a deeper level.',
  keywords: 'SaaS brand video, startup brand film, company culture video, brand manifesto, SaaS storytelling, corporate brand video, tech company brand film',
};

const benefits = [
  {
    icon: Heart,
    title: 'Emotional Connection',
    description: 'Brand videos go beyond features to tap into the values, mission, and vision that drive your company. They create lasting emotional bonds with your audience.',
  },
  {
    icon: Target,
    title: 'Brand Differentiation',
    description: 'In crowded SaaS markets, brand videos help you stand out by showcasing what makes your company unique—your story, your people, your purpose.',
  },
  {
    icon: Film,
    title: 'Cinematic Quality',
    description: 'We produce brand films with the production value of premium content—combining live action, animation, and motion graphics for maximum impact.',
  },
];

const useCases = [
  {
    title: 'Company Origin Story',
    description: 'Share the journey of how your company came to be. Authentic storytelling builds trust and humanizes your brand.',
  },
  {
    title: 'Culture & Values Film',
    description: 'Showcase what it's like to work at your company. Perfect for recruitment, investor relations, and brand building.',
  },
  {
    title: 'Brand Manifesto',
    description: 'A bold statement of your company's beliefs and mission. Inspire your audience and attract like-minded customers.',
  },
  {
    title: 'Event & Conference Films',
    description: 'Capture the energy of your company events, product launches, or annual conferences for broader distribution.',
  },
  {
    title: 'Customer Success Stories',
    description: 'Documentary-style films featuring real customers and their transformation through your product.',
  },
  {
    title: 'Investor & Stakeholder Updates',
    description: 'Professional brand films that communicate progress, vision, and momentum to investors and board members.',
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We immerse ourselves in your brand—interviewing founders, understanding your culture, and identifying the core narrative.',
  },
  {
    num: '02',
    title: 'Creative Direction',
    description: 'Developing the visual language, tone, and style that will bring your brand story to life authentically.',
  },
  {
    num: '03',
    title: 'Production',
    description: 'Filming interviews, capturing B-roll, recording voiceovers, and gathering all raw materials needed.',
  },
  {
    num: '04',
    title: 'Post-Production',
    description: 'Editing, color grading, sound design, and motion graphics to craft a polished, cinematic final piece.',
  },
];

const stats = [
  { value: '73%', label: 'Higher Brand Recall' },
  { value: '2.5x', label: 'More Social Shares' },
  { value: '89%', label: 'Better Trust Perception' },
  { value: '4x', label: 'Increased Engagement' },
];

export default function BrandVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">SaaS Brand Videos</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Tell your <em className="text-accent">brand story</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              Manifesto films, culture pieces and origin stories. Less about features, more about feeling. 
              Our brand videos capture the essence of your company and connect emotionally with your audience.
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
              Why invest in <em className="text-accent">brand storytelling</em>?
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
              Where brand videos <em className="text-accent">make impact</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              From recruitment to investor relations, our brand films perform across every 
              touchpoint where emotion and connection matter.
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
              Our <em className="text-accent">creative process</em>.
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
              Whether you're building awareness, attracting talent, or connecting with investors, 
              our brand videos help SaaS companies communicate their essence and inspire action.
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
                  <h4 className="font-medium text-white mb-1">Cinematic Production</h4>
                  <p className="text-fg-dim text-sm">Premium production quality that reflects your brand's caliber.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Authentic Storytelling</h4>
                  <p className="text-fg-dim text-sm">Real stories, real people, real impact—no corporate fluff.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Full-Service Production</h4>
                  <p className="text-fg-dim text-sm">From concept to delivery—we handle everything in-house.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
