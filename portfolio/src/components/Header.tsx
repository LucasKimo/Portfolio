import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className="text-2xl font-bold cursor-pointer select-none" 
            onClick={() => scrollToSection("home")}
          >
              Lucas Kim
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-600 hover:scale-110 transition-transform duration-200 cursor-pointer select-none">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-600 hover:scale-110 transition-transform duration-200 cursor-pointer select-none">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="hover:text-blue-600 hover:scale-110 transition-transform duration-200 cursor-pointer select-none">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="hover:text-blue-600 hover:scale-110 transition-transform duration-200 cursor-pointer select-none">
              Skills
            </button>
            <Button variant="outline" asChild className="gap-2">
              <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                CV
              </a>
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button onClick={() => scrollToSection("home")} className="text-left hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-left hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-left hover:text-blue-600 transition-colors">
              Skills
            </button>
            <Button variant="outline" asChild className="w-full gap-2">
              <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={16} />
                View CV
              </a>
            </Button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-blue-600 hover:bg-blue-700">
              Contact
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}