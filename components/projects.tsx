"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Precision Kitchen Production",
    category: "Manufacturing",
    description:
      "Optimized production workflows for high-end kitchen manufacturing, reducing waste by 25% and improving throughput.",
    image: "/assets/img/project1.jpg",
    tags: ["WoodWOP", "Process Optimization", "Quality Control"],
  },
  {
    id: 2,
    title: "Wardrobe Production Line",
    category: "Production",
    description:
      "Streamlined wardrobe manufacturing with automated CNC processes, enabling scalable production while maintaining quality standards.",
    image: "/assets/img/project2.jpg",
    tags: ["CNC Programming", "Automation", "Lean Manufacturing"],
  },
  {
    id: 3,
    title: "CAD-to-CNC Design Pipeline",
    category: "CAD & Design",
    description:
      "Developed an efficient pipeline from CAD design to CNC production, reducing setup time and improving accuracy.",
    image: "/assets/img/project3.jpg",
    tags: ["AutoCAD", "Fusion 360", "Workflow Design"],
  },
];

const categories = ["All", "Manufacturing", "Production", "CAD & Design"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setActiveIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--primary)] text-sm font-medium tracking-widest uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Work
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in CNC production
            and manufacturing optimization
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "bg-[var(--secondary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 && (
              <motion.div
                key={filteredProjects[activeIndex]?.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--card)]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${filteredProjects[activeIndex]?.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-medium">
                    {filteredProjects[activeIndex]?.category}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {filteredProjects[activeIndex]?.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                    {filteredProjects[activeIndex]?.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {filteredProjects[activeIndex]?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[var(--secondary)] text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevProject}
                      className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                      aria-label="Previous project"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextProject}
                      className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
                      aria-label="Next project"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <span className="text-sm text-[var(--muted-foreground)] ml-2">
                      {activeIndex + 1} / {filteredProjects.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[var(--primary)]"
                    : "bg-[var(--secondary)]"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
