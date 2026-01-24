import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { Target, Users, Lightbulb, Clock } from "lucide-react";
import heroTeacher from "@/assets/hero-teacher.jpg";

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Help teachers teach better with less prep time—while helping
                learners get structured practice and feedback.
              </p>
              <p className="text-muted-foreground">
                We believe great teaching materials follow patterns. The challenge isn't creativity—it's time. Teachers know what good lessons look like, but building them from scratch every week is exhausting. Classbridge turns teaching intent into structured outputs, so educators can focus on what matters: supporting learners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={heroTeacher}
                alt="Teacher engaging with students"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section-padding bg-secondary/30">
        <div className="container-main">
          <SectionHeader
            badge="Why Now"
            title="The moment for AI in education"
            description="Three shifts that make Classbridge possible and necessary"
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "AI has matured",
                description:
                  "Language models can now generate structured, coherent educational content that's useful—not just impressive.",
              },
              {
                icon: Clock,
                title: "Teacher time is precious",
                description:
                  "With growing class sizes and administrative demands, prep time is shrinking while expectations rise.",
              },
              {
                icon: Users,
                title: "Quality gaps persist",
                description:
                  "Learner outcomes vary based on lesson quality. Consistent materials help level the playing field.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-feature text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader
            badge="Team"
            title="Who's building Classbridge"
            description="A small team with deep experience in education and product development"
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Founder & Product Engineer",
                role: "Technical Lead",
                bio: "Background in software engineering and learning technology. Previously built tools used by thousands of learners across Africa. Passionate about making quality education more accessible through thoughtful product design.",
              },
              {
                name: "Education Partner",
                role: "Curriculum & Pedagogy",
                bio: "Over a decade of classroom teaching experience across secondary and tertiary levels. Deep understanding of what works in Nigerian classrooms. Ensures every output is practical, pedagogically sound, and ready to use.",
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
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
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
        description="Get in touch with our team to learn more about Classbridge and how it can help your teaching."
      />
    </Layout>
  );
}
