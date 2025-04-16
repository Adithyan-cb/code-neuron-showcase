
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

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

// Sample blog posts data
const blogPosts: BlogPost[] = [];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest from the Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on AI, machine learning, and my development journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
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
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
        <p className="text-muted-foreground max-w-2xl mx-auto">
            No posts yet...
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
