import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import {
  FileText,
  BookOpen,
  CheckSquare,
  MessageSquare,
  Calendar,
  Users,
  BarChart3,
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
          <SectionHeader
            title="Your AI copilot for teaching and assessment"
            description="Classbridge generates complete, ready-to-use teaching materials from simple prompts."
          />
        </div>
      </section>

      {/* What Classbridge Generates */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Outputs"
            title="What Classbridge generates"
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
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    1) Lesson Plan
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Objectives, key terms, teaching steps, recap</li>
                    <li>• Timing and class activity suggestions</li>
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
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    2) Class Notes
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Teacher-friendly notes + learner-friendly summary</li>
                    <li>• Examples and simple explanations</li>
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
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    3) Assessment Pack
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Quiz questions (multiple formats)</li>
                    <li>• Answer key</li>
                    <li>• Marking guide + rubric suggestions</li>
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
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    4) Feedback Drafts{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      (optional)
                    </span>
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Short feedback examples by performance level</li>
                    <li>• Next-step recommendations</li>
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
            badge="Coming Soon"
            title="Roadmap"
            description="What we're building next"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Curriculum templates",
                description: "By country/standard",
              },
              {
                icon: Users,
                title: "Learner practice sets",
                description: "And revision plans",
              },
              {
                icon: BarChart3,
                title: "School dashboard",
                description: "And content library",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-feature text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
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
