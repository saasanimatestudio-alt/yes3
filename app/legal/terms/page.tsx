import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service — SaaS Animate',
  description: 'Terms of Service for SaaS Animate. Read our terms and conditions for using our website and animation services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="pt-40 pb-28 px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-8">
              Terms of Service
            </h1>
            <p className="text-fg-dim text-lg mb-4">Last updated: January 2026</p>
            <p className="text-fg-dim text-base leading-relaxed mb-12">
              Please read these Terms of Service carefully before using the SaaS Animate website 
              or engaging our animation services. By accessing our website or using our services, 
              you agree to be bound by these terms.
            </p>
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">1. Acceptance of Terms</h2>
                <p className="text-fg-dim text-base leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website or our services.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">2. Services Description</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  SaaS Animate provides professional animation and video production services specifically tailored for SaaS and technology companies. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>SaaS explainer videos</li>
                  <li>Product demo videos</li>
                  <li>UX/UI motion design</li>
                  <li>Product films and brand videos</li>
                  <li>Promo and launch videos</li>
                  <li>Custom animation projects</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">3. Client Responsibilities</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>Provide accurate and complete information about your project requirements</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Provide necessary brand assets, guidelines, and access to product demos as needed</li>
                  <li>Designate a single point of contact for project communications</li>
                  <li>Review and approve deliverables according to agreed timelines</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">4. Payment Terms</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  Payment terms will be specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>A deposit is required to commence work on any project</li>
                  <li>Payments are due according to milestone schedules outlined in project proposals</li>
                  <li>Late payments may result in project delays or suspension</li>
                  <li>All fees are quoted in USD unless otherwise specified</li>
                  <li>Clients are responsible for any applicable taxes</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">5. Intellectual Property Rights</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  <strong>Client Ownership:</strong> Upon full payment of all project fees, clients receive full ownership rights to the final delivered video files and animations as specified in the project agreement. This includes the right to use, modify, distribute, and display the final deliverables for commercial purposes.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  <strong>Studio Rights:</strong> SaaS Animate retains the right to display completed work in our portfolio, website, social media, and marketing materials unless explicitly waived in writing. We also retain ownership of all working files, project files, source files, and intermediate drafts unless specifically purchased by the client.
                </p>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  <strong>Third-Party Assets:</strong> Any third-party assets used in projects (stock footage, music, fonts, etc.) are licensed, not owned. Clients receive usage rights as defined by the respective licenses. Additional licensing fees may apply for extended usage.
                </p>
                <p className="text-fg-dim text-base leading-relaxed font-medium mt-4">
                  All final rights regarding project deliverables, intellectual property, and usage belong to the clients upon full payment, as outlined in individual project agreements.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">6. Revisions and Changes</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  Project agreements include a specified number of revision rounds. Additional revisions beyond the agreed amount may incur additional fees at our standard hourly rate. Major changes to approved concepts or scope creep may require a change order and additional compensation.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">7. Project Timeline</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  We strive to complete projects within agreed timelines. However, delivery dates are estimates and may be affected by:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>Delays in client feedback or approvals</li>
                  <li>Changes to project scope or requirements</li>
                  <li>Unforeseen technical challenges</li>
                  <li>Force majeure events</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">8. Cancellation and Refunds</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  Clients may cancel projects at any time with written notice. In case of cancellation:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>Deposits are non-refundable</li>
                  <li>Clients are responsible for payment for all work completed up to the cancellation date</li>
                  <li>Final deliverables will be provided upon payment of all outstanding amounts</li>
                  <li>Cancellation fees may apply depending on project stage</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">9. Confidentiality</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  We respect the confidentiality of client information and are willing to sign non-disclosure agreements (NDAs) when requested. We will not share confidential information with third parties without explicit consent, except as required by law.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">10. Limitation of Liability</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  SaaS Animate's liability is limited to the total amount paid by the client for the specific project giving rise to the claim. We are not liable for indirect, incidental, special, or consequential damages, including lost profits or business interruption.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">11. Website Use</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  You agree to use this website only for lawful purposes. You may not:
                </p>
                <ul className="list-disc list-inside text-fg-dim text-base space-y-2 ml-4">
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Use any automated system to access the website without permission</li>
                  <li>Transmit malicious code or viruses</li>
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">12. Modifications to Terms</h2>
                <p className="text-fg-dim text-base leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website or services after changes constitutes acceptance of the modified terms.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">13. Governing Law</h2>
                <p className="text-fg-dim text-base leading-relaxed">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these terms or our services shall be resolved in the appropriate courts.
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <h2 className="font-serif text-2xl mb-4">14. Contact Information</h2>
                <p className="text-fg-dim text-base leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-fg-dim text-base">
                  Email: hello@saasanimate.com
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section className="border-t border-border pt-8 mt-12 bg-bg-2 p-6 rounded-xl">
                <h3 className="font-serif text-xl mb-3">Important Notice: Client Rights</h3>
                <p className="text-fg-muted text-sm leading-relaxed">
                  <strong>Final Rights Belong to Clients:</strong> Upon completion of projects and full payment, 
                  clients retain all final rights to delivered work products including usage rights, distribution 
                  rights, and commercial exploitation rights. SaaS Animate transfers all applicable intellectual 
                  property rights to clients as specified in individual project agreements. This ensures clients 
                  have complete control over their investment and can use their videos across all channels 
                  without restriction.
                </p>
              </section>
            </Reveal>
          </div>

          <div className="mt-16 flex gap-4">
            <Reveal>
              <Link href="/booking" className="btn btn-primary">
                Start a Project <ArrowRight className="w-4 h-4 ml-1" />
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
