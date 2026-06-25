import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Film, Zap, Target, Users, TrendingUp, Award, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Launch Videos | Product Launch Films | SaaS Animate',
  description: 'Professional SaaS launch videos that make your product debut unforgettable. We create cinematic launch films for Product Hunt, investor announcements, and major releases. Drive awareness, excitement, and early adoption with compelling launch storytelling.',
  keywords: 'SaaS launch video, product launch film, Product Hunt video, startup launch video, software launch animation, new product video, SaaS release video, tech product launch, startup announcement video, product debut film',
};

const benefits = [
  {
    icon: Film,
    title: 'Cinematic Storytelling',
    description: 'Launch videos are your chance to make a statement. We combine documentary-style narrative with premium motion design to create films that feel like movie trailers for your product—because they essentially are.',
  },
  {
    icon: Zap,
    title: 'Multi-Platform Optimization',
    description: 'Your launch video needs to work everywhere: Product Hunt, LinkedIn, Twitter, YouTube, your homepage, email campaigns. We deliver multiple cuts optimized for each platform\'s format and audience behavior.',
  },
  {
    icon: Target,
    title: 'Launch-Day Impact',
    description: 'A great launch video can be the difference between a quiet release and a viral moment. We craft videos designed to capture attention in crowded feeds and drive immediate action on launch day.',
  },
];

const useCases = [
  {
    icon: Award,
    title: 'Product Hunt Debuts',
    description: 'Product Hunt launches with videos get 2.3x more upvotes on average. Stand out in the daily feed with a compelling launch film that communicates your value proposition in under 90 seconds.',
  },
  {
    icon: Users,
    title: 'Investor & Press Announcements',
    description: 'Major funding rounds and product milestones deserve celebration. Launch videos for press releases and investor updates build credibility and generate media coverage.',
  },
  {
    icon: TrendingUp,
    title: 'Feature Release Campaigns',
    description: 'Not every launch is a full product debut. Major feature releases, v2.0 launches, and rebrands all benefit from dedicated launch videos that re-engage existing users and attract new ones.',
  },
];

const process = [
  {
    num: '01',
    title: 'Launch Strategy & Positioning',
    description: 'We start by understanding your launch goals, target audience, competitive landscape, and key messaging. What makes this launch newsworthy? What emotion should viewers feel? This strategic foundation shapes everything that follows.',
  },
  {
    num: '02',
    title: 'Narrative Development',
    description: 'Great launch videos tell stories, not features. We craft narratives around the problem you\'re solving, the journey that led to this solution, and the impact it will have. This human-centered approach resonates far more than spec sheets.',
  },
  {
    num: '03',
    title: 'Production & Animation',
    description: 'Depending on your launch style, we blend live-action footage, screen recordings, custom animation, and motion graphics. Our production team handles everything from storyboarding to final color grading.',
  },
  {
    num: '04',
    title: 'Distribution Assets',
    description: 'Beyond the hero launch film, we create social cuts (15s, 30s, 60s), thumbnail variations, GIFs for social media, and platform-specific optimizations. You launch with a complete asset library ready for every channel.',
  },
];

export default function LaunchVideosPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
              SaaS Launch Videos That Make Debut Unforgettable
            </h1>
            <p className="text-fg-dim text-lg mb-4">
              Cinematic launch films for Product Hunt, investor announcements, and major releases
            </p>
            <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
              Your product launch happens once. Make it count. Launch videos are the centerpiece of 
              successful product debuts—combining storytelling, social proof, and strategic messaging 
              to generate awareness, excitement, and early adoption. We create launch films that don't 
              just announce your product, but make people care about it.
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
              <h2 className="font-serif text-3xl mb-6">Why Launch Videos Matter</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  In the attention economy, launching a product without a video is like opening a 
                  restaurant without signage. You might have the best product in the world, but if 
                  people scroll past without understanding what you do, you've already lost.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Launch videos serve multiple critical functions. They compress months of development 
                  into 90 seconds of compelling narrative. They give journalists and influencers something 
                  shareable to amplify your message. They create an emotional connection that feature lists 
                  never could. And perhaps most importantly, they signal that you're serious—this isn't a 
                  side project, it's a real product worthy of attention.
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  At SaaS Animate, we've produced launch videos for hundreds of SaaS companies across 
                  every stage—from pre-seed startups making their first public appearance to Series C 
                  companies releasing category-defining products. We understand what makes launches 
                  resonate and how to craft videos that drive real results on launch day and beyond.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">What Makes a Great Launch Video</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">Lead With Why, Not What</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    The biggest mistake in launch videos is diving straight into features. Great launch 
                    videos open with the problem—the frustration, the inefficiency, the missed opportunity 
                    that your product addresses. Make viewers feel the pain before offering relief.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Show, Don't Just Tell</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Abstract claims like "revolutionary" and "game-changing" mean nothing without proof. 
                    Show your product solving real problems for real users. Demonstrate the transformation 
                    from before to after. Let the visuals do the heavy lifting.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Build Momentum to a Clear CTA</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Every launch video should end with one unmistakable next step. Sign up for early access. 
                    Join the waitlist. Vote on Product Hunt. Don't dilute this with multiple CTAs—pick one 
                    and make it impossible to miss.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">Earn Credibility Fast</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    New products face skepticism by default. Counter it immediately with social proof: 
                    beta customer logos, impressive metrics, notable backers, or press quotes. Even 
                    "Built by the team behind [Previous Success]" works wonders.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Match Visual Style to Brand</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    A developer tool launch video should feel different from a consumer app launch. 
                    Enterprise software demands polish and professionalism. Creative tools can embrace 
                    boldness and experimentation. Your visual style signals who this product is for.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Optimize for Silent Viewing</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Most launch videos are watched on mute initially—especially on social feeds. Design 
                    your video to communicate clearly without sound using on-screen text, visual hierarchy, 
                    and intuitive imagery. Add captions for accessibility and engagement.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Where Launch Videos Drive Results</h2>
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
              <h2 className="font-serif text-3xl mb-6">Our Launch Video Production Process</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
                Launch timelines are unforgiving. You have one shot to make an impression. Our process 
                is designed for speed without sacrificing quality, ensuring your launch video is ready 
                when you need it—and performs when it matters.
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
              <h2 className="font-serif text-3xl mb-6">Launch Video Formats We Create</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Different platforms demand different formats. We don't just deliver one video file—we 
                  create a complete launch asset library tailored to your distribution strategy.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">Hero Launch Film (90-120 seconds)</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Your flagship video for homepage, Product Hunt, YouTube, and presentations. 
                      This is the full narrative treatment with complete storytelling arc.
                    </p>
                  </div>
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">Social Cuts (15s, 30s, 60s)</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Platform-optimized versions for LinkedIn, Twitter, Instagram, and paid ads. 
                      Each cut is crafted to work within its specific time constraints and format.
                    </p>
                  </div>
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">Teaser Trailers (10-15 seconds)</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Pre-launch teasers that build anticipation without revealing everything. 
                      Perfect for waitlist campaigns and countdown content.
                    </p>
                  </div>
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">GIFs & Motion Snippets</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Shareable moments from your video formatted as GIFs for social media, 
                      documentation, and community posts. These micro-assets extend your reach.
                    </p>
                  </div>
                </div>
                <p className="text-fg-dim text-base leading-relaxed">
                  We also provide thumbnail variations, caption files (SRT/VTT), and platform-specific 
                  technical specs to ensure optimal playback everywhere. You launch with everything you 
                  need—no last-minute scrambling required.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Timing Your Launch Video Production</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Launch video production takes time—typically 3-5 weeks from kickoff to final delivery. 
                  This timeline includes strategy sessions, script development, production, animation, 
                  voiceover recording, revisions, and format optimization.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Start the process at least 6 weeks before your planned launch date. This buffer 
                  accounts for unexpected delays and gives you time to integrate the video into your 
                  broader launch campaign (email sequences, landing page updates, press outreach, etc.).
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  If you're working with a tighter deadline, rush production is sometimes possible for 
                  an additional fee. Contact us early to discuss your timeline—we'll let you know 
                  what's realistic and help you prioritize accordingly.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Investment & ROI</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-bg-2 p-8 rounded-xl border border-border">
                  <h3 className="font-serif text-2xl mb-4">Typical Investment</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Professional launch videos range from $8,000 to $25,000+ depending on complexity, 
                    production style (animation vs. live-action), length, and number of deliverable 
                    formats. This includes full strategy, scriptwriting, production, and all cuts.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    For context, a single day of traditional video production often costs $10,000+. 
                    Our streamlined approach delivers comparable quality at a fraction of the cost.
                  </p>
                </div>
                <div className="bg-bg-2 p-8 rounded-xl border border-border">
                  <h3 className="font-serif text-2xl mb-4">Launch Video ROI</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Clients typically see 2-3x higher engagement on launch day compared to text-only 
                    announcements. Product Hunt launches with videos average 2.3x more upvotes. Email 
                    campaigns featuring launch videos see 40%+ higher click-through rates.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Beyond launch day, these videos continue driving signups, demo requests, and 
                    media coverage for months. The compounding returns make launch videos one of 
                    the highest-ROI investments in your go-to-market budget.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-border pt-12 mt-12">
              <h2 className="font-serif text-3xl mb-6">Ready to Launch With Impact?</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-8 max-w-3xl">
                Your product deserves a launch that matches its ambition. Let's create a launch video 
                that captures attention, communicates value, and drives the momentum you need for a 
                successful debut.
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
