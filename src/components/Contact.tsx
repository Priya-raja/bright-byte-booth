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
                  <p className="text-muted-foreground">john@developer.com</p>
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
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
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
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </Card>

            {/* Social links */}
            <div className="pt-6">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth glow-subtle hover:glow-cyan"
                >
                  <Twitter className="w-5 h-5" />
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
                >
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Download Resume
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