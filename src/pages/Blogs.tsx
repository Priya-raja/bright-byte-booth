import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  // Simulated Medium blog posts data
  // Simulated Medium blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Web Scraping HTML Table from Wiki",
      excerpt: "Using Beautiful Soup to extract climate data from Wikipedia. Learn the essential steps of web scraping with Python, from installing Beautiful Soup to extracting and formatting data into CSV, XML, and JSON formats.",
      publishedAt: "2024-02-10",
      readTime: "8 min read",
      tags: ["Python", "Web Scraping", "Beautiful Soup", "Data Science", "HTML Parsing"],
      mediumUrl: "https://medium.com/analytics-vidhya/web-scraping-html-table-from-wiki-9b18cf169359",
      claps: 156
    },
    {
      id: 2,
      title: "Simple Factory Pattern in JavaScript",
      excerpt: "Learn about the Simple Factory Pattern, a fundamental creational design pattern in JavaScript. Understand how to create objects without exposing the creation logic and make your code more maintainable and flexible.",
      publishedAt: "2024-02-05",
      readTime: "6 min read",
      tags: ["JavaScript", "Design Patterns", "Factory Pattern", "Object Creation", "Software Architecture"],
      mediumUrl: "https://medium.com/@priya.thevar89/simple-factory-pattern-in-javacsript-36db97591aee",
      claps: 34
    },
    {
      id: 2,
      title: "Understanding Map in JavaScript",
      excerpt: "Are you a JavaScript learner trying to understand modern data structures? Meet Map—a powerful, flexible way to handle key-value pairs with better performance and flexible key types than regular objects.",
      publishedAt: "2024-01-30",
      readTime: "7 min read",
      tags: ["JavaScript", "Data Structures", "Map", "ES6", "Performance"],
      mediumUrl: "https://medium.com/@priya.thevar89/understanding-map-in-javascript-4df93392fe89",
      claps: 89
    },
    {
      id: 2,
      title: "Mastering JavaScript Sets: Uniqueness Simplified",
      excerpt: "Comprehensive guide to JavaScript Sets and their unique properties. Learn about Set methods, iteration techniques, and practical use cases for managing unique data collections efficiently.",
      publishedAt: "2024-01-25",
      readTime: "6 min read",
      tags: ["JavaScript", "Data Structures", "Set", "ES6", "Collections"],
      mediumUrl: "https://medium.com/@priya.thevar89/javascript-sets-uniqueness-simplified-3eaf6d132cd0",
      claps: 47
    },
    {
      id: 2,
      title: "Solving 'Longest Substring Without Repeating Characters' Using JavaScript Set",
      excerpt: "Learn how using a simple Set and the sliding window technique can solve this classic LeetCode problem efficiently in JavaScript. Perfect for coding interviews and understanding algorithm optimization.",
      publishedAt: "2024-01-20",
      readTime: "5 min read",
      tags: ["JavaScript", "Algorithms", "Data Structures", "LeetCode", "Set"],
      mediumUrl: "https://medium.com/@priya.thevar89/solving-longest-substring-without-repeating-characters-using-javascript-set-f42dc8877077",
      claps: 23
    },
    {
      id: 3,
      title: "Prototypes vs OOP in JavaScript: What's the Difference?",
      excerpt: "Learn how to structure large React applications using TypeScript, best practices for component organization, and advanced patterns for maintainable code.",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      mediumUrl: "https://medium.com/@priya.thevar89/prototypes-vs-oop-in-javascript-whats-the-difference-2a5ec5f697a9",
      claps: 5
    },
  ]

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
                href="https://medium.com/@priya.thevar89" 
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