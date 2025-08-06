import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  const frontendSkills = [
    "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", 
    "Next.js", "Sass", "Three.js", "Responsive Design", "UI/UX Design"
  ];

  const backendSkills = [
    "Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Nest js","JWT Auth"
  ];

  const toolsSkills = [
    "Git", "Docker", "AWS", "Webpack", "Vite", "Jest"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full animate-scale-in" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Frontend-Focused Developer with Backend Skills
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in frontend development, I specialize in creating 
                beautiful, responsive, and user-friendly web applications using React,TypeScript, 
                and modern CSS frameworks. My passion lies in crafting pixel-perfect interfaces 
                that provide exceptional user experiences.
              </p>
              <p>
                While my expertise is frontend-focused, I'm also proficient in Node.js backend development. 
                This allows me to understand the full development cycle, create seamless integrations, 
                and build complete features independently when needed. I can design APIs, work with databases, 
                and handle authentication systems.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying current with frontend trends. 
                My dual skillset makes me a valuable team member who can bridge the gap between 
                frontend and backend development.
              </p>
            </div>
          </div>

          {/* Skills */}
          <Card className="p-8 card-gradient glow-subtle animate-fade-in-right">
            <h4 className="text-xl font-semibold mb-6 text-center">
              Technologies & Skills
            </h4>
            
            {/* Frontend Skills */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                Frontend Expertise
              </h5>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-xs bg-primary/15 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                Backend Skills
              </h5>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-xs bg-accent/15 text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-smooth animate-scale-in"
                    style={{ animationDelay: `${(frontendSkills.length + index) * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h5 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Tools & DevOps
              </h5>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-xs bg-muted text-muted-foreground border border-muted-foreground/20 hover:bg-muted-foreground hover:text-background transition-smooth animate-scale-in"
                    style={{ animationDelay: `${(frontendSkills.length + backendSkills.length + index) * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;