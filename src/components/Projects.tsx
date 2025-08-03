import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      delay: "0s"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      delay: "0.2s"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for tracking business metrics with interactive charts and real-time data visualization.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
      delay: "0.4s"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-gradient glow-subtle hover:glow-cyan transition-smooth animate-fade-in group"
              style={{ animationDelay: project.delay }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-primary-foreground transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground group-hover:text-primary-foreground/80 transition-smooth">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="accent-gradient hover:scale-105 transition-bounce"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
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