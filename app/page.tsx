import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { AnimatedCounter } from '@/components/animated-counter';
import { VideoCard } from '@/components/video-card';
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

const stats = [
  { target: 300, suffix: '+', label: 'Videos Delivered' },
  { target: 25, suffix: 'M+', label: 'Total Views' },
  { target: 4.9, decimals: 1, suffix: '/5', label: 'Client Rating' },
  { target: 3.4, decimals: 1, suffix: '×', label: 'Avg. Conversion Lift' },
];

const services = [
  {
    icon: Clock,
    title: 'SaaS Explainer Videos',
    description: '60–120 second stories that make your value prop impossible to miss. Perfect for homepages and landing pages.',
  },
  {
    icon: MonitorPlay,
    title: 'Demo Videos',
    description: 'Cinematic product walkthroughs that turn features into desire and viewers into signups.',
  },
  {
    icon: Layout,
    title: 'UX/UI Videos',
    description: 'Motion design that showcases your interface at its most beautiful. Ideal for design-led SaaS.',
  },
  {
    icon: Boxes,
    title: 'Product Videos',
    description: 'Hero films that make your product feel inevitable. Keynote-grade quality for serious launches.',
  },
  {
    icon: Heart,
    title: 'Brand Videos',
    description: 'Manifesto films that define who you are, not just what you do. Culture pieces with soul.',
  },
  {
    icon: Megaphone,
    title: 'Promo Videos',
    description: 'Scroll-stopping content for paid social, ads and landing pages. 6, 15 and 30-second cuts.',
  },
  {
    icon: Zap,
    title: 'Launch Videos',
    description: 'Event-grade films for Product Hunt, TechCrunch and major releases. Make your launch a moment.',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery', description: 'We deep-dive into your product, audience, and goals in a focused 45-minute kickoff to map out the story that converts.' },
  { num: '02', title: 'Script & storyboard', description: 'One outcome per video. Approved before a single frame moves.' },
  { num: '03', title: 'Design & animation', description: 'On-brand boards, then full animation in After Effects, Rive or Lottie.' },
  { num: '04', title: 'Launch & cutdowns', description: 'Hero film plus paid social, vertical and silent-autoplay variants.' },
];

const clients = [
  'Northwind', 'Lattice', 'Forma', 'Orbit', 'Sequoia',
  'Pulse', 'Stackline', 'Meridian', 'Vanta', 'Linear',
];

const testimonials = [
  { quote: "SaaS Animate didn't just make us a video — they gave us the definitive story of our product. Homepage conversion jumped 41%.", name: "Sarah Chen", role: "VP Marketing, Northwind", initials: "SC" },
  { quote: "The best video agency we've ever worked with. They just get SaaS.", name: "Marcus Webb", role: "Founder, Stackline", initials: "MW" },
  { quote: "Our Product Hunt launch video got 12K upvotes. SaaS Animate made it feel like a real event.", name: "Priya Raman", role: "Co-founder, Pulse", initials: "PR" },
  { quote: "From script to final cut, the process was flawless. They understood our product faster than our sales team.", name: "David Park", role: "Head of Growth, Lattice", initials: "DP" },
  { quote: "We've tripled our demo requests since putting the new explainer on our homepage.", name: "Emma Larsson", role: "CMO, Forma", initials: "EL" },
  { quote: "Cinematic quality without the agency bloat. Fast, focused, and genuinely creative.", name: "Tom Alvarez", role: "CEO, Orbit", initials: "TA" },
  { quote: "They turned a complex B2B product into a story my mom could understand.", name: "Rachel Kim", role: "Product Lead, Meridian", initials: "RK" },
  { quote: "Our board was blown away by the launch video. We closed our Series B two weeks later.", name: "James O'Connor", role: "Founder, Sequoia", initials: "JO" },
  { quote: "Three revisions in and they still treated it like day one. The craft is unmatched.", name: "Nina Patel", role: "Brand Director, Stackline", initials: "NP" },
  { quote: "We replaced our old explainer and saw a 2.8× lift in trial signups within a month.", name: "Alex Hoffman", role: "Growth Lead, Northwind", initials: "AH" },
  { quote: "The team is responsive, strategic, and genuinely cares about the outcome.", name: "Laura Bennett", role: "VP Product, Lattice", initials: "LB" },
  { quote: "Our demo video is now the #1 asset in our sales deck. Reps ask for it by name.", name: "Chris Müller", role: "Sales Director, Pulse", initials: "CM" },
];

const portfolioItems = [
  { videoId: 'IawDTvGuWo4', title: 'SaaS Explainer Video', subtitle: '90s · Product Launch', catLabel: 'SaaS Explainer', layout: 'wide' as const },
  { videoId: '4SDvXMt7P5c', title: 'Product Demo Video', subtitle: '2:30 · Feature Showcase', catLabel: 'Product Demo', layout: 'narrow' as const },
  { videoId: 'A9qRIhEcZIY', title: 'UX/UI Animation', subtitle: '60s · Interface Design', catLabel: 'UX/UI Video', layout: 'narrow' as const },
  { videoId: 'BGqK-Yioarw', title: 'Brand Launch Film', subtitle: '1:15 · Campaign Launch', catLabel: 'Launch Video', layout: 'wide' as const },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-40 pb-12 px-10 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(184,255,62,0.06),transparent_60%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative w-full">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest uppercase text-fg-muted mb-10 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              Booking Q3 · 2026
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight max-w-5xl mb-8">
              Animation that <span className="text-accent italic">moves</span> SaaS metrics.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-fg-dim max-w-2xl leading-relaxed mb-10">
              We&apos;re a focused animation studio for SaaS teams. Explainer videos, product demos, UI motion and launch films — engineered to convert, not decorate.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="btn btn-primary">
                Book a Call <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                See the work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-20 p-10 px-8 bg-gradient-to-br from-[rgba(184,255,62,0.03)] to-[rgba(184,255,62,0.01)] border border-border rounded-3xl max-w-6xl mx-auto backdrop-blur-sm">
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center relative px-4">
                    {i < stats.length - 1 && (
                      <span className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                    )}
                    <div className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight">
                      <AnimatedCounter target={stat.target} decimals={stat.decimals} />
                      <span className="text-accent">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-fg-muted tracking-widest uppercase mt-2 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Logo Strip */}
      <div className="py-12 border-t border-b border-border bg-bg-2 relative overflow-hidden">
        <div className="text-center text-xs tracking-widest uppercase text-fg-muted mb-8 font-medium">
          Trusted by SaaS teams at
        </div>
        <div className="relative overflow-hidden marquee-mask">
          <div className="flex animate-logo-scroll hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, i) => (
              <span key={i} className="flex items-center gap-2 px-8 text-fg-dim font-serif text-lg whitespace-nowrap hover:text-accent transition-colors cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-50" />
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">What We Do</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight max-w-2xl">
                Seven video types. <em className="text-accent">One specialist studio.</em>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-fg-dim text-base max-w-md">
                From first-touch explainers to launch-day hype reels, every video is engineered to convert, educate and elevate your SaaS brand.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link href="/services" className="service-card block">
                  <div className="w-14 h-14 rounded-xl bg-accent-soft flex items-center justify-center mb-7 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-[#0a0a0a] group-hover:-rotate-2">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl tracking-tight mb-3">{service.title}</h3>
                  <p className="text-fg-dim text-base leading-relaxed mb-6">{service.description}</p>
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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

      {/* Testimonials Section */}
      <section className="py-28 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Reveal>
              <div className="section-label">Client Love</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
                What SaaS founders <em className="text-accent">say about us</em>.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-slide-testimonials hover:[animation-play-state:paused]">
            {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="text-accent text-sm tracking-widest mb-4">★★★★★</div>
                <p className="font-serif text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-[#0a0a0a] font-semibold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-fg-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-6 animate-slide-testimonials [animation-direction:reverse] hover:[animation-play-state:paused]">
            {[...testimonials.slice(6), ...testimonials.slice(6)].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="text-accent text-sm tracking-widest mb-4">★★★★★</div>
                <p className="font-serif text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-[#0a0a0a] font-semibold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-fg-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-28 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <Reveal>
              <div className="section-label">Selected Work</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
                Recent projects we&apos;re <em className="text-accent">proud of</em>.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link href="/portfolio" className="btn btn-ghost">
                View All Work <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {portfolioItems.map((item, i) => (
              <Reveal
                key={item.videoId}
                delay={i * 100}
                className={
                  item.layout === 'wide' ? 'col-span-12 lg:col-span-7' :
                  item.layout === 'narrow' ? 'col-span-12 lg:col-span-5' :
                  'col-span-12 lg:col-span-6'
                }
              >
                <VideoCard
                  videoId={item.videoId}
                  title={item.title}
                  subtitle={item.subtitle}
                  category={item.catLabel}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-10 text-center relative overflow-hidden border-t border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,255,62,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl mx-auto mb-6">
              Ready to make a video <em className="text-accent">worth watching</em>?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-lg mb-10">
              Book a free 30-minute strategy call. We&apos;ll scope your project and send a proposal within 24 hours.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex justify-center gap-4">
              <Link href="/booking" className="btn btn-primary">
                Book a Call <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Send a message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
