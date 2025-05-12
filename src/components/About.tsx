import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "PHP",
  "JavaScript",
  "React.js",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "REST API",
  "JQuery",
  "PostgreSQL",
  "Node.js",
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-lg text-foreground/80 mb-8">
                I'm <strong>Mayur Repale</strong>, a passionate Full Stack Developer with experience in creating efficient, scalable, and user-friendly web applications.
                My core strengths lie in working with React.js, PHP, and Python, and I’ve contributed to both startups and enterprise teams to deliver impactful solutions.
              </p>

              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-primary/20 hover:bg-primary/30 text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
