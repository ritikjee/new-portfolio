"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <motion.header 
      className="py-6 px-4 sticky top-0 z-10 backdrop-blur-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold gradient-text">RJ</Link>
        <ul className="hidden md:flex space-x-6">
          {['Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
            <motion.li key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors text-lg">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
        <MobileMenu />
      </nav>
    </motion.header>
  )
}

