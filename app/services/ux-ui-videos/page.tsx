import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Layers, Sparkles, Smartphone, Zap, Target, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UX/UI Motion Design Videos | Interface Animation | SaaS Animate',
  description: 'Professional UX/UI motion design videos that bring your interface to life. We create engaging interface animations, micro-interactions, and UI choreography that showcase your product\'s user experience. Perfect for landing pages, investor decks, and product launches.',
  keywords: 'UX motion design, UI animation video, interface animation, micro-interactions video, SaaS UI video, product interface video, user experience animation, app demo video, software UI motion, digital product animation',
};

const benefits = [
  {
    icon: Layers,
    title: 'Interface Choreography',
    description: 'We treat your UI like a character in a film. Buttons animate with personality. Transitions flow smoothly. Every interaction feels intentional and delightful, showcasing the craft behind your product design.',
  },
  {
    icon: Sparkles,
    title: 'Micro-Interaction Showcase',
    description: 'The small details matter. Loading states, hover effects, success animations—these micro-interactions demonstrate attention to detail and premium quality that resonates with design-conscious buyers.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Device Presentation',
    description: 'Whether your SaaS runs on desktop, mobile, or both, we showcase your interface across all relevant devices. Responsive design transitions and cross-platform flows look seamless and professional.',
  },
];

const useCases = [
  {
    icon: Target,
    title: 'Design-Led Landing Pages',
    description: 'For products where design is a differentiator, UI motion videos immediately signal quality. They attract design-conscious buyers and justify premium pricing by showcasing craftsmanship.',
  },
  {
    icon: Users,
    title: 'Investor & Stakeholder Presentations',
    description: 'Investors want to see the product feel, not just hear about features. UI motion videos communicate polish and attention to detail that builds confidence in your team\'s execution capabilities.',
  },
  {
    icon: TrendingUp,
    title: 'Product Hunt & Launch Campaigns',
    description: 'Launch videos featuring UI motion stand out in crowded feeds. They demonstrate real functionality while maintaining visual appeal, driving higher engagement and upvote rates.',
  },
];

const process = [
  {
    num: '01',
    title: 'UI Audit & Asset Collection',
    description: 'We gather your Figma files, design system components, and brand guidelines. Understanding your design language ensures the final animation feels authentic to your product while elevating its presentation.',
  },
  {
    num: '02',
    title: 'Motion Strategy & Storyboard',
    description: 'Not every interaction needs animation. We identify key moments that benefit from motion—onboarding flows, feature reveals, data visualizations—and storyboard them for maximum impact.',
  },
  {
    num: '03',
    title: 'Animation Production',
    description: 'Using After Effects, Principle, and Framer, we animate your interfaces with smooth easing, strategic timing, and purposeful motion. Every movement serves the narrative and showcases usability.',
  },
  {
    num: '04',
    title: 'Integration & Polish',
    description: 'Final videos are delivered in multiple formats optimized for web, social, and presentations. We provide guidance on implementation to ensure smooth playback across all platforms.',
  },
];

export default function UxUiVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
              UX/UI Motion Design That Shows Your Craft
            </h1>
            <p className="text-fg-dim text-lg mb-4">
              Interface animation and micro-interaction videos for SaaS products
            </p>
            <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
              Great software isn't just functional—it's delightful to use. UX/UI motion videos showcase 
              the thoughtful interactions, smooth transitions, and polished details that make your product 
              feel premium. We create interface animations that don't just show what your product does, 
              but how it feels to use it.
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
              <h2 className="font-serif text-3xl mb-6">Why UX/UI Motion Matters for SaaS</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  In today's competitive SaaS market, functional parity is common. What separates great 
                  products from good ones is often the quality of the user experience. Motion design is 
                  a critical component of modern UX—it guides attention, provides feedback, and creates 
                  emotional connection.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  But here's the challenge: static screenshots and screen recordings can't capture the 
                  nuance of well-designed motion. A button's hover state, a card's expansion animation, 
                  a loading spinner that delights instead of frustrates—these details are experienced, 
                  not described. That's where UX/UI motion videos come in.
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  At SaaS Animate, we specialize in bringing interfaces to life through animation. Our 
                  motion designers have backgrounds in both product design and film, giving them unique 
                  insight into how to showcase digital experiences in compelling ways. We've helped 
                  countless SaaS companies communicate their design excellence to buyers, investors, 
                  and users.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">What We Animate</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">User Flows & Journeys</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Complete user journeys from start to finish. Watch a new user sign up, complete 
                    onboarding, and achieve their first win—all in one seamless sequence. These videos 
                    demonstrate how your product guides users toward value.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Feature Interactions</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Deep dives into specific features. Show how a complex workflow unfolds with intuitive 
                    interactions. Demonstrate the thoughtful UX decisions that make difficult tasks feel easy.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Data Visualization Motion</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Charts that build. Graphs that update in real-time. Dashboards that come alive. 
                    Animated data visualizations make abstract metrics concrete and memorable.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">Micro-Interactions</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    The small moments that add up to a great experience. Button clicks, toggle switches, 
                    form validations, success states—we animate these details to showcase your attention 
                    to craft.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Transition Design</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    How users move between screens matters. Smooth transitions maintain context and reduce 
                    cognitive load. We showcase these moments to demonstrate sophisticated UX thinking.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Responsive Behavior</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Show your product adapting across devices. Desktop to tablet to mobile—animated 
                    transitions demonstrate responsive design excellence and cross-platform consistency.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Where UX/UI Motion Videos Drive Impact</h2>
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
              <h2 className="font-serif text-3xl mb-6">Our UX/UI Motion Production Process</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
                Creating compelling interface animation requires understanding both design principles 
                and motion theory. Our process ensures we capture the essence of your product while 
                elevating its presentation.
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
              <h2 className="font-serif text-3xl mb-6">The Technical Side: How We Create UI Motion</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  We work directly with your design files whenever possible. Figma is our primary source, 
                  allowing us to extract components, maintain design system consistency, and ensure pixel-perfect 
                  accuracy. For products without accessible design files, we can work from screen recordings 
                  and rebuild key interfaces for animation.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Our animation toolkit includes After Effects for complex compositions, Principle for 
                  interaction prototyping, and Framer for web-ready animations. We choose the right tool 
                  based on your end use case—whether that's a polished video file for your homepage or 
                  interactive prototypes for stakeholder presentations.
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  Timing and easing are everything in motion design. We follow established animation 
                  principles—anticipation, follow-through, squash and stretch—adapted for digital interfaces. 
                  The result feels natural and responsive, never robotic or exaggerated.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">When to Choose UX/UI Motion Videos</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  UX/UI motion videos aren't right for every situation. They're most effective when:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4 mb-6">
                  <li><strong>Design is a differentiator:</strong> Your product competes on user experience, not just features.</li>
                  <li><strong>You're targeting design-conscious buyers:</strong> Your audience appreciates craft and will recognize quality.</li>
                  <li><strong>You have complex interactions:</strong> Static images can't adequately explain how your product works.</li>
                  <li><strong>You're launching a redesign:</strong> You want to showcase UX improvements and new interaction patterns.</li>
                  <li><strong>You're raising funding:</strong> Investors need to feel the product's polish and attention to detail.</li>
                </ul>
                <p className="text-fg-dim text-base leading-relaxed">
                  If your product is still in early development or if your primary audience is highly 
                  technical and skeptical of "polish," a more straightforward demo video might be more 
                  effective. We'll help you choose the right format during our strategy call.
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
                    UX/UI motion videos typically range from $6,000 to $18,000 depending on complexity, 
                    number of screens, and level of customization. This includes motion strategy, 
                    storyboarding, animation production, and all revisions.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Projects requiring extensive interface recreation or custom illustration may fall 
                    at the higher end of this range. We provide detailed quotes after understanding 
                    your specific needs.
                  </p>
                </div>
                <div className="bg-bg-2 p-8 rounded-xl border border-border">
                  <h3 className="font-serif text-2xl mb-4">Production Timeline</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Standard UX/UI motion projects take 3-5 weeks from kickoff to delivery. This timeline 
                    includes design review sessions, motion strategy development, animation production, 
                    and revision rounds.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Complex projects with many screens or intricate interactions may require additional 
                    time. Rush timelines are sometimes available for an expedited fee.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-border pt-12 mt-12">
              <h2 className="font-serif text-3xl mb-6">Ready to Bring Your Interface to Life?</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-8 max-w-3xl">
                Your product deserves to be shown in its best light. Let's create a UX/UI motion video 
                that showcases the craft, thoughtfulness, and polish that went into your design.
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
