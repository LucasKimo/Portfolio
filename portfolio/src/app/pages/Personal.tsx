import { ArrowLeft, TentTree, Medal, Music, Youtube, Plane, Code } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { useNavigate } from "react-router";

export default function Personal() {
  const navigate = useNavigate();

  const personality = [
    {
      icon: TentTree,
      title: "Explorer",
      description: "I believe in building technology that truly understands and serves people's needs",
    },
    {
      icon: Medal,
      title: "Sports Enthusiast",
      description: "My code runs on coffee and curiosity. Always exploring the perfect brew",
    },
    {
      icon: Code,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions",
    },
  ];

  const hobbies = [
    {
      icon: Medal,
      title: "Competitive Sports",
      description: "Capturing moments and telling stories through the lens. Street and landscape photography are my favorites.",
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Creating electronic music in my spare time. It's coding but with sound waves!",
    },
    {
      icon: Youtube,
      title: "Vlog Creation",
      description: "From sci-fi novels to tech blogs, I'm always learning something new.",
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new cultures and perspectives. Every place teaches me something different.",
    },
  ];

  const journeySteps = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Wrote my first line of code in a high school computer class. Immediately fell in love with the power of creating something from nothing.",
    },
    {
      year: "2017",
      title: "First Project",
      description: "Built my first website for a local coffee shop. Seeing real people use something I created was incredible.",
    },
    {
      year: "2019",
      title: "Career Start",
      description: "Landed my first job as a junior developer. Started learning from amazing mentors and working on real-world applications.",
    },
    {
      year: "2021",
      title: "Full Stack",
      description: "Transitioned to full-stack development. The ability to build complete solutions from database to UI opened up new possibilities.",
    },
    {
      year: "2023",
      title: "Continuous Growth",
      description: "Started mentoring junior developers and contributing to open source. Teaching others has made me a better developer.",
    },
    {
      year: "2026",
      title: "Today",
      description: "Still learning, still building, still passionate. Every project is an opportunity to make someone's life a little bit better.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 cursor-pointer select-none"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Button>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Ok so who am I...?
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A peek into who I am, what drives me, and how I spend my time when I'm not building applications
              </p>
            </div>
          </div>
        </section>

        {/* Personality Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-3">My Personality</h2>
                <p className="text-xl text-gray-600">
                  The values and traits that shape how I work and interact
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {personality.map((trait, index) => (
                  <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <trait.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{trait.title}</h3>
                    <p className="text-gray-600">{trait.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">My Journey</h2>
                <p className="text-xl text-gray-600">
                  The path that led me here, one step at a time
                </p>
              </div>

              <div className="space-y-8">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                        {step.year}
                      </div>
                      {index !== journeySteps.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-200 mt-4"></div>
                      )}
                    </div>
                    <Card className="flex-1 p-6 mb-8 hover:shadow-lg transition-shadow">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">My Hobbies</h2>
                <p className="text-xl text-gray-600">
                  What I do when I'm not writing code
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {hobbies.map((hobby, index) => (
                  <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <hobby.icon className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
                        <p className="text-gray-600">{hobby.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Life Philosophy Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-12 text-center bg-white/80 backdrop-blur">
                <h2 className="text-3xl font-bold mb-6">Life Philosophy</h2>
                <blockquote className="text-2xl text-gray-700 italic mb-6">
                  "Code is poetry, problems are puzzles, and every day is a chance to create something meaningful."
                </blockquote>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  I believe in continuous learning, empathy-driven design, and the power of technology 
                  to make the world a better place. Whether I'm debugging code at 2 AM or hiking a mountain 
                  trail, I bring the same curiosity and passion to everything I do.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Interested in working together or just want to chat about code, coffee, or cameras?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/")}
                >
                  View My Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}