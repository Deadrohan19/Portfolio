import { ModeToggle } from "@/components/mode-toggle"
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Social() {
  return (
    <Dock direction="middle" className="relative fixed bottom-1 md:bottom-3 left-0 right-0 z-50">
      <DockIcon>
        <a href="https://github.com/Deadrohan19" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </DockIcon>
      <DockIcon>
        <a href="https://www.linkedin.com/in/deadrohan19/" target="_blank" rel="noopener noreferrer">
        <Linkedin />
        </a>
      </DockIcon>
      <DockIcon>
        <a href="mailto:rohanjaiswal511@gmail.com" target="_blank" rel="noopener noreferrer">
        <Mail />
        </a>
      </DockIcon>
      <Separator orientation="vertical" className="h-full" />
      <DockIcon>
        <ModeToggle />
      </DockIcon>
    </Dock>
  );
}

