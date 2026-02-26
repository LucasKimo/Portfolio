// import { ExternalLink, Github } from "lucide-react";
// import { Card } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";

// export function Projects() {
//   const projects = [
//     {
//       title: "Future Scope",
//       description: "An AI-powered platform that provides personalized career guidance and skill development resources for users",
//       image: "./public/images/FutureScope.png", 
//       tags: ["React", "Node.js", "JavaScript","OpenAI API"],
//       github: "https://github.com/LucasKimo/FutureScope_Private",
//       demo: "https://example.com",
//     },
//     {
//       title: "BRKR",
//       description: "Collaborative project management tool with real-time updates and team collaboration features",
//       image: "./public/images/BRKR.png",
//       tags: ["React", "TypeScript", "Tailwind", "Vercel"],
//       github: "https://github.com",
//       demo: "https://example.com",
//     },
//     {
//       title: "Planary",
//       description: "A stunning portfolio website showcasing creative work with smooth animations and transitions",
//       image: "/projects/portfolio.jpg",
//       tags: ["React Native", "Framer Motion", "Tailwind", "Vercel"],
//       github: "https://github.com",
//       demo: "https://example.com",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               A collection of my recent work showcasing various technologies and problem-solving approaches
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
//                 <div className="relative h-48 overflow-hidden bg-gray-200">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag, tagIndex) => (
//                       <Badge key={tagIndex} variant="secondary">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button variant="outline" size="sm" className="flex-1" asChild>
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <Github size={16} className="mr-2" />
//                         Code
//                       </a>
//                     </Button>
//                     <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
//                       <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink size={16} className="mr-2" />
//                         Demo
//                       </a>
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ExternalLink, Github, X, Calendar, Tag, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  details?: {
    overview: string;
    features: string[];
    techStack: string;
    date: string;
  };
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.92) translateY(16px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        
        <div className="relative h-56 bg-gray-100 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-1.5 transition-colors"
          >
            <X size={18} />
          </button>

          <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{project.title}</h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.details?.overview ?? project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.details?.features && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Key Features</h3>
              <ul className="space-y-2">
                {project.details.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <ArrowRight size={14} className="mt-1 text-blue-500 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            {project.details?.date && (
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {project.details.date}
              </span>
            )}
            {project.details?.techStack && (
              <span className="flex items-center gap-1.5">
                <Tag size={13} />
                {project.details.techStack}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} variant="secondary">{tag}</Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Button variant="outline" className="flex-1" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={15} className="mr-2" />
                View Code
              </a>
            </Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} className="mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Future Scope",
      description: "An AI-powered platform that provides personalized career guidance and skill development resources for users",
      image: "./public/images/FutureScope.png",
      tags: ["React", "Node.js", "JavaScript", "OpenAI API"],
      github: "https://github.com/LucasKimo/FutureScope_Private",
      demo: "https://example.com",
      details: {
        overview:
          "Future Scope is an AI-powered career platform that analyzes users' skills and interests to deliver personalized roadmaps, curated learning resources, and job market insights.",
        features: [
          "Personalized career path recommendations powered by GPT",
          "Skill gap analysis with actionable learning resources",
          "Real-time job market trend dashboard",
          "Progress tracking and milestone system",
        ],
        techStack: "Full-Stack Web App",
        date: "2024",
      },
    },
    {
      title: "BRKR",
      description: "Collaborative project management tool with real-time updates and team collaboration features",
      image: "./public/images/BRKR.png",
      tags: ["React", "TypeScript", "Tailwind", "Vercel"],
      github: "https://github.com",
      demo: "https://example.com",
      details: {
        overview:
          "BRKR is a modern project management tool built for fast-moving teams. It features real-time collaboration, task boards, and automated notifications to keep everyone aligned.",
        features: [
          "Real-time task updates with WebSocket sync",
          "Drag-and-drop Kanban boards",
          "Role-based access control",
          "Integrated team chat and @mentions",
        ],
        techStack: "Frontend-heavy SaaS",
        date: "2024",
      },
    },
    {
      title: "Planary",
      description: "A stunning portfolio website showcasing creative work with smooth animations and transitions",
      image: "/projects/portfolio.jpg",
      tags: ["React Native", "Framer Motion", "Tailwind", "Vercel"],
      github: "https://github.com",
      demo: "https://example.com",
      details: {
        overview:
          "Planary is a visually rich portfolio platform with fluid page transitions, scroll-triggered animations, and a minimal yet expressive design language.",
        features: [
          "Scroll-triggered reveal animations via Framer Motion",
          "Fully responsive across mobile and desktop",
          "Dark / light mode with smooth theme transitions",
          "CMS-driven project pages for easy updates",
        ],
        techStack: "Portfolio / Marketing",
        date: "2023",
      },
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work showcasing various technologies and problem-solving approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 select-none" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 select-none" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                  {/* Details button */}
                  <Button variant="outline" size="sm" className="w-full mt-2 hover:text-blue-600 hover:bg-blue-50 cursor-pointer select-none"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}