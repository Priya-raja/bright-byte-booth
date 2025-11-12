import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  const aiMLSkills = [
    "Python", "LangChain", "RAG Systems", "FAISS", "Pydantic","Machine Learning", 
    "Agentic AI", "Multi-Agent Systems", "Vector Databases", 
    "Prompt Engineering", "OpenAI API", "Claude API", "Semantic Search"
  ];

  const fullStackSkills = [
    "React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Node.js", 
    "NestJS", "MongoDB", "REST APIs", "Tailwind CSS", "Express.js"
  ];

  const toolsSkills = [
    "Git", "Docker", "AWS", "Chrome Extension Development", 
    "Jupyter", "VS Code", "Postman"
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
              AI Engineer & Full Stack Developer
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an AI Engineer specializing in building autonomous AI agents, RAG systems, 
                and agentic AI solutions. After 5+ years as a Full Stack Developer working with 
                the MERN stack, I've successfully transitioned into AI/ML engineering through 
                The School of AI (TSAI) Agentic AI course and Ed Donner Udemy courses, where I mastered building production-ready 
                AI systems.
              </p>
              <p>
                My expertise includes developing multi-agent architectures using LangChain, 
                implementing RAG systems with FAISS vector databases, and creating intelligent 
                Chrome extensions with agentic capabilities. I work with Pydantic models for 
                structured AI outputs, design sophisticated prompting strategies, and build 
                AI-powered applications that solve real-world problems.
              </p>
              <p>
                My unique combination of full-stack development and AI engineering allows me to 
                build complete, scalable AI solutions from frontend to backend to AI layer. 
                I document my journey on Medium, LinkedIn, and my YouTube channel "myAI Journey," 
                sharing insights on agentic AI, structured prompting, and production AI systems.
              </p>
            </div>
          </div>

          {/* Skills */}
          <Card className="p-8 card-gradient glow-subtle animate-fade-in-right">
            <h4 className="text-xl font-semibold mb-6 text-center">
              Technologies & Skills
            </h4>
            
            {/* AI/ML Skills */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                AI/ML Expertise
              </h5>
              <div className="flex flex-wrap gap-2">
                {aiMLSkills.map((skill, index) => (
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

            {/* Full Stack Skills */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                Full Stack Development
              </h5>
              <div className="flex flex-wrap gap-2">
                {fullStackSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-xs bg-accent/15 text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-smooth animate-scale-in"
                    style={{ animationDelay: `${(aiMLSkills.length + index) * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h5 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Tools & Platforms
              </h5>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-xs bg-muted text-muted-foreground border border-muted-foreground/20 hover:bg-muted-foreground hover:text-background transition-smooth animate-scale-in"
                    style={{ animationDelay: `${(aiMLSkills.length + fullStackSkills.length + index) * 0.05}s` }}
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