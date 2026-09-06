import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    company: "Freelance",
    description:
      "Built a WooCommerce store with product management, inventory control, and Razorpay payment integration. Improved operational efficiency by 30%.",
    tech: ["WooCommerce", "WordPress", "PHP", "Razorpay"],
    link: "https://github.com/RepaleMayur/e-commerce-store"
  },
  {
    title: "Weather App",
    company: "University Capstone",
    description:
      "Displays real-time weather data for 1,000+ locations using OpenWeather API. Includes responsive design and search functionality.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    link: "https://repalemayur.github.io/Weather-app/"
  },
  {
    title: "Stone Ridge Wellness Website",
    company: "Mulika Infotech",
    description:
      "Developed an accessible wellness services booking platform with 95% satisfaction rate and 150 daily appointments.",
    tech: ["WordPress", "Elementor", "PHP"],
    link: "https://stoneridgewellnessandaesthetics.com/"
  },
  {
    title: "MIPL Stockist/Store Locator Plugin",
    company: "Mulika Infotech",
    description:
      "Created a WordPress plugin using Google Maps API with location filtering and autocomplete features.",
    tech: ["WordPress", "Google Maps API", "JavaScript"],
    link: "https://wordpress.org/plugins/mipl-stockist-store-locator/"
  },
  {
    title: "Mulika Store",
    company: "Mulika Infotech",
    description:
      "Responsive e-commerce platform with optimized mobile experience and 30% sales conversion boost.",
    tech: ["WordPress", "PHP", "WooCommerce"],
    link: "https://store.mulika.in/"
  },
  {
    title: "Au Skincare Website",
    company: "Mulika Infotech",
    description:
      "Developed a WordPress website for a skincare brand, increasing user engagement by 30% and reducing bounce rate by 25%.",
    tech: ["WordPress", "PHP", "SEO"],
    link: "https://www.auskincare.co.in/"
  },
  {
    title: "Email Automation System",
    company: "Knova One",
    description:
      "Python app that checks inbox, downloads attachments, searches email content, and generates reports, improving workflow by 40%.",
    tech: ["Python", "IMAP", "PDF", "Email Parser"],
    link: "#"
  },
  {
    title: "PDF Redaction Tool",
    company: "Knova One",
    description:
      "Python-based app to identify and redact sensitive data in PDFs, ensuring document confidentiality and compliance.",
    tech: ["Python", "PyMuPDF", "Regex"],
    link: "#"
  },
  {
    title: "PDF Merger Tool",
    company: "Knova One",
    description:
      "Tool that merges multiple PDFs into a single document, enabling efficient report generation and archiving.",
    tech: ["Python", "PyPDF2"],
    link: "#"
  },
  {
    title: "Scorecard Dashboard",
    company: "Knova One",
    description:
      "Developed a PHP-based internal scorecard dashboard with performance charts, ranking logic, and export features.",
    tech: ["PHP", "JavaScript", "MySQL"],
    link: "#"
  },
  {
    title: "PDF Splitter & Renamer",
    company: "Knova One",
    description:
      "Standalone Python `.exe` utility that splits multipage PDFs into single-page documents and renames them based on extracted file numbers.",
    tech: ["Python", "PyMuPDF", "Tkinter", "Regex"],
    link: "#"
  },
  {
    title: "Advanced PDF Redactor (In Progress)",
    company: "Knova One",
    description:
      "Currently building a refined `.exe` app for advanced PDF redaction using intelligent pattern detection and batch processing.",
    tech: ["Python", "PyMuPDF", "Regex"],
    link: "#"
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Card className="glass-card group hover:bg-white/10 transition-colors h-full flex flex-col justify-between">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary-foreground"
                      >
                        {tech}
                      </span>
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

export default Projects;
