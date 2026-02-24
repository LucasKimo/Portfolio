import { Code, Palette, MapPin, Trophy, GraduationCap, FolderCode } from "lucide-react";
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
      icon: MapPin,
      title: "Brisbane, Australia",
      description: "Open to remote opportunities worldwide",
    },
  ];

  const careerJourney = [
    {
      year: "Jul, 2023 - Feb, 2024",
      title: "Diploma in Information Technology",
      company: "Queensland University of Technology",
      description: "Started my formal IT education at QUT, covering core technical principles.",
      icon: GraduationCap,
    },
    {
      year: "Feb, 2024",
      title: "Bachelor of Information Technology (Computer Science)",
      company: "Queensland University of Technology",
      description: "Advanced my academic journey by majoring in Computer Science and deepening technical expertise.",
      icon: GraduationCap,
    },
    {
      year: "Jul, 2024",
      title: "Executive Deans' Commendation of Academic Excellence",
      company: "Queensland University of Technology",
      description: "Awarded for achieving a GPA of 6.75 in the Bachelor of Information Technology.",
      icon: Trophy,
    },
    {
      year: "Aug, 2025",
      title: "Hackathon Winner - 2025 Code Network Winter Hackathon",
      company: "Code Network (QUT)",
      description: "Built an interactive AI-powered roadmap generator 'Future Scope'. Led a team of four to win first place at the 2025 Code Network Winter Hackathon.",
      icon: Trophy,
    },
    {
      year: "Nov, 2025",
      title: "Team Member - Tanda & Claude AI Hackathon",
      company: "Tanda",
      description: "Developed 'BRKR', a Tinder-style networking tool derived from Ice Breaker.",
      icon: FolderCode,
    },
    {
      year: "Dec, 2025",
      title: "Graduate (Bachelor of Information Technology)",
      company: "Queensland University of Technology",
      description: "Completed a Bachelor of Information Technology (Computer Science) at QUT.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Winner of the 2025 Code Network Winter Hackathon & QUT Computer Science graduate with a
              proven track record of leading teams to build scalable, AI-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-gray-600 mb-4">
                My journey in Computer Science began in high school when I enrolled in a C language course at
                an IT academy during my vacation. Driven by a desire to dive deeper into the field under the guidance of experts,
                I moved to Brisbane, Australia, to begin my academic journey.
              </p>
              <p className="text-gray-600 mb-4">
                I soon fell in love with IT as I realized that Computer Science is far more than just web development or
                'blocks of code.' It is a vast ecosystem encompassing AI, Cloud Computing, Data Management, and Security.
                Throughout my studies, I have built a solid foundation in <span className="text-gray-800 font-semibold">programming, networking,</span> and <span className="text-gray-800 font-semibold">Machine Learning, </span>
                while mastering the art of collaborating with teammates to bring complex projects to life.
              </p>
              <p className="text-gray-600">
                Beyond the classroom, I have actively challenged myself through <span className="text-gray-800 font-semibold">hackathons</span>. A defining moment in my career
                was <span className="text-gray-800 font-semibold">winning first place at the 2025 Code Network Winter Hackathon</span>. This achievement is particularly meaningful
                as it was my very first hackathon, where I had the opportunity to lead a team of four. Through this experience,
                I honed my skills in <span className="text-gray-800 font-semibold">brainstorming, reconciling different perspectives,
                  troubleshooting technical issues, </span>and <span className="text-gray-800 font-semibold">effectively
                    presenting </span>a final product to judges and the public.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-gray-600 mb-4">
                I specialize in building <span className="text-gray-800 font-semibold">robust full-stack applications</span> using
                <span className="text-gray-800 font-semibold"> React, Node.js,</span> and <span className="text-gray-800 font-semibold">TypeScript</span>.
                My focus is on delivering <span className="text-gray-800 font-semibold">performant, accessible, and innovative</span> solutions
                that not only meet technical standards but also <span className="text-gray-800 font-semibold">surprise and delight users</span> through intuitive design.
              </p>
              <p className="text-gray-600 mb-4">
                I am passionate about managing and analyzing complex datasets using <span className="text-gray-800 font-semibold">SQL</span> and
                various <span className="text-gray-800 font-semibold">data visualization libraries</span>. I strive to turn raw data into actionable
                insights that <span className="text-gray-800 font-semibold">drive informed decision-making.</span>
              </p>
              <p className="text-gray-600">
                I have a keen interest in leveraging <span className="text-gray-800 font-semibold">Machine Learning models
                  to provide predictive solutions</span>. My goal is to apply these technologies to
                <span className="text-gray-800 font-semibold"> solve real-world challenges</span> for both <span className="text-gray-800 font-semibold"> businesses </span>
                and <span className="text-gray-800 font-semibold"> professional sports teams </span>and <span className="text-gray-800 font-semibold"> athletes</span>, optimizing performance through <span className="text-gray-800 font-semibold">data-driven strategies.</span>
              </p>
            </div>
          </div>

          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div> */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <highlight.icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-xl font-bold">{highlight.title}</h4>
                </div>
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
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
                            {/* <p className="text-gray-800 text-sm mb-2">{step.company}</p> */}
                            <div className="mb-2">
                              <span className="bg-blue-50 text-blue-700 text-xs font-bold px-1 py-1 rounded-md">
                                {step.company}
                              </span>
                            </div>
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