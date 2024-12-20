import PulsatingButton from "@/components/ui/pulsating-button";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/asciiArt.png" 
              alt="Rohan Jaiswal" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[400px]"
            />
          </div>
          <div className="space-y-4 px-4 md:px-0">
            <p className="text-sm sm:text-base md:text-lg text-justify">
              I'm a passionate web developer and competitive programmer with a knack for creating elegant solutions in the least amount of time.
              Currently pursuing my Bachelor's in Computer Science at Chandigarh University.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-justify">
              When I'm not coding, you can find me solving complex algorithmic problems, participating in coding competitions, or learning new technologies. I believe in continuous learning and pushing the boundaries of what's possible with code.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-justify">
            I use Neovim along with arch BTW. 
            </p>
            <div className="flex flex-wrap gap-4">
              <PulsatingButton >
                <a href="https://drive.google.com/file/d/15WUULF66D-2BoymShhXUJ1a5grAFY6wO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </PulsatingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
