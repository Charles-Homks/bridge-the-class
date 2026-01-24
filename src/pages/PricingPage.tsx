import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "For individual teachers",
    price: "₦5,000",
    priceSuffix: "/ month",
    features: [
      "Unlimited lesson pack generation",
      "All 4 output types included",
      "PDF export",
      "Basic template library",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Team",
    subtitle: "For schools and centres",
    price: "₦15,000",
    priceSuffix: "/ month",
    features: [
      "Everything in Starter",
      "Up to 10 teacher accounts",
      "Shared content library",
      "Curriculum-aligned templates",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "For organisations",
    price: "Custom",
    priceSuffix: "",
    features: [
      "Everything in Team",
      "Unlimited teacher accounts",
      "Custom curriculum templates",
      "Usage reporting and analytics",
      "Dedicated account manager",
      "API access",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <SectionHeader
            title="Simple pricing for real classrooms"
            description="Choose the plan that fits your teaching needs. All plans include full lesson pack generation."
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 md:pb-24">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground bg-primary rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.subtitle}
                  </p>
                </div>

                <div className="text-center mb-8">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span className="text-muted-foreground">{plan.priceSuffix}</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">
                    {plan.name === "Enterprise" ? "Contact us" : "Request access"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Prices shown in Nigerian Naira (₦). USD pricing available on request.
          </p>
        </div>
      </section>

      {/* FAQ / Note */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Get in touch and we'll help you find the best fit for your school or organisation.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Talk to us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
