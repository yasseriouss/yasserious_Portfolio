"use client";

import { motion } from "framer-motion";
import { Settings, Ruler, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "CNC Programming",
    description:
      "Mastering precision production with WoodWOP, Homag, and advanced woodworking CNC systems. Custom programs optimized for efficiency and quality.",
    features: [
      "WoodWOP Programming",
      "Machine Optimization",
      "Custom Toolpaths",
      "Quality Assurance",
    ],
  },
  {
    icon: Ruler,
    title: "Digital CAD Design",
    description:
      "Proficient in AutoCAD, Fusion 360, and creative 3D modeling for furniture design. From concept to production-ready files.",
    features: [
      "2D/3D Modeling",
      "Technical Drawings",
      "Design Optimization",
      "Production Files",
    ],
  },
  {
    icon: TrendingUp,
    title: "Production Optimization",
    description:
      "Driving production efficiency through workflow optimization, team leadership, and implementing lean manufacturing principles.",
    features: [
      "Workflow Analysis",
      "Process Improvement",
      "Team Training",
      "Quality Systems",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[var(--card)]">
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
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What I Offer</h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
            Comprehensive manufacturing and design solutions tailored to your
            specific production needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative p-8 rounded-2xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-opacity-20 transition-all duration-300">
                <service.icon className="text-[var(--primary)]" size={28} />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="relative text-[var(--muted-foreground)] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#contact"
                className="relative inline-flex items-center gap-2 text-[var(--primary)] font-medium text-sm group/link"
                whileHover={{ x: 4 }}
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-purple-500 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start a Project?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how I can help optimize your production processes
            and bring your designs to life.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary)] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
