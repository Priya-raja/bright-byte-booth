import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  // Simulated Medium blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, best practices for component organization, and advanced patterns for maintainable code.",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      mediumUrl: "https://medium.com/@johndeveloper/building-scalable-react-applications",
      claps: 245
    },
    {
      id: 2,
      title: "The Future of Web Development: What's Coming in 2024",
      excerpt: "Explore upcoming trends in web development, from new JavaScript features to emerging frameworks and tools that will shape the industry.",
      publishedAt: "2024-01-08",
      readTime: "6 min read",
      tags: ["Web Development", "Trends", "JavaScript"],
      mediumUrl: "https://medium.com/@johndeveloper/future-web-development-2024",
      claps: 189
    },
    {
      id: 3,
      title: "Mastering CSS Grid: A Complete Guide",
      excerpt: "Deep dive into CSS Grid with practical examples, advanced techniques, and real-world use cases for creating responsive layouts.",
      publishedAt: "2023-12-22",
      readTime: "12 min read",
      tags: ["CSS", "Grid", "Layout", "Responsive Design"],
      mediumUrl: "https://medium.com/@johndeveloper/mastering-css-grid-guide",
      claps: 312
    },
    {
      id: 4,
      title: "API Design Best Practices for Modern Applications",
      excerpt: "Essential principles for designing RESTful APIs that are scalable, maintainable, and developer-friendly. Includes examples and common pitfalls to avoid.",
      publishedAt: "2023-12-10",
      readTime: "10 min read",
      tags: ["API Design", "REST", "Backend", "Node.js"],
      mediumUrl: "https://medium.com/@johndeveloper/api-design-best-practices",
      claps: 178
    },
    {
      id: 5,
      title: "Optimizing React Performance: Tips and Tricks",
      excerpt: "Comprehensive guide to React performance optimization, covering memo, useMemo, useCallback, code splitting, and advanced optimization techniques.",
      publishedAt: "2023-11-28",
      readTime: "9 min read",
      tags: ["React", "Performance", "Optimization"],
      mediumUrl: "https://medium.com/@johndeveloper/react-performance-optimization",
      claps: 267
    },
    {
      id: 6,
      title: "From Junior to Senior: My Journey as a Developer",
      excerpt: "Personal insights and lessons learned during my journey from junior to senior developer, including challenges faced and skills developed along the way.",
      publishedAt: "2023-11-15",
      readTime: "7 min read",
      tags: ["Career", "Personal Growth", "Advice"],
      mediumUrl: "https://medium.com/@johndeveloper/junior-to-senior-developer-journey",
      claps: 456
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-secondary/10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My Blog
            </h1>
            <div className="w-24 h-1 accent-gradient mx-auto rounded-full animate-scale-in mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing insights, tutorials, and thoughts about web development, technology trends, 
              and my journey as a developer. All articles are originally published on Medium.
            </p>
          </div>
        </div>
      </div>

      {/* Blog posts */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="card-gradient glow-subtle hover:glow-cyan transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <div className="text-primary">
                      {post.claps} claps
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl md:text-3xl text-primary group-hover:text-primary-foreground transition-smooth mb-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground group-hover:text-primary-foreground/80 transition-smooth">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-smooth"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  className="accent-gradient glow-subtle hover:glow-cyan transition-smooth"
                  asChild
                >
                  <a 
                    href={post.mediumUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read on Medium
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="card-gradient glow-subtle p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Follow for More</h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with my latest articles and insights about web development, 
              technology trends, and programming best practices.
            </p>
            <Button 
              size="lg" 
              className="accent-gradient glow-subtle hover:glow-cyan transition-smooth"
              asChild
            >
              <a 
                href="https://medium.com/@johndeveloper" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Follow on Medium
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blogs;