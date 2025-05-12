import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Knova One (IN) LLP",
    period: "2025 - Present",
    description:
      "Designed and implemented backend services and APIs, optimizing performance and reducing latency by 20%. Integrated third-party services and APIs, increasing functionality and improving data flow, resulting in a 15% boost in operational efficiency. Led the migration of legacy systems to modern architectures, reducing technical debt by 30% and improving system maintainability by 25%.",
  },
  {
    title: "Software Engineer",
    company: "Mulika Infotech Pvt. Ltd",
    period: "2022 - 2024",
    description:
      "Developed high-performance web applications using React.js and CodeIgniter, boosting application responsiveness by 25%. Designed and integrated RESTful APIs, improving data retrieval efficiency by 30% and optimizing performance across multiple platforms. Developed mobile-responsive e-commerce designs, achieving 95% mobile-friendliness and improving user engagement.",
  },
  {
    title: "Web Developer (Freelancer)",
    company: "Freelance",
    period: "January 2025 – February 2025",
    description:
      "Developed & deployed a responsive e-commerce site using WordPress and Hostinger, implementing caching and CDN for 99.9% uptime. Customized themes and plugins for SEO optimization, improving search rankings and speed by 40%. Integrated Razorpay payment gateway and contact forms for secure transactions, order confirmations, and seamless user experience.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Card className="glass-card group hover:bg-white/10 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Briefcase className="w-6 h-6" />
                    <div>
                      <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                      <p className="text-primary text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
