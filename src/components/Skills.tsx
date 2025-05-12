'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Layout, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom Skill Categories and Details
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "RESTful APIs"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "Shell Scripting"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "CodeIgniter", "WordPress", "Express", "Tailwind CSS", "Sass"],
  },
  {
    title: "Dev Tools & Technologies",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git", "Docker", "VS Code", "Webpack", "Linux", "CI/CD", "Postman", "Firebase"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  }),
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.h2
          className="text-3xl font-bold text-center bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={0.1 + index * 0.1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <Card className="glass-card group hover:bg-white/5 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
