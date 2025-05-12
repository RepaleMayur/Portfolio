'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Web Development",
    description:
      "I specialize in building responsive, user-friendly, and performant websites using modern technologies like React, Next.js, and Node.js. I focus on creating seamless user experiences that bring ideas to life.",
  },
  {
    title: "UI/UX Design",
    description:
      "With a keen eye for design, I create clean, intuitive, and aesthetically pleasing interfaces. My design process ensures a smooth user journey while maintaining a high level of visual appeal.",
  },
  {
    title: "Backend Development",
    description:
      "I work with technologies like Node.js, Express, and PostgreSQL to create robust and scalable backend solutions. From APIs to database design, I ensure high performance and security for web applications.",
  },
  {
    title: "Full Stack Development",
    description:
      "Combining both frontend and backend expertise, I deliver end-to-end solutions that integrate seamlessly. My goal is to create cohesive, full-featured applications that meet both business needs and user expectations.",
  },
];

// Vite-style animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhatIDo = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          ref={ref}
        >
          {/* Left Side - Heading (50% width) */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="col-span-1 md:col-span-1"
          >
            <h1 className="text-[100px] md:text-[180px] font-bold text-white/90 tracking-tighter leading-none">
              WHAT
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                I DO
              </span>
            </h1>
          </motion.div>

          {/* Right Side - Services (50% width) */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2 + index * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <Card className="glass-card bg-transparent">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-muted-foreground text-lg">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Width Cards for the last two services */}
        <div className="mt-10 grid grid-cols-1 gap-6">
          {services.slice(2).map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Card className="glass-card bg-transparent">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                    <p className="text-muted-foreground text-lg">
                      {service.description}
                    </p>
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

export default WhatIDo;
