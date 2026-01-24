import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTASection } from "@/components/shared/CTASection";
import { Layout } from "@/components/layout/Layout";
import { LessonPlanMockup } from "@/components/demo/LessonPlanMockup";
import { QuizMockup } from "@/components/demo/QuizMockup";
import { MarkingGuideMockup } from "@/components/demo/MarkingGuideMockup";
import heroTeacher from "@/assets/hero-teacher.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import {
  ArrowRight,
  BookOpen,
  FileText,
  CheckSquare,
  MessageSquare,
  Users,
  Building,
  ChevronRight,
  Clock,
  Target,
  Zap,
  Shield,
  Globe,
  Layers,
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
                <Link to="/demo">View demo</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Starting with Junior Secondary lesson packs. Expanding across
              levels over time.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src={heroTeacher}
                alt="Teacher engaging with students in a modern classroom"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <p className="text-sm font-medium text-foreground">
                    Generate complete lesson packs from a simple prompt
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Lesson plan • Class notes • Quiz • Answer key • Marking guide
                  </p>
                </div>
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
                Lesson planning takes too long
              </h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span>Teachers spend 5–10 hours weekly on lesson prep alone</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span>The same materials get recreated term after term</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span>Inconsistent lesson quality affects learner outcomes</span>
                </li>
              </ul>
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
                Generate ready-to-use lesson packs instantly
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Classbridge turns your teaching intent into structured materials. Just provide:
              </p>
              <ul className="space-y-3">
                {[
                  "Subject (e.g. Basic Science, English)",
                  "Topic (e.g. Photosynthesis, Verb Tenses)",
                  "Class level (e.g. JSS1, JSS2, JSS3)",
                  "Duration (e.g. 40 minutes)",
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
            description="Everything you need to teach with confidence, in one pack"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={BookOpen}
              title="Lesson plan + class notes"
              description="Clear objectives, key terms, teaching steps, timing, and activities. Ready to use in the classroom."
              index={0}
            />
            <FeatureCard
              icon={CheckSquare}
              title="Quiz + answer key"
              description="Multiple choice, short answer, and fill-in-the-blank questions with complete answers for quick marking."
              index={1}
            />
            <FeatureCard
              icon={MessageSquare}
              title="Marking guide + feedback"
              description="Rubrics for consistent scoring plus sample feedback comments by performance level."
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
            description="Four simple steps from prompt to lesson pack"
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
                description: "Select your subject, topic, class level, and duration",
              },
              {
                step: "2",
                title: "Generate",
                description: "Classbridge creates a complete lesson pack in under 2 minutes",
              },
              {
                step: "3",
                title: "Edit",
                description: "Review, adjust, and personalise to match your teaching style",
              },
              {
                step: "4",
                title: "Reuse",
                description: "Save templates and build your resource library over time",
              },
            ].map((item, index) => (
              <motion.div key={item.step} variants={fadeInUp} className="relative">
                <div className="card-feature text-center h-full">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Audience"
                title="Who it's for"
                description="Built for educators who value their time and learner outcomes"
                align="left"
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teachers</h3>
                    <p className="text-muted-foreground">
                      Classroom teachers, private tutors, and lesson teachers at coaching centres.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Learning coordinators</h3>
                    <p className="text-muted-foreground">
                      Academic heads and coordinators who standardise teaching materials across teams.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Education organisations</h3>
                    <p className="text-muted-foreground">
                      NGOs and training programmes supporting teacher capacity and quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={studentsLearning}
                alt="Students collaborating on a classroom assignment"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            badge="Capabilities"
            title="Key features"
            description="What makes Classbridge effective for busy teachers"
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Fast generation",
                description: "Complete lesson packs in under 2 minutes",
              },
              {
                icon: Target,
                title: "Curriculum-aligned",
                description: "Outputs match Junior Secondary learning objectives",
              },
              {
                icon: Zap,
                title: "Fully editable",
                description: "Adjust any section before downloading or sharing",
              },
              {
                icon: Layers,
                title: "Multiple formats",
                description: "Quiz types include MCQ, short answer, and fill-in-the-blank",
              },
              {
                icon: Shield,
                title: "Consistent quality",
                description: "Structured outputs every time, reducing variability",
              },
              {
                icon: Globe,
                title: "Region-flexible",
                description: "General templates with curriculum customisation coming soon",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Early Access Open"
            title="See the output quality"
            description="Real examples of what Classbridge generates"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <LessonPlanMockup />
            <QuizMockup />
            <MarkingGuideMockup />
          </motion.div>

          <div className="mt-10 text-center">
            <Button size="lg" variant="accent" asChild>
              <Link to="/contact">
                Request a sample pack
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader badge="FAQ" title="Frequently asked questions" />

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
                  a: "No. Classbridge is a tool that supports teachers by reducing time spent on repetitive planning tasks. Teachers remain in control of the classroom, the pedagogy, and the learner relationships.",
                },
                {
                  q: "Can I edit the materials it generates?",
                  a: "Yes. Every output is fully editable. You can adjust objectives, add examples, change questions, or reword feedback before downloading or sharing with learners.",
                },
                {
                  q: "Which class levels does it currently support?",
                  a: "We're starting with Junior Secondary (JSS1, JSS2, JSS3). Primary and Senior Secondary levels are on our roadmap and will be available in future updates.",
                },
                {
                  q: "Does it work for different curricula and countries?",
                  a: "Yes. We begin with general templates that work across regions. Curriculum-specific templates (e.g. Nigerian Basic Education, UK National Curriculum) are coming soon.",
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
        description="Request early access or ask for a sample pack to see the quality for yourself."
      />
    </Layout>
  );
}
