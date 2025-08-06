import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent leading-[2.2] pb-2">
            Priya Raja
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in leading-[2]" style={{ animationDelay: '0.2s' }}>
            Frontend Developer with Node.js Backend Expertise
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in leading-[2]" style={{ animationDelay: '0.4s' }}>
            I specialize in creating beautiful, responsive frontend experiences using React and modern JavaScript. 
            My Node.js skills allow me to build complete features from UI to API, making me a versatile team player.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="accent-gradient glow-subtle hover:glow-cyan transition-smooth"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-secondary/20 border border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground transition-smooth"
            asChild
          >
            <a 
              href="/resume/Priya_Raja_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Priya_Raja_Resume.pdf"
            >
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://github.com/Priya-raja" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/priya-raja-web/" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:priya.raja8002@gmail.com" 
            className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce hover:animate-none transition-smooth"
          style={{ animationDelay: '1s' }}
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-8 h-8 text-primary mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;