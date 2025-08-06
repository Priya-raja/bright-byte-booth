import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full animate-scale-in" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6 animate-fade-in-left">
            <Card className="card-gradient glow-subtle p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a 
                    href="mailto:priya.raja8002@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    priya.raja8002@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="card-gradient glow-subtle p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a 
                    href="tel:+971565809793"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    +971565809793
                  </a>
                </div>
              </div>
            </Card>

            <Card className="card-gradient glow-subtle p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Dubai, UAE</p>
                </div>
              </div>
            </Card>

            {/* Social links */}
            <div className="pt-6">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Priya-raja" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/priya-raja-web/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Card className="card-gradient glow-subtle animate-fade-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ready to Start?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full accent-gradient glow-subtle hover:glow-cyan transition-smooth"
                  asChild
                >
                  <a 
                    href="mailto:priya.raja8002@gmail.com?subject=Let's Work Together&body=Hi Priya,%0A%0AI'd like to discuss a potential project with you.%0A%0APlease let me know when you're available to chat.%0A%0ABest regards,"
                  >
                    Send Message
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                  asChild
                >
                  <a 
                    href="/resume/Priya_Raja_Resume.pdf" 
                    download="Priya_Raja_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;