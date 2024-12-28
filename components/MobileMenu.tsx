"use client"
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = ['Skills', 'Experience', 'Projects', 'Contact']

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      }
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="z-50 relative">
        <span className="sr-only">Toggle menu</span>
        <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center"
          >
            <nav>
              <ul className="space-y-6 text-center">
                {menuItems.map((item) => (
                  <motion.li key={item} variants={linkVariants}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-3xl font-semibold text-white hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

