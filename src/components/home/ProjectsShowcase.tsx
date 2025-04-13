
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

// Project type definition
type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
};

// Sample projects data
const projects: ProjectType[] = [
  {
    id:
 1,
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize the inner workings of neural networks, helping students understand how deep learning models function.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000",
    tags: ["Python", "PyTorch", "React", "D3.js"],
    githubUrl: "https://github.com/yourusername/neural-visualizer",
    demoUrl: "https://demo-url.com",
    category: "Deep Learning",
  },
  {
    id: 2,
    title: "Transformer-based Text Summarizer",
    description: "A natural language processing application that uses transformers to generate concise summaries of long-form content.",
    image: "https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?q=80&w=2000",
    tags: ["Python", "Hugging Face", "NLP", "Streamlit"],
    githubUrl: "https://github.com/yourusername/text-summarizer",
    category: "NLP",
  },
  {
    id: 3,
    title: "Computer Vision for Medical Imaging",
    description: "A deep learning model trained to detect abnormalities in medical scans, assisting healthcare professionals in diagnosis.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000",
    tags: ["Python", "TensorFlow", "OpenCV", "Medical AI"],
    githubUrl: "https://github.com/yourusername/medical-vision",
    category: "Computer Vision",
  },
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", "Deep Learning", "NLP", "Computer Vision"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore some of my recent work in artificial intelligence and machine learning
        </p>
      </div>
      
      <div className="flex justify-center mb-8 flex-wrap gap-2">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </a>
                )}
              </div>
              <Link to={`/projects/${project.id}`}>
                <Button variant="ghost" className="text-ai-purple hover:text-ai-purple/90">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/projects">
          <Button size="lg" className="bg-ai-purple hover:bg-ai-purple/90">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
