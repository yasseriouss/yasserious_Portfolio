"use client";

import { motion } from "framer-motion";
import { Settings, Pen, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Settings,
    title: "CNC & Manufacturing",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "WoodWOP 7.2", level: 95 },
      { name: "Homag Router", level: 90 },
      { name: "ArtCAM / Aspire", level: 75 },
      { name: "CNC Drill", level: 90 },
      { name: "Auto Saw", level: 70 },
    ],
  },
  {
    icon: Pen,
    title: "Design & CAD",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "AutoCAD", level: 90 },
      { name: "SolidWorks", level: 70 },
      { name: "Fusion 360", level: 75 },
      { name: "Swood", level: 70 },
    ],
  },
  {
    icon: Users,
    title: "Management & IT",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Production Planning", level: 85 },
      { name: "IT Administration", level: 70 },
      { name: "Quality Control", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
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
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            My Technical Arsenal
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit combining precision manufacturing expertise
            with digital design capabilities
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-[var(--muted-foreground)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--secondary)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "WoodWOP",
              "AutoCAD",
              "SolidWorks",
              "Fusion 360",
              "ArtCAM",
              "Aspire",
              "Homag",
              "Microsoft Office",
              "ERP Systems",
              "Quality Management",
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-[var(--secondary)] text-sm font-medium hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
