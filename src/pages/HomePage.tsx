import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTASection } from "@/components/shared/CTASection";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  BookOpen,
  FileText,
  CheckSquare,
  MessageSquare,
  Sparkles,
  Users,
  Building,
  ChevronRight,
  Play,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />

        <div className="container-main relative pt-16 pb-20 md:pt-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Lesson packs in minutes—aligned to how teachers{" "}
              <span className="gradient-text">actually teach</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Classbridge is an AI teaching copilot that helps teachers create
              lesson plans, class notes, quizzes, answer keys, and marking
              guides—fast.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">
                  Request access
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="xl" variant="hero-outline" asChild>
                <Link to="/demo">
                  <Play className="w-5 h-5" />
                  View demo
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Starting with Junior Secondary lesson packs. Expanding across
              levels over time.
            </p>
          </motion.div>

          {/* Hero screenshot placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="screenshot-placeholder min-h-[400px] md:min-h-[500px] shadow-xl border border-border/50">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="font-medium text-foreground">
                  Screenshot 1: Lesson plan output
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Placeholder for product screenshot
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-destructive bg-destructive/10 rounded-full">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Teachers spend hours preparing lesson materials
              </h2>
              <p className="text-lg text-muted-foreground">
                Often repeating the same work every term. Learners also struggle
                when lessons aren't structured, consistent, or matched to their
                level.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Classbridge generates a ready-to-use lesson pack
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From a simple prompt—a complete pack you can teach from today:
              </p>
              <ul className="space-y-3">
                {[
                  "Subject",
                  "Topic",
                  "Class level",
                  "Duration",
                  "Learning objectives (optional)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Features"
            title="What you get"
            description="Everything you need to teach with confidence"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Lesson plan + class notes"
              description="Clear structure, objectives, and teaching flow."
              index={0}
            />
            <FeatureCard
              icon={CheckSquare}
              title="Quiz + answer key"
              description="Instant assessment with marking support."
              index={1}
            />
            <FeatureCard
              icon={MessageSquare}
              title="Marking guide + feedback examples"
              description="Rubrics and sample feedback that save time."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            badge="Process"
            title="How it works"
            description="Four simple steps to your lesson pack"
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: "1",
                title: "Choose",
                description:
                  "Select subject, topic, and class level",
              },
              {
                step: "2",
                title: "Generate",
                description:
                  "Classbridge generates a full lesson pack",
              },
              {
                step: "3",
                title: "Edit",
                description: "Edit if needed and download/share",
              },
              {
                step: "4",
                title: "Reuse",
                description:
                  "Reuse templates and build your library over time",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative"
              >
                <div className="card-feature text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Audience"
            title="Who it's for"
            description="Built for educators who value their time"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Users}
              title="Teachers"
              description="Schools, tutors, and coaching centres looking to streamline lesson prep."
              index={0}
            />
            <FeatureCard
              icon={FileText}
              title="Learning coordinators"
              description="Who standardise teaching materials across teams and levels."
              index={1}
            />
            <FeatureCard
              icon={Building}
              title="Education organisations"
              description="Supporting teacher capacity and quality of instruction."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              badge="Why AI"
              title="Great teaching materials follow patterns"
              description="But building them from scratch every time wastes effort. AI helps turn your intent into structured outputs quickly, so teachers spend more time teaching and supporting learners."
            />
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="See It Today"
            title="Proof you can see today"
            description="Download sample materials and see the quality for yourself"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              "Sample lesson pack (PDF)",
              "Sample quiz + answer key",
              "Sample marking guide and feedback",
            ].map((item, index) => (
              <div
                key={index}
                className="card-feature flex items-center gap-4 cursor-pointer hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button size="lg" variant="accent" asChild>
              <Link to="/contact">
                Get a sample pack
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            badge="FAQ"
            title="Frequently asked questions"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Is Classbridge replacing teachers?",
                  a: "No. It supports teachers by speeding up planning and assessment.",
                },
                {
                  q: "Can I edit the materials?",
                  a: "Yes. Everything is editable before download or use.",
                },
                {
                  q: "Which levels does it support?",
                  a: "Starting with Junior Secondary. Primary and Senior Secondary are on the roadmap.",
                },
                {
                  q: "Does it work for different countries?",
                  a: "Yes. We start general, then allow curriculum templates by region.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Teach with more structure in less time"
        description="Request early access or download a sample pack."
      />
    </Layout>
  );
}
