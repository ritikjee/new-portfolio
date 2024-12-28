"use client"
import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: "Newtral",
      position: "Software Developer Intern",
      duration: "May 2024 – August 2024",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Achieved 40-60% faster page loads using ISR over SSR",
        "Reduced API response times by up to 50% through GraphQL implementation",
        "Led migration from Strapi to Hygraph, reducing development time by 30%",
        "Built and optimized UI components using React and Ant Design library"
      ]
    },
    {
      company: "Trialshoppy Marketplace Pvt. Ltd.",
      position: "Fullstack Developer Intern",
      duration: "September 2023 – November 2023",
      location: "Patna, Bihar",
      achievements: [
        "Created UI components using React, Next.js, and TailwindCSS",
        "Developed backend APIs using Node.js and Express.js",
        "Implemented a dynamic product management system and robust search functionality",
        "Designed a seamless shopping cart feature with a secure payment gateway"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="bg-card p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-primary">{exp.company}</h3>
            <p className="text-xl mb-2">{exp.position}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.duration} | {exp.location}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm">{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

