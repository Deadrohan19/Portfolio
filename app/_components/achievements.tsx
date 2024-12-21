"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, Star, Target, LucideIcon } from 'lucide-react'
import Image from "next/image"

interface AchievementsProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
}

const achievements: AchievementsProps[] = [
  {
    title: "ICPC",
    subtitle: "2023",
    description: "Regionals Kanpur-Mathura, ranked 60th out of 146 teams.",
    icon: Trophy,
    color: "bg-blue-500",
    image: "/ICPC_23.jpg"
  },
  {
    title: "ICPC",
    subtitle: "2024",
    description: "ICPC Regionals Amritapuri, Coimbatore campus",
    icon: Trophy,
    color: "bg-green-500",
    image: "/ICPC_24.jpg"
  },
  {
    title: "Competition",
    subtitle: "Ranked 2nd",
    description: "Coding rounds over couple of months for placements",
    icon: Trophy,
    color: "bg-red-500",
    image: "/DCPD.jpg"
  },
  {
    title: "Code Genius",
    subtitle: "Ranked 3rd",
    description: "Coding contest organized by IEEE and IIT Roorkee",
    icon: Star,
    color: "bg-red-500",
    image: "/codeGenius.jpg"
  },
  {
    title: "SIH",
    subtitle: "2022 Finalist",
    description: "National runner-up at GMRIT, Andhra Pradesh.",
    icon: Award,
    color: "bg-green-500",
    image: "/SIH.jpg"
  },
  {
    title: "NPTEL",
    subtitle: "2022",
    description: "Topper of Discrete Mathematics course",
    icon: Target,
    color: "bg-red-500",
    image: "/NPTEL.jpg"
  },
  {
    title: "Codeforces",
    subtitle: "Expert - 1628",
    description: "Got rank 429 out of 32k participants round 935",
    icon: Target,
    color: "bg-indigo-500",
    image: "/codeforces.jpg"
  },
  {
    title: "Leetcode",
    subtitle: "Knight - 2029",
    description: "AIR 71 in biweekly contest 135",
    icon: Target,
    color: "bg-orange-500",
    image: "/leetcode.jpg"
  }
]

function AchievementCard({ achievement, index }: { achievement: AchievementsProps, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-48">
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-white mb-1">{achievement.title}</h3>
            <p className="text-sm text-white/80">{achievement.subtitle}</p>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <div className={`p-2 rounded-full ${achievement.color} `}>
              <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
            </div>
            <p className="text-sm text-muted-foreground">{achievement.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition in competitive programming and development.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
