import Link from 'next/link';
import { ChevronUp, Mail } from 'lucide-react';

const footerLinks = {
  studio: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  industries: [
    { label: 'SaaS', href: '/industries/saas' },
    { label: 'Fintech', href: '/industries/fintech' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Developer Tools', href: '/industries/developer-tools' },
    { label: 'Enterprise', href: '/industries/enterprise' },
    { label: 'HR Tech', href: '/industries/hr-tech' },
    { label: 'EdTech', href: '/industries/edtech' },
    { label: 'Cybersecurity', href: '/industries/cybersecurity' },
    { label: 'Marketing Automation', href: '/industries/marketing-automation' },
    { label: 'Customer Success', href: '/industries/customer-success' },
  ],
  services: [
    { label: 'SaaS Explainer', href: '/services/explainer-videos' },
    { label: 'Demo Videos', href: '/services/demo-videos' },
    { label: 'UX/UI Videos', href: '/services/ux-ui-videos' },
    { label: 'Product Films', href: '/services/product-films' },
    { label: 'Brand Videos', href: '/services/brand-videos' },
    { label: 'Promo Videos', href: '/services/promo-videos' },
    { label: 'Launch Videos', href: '/services/launch-videos' },
  ],
  connect: [
    { label: 'hello@saasanimate.com', href: 'mailto:hello@saasanimate.com', isEmail: true },
    { label: 'Twitter / X', href: '#' },
    { label: 'YouTube', href: 'https://www.youtube.com/@SaasAnimate' },
  ],
};

export function Footer() {
  return (
    <footer className="px-10 pt-20 pb-8 border-t border-border bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <ChevronUp className="w-3 h-3 text-[#0a0a0a]" strokeWidth={2.5} />
              </span>
              <span className="font-serif text-xl font-medium">
                <span className="text-white">SaaS</span>
                <span className="text-fg-muted mx-1">·</span>
                <span className="text-white">Animate</span>
              </span>
            </div>
            <p className="text-fg-dim text-sm max-w-[340px] leading-relaxed">
              A focused animation studio for SaaS teams. Explainer videos, product demos, UI motion
              and launch films — engineered to convert, not decorate.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-fg-muted mb-6 font-medium">
              Studio
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.studio.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-fg-dim text-sm transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-fg-muted mb-6 font-medium">
              Industries
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.industries.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-fg-dim text-sm transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-fg-muted mb-6 font-medium">
              Services
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-fg-dim text-sm transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-fg-muted mb-6 font-medium">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.connect.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-fg-dim text-sm transition-colors',
                    link.isEmail ? 'hover:text-accent' : 'hover:text-white'
                  )}
                >
                  {link.isEmail && <Mail className="w-3 h-3 inline-block mr-2" />}
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                className="text-accent text-sm font-medium mt-2 inline-block hover:text-accent-2"
              >
                Book a Call →
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-fg-muted text-xs">© 2026 SaaS Animate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="text-fg-muted text-xs hover:text-fg-dim transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-fg-muted text-xs hover:text-fg-dim transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-fg-muted text-xs hover:text-fg-dim transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
