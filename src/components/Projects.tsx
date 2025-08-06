import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Coffee Connoisseur",
      description: "Full-stack coffee discovery app with geolocation, voting system, and Airtable integration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Airtable", "Geolocation API", "Vercel"],
      githubUrl: "https://github.com/Priya-raja/next-js-projects",
      liveUrl: "https://discover-coffee-stores-git-master-priyarajas-projects.vercel.app/",
      imageUrl: "/projects/coffee.png", 
      delay: "0s"
    },
    {
      title: "Meme Generator",
      description: "Interactive meme generator app with customizable text overlays and popular meme templates.",
      technologies: ["React", "JavaScript", "CSS3", "Meme API", "Canvas API", "Responsive Design"],
      githubUrl: "https://github.com/Priya-raja/create-react-app-Meme-Generator", 
      imageUrl: "/projects/meme.png", 
      delay: "0.2s"
    },
    {
      title: "FotoFlix",
      description: "Modern photo search application with API integration for seamless image browsing.",
      technologies: ["React", "JavaScript", "CSS3", "API Integration", "Responsive Design"],
      githubUrl: "https://github.com/Priya-raja/fotoflix",
      liveUrl: "https://fotosearch.netlify.app/",
      imageUrl: "/projects/fotoflix.png", 
      delay: "0.4s"
    },
    {
      title: "Grocery Bud",
      description: "Grocery list management app with CRUD operations and local storage persistence.",
      technologies: ["React", "Node.js", "Local Storage", "CSS3", "React Query"],
      githubUrl: "https://github.com/Priya-raja/FrontendJourney/tree/master/grocerybud",
      liveUrl: "https://frontend-journey-hazel.vercel.app/",
      imageUrl: "/projects/grocery.png", 
      delay: "0.6s"
    },
    {
      title: "WordSpeed Analyzer",
      description: "Interactive typing speed tool with real-time word count and analytics.",
      technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Real-time Analytics"],
      githubUrl: "#",
      liveUrl: "https://wordspeed-priya.netlify.app/",
      imageUrl: "/projects/wordspeed.png", // Add your project screenshot
      delay: "0.8s"
    },
    {
      title: "Pacman Game",
      description: "Classic Pacman game with collision detection, scoring system, and smooth animations.",
      technologies: ["JavaScript", "HTML5 Canvas", "Game Development", "Animation", "Event Handling"],
      githubUrl: "#",
      liveUrl: "https://myfirstpacmangame.netlify.app/",
      imageUrl: "/projects/pacman.png", // Add your project screenshot
      delay: "1s"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full animate-scale-in" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-gradient glow-subtle hover:glow-cyan transition-smooth animate-fade-in group overflow-hidden"
              style={{ animationDelay: project.delay }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = `https://via.placeholder.com/400x200/6366f1/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-primary group-hover:text-primary-foreground transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-smooth line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-smooth"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="accent-gradient hover:scale-105 transition-bounce flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;