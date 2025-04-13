
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Calendar, Search, Clock } from "lucide-react";

// Blog post type definition
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
};

// Extended sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with PyTorch for Deep Learning",
    excerpt: "A beginner's guide to setting up and creating your first neural network using PyTorch, with practical examples and code snippets.",
    date: "April 5, 2023",
    category: "Deep Learning",
    readTime: "8 min read",
    slug: "getting-started-with-pytorch",
  },
  {
    id: 2,
    title: "Understanding Transformer Architectures in NLP",
    excerpt: "An in-depth look at how transformer models work and why they've revolutionized natural language processing tasks.",
    date: "March 12, 2023",
    category: "NLP",
    readTime: "12 min read",
    slug: "understanding-transformers",
  },
  {
    id: 3,
    title: "Ethics in AI: Addressing Bias in Machine Learning Models",
    excerpt: "Exploring the ethical considerations of AI development and strategies for identifying and mitigating bias in your models.",
    date: "February 28, 2023",
    category: "AI Ethics",
    readTime: "10 min read",
    slug: "ethics-in-ai",
  },
  {
    id: 4,
    title: "Optimizing PyTorch Models for Production",
    excerpt: "Learn how to optimize your PyTorch models for production environments, covering techniques like quantization and model pruning.",
    date: "February 10, 2023",
    category: "Deep Learning",
    readTime: "15 min read",
    slug: "optimizing-pytorch-models",
  },
  {
    id: 5,
    title: "Building Conversational AI with Hugging Face Transformers",
    excerpt: "A tutorial on how to create a conversational AI bot using pre-trained transformer models from Hugging Face.",
    date: "January 25, 2023",
    category: "NLP",
    readTime: "11 min read",
    slug: "conversational-ai-hugging-face",
  },
  {
    id: 6,
    title: "Implementing A/B Testing in Machine Learning Systems",
    excerpt: "A practical guide to implementing A/B testing methodologies for your machine learning models in production.",
    date: "January 8, 2023",
    category: "ML Ops",
    readTime: "9 min read",
    slug: "ab-testing-ml-systems",
  },
];

const Blog = () => {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["All", "Deep Learning", "NLP", "AI Ethics", "ML Ops"];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = filter === "All" || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, insights, and tutorials on AI, machine learning, and my development journey
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={filter === category ? "bg-ai-purple hover:bg-ai-purple/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts match your search criteria.</p>
              <Button variant="ghost" onClick={() => { setFilter("All"); setSearchQuery(""); }} className="mt-4">
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-2 gap-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="hover:text-ai-purple transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <Badge variant="outline" className="bg-muted/50 w-fit">
                      {post.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button variant="ghost" className="w-full justify-start text-ai-purple hover:text-ai-purple/90">
                        Read Full Post
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
