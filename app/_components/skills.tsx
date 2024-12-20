"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Terminal, Cpu, GitBranch, DockIcon as Docker, Server, Layout, FileCode, Zap, Puzzle, Brain, LucideIcon, Code, Monitor } from 'lucide-react'

interface singleSkill {
  name: string;
  icon: LucideIcon;
}

interface skillsProps {
  category: string;
  items: singleSkill[];
}

const skills : skillsProps[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: Code2 },
      { name: "JavaScript", icon: FileCode },
      { name: "Python", icon: Terminal },
      { name: "Java", icon: Code }
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React", icon: Layout },
      { name: "Next.js", icon: Globe },
      { name: "Node.js", icon: Server },
      { name: "MongoDB", icon: Database }
    ]
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", icon: GitBranch },
      { name: "Neovim", icon: Terminal },
      { name: "Docker", icon: Docker },
      { name: "VS Code", icon: Monitor }
    ]
  },
  {
    category: "Core Skills",
    items: [
      { name: "Data Structures", icon: Puzzle },
      { name: "Algorithms", icon: Zap },
      { name: "System Design", icon: Cpu },
      { name: "Problem Solving", icon: Brain }
    ]
  }
]

function SkillCard({ category, index }: {category: skillsProps, index: number}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
          <div className="grid grid-cols-2 gap-4">
            {category.items.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical proficiencies and areas of expertise.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillCategory, categoryIndex) => (
            <SkillCard key={categoryIndex} category={skillCategory} index={categoryIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}

