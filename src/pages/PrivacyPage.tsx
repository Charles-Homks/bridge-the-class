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
              Effective date: [date]
            </p>

            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What we collect
                </h2>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Contact details you submit</li>
                  <li>Content you generate (prompts and outputs)</li>
                  <li>Basic usage analytics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How we use it
                </h2>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>To generate lesson packs and improve output quality</li>
                  <li>To provide support and product updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Data sharing
                </h2>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>We do not sell your data.</li>
                  <li>
                    We may use trusted service providers for hosting/analytics.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Your choices
                </h2>
                <p className="text-muted-foreground">
                  You can request access, correction, or deletion via [privacy
                  email].
                </p>
              </section>

              <section className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Contact
                </h2>
                <p className="text-muted-foreground">
                  [Legal company name]
                  <br />
                  [Registered address]
                  <br />
                  [privacy email]
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
