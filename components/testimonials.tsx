"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Yasser brings clarity to complex production challenges and raises quality across the floor. His technical expertise combined with leadership skills makes him an invaluable asset to any manufacturing operation.",
    name: "Ahmed Hassan",
    title: "Production Manager",
    company: "Larouch",
  },
  {
    id: 2,
    quote:
      "Reliable, proactive, and highly skilled with both machines and people. Yasser consistently delivers results that exceed expectations and helps the entire team grow.",
    name: "Mona El-Sayed",
    title: "Operations Lead",
    company: "Artniture",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Colleagues Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 md:p-12 rounded-2xl bg-[var(--card)] border border-[var(--border)]"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
              <Quote className="text-[var(--primary)]" size={24} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="pt-8"
              >
                <p className="text-lg md:text-xl leading-relaxed text-[var(--muted-foreground)] italic mb-8">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--primary)] to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {testimonials[activeIndex].title} ·{" "}
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[var(--primary)]"
                    : "bg-[var(--secondary)]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
