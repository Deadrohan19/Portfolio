"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from 'framer-motion'
import { useState } from "react"

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live?: string;
}

const projects : ProjectProps[] = [
  {
    title: "NoteSpace",
    description: "A feature-rich, multi-page note-taking application.",
    image: "/noteSpace.png",
    technologies: ["Next.js", "Convex", "Clerk", "EdgeStore"],
    github: "https://github.com/Deadrohan19/note-space",
    live: "https://note-taking-app-theta-ecru.vercel.app/",
  },
  {
    title: "Rule Engine w/ AST",
    description: "A powerful rule engine that parses expressions and provides Abstract Syntax Trees (AST).",
    image: "/ruleEngine.png",
    technologies: ["Next.js", "Python", "PostgreSQL", "Docker"],
    github: "https://github.com/deadrohan19/rule_engine_with_ast",
    live: undefined,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization with alerting capabilities.",
    image: "/weatherDashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "OpenWeather API"],
    github: "https://github.com/deadrohan19/weather-monitoring",
    live: "https://weather-monitoring-lilac.vercel.app/",
  },
]

function ProjectCard({ project }: { project: ProjectProps }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
    className="overflow-hidden"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
    <div className="relative">
    <Image 
    src={project.image} 
    alt={project.title} 
    width={400} 
    height={200} 
    className="w-full h-48 object-cover"
    />
    <motion.div 
    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: isHovered ? 1 : 0 }}
    transition={{ duration: 0.3 }}
    >
    <div className="flex space-x-4">
    {project.github && (
      <Button size="sm" variant="secondary" asChild>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
      <Github className="mr-2 h-4 w-4" /> GitHub
      </a>
      </Button>
    )}
    {project.live && (
      <Button size="sm" variant="secondary" asChild>
      <a href={project.live} target="_blank" rel="noopener noreferrer">
      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
      </a>
      </Button>
    )}
    </div>
    </motion.div>
    </div>
    <CardContent className="p-4">
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-muted-foreground mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
    {project.technologies.map((tech : string, index: number) => (
      <span key={index} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
      {tech}
      </span>
    ))}
    </div>
    </CardContent>
    </Card>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: ProjectProps, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

