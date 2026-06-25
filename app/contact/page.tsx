'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { CalendlyEmbed } from '@/components/calendly-embed';
import { ArrowRight, Clock, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const budgetOptions = [
  { value: '< $3k', label: '< $3k', range: 'Starter' },
  { value: '$3k – $7k', label: '$3k – $7k', range: 'Standard' },
  { value: '$7k – $15k', label: '$7k – $15k', range: 'Premium' },
  { value: '$15k+', label: '$15k+', range: 'Enterprise' },
];

const serviceOptions = [
  'SaaS Explainer Video',
  'Demo Video',
  'UX/UI Video',
  'Product Film',
  'Brand Video',
  'Promo Video',
  'Launch Video',
  'Not sure yet',
];

const timelineOptions = [
  'ASAP (under 2 weeks)',
  'Standard (3–6 weeks)',
  'Flexible (6+ weeks)',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    timeline: 'Standard (3–6 weeks)',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.budget) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          website: '',
          service: '',
          budget: '',
          timeline: 'Standard (3–6 weeks)',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-40 pb-28 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal>
              <div className="section-label">Get In Touch</div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
                Let&apos;s build a video <em className="text-accent">worth watching</em>.
              </h1>
              <p className="text-fg-dim text-lg leading-relaxed mb-12">
                Tell us about your project and we&apos;ll get back within one business day with a tailored proposal. Prefer to talk live? Book a call instead.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-6 border-b border-border">
                  <span className="text-xs tracking-widest uppercase text-fg-muted font-medium">Email</span>
                  <a href="mailto:hello@saasanimate.com" className="text-white hover:text-accent transition-colors">
                    hello@saasanimate.com
                  </a>
                </div>
                <div className="flex justify-between items-center py-6 border-b border-border">
                  <span className="text-xs tracking-widest uppercase text-fg-muted font-medium">Response Time</span>
                  <span className="text-white">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center py-6 border-b border-border">
                  <span className="text-xs tracking-widest uppercase text-fg-muted font-medium">Typical Project</span>
                  <span className="text-white">$3,000 – $40,000</span>
                </div>
                <div className="flex justify-between items-center py-6 border-b border-border">
                  <span className="text-xs tracking-widest uppercase text-fg-muted font-medium">Turnaround</span>
                  <span className="text-white">3–6 weeks</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-fg-dim mb-4">Prefer a live conversation?</p>
                <Link href="/booking" className="btn btn-primary">
                  Book a free call <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="bg-bg-2 border border-border p-10 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="form-input"
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                  Service Interested In *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="form-input appearance-none bg-no-repeat bg-right pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23a8a8a8' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                  Project Budget *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: opt.value })}
                      className={cn(
                        'py-4 px-2 bg-bg-3 border rounded-xl text-center transition-all duration-300',
                        formData.budget === opt.value
                          ? 'border-accent bg-accent-soft text-accent'
                          : 'border-border hover:border-border-strong'
                      )}
                    >
                      <span className="block text-sm font-medium">{opt.label}</span>
                      <span className={cn(
                        'block text-xs mt-1',
                        formData.budget === opt.value ? 'text-accent' : 'text-fg-muted'
                      )}>{opt.range}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="form-input appearance-none bg-no-repeat bg-right pr-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23a8a8a8' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  {timelineOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-xs tracking-widest uppercase text-fg-dim mb-2 font-medium">
                  Tell us about your project *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input resize-none"
                  placeholder="What are you building? What's the goal of the video?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-accent-soft border border-accent rounded-xl flex items-center gap-3 text-accent">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Message sent! We&apos;ll get back to you within 24 hours.
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500 rounded-xl flex items-center gap-3 text-red-400">
                  <XCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {!formData.budget ? 'Please select a project budget.' : 'Something went wrong. Please email us at hello@saasanimate.com'}
                  </span>
                </div>
              )}
            </form>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto mt-24 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <Reveal>
              <div className="section-label justify-center mb-4">
                <span className="w-5 h-px bg-accent inline-block" />
                Prefer to talk live?
              </div>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight mb-4">
                Book a free <em className="text-accent italic">30-minute call</em>
              </h2>
              <p className="text-fg-dim text-lg max-w-xl mx-auto">
                Skip the back-and-forth. Pick a time that works for you and we&apos;ll jump on a Google Meet to discuss your project.
              </p>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="bg-bg-2 border border-border rounded-2xl p-4 overflow-hidden">
              <CalendlyEmbed height={650} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
