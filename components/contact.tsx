"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "yassersalllam@gmail.com",
    href: "mailto:yassersalllam@gmail.com",
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+20 1000986942",
    href: "https://api.whatsapp.com/send?phone=201000986942",
    action: "Message",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "in/yasserious",
    href: "https://linkedin.com/in/yasserious",
    action: "Connect",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "10th of Ramadan City, Egypt",
    href: "#",
    action: "View Map",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[var(--card)]">
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let&apos;s Connect
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-[var(--primary)] bg-opacity-10">
                <MessageSquare className="text-[var(--primary)]" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Get in Touch</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-[var(--primary)]" size={24} />
                  </div>
                  <h4 className="font-medium mb-1">{info.title}</h4>
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">
                    {info.value}
                  </p>
                  <span className="text-sm text-[var(--primary)] font-medium">
                    {info.action} →
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-[var(--primary)] bg-opacity-10">
                <Send className="text-[var(--primary)]" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-xl font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center text-sm">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
