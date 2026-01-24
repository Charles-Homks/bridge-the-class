import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { LessonPlanMockup } from "@/components/demo/LessonPlanMockup";
import { QuizMockup } from "@/components/demo/QuizMockup";
import { MarkingGuideMockup } from "@/components/demo/MarkingGuideMockup";
import { ClassNotesMockup } from "@/components/demo/ClassNotesMockup";
import {
  ArrowRight,
  BookOpen,
  FileText,
  CheckSquare,
  MessageSquare,
  Download,
  Edit3,
  Share2,
} from "lucide-react";

export default function DemoPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <SectionHeader
            title="See Classbridge in action"
            description="Explore sample outputs from a real lesson pack. Every component is editable and ready to use in your classroom."
          />
        </div>
      </section>

      {/* Demo Mockups */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Sample Output"
            title="Complete lesson pack preview"
            description="Example: Basic Science — Photosynthesis — JSS2"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Lesson Plan
              </h3>
              <LessonPlanMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Class Notes
              </h3>
              <ClassNotesMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-primary" />
                Quiz + Answer Key
              </h3>
              <QuizMockup />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Marking Guide + Feedback
              </h3>
              <MarkingGuideMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            badge="Pack Contents"
            title="What's included in every lesson pack"
            description="Each pack contains everything you need to teach a single topic effectively"
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Lesson plan",
                items: [
                  "Learning objectives",
                  "Key terms and definitions",
                  "Step-by-step teaching guide",
                  "Timing for each section",
                  "Suggested activities",
                ],
              },
              {
                icon: FileText,
                title: "Class notes",
                items: [
                  "Teacher reference notes",
                  "Learner-friendly summary",
                  "Worked examples",
                  "Simple explanations",
                  "Visual aids suggestions",
                ],
              },
              {
                icon: CheckSquare,
                title: "Assessment",
                items: [
                  "10 quiz questions",
                  "Multiple question formats",
                  "Complete answer key",
                  "Mark allocation",
                  "Difficulty indicators",
                ],
              },
              {
                icon: MessageSquare,
                title: "Feedback tools",
                items: [
                  "Marking rubric",
                  "Performance level criteria",
                  "Sample feedback comments",
                  "Improvement suggestions",
                  "Next-step recommendations",
                ],
              },
              {
                icon: Edit3,
                title: "Editability",
                items: [
                  "All sections are editable",
                  "Add your own examples",
                  "Adjust difficulty level",
                  "Customise language",
                  "Personalise for your class",
                ],
              },
              {
                icon: Download,
                title: "Export options",
                items: [
                  "Download as PDF",
                  "Copy to document",
                  "Share with colleagues",
                  "Save to library",
                  "Print-ready format",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Flow */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Workflow"
            title="How generation works"
            description="From prompt to lesson pack in under 2 minutes"
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  step: "1",
                  title: "Enter your topic details",
                  description:
                    "Select JSS2 → Basic Science → \"Photosynthesis\" → 40 minutes",
                },
                {
                  step: "2",
                  title: "Classbridge generates your pack",
                  description:
                    "Lesson plan, class notes, quiz with answers, and marking guide—all in one go",
                },
                {
                  step: "3",
                  title: "Review and edit",
                  description:
                    "Make any adjustments to match your teaching style or class needs",
                },
                {
                  step: "4",
                  title: "Download or share",
                  description:
                    "Export as PDF, copy to your documents, or share directly with colleagues",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to try it yourself?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Request early access to Classbridge or get a sample pack sent to your email.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Request access
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <Share2 className="w-4 h-4" />
                  Get a sample pack
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
