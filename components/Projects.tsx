"use client";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "LinkLeap",
      description:
        "A web application to automate daily tasks, such as detecting file additions in Google Drive and creating workflows for automated actions.",
      technologies: ["Next.js 14", "React", "Node.js", "TypeScript", "MySQL"],
      github: "https://github.com/ritikjee/linkleap",
      live: "#",
    },
    {
      name: "PDFInsight",
      description:
        "A web app to chat with your PDFs. Allows users to upload PDF documents, interact with their content, and ask questions about the PDF.",
      technologies: ["Next.js 14", "React", "Node.js", "TypeScript", "MySQL"],
      github: "https://github.com/ritikjee/pdfinsight",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-card p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-primary">
              {project.name}
            </h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-primary hover:underline"
              >
                <Github size={16} className="mr-1" /> GitHub
              </a>
              {/* <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-primary hover:underline">
                <ExternalLink size={16} className="mr-1" /> Live Demo
              </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
