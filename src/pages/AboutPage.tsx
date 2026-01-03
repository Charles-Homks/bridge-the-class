import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-main">
          <SectionHeader
            title="Built with teachers and learners in mind"
            description="Classbridge is being built by a teacher–learner team focused on making lesson planning and assessment faster, clearer, and more consistent."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Help teachers teach better with less prep time—while helping
              learners get structured practice and feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader badge="Team" title="Meet the team" />

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "[Your Name]",
                role: "Founder & Product Engineer",
                bio: "Short bio: your learning + product building background.",
              },
              {
                name: "[Partner Name]",
                role: "Education Partner",
                bio: "Short bio: teaching experience and insight.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-feature"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to learn more?"
        description="Get in touch with our team to learn more about Classbridge."
      />
    </Layout>
  );
}
