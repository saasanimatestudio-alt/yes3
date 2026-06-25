import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saasanimate.com'),
  title: {
    default: 'SaaS Animate — Animation That Moves SaaS Metrics',
    template: '%s | SaaS Animate',
  },
  description:
    'SaaS Animate is a focused animation studio for SaaS teams. Explainer videos, product demos, UI motion and launch films — engineered to convert, not decorate.',
  keywords: [
    'SaaS explainer video',
    'SaaS video agency',
    'SaaS demo video',
    'product video agency',
    'SaaS launch video',
    'explainer video company',
    'SaaS animation studio',
    'software explainer video',
    'B2B SaaS video',
    'startup explainer video',
    'SaaS promo video',
    'UX UI video',
    'SaaS brand video',
    'SaaS motion design',
  ],
  authors: [{ name: 'SaaS Animate' }],
  creator: 'SaaS Animate',
  publisher: 'SaaS Animate',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saasanimate.com',
    siteName: 'SaaS Animate',
    title: 'SaaS Animate — Animation That Moves SaaS Metrics',
    description:
      'We craft cinematic SaaS explainer, demo, product and launch videos that convert visitors into customers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SaaS Animate - Animation Studio for SaaS Companies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Animate — Animation That Moves SaaS Metrics',
    description:
      'High-converting SaaS explainer, demo, product and launch videos crafted by specialists.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://saasanimate.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'SaaS Animate',
              url: 'https://saasanimate.com',
              logo: 'https://saasanimate.com/logo.png',
              description:
                'Focused animation studio for SaaS teams. Explainer videos, product demos, UI motion and launch films — engineered to convert, not decorate.',
              email: 'hello@saasanimate.com',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
