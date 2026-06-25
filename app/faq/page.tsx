'use client';

import { useState } from 'react';
import { Reveal } from '@/components/reveal';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How much does a SaaS explainer video cost?',
    answer: 'Most projects fall between $4,000 and $15,000 depending on length, style, and complexity. We\'ll give you a fixed quote after a 30-minute discovery call.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Most videos ship in 3–6 weeks from kickoff. Rush projects (under 2 weeks) are possible with a small premium.',
  },
  {
    question: 'Do you do 3D animation?',
    answer: 'No — we specialize in 2D motion design, UI animation, and live-action hybrid work. We believe 2D is the right tool for most SaaS storytelling.',
  },
  {
    question: "What's included in every project?",
    answer: 'Every project includes strategy, script, storyboard, custom animation, professional voiceover, licensed music, sound design, and final delivery in all formats.',
  },
  {
    question: 'Can you match our brand guidelines?',
    answer: 'Absolutely. We work from your brand kit — colors, typography, iconography, tone of voice. Every frame is designed to feel like an extension of your product.',
  },
  {
    question: 'Do you offer ongoing retainers?',
    answer: 'Yes. Many of our clients work with us on a quarterly or annual retainer for ongoing video needs. Retainer clients get priority scheduling and preferred rates.',
  },
  {
    question: 'What if we\'re not happy with the result?',
    answer: "We include unlimited revisions in every project. We don't move from script to animation until you've approved the storyboard.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-40 pb-28 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <Reveal>
            <div className="section-label">FAQ</div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-4xl">
              Questions we get <em className="text-accent">asked a lot</em>.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-fg-dim text-base max-w-md">
              Everything you need to know before starting a project with us.
            </p>
          </Reveal>
        </div>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="border-b border-border py-8">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left flex justify-between items-start gap-4"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-normal pr-8">
                    {faq.question}
                  </h3>
                  <span className="text-accent flex-shrink-0 mt-1">
                    {openIndex === i ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === i ? 'max-h-96 mt-4' : 'max-h-0'
                  )}
                >
                  <p className="text-fg-dim leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
