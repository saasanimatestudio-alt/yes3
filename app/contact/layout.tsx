import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Get In Touch',
  description:
    'Tell us about your project and we\'ll get back within one business day with a tailored proposal. Book a call or send us a message.',
  openGraph: {
    title: 'Contact — Get In Touch',
    description:
      'Tell us about your project and we\'ll get back within one business day with a tailored proposal.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
