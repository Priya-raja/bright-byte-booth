import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-primary/15 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I craft exceptional digital experiences through clean code and innovative solutions. 
            Specializing in React, Node.js, and modern web technologies.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="accent-gradient glow-subtle hover:glow-cyan transition-smooth">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
            Contact Me
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-secondary/20 border border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground transition-smooth"
            asChild
          >
            <a href="/resume.pdf" download="John_Developer_Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#" 
            className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce hover:animate-none transition-smooth"
          style={{ animationDelay: '1s' }}
        >
          <ArrowDown className="w-8 h-8 text-primary mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;