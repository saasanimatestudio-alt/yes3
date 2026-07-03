'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={cn('nav', scrolled && 'nav-scrolled')}>
      <Link href="/" className="flex items-center gap-3 cursor-pointer group">
        <Image src="/logo.svg" alt="SaaS Animate" width={48} height={48} className="w-12 h-12" />
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'text-sm text-fg-dim transition-colors duration-300 relative hover:text-white',
              pathname === link.href && 'text-white'
            )}
          >
            {link.label}
            {pathname === link.href && (
              <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent rounded-full" />
            )}
          </Link>
        ))}
        <Link
          href="/booking"
          className="px-5 py-2.5 bg-accent text-[#0a0a0a] rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#d4ff6e] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(184,255,62,0.25)]"
        >
          Book a Call
        </Link>
      </div>

      <button
        className="lg:hidden text-2xl p-2 text-fg-dim hover:text-white transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={cn(
          'lg:hidden fixed top-0 right-0 w-4/5 max-w-[360px] h-screen bg-bg-2 flex flex-col justify-center p-8 gap-6 transition-all duration-400 border-l border-border',
          mobileMenuOpen ? 'right-0' : '-right-full'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              'text-base text-fg-dim transition-colors duration-300 hover:text-accent',
              pathname === link.href && 'text-accent'
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/booking"
          onClick={() => setMobileMenuOpen(false)}
          className="btn btn-primary justify-center mt-4"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}
