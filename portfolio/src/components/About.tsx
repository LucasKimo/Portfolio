import { Code, Palette, Rocket, Briefcase, Trophy, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting intuitive and visually appealing user interfaces",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Delivering high-quality projects on time and within scope",
    },
  ];

  const careerJourney = [
    {
      year: "Jul, 2023 - Feb, 2024",
      title: "Diploma in Information Technology",
      company: "Queensland University of Technology",
      description: "Started my career building responsive web applications and learning from experienced developers.",
      icon: GraduationCap,
    },
    {
      year: "Feb, 2024",
      title: "Bachelor of Information Technology (Computer Science)",
      company: "Queensland University of Technology",
      description: "Expanded my skillset to full-stack development, working on complex enterprise applications.",
      icon: GraduationCap,
    },
    {
      year: "Jul, 2024",
      title: "Executive Deans' Commendation of Academic Excellence",
      company: "Queensland University of Technology",
      description: "Led development teams and architected scalable solutions for high-traffic applications.",
      icon: Trophy,
    },
    {
      year: "Aug, 2025",
      title: "Hackathon Winner - Code Network Winter Hackathon 2025",
      company: "Code Network (QUT)",
      description: "Currently leading cross-functional teams and mentoring junior developers while driving technical excellence.",
      icon: Trophy,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Winner of the 2025 Code Network Winter Hackathon & QUT Computer Science graduate with a proven track record of leading teams to build scalable, AI-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-gray-600 mb-4">
                I started my journey in web development during college and quickly fell in love with creating 
                digital experiences that solve real-world problems. Over the years, I've worked with startups 
                and established companies, helping them bring their ideas to life.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community through blog posts and talks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-gray-600 mb-4">
                I specialize in building full-stack applications using modern technologies like React, 
                Node.js, and TypeScript. My focus is on creating performant, accessible, and user-friendly 
                applications that delight users.
              </p>
              <p className="text-gray-600">
                I'm also passionate about design systems, component architecture, and creating seamless 
                developer experiences through well-documented and reusable code.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>

          {/* Career Journey Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Career Journey</h3>
              <p className="text-xl text-gray-600">My professional growth over the years</p>
            </div>

            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              <div className="space-y-12 md:space-y-0"> 
                {careerJourney.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } ${index !== 0 ? "md:-mt-10" : ""}`}
                  >

                    <div className="w-full md:w-5/12 z-10">
                      <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                            <step.icon size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="text-blue-600 font-bold mb-1">{step.year}</div>
                            <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                            <p className="text-gray-500 text-sm mb-2">{step.company}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Center Point */}
                    <div className="hidden md:flex w-2/12 justify-center z-20">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}