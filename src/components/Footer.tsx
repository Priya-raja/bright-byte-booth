import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              John Developer
            </h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating exceptional digital experiences
              through clean code and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-smooth">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">john@developer.com</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="#" 
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} John Developer. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;