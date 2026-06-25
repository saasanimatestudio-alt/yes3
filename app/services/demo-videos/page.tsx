import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Play, Monitor, Zap, Target, Users, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Demo Videos | Product Demo Video Production | SaaS Animate',
  description: 'Professional SaaS demo videos that showcase your product in action. We create engaging product demonstrations that drive trial signups and accelerate sales cycles. Perfect for pricing pages, sales decks, and onboarding.',
  keywords: 'SaaS demo video, product demo video, software demonstration video, SaaS product walkthrough, interactive demo video, B2B SaaS demo, feature demo video, sales demo video, product tour video, SaaS video production',
};

const benefits = [
  {
    icon: Play,
    title: 'Show, Don\'t Just Tell',
    description: 'While explainer videos focus on concepts, demo videos show your actual product solving real problems. Prospects see exactly what they\'re buying, reducing purchase anxiety and accelerating decision-making.',
  },
  {
    icon: Monitor,
    title: 'Real UI, Enhanced',
    description: 'We capture your real interface and enhance it with motion design, smooth transitions, and strategic highlights. The result feels premium while staying authentic to your actual product experience.',
  },
  {
    icon: Zap,
    title: 'Feature Highlighting',
    description: 'Not all features deserve equal screen time. We strategically emphasize your differentiators and power features while glossing over commodity functionality that doesn\'t move the needle.',
  },
];

const useCases = [
  {
    icon: Target,
    title: 'Pricing Page Conversion',
    description: 'Demo videos on pricing pages increase conversion by 30-50%. Prospects who see your product in action are more confident in their purchase decision and less likely to request lengthy sales calls.',
  },
  {
    icon: Users,
    title: 'Sales Enablement',
    description: 'Arm your sales team with demo videos they can share at every stage of the funnel. From initial outreach to final negotiations, a polished demo video builds credibility and saves hours of repetitive live demos.',
  },
  {
    icon: TrendingUp,
    title: 'Onboarding & Activation',
    description: 'New users who watch demo videos during onboarding activate 2x faster. Show them the path to value immediately, reducing time-to-first-win and improving long-term retention rates.',
  },
];

const process = [
  {
    num: '01',
    title: 'Product Immersion',
    description: 'We dive deep into your product, understanding not just features but the problems they solve. We identify your key differentiators, ideal user personas, and the specific jobs-to-be-done your product addresses.',
  },
  {
    num: '02',
    title: 'Script & Flow Design',
    description: 'Unlike tutorials that cover everything, demo videos follow a narrative arc. We craft scripts that show a relatable user scenario, introduce friction, then demonstrate how your product elegantly solves it.',
  },
  {
    num: '03',
    title: 'UI Capture & Enhancement',
    description: 'We record your actual interface at high resolution, then enhance it with smooth camera movements, strategic zooms, subtle highlights, and motion graphics that guide viewer attention to what matters most.',
  },
  {
    num: '04',
    title: 'Voiceover & Polish',
    description: 'Professional voiceover talent brings your demo to life with warmth and authority. We add music, sound design, and final color grading to create a cohesive, premium viewing experience.',
  },
];

export default function DemoVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
              SaaS Demo Videos That Sell Your Product
            </h1>
            <p className="text-fg-dim text-lg mb-4">
              Professional product demonstration videos for SaaS companies
            </p>
            <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
              Demo videos are the secret weapon of high-converting SaaS companies. While explainer videos 
              build awareness at the top of the funnel, demo videos close deals in the middle and bottom. 
              We create polished, narrative-driven product demonstrations that show prospects exactly what 
              they're buying—accelerating sales cycles and driving trial signups.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <Reveal key={index}>
                <div className="bg-bg-2 p-6 rounded-xl border border-border hover:border-accent/50 transition-colors">
                  <benefit.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-serif text-xl mb-3">{benefit.title}</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Why SaaS Companies Need Demo Videos</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  In the competitive SaaS landscape, buyers expect to see products in action before committing. 
                  Gartner research shows that 77% of B2B buyers watch product videos during their evaluation process, 
                  and companies using video in their sales process close deals 34% faster.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Demo videos serve multiple critical functions in your growth engine. They qualify leads by setting 
                  accurate expectations about what your product does. They reduce sales team workload by answering 
                  common questions before they're asked. And perhaps most importantly, they build trust by showing 
                  transparency—prospects see exactly what they're getting, not just marketing promises.
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  At SaaS Animate, we've produced demo videos for hundreds of software companies across every category 
                  imaginable. From developer tools to enterprise platforms, PLG startups to complex B2B solutions, 
                  we understand how to showcase software in ways that resonate with technical and non-technical buyers alike.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">What Makes a Great SaaS Demo Video</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">The Narrative Approach</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    The biggest mistake companies make with demo videos is treating them like feature tours. 
                    A great demo video isn't a checklist of capabilities—it's a story about a user solving 
                    a problem with your product.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    We structure every demo around a specific persona facing a specific challenge. The video 
                    opens by establishing their context and pain points. Then we introduce your product as 
                    the solution, walking through the exact steps they'd take to achieve their desired outcome. 
                    This narrative approach keeps viewers engaged and helps them visualize themselves using your product.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">Strategic Feature Selection</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Your product probably has dozens of features. A demo video should highlight maybe five. 
                    We work with you to identify the features that truly differentiate you—the ones that make 
                    prospects say "wow, I didn't know that was possible."
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Commodity features get minimal screen time or are mentioned in passing. Power features 
                    get the spotlight treatment with smooth camera moves, subtle highlights, and clear 
                    explanations of the value they deliver. This selective approach ensures viewers remember 
                    what makes you unique, not just what makes you functional.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Where Demo Videos Drive Results</h2>
              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-bg-2 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg mb-2">{useCase.title}</h3>
                      <p className="text-fg-dim text-sm leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Our Demo Video Production Process</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
                We've refined our demo video workflow over hundreds of projects. Every step is designed 
                to extract the most compelling aspects of your product and present them in the most 
                engaging way possible.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {process.map((step, index) => (
                  <div key={index} className="bg-bg-2 p-6 rounded-xl border border-border">
                    <div className="text-accent font-mono text-sm mb-3">{step.num}</div>
                    <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                    <p className="text-fg-dim text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Demo Video vs. Tutorial: Understanding the Difference</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Many companies confuse demo videos with product tutorials. While both show your interface, 
                  they serve fundamentally different purposes and require different approaches.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  A <strong>tutorial</strong> is educational. It teaches existing users how to accomplish 
                  specific tasks within your product. Tutorials are comprehensive, step-by-step, and often 
                  longer (5-15 minutes). They're designed for people who have already bought in and need 
                  to learn how to use what they purchased.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  A <strong>demo video</strong> is persuasive. It shows prospects why they should buy your 
                  product. Demos are selective, narrative-driven, and concise (90 seconds to 3 minutes). 
                  They're designed for people who are still evaluating whether your solution is right for them.
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  At SaaS Animate, we specialize in demo videos—the sales-oriented, conversion-focused 
                  format that moves prospects through your funnel. If you need tutorials for onboarding 
                  or customer education, we can connect you with partners who excel in that format.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Technical Excellence Meets Strategic Storytelling</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Creating a great demo video requires both technical skill and strategic thinking. On the 
                  technical side, we use professional screen capture equipment and software to record your 
                  interface at the highest quality. We then enhance that footage with smooth camera movements, 
                  strategic zooms, subtle highlights, and motion graphics that guide viewer attention.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  But technical polish alone isn't enough. The real magic happens in the strategic decisions: 
                  Which user persona should we feature? What problem should we solve? Which features deserve 
                  the spotlight? How do we structure the narrative to build momentum toward a clear CTA?
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  Our team includes strategists who've worked on both the SaaS and agency sides. We understand 
                  buyer psychology, funnel dynamics, and the specific challenges of selling software. This 
                  strategic foundation ensures every demo video we produce doesn't just look good—it performs.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Investment & Timeline</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-bg-2 p-8 rounded-xl border border-border">
                  <h3 className="font-serif text-2xl mb-4">Typical Investment</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Professional SaaS demo videos typically range from $5,000 to $15,000 depending on 
                    complexity, length, and customization level. This includes strategy, scriptwriting, 
                    UI capture, motion design, voiceover, music, and all revisions.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Most clients see ROI within 60-90 days through increased trial signups, shortened 
                    sales cycles, and reduced demo requests from unqualified leads.
                  </p>
                </div>
                <div className="bg-bg-2 p-8 rounded-xl border border-border">
                  <h3 className="font-serif text-2xl mb-4">Production Timeline</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    From kickoff to final delivery, expect 3-4 weeks for a standard demo video. This 
                    timeline includes discovery sessions, script development, UI recording, animation, 
                    voiceover recording, and revision rounds.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Rush timelines are sometimes possible for an additional fee. Contact us to discuss 
                    your specific needs and deadlines.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-border pt-12 mt-12">
              <h2 className="font-serif text-3xl mb-6">Ready to Show Your Product in Action?</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-8 max-w-3xl">
                A great demo video can be the difference between a prospect who converts and one who 
                bounces. Let's create a product demonstration that showcases your software's true potential 
                and accelerates your growth.
              </p>
              <div className="flex gap-4">
                <Link href="/booking" className="btn btn-primary">
                  Book a Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">
                  View Our Work
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </>
  );
}
