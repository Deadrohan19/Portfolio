"use client"
import ScrollProgress from "@/components/ui/scroll-progress";
import About from "./_components/about";
import Hero from "./_components/hero";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import { Achievements } from "./_components/achievements";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />

        {/* Todo */}
      {/* Education */}
      {/* Footer */}
    </main>
  );
}
