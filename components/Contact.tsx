"use client"
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          {[
            { icon: Mail, content: "ritikj.ug21.ee@nitp.ac.in", href: "mailto:ritikj.ug21.ee@nitp.ac.in" },
            { icon: Phone, content: "+91 9508005524", href: "tel:+919508005524" },
            { icon: MapPin, content: "Patna, India", href: null }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <item.icon className="mr-4 text-primary" size={24} />
              {item.href ? (
                <a href={item.href} className="hover:text-primary transition-colors">
                  {item.content}
                </a>
              ) : (
                <span>{item.content}</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

