import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "Git", "Tailwind CSS", "Next.js", "Express.js"
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
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in full-stack development, I specialize in creating 
                scalable web applications that deliver exceptional user experiences. My journey began 
                with a curiosity for how things work, which evolved into a passion for building 
                innovative digital solutions.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies. When I'm not coding, you can find me contributing to open source projects, 
                mentoring aspiring developers, or exploring new technologies.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring that 
                every project not only meets requirements but exceeds expectations.
              </p>
            </div>
          </div>

          {/* Skills */}
          <Card className="p-8 card-gradient glow-subtle animate-fade-in-right">
            <h4 className="text-xl font-semibold mb-6 text-center">
              Technologies & Skills
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-smooth animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;