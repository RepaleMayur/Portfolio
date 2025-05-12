import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="hero-glow left-1/4 top-1/4" />
      <div className="hero-glow right-1/4 bottom-1/4 bg-purple-500/10" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="space-y-6">
          {/* Main Heading (Split into two lines) */}
          <motion.h1
            className="text-4xl sm:text-6xl font-bold bg-gradient-to-b from-white to-foreground/50 bg-clip-text text-transparent pb-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Hi, I'm Mayur Repale</span>
            <span className="block">I Build Modern Digital Experiences</span>
          </motion.h1>

          {/* Subheading Animation */}
          <motion.p
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Developer with a passion for creating responsive and high-performance web applications using React, PHP, and Python.
          </motion.p>

          {/* Button Group with Animation */}
          <motion.div
            className="flex items-center justify-center gap-4 pt-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* View Projects Button */}
            <a href="#projects">
              <Button className="bg-primary hover:bg-primary/90 transition-transform transform hover:scale-105">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/RepaleMayur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="bg-secondary/50 hover:bg-secondary/70 transition-transform transform hover:scale-105">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/mayur-repale-969683225"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="bg-secondary/50 hover:bg-secondary/70 transition-transform transform hover:scale-105">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
