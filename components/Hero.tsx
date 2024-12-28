"use client";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { downloadFile } from "@/lib/download";
import { useState } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="animate-float"
      >
        <h1 className="text-6xl font-bold mb-4 gradient-text">Ritik Jha</h1>
        <p className="text-2xl mb-8 text-secondary-foreground">
          Full Stack Web Developer
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {[
          { href: "https://github.com/ritikjee", icon: Github },
          {
            href: "https://www.linkedin.com/in/ritik-jha-490434229/",
            icon: Linkedin,
          },
          { href: "https://www.instagram.com/_ritikjha_/", icon: Instagram },
        ].map((social) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon size={28} />
          </motion.a>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8"
      >
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={loading}
          onClick={() =>
            downloadFile(
              "https://utfs.io/f/86WEMyirNKx7pzGa168Zg3tVqFkEchvsLQz8P0H7NSweB4OJ",
              "Resume.pdf",
              setLoading
            )
          }
        >
          {loading ? "Downloading..." : "Download Resume"}
        </Button>
      </motion.div>
    </section>
  );
}
