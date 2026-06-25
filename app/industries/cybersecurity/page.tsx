import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Shield, Lock, TrendingUp, Server, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cybersecurity Animation Services | SaaS Animate',
  description: 'Specialized cybersecurity animation and explainer videos for security platforms, threat detection tools, compliance solutions, and enterprise security software. Build trust and explain complex security concepts with professional animations.',
  keywords: 'cybersecurity animation, security explainer video, threat detection demo video, SIEM platform video, endpoint security animation, compliance software launch video, network security marketing video, data protection video, zero trust architecture animation, SOC platform video',
  openGraph: {
    title: 'Cybersecurity Animation Services | SaaS Animate',
    description: 'Specialized cybersecurity animation and explainer videos for security platforms, threat detection tools, compliance solutions, and enterprise security software.',
  },
};

const benefits = [
  {
    icon: Shield,
    title: 'Simplify Complex Security Concepts',
    description: 'Cybersecurity involves intricate technical architectures, threat landscapes, and attack vectors. Our animations transform complex security methodologies into clear visual narratives that CISOs, IT directors, and security analysts instantly grasp.',
  },
  {
    icon: Lock,
    title: 'Build Trust Through Transparency',
    description: 'Security buyers need confidence before committing. Professional explainer videos effectively communicate your security posture, compliance certifications, threat intelligence capabilities, and incident response protocols to ease enterprise procurement concerns.',
  },
  {
    icon: TrendingUp,
    title: 'Accelerate Security Sales Cycles',
    description: 'Enterprise security purchases involve multiple stakeholders and lengthy evaluations. Compelling animation content reduces sales cycles by 40%+ by clearly articulating value propositions and differentiating your solution in a crowded security market.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Security Domain Discovery',
    description: 'We immerse ourselves in your security platform, understanding threat models, compliance requirements, integration ecosystems, and the specific security challenges your solution addresses for modern enterprises.',
  },
  {
    num: '02',
    title: 'Technical Storytelling',
    description: 'Our scripts balance technical accuracy with accessibility. We articulate complex security concepts like zero trust, behavioral analysis, and automated response in ways that resonate with both technical evaluators and business decision-makers.',
  },
  {
    num: '03',
    title: 'Professional Security Aesthetics',
    description: 'Clean, authoritative motion design that conveys trust and expertise. We use visual metaphors for threats, defenses, and detections that feel sophisticated without being overly technical or intimidating.',
  },
  {
    num: '04',
    title: 'Multi-Stakeholder Distribution',
    description: 'Receive versions optimized for CISO presentations, technical deep-dives, conference keynotes, RFP responses, and partner enablement. Every format designed for its specific audience in the security buyer journey.',
  },
];

const useCases = [
  {
    title: 'SIEM & Security Analytics',
    description: 'Visualize log aggregation, correlation rules, threat hunting workflows, and automated alerting. Show security teams how your platform reduces mean time to detect (MTTD) and mean time to respond (MTTR).',
  },
  {
    title: 'Endpoint Detection & Response (EDR)',
    description: 'Demonstrate real-time monitoring, behavioral analysis, automated containment, and forensic investigation capabilities. Illustrate how your EDR stops advanced threats that bypass traditional antivirus.',
  },
  {
    title: 'Cloud Security Platforms',
    description: 'Explain CSPM, CWPP, and cloud-native security controls across multi-cloud environments. Help enterprises visualize protection for AWS, Azure, and GCP workloads with unified visibility.',
  },
  {
    title: 'Identity & Access Management',
    description: 'Showcase SSO, MFA, privileged access management, and identity governance workflows. Demonstrate how your IAM solution enforces zero trust principles while improving user experience.',
  },
  {
    title: 'Compliance & Risk Management',
    description: 'Illustrate automated compliance monitoring, risk assessments, policy enforcement, and audit reporting for frameworks like SOC 2, ISO 27001, GDPR, and HIPAA.',
  },
  {
    title: 'Network Security Solutions',
    description: 'Bring to life next-gen firewalls, segmentation, intrusion prevention, and secure access service edge (SASE) architectures. Show comprehensive network protection in action.',
  },
];

const stats = [
  { value: '65%', label: 'Faster Sales Cycles' },
  { value: '3.2x', label: 'Higher Demo Engagement' },
  { value: '55%', label: 'Improved RFP Win Rates' },
  { value: '70%', label: 'Better Technical Understanding' },
];

export default function CybersecurityPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">Cybersecurity Animation Studio</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Animation videos built for <em className="text-accent">cybersecurity companies</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              From threat detection platforms to compliance solutions, we create authoritative explainer videos, 
              technical demos, and marketing content that helps cybersecurity companies build trust, 
              accelerate sales, and stand out in a competitive security landscape.
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
              Why cybersecurity companies choose <em className="text-accent">specialist animation</em>.
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
              Security products we <em className="text-accent">bring to life</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              We've created compelling security content for every category of cybersecurity, 
              from innovative startups disrupting the market to established vendors serving Fortune 100 enterprises.
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
              Ready to strengthen your <em className="text-accent">security messaging</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're launching a new security platform, expanding into enterprise markets, or 
              seeking to differentiate in a crowded category, our animation expertise helps cybersecurity 
              companies communicate trust and win more deals.
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
                View Security Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Security Domain Knowledge</h4>
                  <p className="text-fg-dim text-sm">We understand threats, defenses, compliance, and security operations.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Enterprise Credibility</h4>
                  <p className="text-fg-dim text-sm">Production quality that matches the expectations of CISOs and security VPs.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Technical Accuracy</h4>
                  <p className="text-fg-dim text-sm">Animations reviewed by security experts to ensure precision and credibility.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
