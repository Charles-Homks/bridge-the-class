import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles } from "lucide-react";

export default function DemoPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <SectionHeader
            title="See Classbridge in action"
            description="Watch how Classbridge generates a complete lesson pack in minutes."
          />
        </div>
      </section>

      {/* Video Embed Placeholder */}
      <section className="pb-16 md:pb-24">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="video-placeholder min-h-[400px] md:min-h-[500px] shadow-xl border border-border/50 group cursor-pointer hover:border-primary/30 transition-colors">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Play className="w-10 h-10 text-primary ml-1" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  Demo Video
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  [Insert Loom/YouTube embed here]
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Flow */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            badge="Demo Flow"
            title="What you'll see"
            description="A complete walkthrough of the Classbridge experience"
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
                  title: "Select",
                  description: 'JSS → Basic Science → "Photosynthesis"',
                },
                {
                  step: "2",
                  title: "Generate",
                  description:
                    "Lesson plan + notes + quiz + answers + marking guide",
                },
                {
                  step: "3",
                  title: "Download",
                  description: "Sample pack ready to use",
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

      {/* Screenshots */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Screenshots"
            title="Product screenshots"
            description="See the interface and outputs"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              "Screenshot 1: Lesson plan output",
              "Screenshot 2: Quiz + answer key",
              "Screenshot 3: Marking guide + feedback examples",
            ].map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="screenshot-placeholder min-h-[250px] shadow-lg"
              >
                <div className="text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground text-sm">
                    {screenshot}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Placeholder
                  </p>
                </div>
              </motion.div>
            ))}
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
              Request access to Classbridge or get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Request access
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
