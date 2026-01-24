import { Layout } from "@/components/layout/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              <strong>Classbridge</strong>
              <br />
              Effective date: 24 January 2025
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground">
                  Classbridge ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our AI teaching copilot service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What we collect
                </h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  <li>
                    <strong>Contact information:</strong> Name, email address, organisation, and role when you submit forms or request access
                  </li>
                  <li>
                    <strong>Usage data:</strong> Information about how you interact with our service, including prompts submitted and materials generated
                  </li>
                  <li>
                    <strong>Technical data:</strong> Browser type, device information, and IP address for security and analytics purposes
                  </li>
                  <li>
                    <strong>Communications:</strong> Records of correspondence when you contact us for support
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How we use your information
                </h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  <li>To generate lesson packs and other teaching materials based on your inputs</li>
                  <li>To improve our AI models and output quality</li>
                  <li>To provide customer support and respond to your enquiries</li>
                  <li>To send product updates, tips, and relevant educational content (with your consent)</li>
                  <li>To maintain service security and prevent misuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Data sharing
                </h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  <li>We do not sell your personal data to third parties</li>
                  <li>We may share data with trusted service providers who help us operate our service (e.g. hosting, analytics)</li>
                  <li>We may disclose data if required by law or to protect our legal rights</li>
                  <li>All third-party providers are bound by data protection agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Data retention
                </h2>
                <p className="text-muted-foreground">
                  We retain your personal data only for as long as necessary to provide our services and fulfil the purposes outlined in this policy. Contact information is retained until you request deletion. Generated content may be retained for service improvement unless you request its removal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Data security
                </h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes encryption, secure hosting, and access controls.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Your rights
                </h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your data for certain purposes
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise any of these rights, please contact us using the details below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Cookies
                </h2>
                <p className="text-muted-foreground">
                  We use essential cookies to ensure our website functions correctly. We may also use analytics cookies to understand how visitors use our site. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Changes to this policy
                </h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the effective date.
                </p>
              </section>

              <section className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Contact us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Classbridge Limited</p>
                  <p>Lagos, Nigeria</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:privacy@classbridge.co"
                      className="text-primary hover:underline"
                    >
                      privacy@classbridge.co
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
