"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";

const infoCards = [
  {
    icon: MapPin,
    title: "Location",
    value: "10th of Ramadan City, Egypt",
  },
  {
    icon: Mail,
    title: "Email",
    value: "yassersalllam@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+20 1000986942",
  },
  {
    icon: Briefcase,
    title: "Experience",
    value: "7+ Years in Manufacturing",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Results-driven professional with a unique blend of engineering
              precision and creative problem-solving.
            </h3>

            <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
              <p>
                I am a CNC Production Engineer with over 7 years of experience
                in advanced furniture manufacturing. My expertise spans CNC
                programming, digital CAD design, and production optimization.
              </p>
              <p>
                Throughout my career, I have consistently delivered innovative
                solutions that bridge the gap between precision engineering and
                creative design. I specialize in WoodWOP programming, AutoCAD,
                and leading production teams to achieve operational excellence.
              </p>
              <p>
                My passion lies in transforming complex manufacturing challenges
                into streamlined, efficient processes that drive quality and
                productivity.
              </p>
            </div>

            <motion.a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-[var(--border)] rounded-xl hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon
                    className="text-[var(--primary)]"
                    size={24}
                  />
                </div>
                <h4 className="text-sm text-[var(--muted-foreground)] mb-1">
                  {card.title}
                </h4>
                <p className="font-medium">{card.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
