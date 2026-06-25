import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Users, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HR Tech Animation Services | SaaS Animate',
  description: 'Specialized HR tech animation and explainer videos for recruiting platforms, HRIS systems, performance management tools, and employee engagement software. Boost conversions with professional HR tech videos.',
  keywords: 'HR tech animation, HRIS explainer video, recruiting platform video, employee engagement animation, performance management demo video, HR software launch video, talent acquisition video, workforce management animation, HR tech marketing video, people operations video',
  openGraph: {
    title: 'HR Tech Animation Services | SaaS Animate',
    description: 'Specialized HR tech animation and explainer videos for recruiting platforms, HRIS systems, performance management tools, and employee engagement software.',
  },
};

const benefits = [
  {
    icon: Users,
    title: 'Simplify Complex Workflows',
    description: 'HR platforms involve multiple stakeholders and intricate processes. Our animations break down onboarding flows, approval chains, and integration points into clear, digestible visuals that HR leaders and employees instantly understand.',
  },
  {
    icon: TrendingUp,
    title: 'Drive Adoption & Engagement',
    description: "New HR tools fail when employees do not use them. Engaging explainer videos increase platform adoption by 60%+ and reduce training time dramatically. Show employees exactly how your solution makes their work life easier.",
  },
  {
    icon: Shield,
    title: 'Build Trust with Security',
    description: 'HR data is sensitive. Our videos effectively communicate your security measures, compliance certifications (SOC 2, GDPR, HIPAA), and data protection protocols to ease enterprise buyer concerns during long sales cycles.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Deep HR Tech Discovery',
    description: 'We immerse ourselves in your HR platform, understanding your ICP (HR directors, CHROs, talent leaders), key features, competitive differentiation, and the specific pain points your solution addresses in the modern workplace.',
  },
  {
    num: '02',
    title: 'Story-Driven Scripting',
    description: 'Every great HR tech video starts with a compelling narrative. We craft scripts that speak directly to HR decision-makers, addressing real challenges like time-to-hire reduction, employee retention, compliance risks, or administrative burden.',
  },
  {
    num: '03',
    title: 'Professional Animation',
    description: 'Our motion designers create polished, on-brand animations featuring realistic UI mockups, diverse character representations, and smooth transitions that reflect the professionalism HR leaders expect from enterprise software.',
  },
  {
    num: '04',
    title: 'Multi-Channel Distribution',
    description: 'Receive your hero video plus optimized cuts for LinkedIn, job fairs, conference presentations, email campaigns, and landing pages. Every format engineered for maximum engagement across the HR buyer journey.',
  },
];

const useCases = [
  {
    title: 'Recruiting & ATS Platforms',
    description: 'Showcase automated candidate sourcing, AI-powered resume screening, interview scheduling, and collaborative hiring workflows. Perfect for demonstrating how your ATS reduces time-to-hire and improves candidate experience.',
  },
  {
    title: 'HRIS & Payroll Systems',
    description: 'Explain complex payroll calculations, benefits administration, time tracking, and compliance reporting. Help HR teams visualize how your all-in-one platform eliminates spreadsheet chaos and manual errors.',
  },
  {
    title: 'Performance Management Tools',
    description: 'Illustrate continuous feedback loops, OKR tracking, 360-degree reviews, and goal alignment across organizations. Show managers how your software drives accountability and employee development.',
  },
  {
    title: 'Learning & Development Platforms',
    description: "Demonstrate course creation, skill gap analysis, personalized learning paths, and certification tracking. Engage L&D professionals with visuals that highlight your platform's impact on workforce capabilities.",
  },
  {
    title: 'Employee Engagement Solutions',
    description: 'Bring to life pulse surveys, recognition programs, wellness initiatives, and culture-building features. Connect emotionally with HR leaders focused on retention and workplace satisfaction.',
  },
  {
    title: 'Workforce Analytics Dashboards',
    description: 'Transform complex HR metrics into compelling visual stories. Show diversity analytics, turnover predictions, headcount planning, and ROI calculations that resonate with data-driven CHROs.',
  },
];

const stats = [
  { value: '73%', label: 'Higher Demo Bookings' },
  { value: '2.5x', label: 'Longer Page Dwell Time' },
  { value: '60%+', label: 'Increased Platform Adoption' },
  { value: '45%', label: 'Shorter Sales Cycles' },
];

export default function HRTechPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">HR Tech Animation Studio</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Animation videos built for <em className="text-accent">HR technology companies</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              From recruiting platforms to HRIS systems, we create high-converting explainer videos, product demos, 
              and launch films that help HR tech companies accelerate sales, drive user adoption, and stand out in 
              a crowded market.
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
              Why HR tech companies choose <em className="text-accent">specialist animation</em>.
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
              HR tech products we <em className="text-accent">bring to life</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              We've created animation content for every category of HR software, from early-stage startups to enterprise platforms serving Fortune 500 companies.
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
              Ready to elevate your <em className="text-accent">HR tech marketing</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're launching a new feature, raising a funding round, or scaling enterprise sales, 
              our animation expertise helps HR tech companies communicate value clearly and convert more prospects.
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
                View HR Tech Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">HR Domain Expertise</h4>
                  <p className="text-fg-dim text-sm">We understand HR workflows, terminology, and buyer psychology.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Enterprise-Ready Quality</h4>
                  <p className="text-fg-dim text-sm">Production values that match the expectations of CHROs and HR VPs.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Fast Turnaround</h4>
                  <p className="text-fg-dim text-sm">Launch-ready videos in 3-4 weeks without compromising quality.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
