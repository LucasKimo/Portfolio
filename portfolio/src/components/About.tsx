import { Code, Palette, Rocket } from "lucide-react";
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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm a passionate developer with 5+ years of experience building web and mobile applications
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
        </div>
      </div>
    </section>
  );
}