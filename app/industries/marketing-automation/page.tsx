import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Target, TrendingUp, BarChart3, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marketing Automation Animation Services | SaaS Animate',
  description: 'Specialized marketing automation animation and explainer videos for email platforms, campaign management tools, lead nurturing solutions, and marketing analytics software. Drive conversions with professional marketing videos.',
  keywords: 'marketing automation animation, email marketing explainer video, campaign management demo video, lead nurturing video, marketing analytics animation, ABM platform video, marketing ROI video, demand generation animation, B2B marketing video, martech launch video',
  openGraph: {
    title: 'Marketing Automation Animation Services | SaaS Animate',
    description: 'Specialized marketing automation animation and explainer videos for email platforms, campaign management tools, lead nurturing solutions, and marketing analytics software.',
  },
};

const benefits = [
  {
    icon: Target,
    title: 'Clarify Complex Campaign Workflows',
    description: 'Marketing automation involves multi-touch campaigns, segmentation rules, and attribution models. Our animations simplify these concepts into clear visual narratives that CMOs, marketing directors, and demand gen teams instantly understand.',
  },
  {
    icon: TrendingUp,
    title: 'Demonstrate ROI Clearly',
    description: 'Marketing teams need to prove value constantly. Professional explainer videos effectively showcase how your platform drives pipeline, improves conversion rates, and delivers measurable ROI to justify budget allocations.',
  },
  {
    icon: BarChart3,
    title: 'Accelerate Marketing Sales Cycles',
    description: 'Martech purchases involve multiple stakeholders and integration considerations. Compelling animation reduces evaluation time by 45%+ by clearly articulating capabilities, integrations, and business impact.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Martech Discovery',
    description: 'We dive deep into your marketing platform, understanding campaign types, integration ecosystems, attribution methodologies, and the specific marketing challenges your solution addresses for modern teams.',
  },
  {
    num: '02',
    title: 'Results-Focused Scripting',
    description: 'Our scripts speak the language of marketing ROI. We highlight campaign performance, lead quality improvements, time savings, and revenue impact that resonates with performance-driven marketers.',
  },
  {
    num: '03',
    title: 'Dynamic Visual Design',
    description: 'Energetic, conversion-focused motion design that reflects the pace and results-orientation of modern marketing. We visualize customer journeys, funnel progression, and campaign outcomes compellingly.',
  },
  {
    num: '04',
    title: 'Multi-Channel Distribution',
    description: 'Receive versions optimized for trade shows, webinar introductions, sales demos, partner channels, and paid social campaigns. Every format engineered for marketing audience engagement.',
  },
];

const useCases = [
  {
    title: 'Email Marketing Platforms',
    description: 'Showcase drag-and-drop builders, automation workflows, A/B testing, deliverability optimization, and advanced segmentation. Demonstrate how your platform drives higher open rates and conversions.',
  },
  {
    title: 'Lead Nurturing & Scoring',
    description: 'Visualize behavioral tracking, lead scoring algorithms, progressive profiling, and sales handoff workflows. Show how your platform identifies and nurtures sales-ready prospects.',
  },
  {
    title: 'Account-Based Marketing (ABM)',
    description: 'Illustrate account identification, personalized campaign orchestration, intent data integration, and account-level analytics. Appeal to enterprise marketing teams focused on high-value accounts.',
  },
  {
    title: 'Marketing Analytics & Attribution',
    description: 'Bring to life multi-touch attribution, campaign ROI dashboards, cohort analysis, and predictive analytics. Help marketers visualize data-driven decision-making capabilities.',
  },
  {
    title: 'Social Media Management',
    description: 'Demonstrate content scheduling, social listening, engagement tracking, and cross-platform analytics. Show how your platform streamlines social media marketing at scale.',
  },
  {
    title: 'Content Marketing Platforms',
    description: 'Showcase content planning, SEO optimization, performance tracking, and distribution workflows. Appeal to content teams focused on organic growth and thought leadership.',
  },
];

const stats = [
  { value: '70%', label: 'Higher Demo Conversion' },
  { value: '2.8x', label: 'Increased Engagement' },
  { value: '50%', label: 'Faster Deal Closure' },
  { value: '65%', label: 'Better Feature Understanding' },
];

export default function MarketingAutomationPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">Marketing Automation Animation Studio</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Animation videos built for <em className="text-accent">marketing automation companies</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              From email platforms to ABM solutions, we create high-impact explainer videos, 
              product demos, and marketing content that helps martech companies drive demos, 
              accelerate sales, and stand out in a crowded marketing technology landscape.
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
              Why martech companies choose <em className="text-accent">specialist animation</em>.
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
              Marketing products we <em className="text-accent">bring to life</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              We've created compelling marketing content for every category of martech, 
              from innovative startups challenging incumbents to enterprise platforms serving global brands.
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
              Ready to amplify your <em className="text-accent">martech marketing</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're launching a new marketing platform, expanding into new segments, or 
              seeking to differentiate in a saturated market, our animation expertise helps martech 
              companies communicate value and win more customers.
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
                View Martech Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Marketing Domain Expertise</h4>
                  <p className="text-fg-dim text-sm">We understand campaigns, funnels, attribution, and marketing operations.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Results-Oriented Design</h4>
                  <p className="text-fg-dim text-sm">Animations focused on demonstrating measurable marketing outcomes.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Integration Clarity</h4>
                  <p className="text-fg-dim text-sm">Clear visualization of your martech stack connections and data flows.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
