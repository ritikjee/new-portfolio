"use client"
import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "Java", "React", "Next.js", "Node.js", "Express.js",
    "MongoDB", "SQL", "GraphQL", "TailwindCSS", "Git"
  ]

  return (
    <section id="skills" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.span 
            key={index} 
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}

