"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";

const socialLinks = [
  {
    href: "https://linkedin.com/in/yasserious",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/yasserious_",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "mailto:yassersalllam@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-[var(--muted-foreground)] text-sm tracking-widest uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Yasser Sallam</span>
              <br />
              <span className="text-[var(--muted-foreground)]">
                CNC Production Engineer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8 max-w-lg"
            >
              Bridging the gap between precision engineering, digital
              innovation, and creative solutions. Over 7 years of expertise in
              advanced furniture manufacturing.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-xl font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-[var(--border)] rounded-xl font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Right Content - Avatar/Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full gradient-border animate-spin-slow" style={{ animationDuration: "20s" }} />
              
              {/* Profile Circle */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[var(--primary)] to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-[var(--background)] flex items-center justify-center">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text">
                    YS
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass text-sm font-medium"
              >
                7+ Years
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass text-sm font-medium"
              >
                CNC Expert
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
