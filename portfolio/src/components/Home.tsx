import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8 flex justify-center"> 
            <div className="relative w-64 h-64 md:w-60 md:h-60 rounded-full overflow-hidden border-3 border-white shadow-xl">
              <img 
                src="./public/images/profile.jpg"
                alt="Lucas Kim Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-5 select-none">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lucas Kim
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-5 max-w-2xl mx-auto select-none">
            Full Stack Developer & UI/UX Designer crafting beautiful digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 cursor-pointer select-none" 
            >
              View My Work <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 gap-2"
              asChild
            >
              <a href="./public/documents/LucasKim_Resume.pdf" target="_blank" rel="noopener noreferrer" className="select-none">
                <FileText size={20} />
                View CV
              </a>
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg" 
              variant="outline"
              className="px-8 cursor-pointer select-none"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/LucasKimo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/lucas-eunsu-kim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:eunsukim1180@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}