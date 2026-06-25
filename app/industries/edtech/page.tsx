import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, BookOpen, GraduationCap, TrendingUp, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EdTech Animation Services | SaaS Animate',
  description: 'Professional EdTech animation and explainer videos for learning platforms, LMS systems, student engagement tools, and educational software. Increase enrollments and engagement with compelling educational videos.',
  keywords: 'EdTech animation, eLearning explainer video, LMS demo video, online course promotion video, student engagement animation, educational software launch video, training platform video, K-12 education animation, higher ed marketing video, corporate learning video',
  openGraph: {
    title: 'EdTech Animation Services | SaaS Animate',
    description: 'Professional EdTech animation and explainer videos for learning platforms, LMS systems, student engagement tools, and educational software.',
  },
};

const benefits = [
  {
    icon: BookOpen,
    title: 'Simplify Learning Concepts',
    description: 'Complex educational methodologies, pedagogical approaches, and learning outcomes become instantly clear through visual storytelling. Our animations help educators, administrators, and students understand your platform's unique approach to learning.',
  },
  {
    icon: GraduationCap,
    title: 'Drive Student Engagement',
    description: 'Attention spans are shorter than ever. Engaging animated content increases course completion rates by up to 70% and keeps learners motivated throughout their educational journey. Make learning irresistible.',
  },
  {
    icon: TrendingUp,
    title: 'Boost Enrollment Conversions',
    description: 'Prospective students and parents need to see value before committing. Professional explainer videos on landing pages increase enrollment conversions by 80%+ and reduce cost per acquisition significantly.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Educational Discovery',
    description: 'We dive deep into your learning philosophy, target audience (students, teachers, administrators, parents), curriculum alignment, and the specific educational challenges your solution addresses in modern learning environments.',
  },
  {
    num: '02',
    title: 'Pedagogy-Focused Scripting',
    description: 'Our scripts speak the language of education while remaining accessible. We highlight learning outcomes, assessment methods, accessibility features, and the tangible impact on student success and teacher effectiveness.',
  },
  {
    num: '03',
    title: 'Engaging Visual Design',
    description: 'Colorful, age-appropriate animations that captivate learners while maintaining professionalism for administrative buyers. We balance fun and function to create content that resonates across all stakeholder groups.',
  },
  {
    num: '04',
    title: 'Multi-Audience Distribution',
    description: 'Receive versions optimized for student recruitment, teacher training, administrator presentations, parent communications, and social media campaigns. Every cut designed for its specific audience and channel.',
  },
];

const useCases = [
  {
    title: 'Learning Management Systems (LMS)',
    description: 'Showcase course creation tools, grade books, assignment workflows, discussion forums, and analytics dashboards. Demonstrate how your LMS simplifies teaching and enhances the learning experience for institutions of all sizes.',
  },
  {
    title: 'K-12 Educational Platforms',
    description: 'Bring to life interactive lessons, gamified learning experiences, progress tracking for parents, and teacher dashboards. Create content that appeals to students, educators, and district decision-makers simultaneously.',
  },
  {
    title: 'Higher Education Solutions',
    description: 'Illustrate campus learning ecosystems, lecture capture, collaborative study tools, and career readiness features. Connect with university administrators focused on student retention and graduation rates.',
  },
  {
    title: 'Corporate Training & Upskilling',
    description: 'Demonstrate skill assessments, personalized learning paths, certification programs, and ROI tracking. Help L&D professionals visualize how your platform builds workforce capabilities and closes skills gaps.',
  },
  {
    title: 'Tutoring & Test Prep Platforms',
    description: 'Show adaptive learning algorithms, one-on-one matching, practice problem libraries, and score improvement tracking. Appeal to students and parents invested in academic achievement and college admissions.',
  },
  {
    title: 'Early Childhood Education Apps',
    description: 'Create playful, colorful animations featuring characters and interactive elements that engage young learners while reassuring parents about educational value and screen time quality.',
  },
];

const stats = [
  { value: '80%', label: 'Higher Enrollment Rates' },
  { value: '3x', label: 'Increased Course Completion' },
  { value: '65%', label: 'Better Knowledge Retention' },
  { value: '50%', label: 'Faster Adoption by Teachers' },
];

export default function EdTechPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="section-label">EdTech Animation Studio</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-5xl mb-8">
              Animation videos built for <em className="text-accent">education technology companies</em>.
            </h1>
            <p className="text-fg-dim text-lg max-w-3xl leading-relaxed">
              From K-12 platforms to corporate learning solutions, we create compelling explainer videos, 
              product demos, and marketing content that helps EdTech companies increase enrollments, 
              engage learners, and scale impact.
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
              Why EdTech companies choose <em className="text-accent">specialist animation</em>.
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
              EdTech products we <em className="text-accent">bring to life</em>.
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-16">
              We've partnered with EdTech innovators across every segment of the education market, 
              from early childhood apps to enterprise learning platforms serving millions of students.
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
              Ready to transform your <em className="text-accent">EdTech marketing</em>?
            </h2>
            <p className="text-fg-dim text-lg max-w-3xl mb-12">
              Whether you're launching a new course platform, expanding into new markets, or seeking 
              to improve learner outcomes, our animation expertise helps EdTech companies communicate 
              their impact and grow faster.
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
                View EdTech Portfolio
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={300}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Education Sector Expertise</h4>
                  <p className="text-fg-dim text-sm">We understand pedagogy, learning science, and educational procurement.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Age-Appropriate Design</h4>
                  <p className="text-fg-dim text-sm">Animations tailored to resonate with your specific learner demographics.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white mb-1">Accessibility First</h4>
                  <p className="text-fg-dim text-sm">Content designed with WCAG compliance and inclusive learning principles.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
