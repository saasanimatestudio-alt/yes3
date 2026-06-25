import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Heart, TrendingUp, Users, BarChart3, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Success Animation Services | SaaS Animate',
  description: "Specialized customer success animation and explainer videos for CS platforms, onboarding tools, retention software, and customer health analytics. Improve retention with professional customer success videos.",
  keywords: 'customer success animation, CS platform explainer video, onboarding software demo video, customer retention video, churn reduction animation, customer health analytics video, NPS platform video, customer journey mapping animation, SaaS retention video, client success marketing video',
  openGraph: {
    title: 'Customer Success Animation Services | SaaS Animate',
    description: "Specialized customer success animation and explainer videos for CS platforms, onboarding tools, retention software, and customer health analytics.",
  },
};

const benefits = [
  {
    icon: Heart,
    title: 'Simplify Customer Journey Complexity',
    description: "Customer success involves onboarding workflows, health scoring, intervention triggers, and renewal processes. Our animations transform these complex journeys into clear visual narratives that CCOs, CS leaders, and account teams instantly understand.",
  },
  {
    icon: TrendingUp,
    title: 'Demonstrate Retention Impact',
    description: "CS teams need to prove their value through retention metrics. Professional explainer videos effectively showcase how your platform reduces churn, increases expansion revenue, and drives customer lifetime value.",
  },
  {
    icon: BarChart3,
    title: 'Accelerate CS Platform Adoption',
    description: "Customer success software purchases involve multiple stakeholders and change management considerations. Compelling animation reduces implementation resistance by 50%+ by clearly showing user benefits and workflow improvements.",
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Customer Success Discovery',
    description: "We immerse ourselves in your CS platform, understanding customer lifecycle stages, health indicators, intervention strategies, and the specific retention challenges your solution addresses for growing SaaS companies.",
  },
  {
    num: '02',
    title: 'Outcome-Focused Scripting',
    description: "Our scripts speak the language of customer outcomes. We highlight retention improvements, expansion revenue, reduced time-to-value, and customer satisfaction metrics that resonate with CS executives.",
  },
  {
    num: '03',
    title: 'Empathetic Visual Design',
    description: "Warm, relationship-focused motion design that reflects the human-centric nature of customer success. We visualize customer emotions, touchpoints, and success moments that build lasting partnerships.",
  },
  {
    num: '04',
    title: 'Multi-Audience Distribution',
    description: "Receive versions optimized for CS team training, executive presentations, customer onboarding, conference sessions, and sales enablement. Every format designed for its specific CS audience.",
  },
];

const useCases = [
  {
    title: 'Customer Health Scoring',
    description: "Visualize health algorithms, risk indicators, usage metrics, and predictive churn models. Show CS teams how your platform identifies at-risk customers before it is too late.",
  },
  {
    title: 'Onboarding & Adoption',
    description: "Demonstrate onboarding workflows, milestone tracking, in-app guidance, and adoption campaigns. Illustrate how your platform accelerates time-to-value for new customers.",
  },
  {
    title: 'Renewal Management',
    description: "Showcase renewal forecasting, contract tracking, automated reminders, and negotiation workflows. Help CS teams visualize proactive renewal strategies that protect revenue.",
  },
  {
    title: 'Customer Feedback & NPS',
    description: "Bring to life survey distribution, sentiment analysis, feedback loops, and action planning. Show how your platform turns customer insights into retention improvements.",
  },
  {
    title: 'Expansion & Upsell',
    description: "Illustrate opportunity identification, expansion playbooks, cross-sell recommendations, and quota tracking. Appeal to CS leaders focused on net revenue retention.",
  },
  {
    title: 'Customer Journey Mapping',
    description: "Visualize touchpoint tracking, lifecycle stages, persona-based journeys, and experience optimization. Help teams understand and improve every customer interaction.",
  },
];

const stats = [
  { value: '75%', label: 'Higher Platform Adoption' },
  { value: '2.5x', label: 'Improved Retention Rates' },
  { value: '60%', label: 'Faster Time-to-Value' },
  { value: '55%', label: 'Increased Expansion Revenue' },
];

export default function CustomerSuccessPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">Customer Success Animation Studio</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Animation videos built for <em className="text-accent">customer success companies</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              From health scoring platforms to onboarding solutions, we create compelling explainer videos, 
              product demos, and training content that helps CS companies improve retention, 
              drive expansion, and stand out in a growing customer success market.
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
              Why CS companies choose <em className="text-accent">specialist animation</em>.
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
              CS products we <em className="text-accent">bring to life</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              We've created impactful CS content for every category of customer success software, 
              from innovative startups reimagining CS to enterprise platforms serving global SaaS companies.
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
              Our proven <em className="text-accent">production process</em>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border">
            {processSteps.map((step, i) => (
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
              Ready to transform your <em className="text-accent">CS messaging</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're launching a new CS platform, expanding your feature set, or 
              seeking to differentiate in a competitive market, our animation expertise helps 
              customer success companies communicate value and win more clients.
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
                View CS Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">CS Domain Expertise</h4>
                  <p className="text-fg-dim text-sm">We understand retention, churn, LTV, and customer lifecycle management.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Relationship-Focused Design</h4>
                  <p className="text-fg-dim text-sm">Animations that emphasize partnership, trust, and long-term success.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Metrics-Driven Storytelling</h4>
                  <p className="text-fg-dim text-sm">Clear visualization of retention impact and business outcomes.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
