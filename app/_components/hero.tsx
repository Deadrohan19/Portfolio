"use client"

import { motion } from "framer-motion"
import Particles from "@/components/ui/particles"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import MorphingText from "@/components/ui/morphing-text"

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const taglines = [
    "Creative Developer & Competitive Programmer",
    "Architecting Ideas into Reality",
    "Where Creativity Meets Code",
    "Mastering the Full Stack",
    "Turning Ideas into Code",
    "Giving Soul to Ideas",
    "From Concept to Reality",
    "I Build. I Deliver. I Dominate.",
    "Code Hard or Go Home.",
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <Particles
        className="absolute inset-0"
        quantity={400}
        ease={80}
        size={0.8}
        color={color}
        refresh
      />
      <div className="text-center space-y-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rohan Jaiswal
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
        <MorphingText texts={taglines} />
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
        </motion.div>
      </div>
    </section>
  )
}
