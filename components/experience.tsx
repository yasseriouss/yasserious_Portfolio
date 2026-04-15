"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";

const workExperience = [
  {
    title: "CNC Production Engineer",
    company: "Larouch",
    location: "10th of Ramadan City",
    period: "Aug 2024 - Present",
    current: true,
    description:
      "Leading CNC production operations and implementing advanced manufacturing processes for premium furniture production.",
  },
  {
    title: "CNC Production Engineer",
    company: "Ebdaa Factory",
    location: "Badr City",
    period: "Apr 2024 - Aug 2024",
    description:
      "Managed CNC programming and production workflows, optimizing machine utilization and quality control.",
  },
  {
    title: "CNC Production Engineer",
    company: "Artniture",
    location: "6 October City",
    period: "Nov 2019 - Jun 2024",
    description:
      "Developed and implemented CNC programs, led production teams, and established quality standards for furniture manufacturing.",
  },
  {
    title: "Account Manager",
    company: "Yieldz IT Solutions",
    location: "Egypt",
    period: "Apr 2017 - Sep 2019",
    description:
      "Managed client relationships and IT solution implementations, bridging technical and business requirements.",
  },
];

const education = [
  {
    degree: "B.Sc. Management Information Systems",
    institution: "Higher Technological Institute",
    location: "Egypt",
    period: "2012 - 2016",
    description:
      "Focused on information systems, business management, and technology integration.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-[var(--card)]">
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
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My Professional Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-[var(--primary)] bg-opacity-10">
                <Briefcase className="text-[var(--primary)]" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-[var(--border)] last:border-transparent last:pb-0 group"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      job.current
                        ? "bg-[var(--primary)] border-[var(--primary)]"
                        : "bg-[var(--background)] border-[var(--border)] group-hover:border-[var(--primary)]"
                    }`}
                  />

                  <div className="p-5 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold">{job.title}</h4>
                      {job.current && (
                        <span className="px-2 py-1 text-xs rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)] mb-3">
                      <span className="font-medium text-[var(--foreground)]">
                        {job.company}
                      </span>
                      <span>-</span>
                      <span>{job.location}</span>
                    </div>

                    <p className="text-sm text-[var(--muted-foreground)] mb-3">
                      {job.description}
                    </p>

                    <span className="text-xs text-[var(--muted-foreground)]">
                      {job.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-[var(--primary)] bg-opacity-10">
                <GraduationCap className="text-[var(--primary)]" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300"
                >
                  <h4 className="font-semibold mb-2">{edu.degree}</h4>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)] mb-3">
                    <span className="font-medium text-[var(--foreground)]">
                      {edu.institution}
                    </span>
                    <span>-</span>
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-sm text-[var(--muted-foreground)] mb-3">
                    {edu.description}
                  </p>

                  <span className="text-xs text-[var(--muted-foreground)]">
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--primary)] to-purple-500 text-white text-center">
                <span className="text-3xl font-bold">7+</span>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-center">
                <span className="text-3xl font-bold">4</span>
                <p className="text-sm opacity-90">Companies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
