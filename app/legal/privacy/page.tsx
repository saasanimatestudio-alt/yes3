import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — SaaS Animate',
  description: 'Privacy Policy for SaaS Animate. We respect your privacy and are committed to protecting your personal data. Learn how we collect, use, and safeguard your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
              Privacy Policy
            </h1>
            <p className="text-fg-dim text-lg mb-4">Last updated: January 2026</p>
            <p className="text-fg-dim text-base leading-relaxed mb-12">
              At SaaS Animate, we take your privacy seriously. This policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">1. Information We Collect</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  We may collect information about you in a variety of ways, including:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>Personal Data: Name, email address, phone number, company name, and job title that you voluntarily provide when contacting us or requesting services.</li>
                  <li>Usage Data: Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                  <li>Cookies: We use cookies to enhance your browsing experience and analyze website traffic.</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">2. How We Use Your Information</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>Provide and maintain our animation services</li>
                  <li>Respond to your inquiries and communicate with you about projects</li>
                  <li>Send you updates, marketing communications, and promotional materials (you can opt-out at any time)</li>
                  <li>Monitor and analyze usage patterns to improve our website and services</li>
                  <li>Detect and prevent fraudulent or illegal activities</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">3. Sharing Your Information</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>With service providers who assist in our operations (e.g., hosting, email delivery) under confidentiality agreements</li>
                  <li>To comply with legal obligations or protect our rights</li>
                  <li>In connection with a business transfer, such as a merger or acquisition</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">4. Data Security</h2>
                <p className="text-fg-dim text-base leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">5. Your Rights</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict certain processing of your data</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Data portability</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">6. Third-Party Links</h2>
                <p className="text-fg-dim text-base leading-relaxed">
                  Our website may contain links to third-party websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policies of any sites you visit.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">7. Children's Privacy</h2>
                <p className="text-fg-dim text-base leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">8. Changes to This Policy</h2>
                <p className="text-fg-dim text-base leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be indicated by a revised "Last updated" date. We encourage you to review this policy periodically for the latest information on our privacy practices.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">9. Contact Us</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-fg-dim text-base">
                  Email: hello@saasanimate.com
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section className="border-t border-border pt-8 mt-12">
                <p className="text-fg-muted text-sm italic">
                  By using our website and services, you acknowledge that you have read and understood this Privacy Policy. 
                  All final rights regarding project deliverables, intellectual property, and usage belong to the clients 
                  as outlined in our separate Terms of Service and project agreements.
                </p>
              </section>
            </Reveal>
          </div>

          <div className="mt-16 flex gap-4">
            <Reveal>
              <Link href="/contact" className="btn btn-primary">
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Reveal>
            <Reveal>
              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
