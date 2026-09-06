import { Github, Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          Let’s Connect
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          I'm currently open to freelance, full-time, or collaborative tech opportunities.
          Whether you have a project or just want to say hi — feel free to reach out!
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:mayurrepale55@gmail.com" className="text-muted-foreground hover:text-primary transition">
                  mayurrepale55@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+919834486575" className="text-muted-foreground hover:text-primary transition">
                  +91 98344 86575
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Github className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a href="https://github.com/RepaleMayur" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  github.com/RepaleMayur
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a href="https://linkedin.com/in/mayur-repale-969683225" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  linkedin.com/in/mayur-repale
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <p className="text-center text-sm text-muted-foreground">
          Designed & developed by <span className="text-primary font-semibold">Mayur Repale</span> — 2025 © All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
