import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Film, Clapperboard, TrendingUp, Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SaaS Product Films | Brand Story Videos | SaaS Animate',
  description: 'Professional SaaS product films that tell your brand story. We create cinematic brand videos, company stories, and product documentaries that build emotional connection with buyers, investors, and talent. Perfect for about pages, investor decks, and recruitment.',
  keywords: 'SaaS brand video, product film, company story video, startup brand film, SaaS documentary, brand storytelling video, tech company video, founder story video, SaaS brand content, corporate brand film',
};

const benefits = [
  {
    icon: Film,
    title: 'Emotional Brand Connection',
    description: 'Product films go beyond features to tell the human story behind your company. Why did you start this? What problem are you obsessed with solving? These narratives build emotional resonance that pure product demos can\'t achieve.',
  },
  {
    icon: Clapperboard,
    title: 'Cinematic Production Quality',
    description: 'We blend documentary-style interviews, B-roll footage, motion graphics, and narrative pacing to create films that feel like premium content—not corporate marketing. The quality signals your company\'s seriousness and ambition.',
  },
  {
    icon: TrendingUp,
    title: 'Multi-Purpose Asset',
    description: 'A great product film works everywhere: your About page, investor pitch meetings, recruitment campaigns, conference keynotes, and media outreach. One production, countless applications across your growth journey.',
  },
];

const useCases = [
  {
    icon: Target,
    title: 'About Page & Homepage',
    description: 'Replace static "About Us" text with a compelling brand film. Visitors spend 3-5x longer on pages with video, and emotional connection drives higher conversion rates throughout the funnel.',
  },
  {
    icon: Users,
    title: 'Investor Relations & Fundraising',
    description: 'Investors back teams, not just products. Brand films showcase your founders' vision, team culture, and market insight—building confidence that goes far beyond pitch deck metrics.',
  },
  {
    icon: Award,
    title: 'Recruitment & Employer Branding',
    description: 'Top talent wants to work for companies with purpose. Product films communicate your mission, culture, and impact—attracting candidates who align with your values and vision.',
  },
];

const process = [
  {
    num: '01',
    title: 'Story Discovery',
    description: 'We conduct deep-dive interviews with founders, key team members, and customers to uncover the authentic narrative threads. What's the origin story? What obstacles have you overcome? What's the vision? This discovery phase shapes the entire film.',
  },
  {
    num: '02',
    title: 'Script & Treatment',
    description: 'Based on discovery insights, we craft a narrative treatment and shooting script. This outlines the story arc, identifies key interview subjects, plans B-roll sequences, and defines the visual style. You approve the direction before any filming begins.',
  },
  {
    num: '03',
    title: 'Production',
    description: 'Our production team handles everything: professional camera equipment, lighting, audio recording, location scouting, and direction. We film founder interviews, team moments, customer testimonials, and contextual B-roll that brings your story to life.',
  },
  {
    num: '04',
    title: 'Post-Production',
    description: 'Editing is where the story truly emerges. We weave together interviews, B-roll, motion graphics, music, and sound design into a cohesive narrative. Multiple revision rounds ensure the final film exceeds your expectations.',
  },
];

export default function ProductFilmsPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
              SaaS Product Films That Tell Your Story
            </h1>
            <p className="text-fg-dim text-lg mb-4">
              Cinematic brand videos and company documentaries for SaaS companies
            </p>
            <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
              Every great SaaS company has a story worth telling. Product films capture the human 
              narrative behind your software—the founders' vision, the team's passion, the customers 
              whose lives you've changed. These aren't sales videos; they're brand-building assets 
              that create emotional connection and lasting impression.
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
              <h2 className="font-serif text-3xl mb-6">Why SaaS Companies Need Product Films</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  In a world of feature comparisons and pricing tables, your story is what makes you 
                  memorable. Product films answer the questions that matter most but are hardest to 
                  articulate: Why does your company exist? What do you believe in? Who are the people 
                  behind the product?
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  These films serve multiple audiences simultaneously. Prospects watch them to gauge 
                  whether your company understands their problems at a deeper level. Investors use them 
                  to assess founder-market fit and team dynamics. Potential employees watch to determine 
                  if your culture aligns with their values. Journalists reference them when writing about 
                  your company.
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  At SaaS Animate, we've produced brand films for startups raising seed rounds, Series 
                  B companies expanding into new markets, and established players undergoing rebrands. 
                  Regardless of stage, the companies that invest in storytelling consistently outperform 
                  those that don't—because people buy from companies they understand and trust.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">What Makes a Great SaaS Brand Film</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">Authenticity Over Polish</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    The best brand films feel genuine, not manufactured. We capture real moments, 
                    unscripted reactions, and honest conversations. Yes, the production quality is 
                    high—but it never overshadows the authenticity of the story being told.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Conflict and Resolution</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Every compelling story has tension. Maybe it's an industry broken by incumbents. 
                    Maybe it's a personal frustration that sparked the company's founding. We identify 
                    and highlight these conflicts to make the resolution—your solution—feel earned 
                    and meaningful.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Customer-Centered Narrative</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Your customers are the heroes of this story, not your company. Great brand films 
                    show how real people use your product to overcome challenges, achieve goals, and 
                    transform their work. Customer testimonials woven throughout add credibility and 
                    emotional weight.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-accent">Visual Variety</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Static talking heads get boring fast. We mix interview footage with office B-roll, 
                    product shots, customer scenes, archival photos, and motion graphics. This visual 
                    variety maintains engagement and reinforces different aspects of your story.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Pacing That Respects Attention</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    Most brand films run 2-4 minutes. Every second must earn its place. We edit ruthlessly, 
                    cutting anything that doesn't advance the narrative or evoke emotion. The result feels 
                    tight and purposeful, never meandering.
                  </p>
                  <h3 className="font-serif text-xl mb-4 text-accent mt-6">Music and Sound Design</h3>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Audio is half the experience. We license original music that matches your brand 
                    energy and use professional sound design to create atmosphere. The right score 
                    elevates good footage into great storytelling.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Where Product Films Drive Impact</h2>
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
              <h2 className="font-serif text-3xl mb-6">Our Product Film Production Process</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-12 max-w-3xl">
                Creating a compelling brand film requires balancing creative storytelling with practical 
                production logistics. Our process ensures you get a film that exceeds expectations 
                while staying on timeline and budget.
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
              <h2 className="font-serif text-3xl mb-6">Types of SaaS Brand Films We Create</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Not every brand film looks the same. We tailor the format and style to your specific 
                  goals, audience, and distribution channels.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">Founder Story Films</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Centered on the founders' journey—the inspiration, the struggles, the breakthrough 
                      moments. These films build personal connection and establish founder credibility 
                      with investors and early adopters.
                    </p>
                  </div>
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">Company Culture Films</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Showcase your team, values, and working environment. Perfect for recruitment 
                      campaigns and employer branding initiatives aimed at attracting top talent.
                    </p>
                  </div>
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">Customer Impact Documentaries</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Follow real customers as they use your product to solve meaningful problems. 
                      These films provide powerful social proof and demonstrate tangible value.
                    </p>
                  </div>
                  <div className="bg-bg-2 p-6 rounded-xl border border-border">
                    <h4 className="font-serif text-lg mb-2">Mission & Vision Films</h4>
                    <p className="text-fg-dim text-sm leading-relaxed">
                      Articulate your company's broader purpose and long-term vision. These films 
                      resonate with stakeholders who want to be part of something bigger than a 
                      product purchase.
                    </p>
                  </div>
                </div>
                <p className="text-fg-dim text-base leading-relaxed">
                  Many clients commission multiple films over time—a founder story during fundraising, 
                  a culture film during hiring surges, customer documentaries for ongoing marketing. 
                  We can help you plan a content strategy that maximizes the impact of each production.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mb-20">
              <h2 className="font-serif text-3xl mb-6">Production Logistics</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  We handle all aspects of production, making the process as seamless as possible for 
                  your team. Our crew travels to your offices, customer sites, or any location that's 
                  relevant to your story.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-6">
                  Typical shoots span 1-3 days depending on the scope. We coordinate schedules with 
                  all interview subjects, scout locations in advance, and prepare shot lists to maximize 
                  efficiency. Your team can continue working—we capture authentic moments without 
                  disrupting operations.
                </p>
                <p className="text-fg-dim text-base leading-relaxed">
                  Post-production typically takes 3-4 weeks after filming wraps. This includes initial 
                  assembly cuts, client feedback rounds, color grading, sound mixing, and final delivery 
                  in all required formats. We provide broadcast-quality files optimized for web, 
                  presentations, and social media.
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
                    Professional SaaS brand films range from $15,000 to $50,000+ depending on production 
                    scale, number of shoot days, locations, and post-production complexity. This includes 
                    pre-production planning, professional crew, equipment, editing, music licensing, 
                    and all revisions.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Compared to traditional production companies charging $20,000+ per day, our 
                    streamlined approach delivers comparable quality at significantly lower cost.
                  </p>
                </div>
                <div className="bg-bg-2 p-8 rounded-xl border border-border">
                  <h3 className="font-serif text-2xl mb-4">Production Timeline</h3>
                  <p className="text-fg-dim text-sm leading-relaxed mb-4">
                    From initial kickoff to final delivery, expect 6-8 weeks for a standard brand film 
                    project. This includes discovery sessions, pre-production planning, 1-3 shoot days, 
                    and 3-4 weeks of post-production with revision rounds.
                  </p>
                  <p className="text-fg-dim text-sm leading-relaxed">
                    Complex multi-location productions or films requiring extensive animation may 
                    require additional time. We'll provide a detailed timeline during our strategy call.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="border-t border-border pt-12 mt-12">
              <h2 className="font-serif text-3xl mb-6">Ready to Tell Your Story?</h2>
              <p className="text-fg-dim text-base leading-relaxed mb-8 max-w-3xl">
                Your company has a story worth sharing. Let's create a product film that captures 
                your vision, showcases your team, and builds the emotional connections that drive 
                long-term growth.
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
