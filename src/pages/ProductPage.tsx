import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import lessonPlanning from "@/assets/lesson-planning.jpg";
import {
  FileText,
  BookOpen,
  CheckSquare,
  MessageSquare,
  Calendar,
  Users,
  BarChart3,
  Sparkles,
  Clock,
  Edit3,
  Download,
  Library,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ProductPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Your AI copilot for teaching and assessment"
                description="Classbridge generates complete, ready-to-use teaching materials from simple prompts. Spend less time on prep, more time with learners."
                align="left"
              />

              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { icon: Clock, label: "Under 2 min" },
                  { icon: Edit3, label: "Fully editable" },
                  { icon: Download, label: "PDF export" },
                  { icon: Library, label: "Template library" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={lessonPlanning}
                alt="Teacher's desk with lesson planning materials"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Classbridge Generates */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Outputs"
            title="What Classbridge generates"
            description="Each lesson pack includes four key components"
          />

          <div className="mt-12 space-y-8">
            {/* Lesson Plan */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-feature"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    1. Lesson Plan
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A structured teaching guide you can follow in the classroom.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Clear learning objectives
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Key terms and definitions
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Step-by-step teaching flow
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Timing for each section
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Suggested class activities
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Recap and summary points
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Class Notes */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-feature"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    2. Class Notes
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Reference material for teachers and shareable summaries for learners.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Teacher reference notes
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Learner-friendly summary
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Worked examples
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Simple explanations
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Assessment Pack */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-feature"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    3. Assessment Pack
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Ready-to-use quizzes with answers for immediate assessment.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Multiple choice questions
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Short answer questions
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Fill-in-the-blank exercises
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Complete answer key
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Mark allocation guide
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Difficulty indicators
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Feedback Drafts */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-feature"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    4. Marking Guide + Feedback
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Rubrics and sample feedback to ensure consistent, helpful marking.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Performance level rubrics
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Scoring criteria
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Sample feedback by level
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Next-step recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            badge="Roadmap"
            title="What's coming next"
            description="Features we're building based on teacher feedback"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Curriculum templates",
                description:
                  "Pre-built templates aligned to specific curricula: Nigerian Basic Education, UK National Curriculum, and more.",
                status: "In development",
              },
              {
                icon: Users,
                title: "Learner practice sets",
                description:
                  "Generate additional practice exercises and revision materials for learners to use independently.",
                status: "Planned",
              },
              {
                icon: BarChart3,
                title: "School dashboard",
                description:
                  "A shared content library and usage analytics for schools with multiple teachers.",
                status: "Planned",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-feature"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                  {item.status}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to save hours on lesson prep?"
        description="Request early access and see Classbridge in action."
      />
    </Layout>
  );
}
