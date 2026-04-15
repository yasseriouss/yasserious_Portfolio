"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

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

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--border)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold">
              Y<span className="text-[var(--primary)]">.</span>Sallam
            </a>
            <p className="text-[var(--muted-foreground)] text-sm mt-2">
              Technical Creative & Production Expert
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Yasser Sallam. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
