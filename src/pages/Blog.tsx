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

// Empty blog posts array
const blogPosts: BlogPost[] = [];

const Blog = () => {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [];

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
              <p className="text-muted-foreground">No posts yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  {/* Card content */}
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
