
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Search, Brain, Database, ChartBar } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  icon?: React.ReactNode;
};

// Expanded sample projects data
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize the inner workings of neural networks, helping students understand how deep learning models function.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000",
    tags: ["Python", "PyTorch", "React", "D3.js"],
    githubUrl: "https://github.com/yourusername/neural-visualizer",
    demoUrl: "https://demo-url.com",
    category: "Deep Learning",
    icon: <Brain className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 2,
    title: "Transformer-based Text Summarizer",
    description: "A natural language processing application that uses transformers to generate concise summaries of long-form content.",
    image: "https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?q=80&w=2000",
    tags: ["Python", "Hugging Face", "NLP", "Streamlit"],
    githubUrl: "https://github.com/yourusername/text-summarizer",
    category: "NLP",
    icon: <Database className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 3,
    title: "Computer Vision for Medical Imaging",
    description: "A deep learning model trained to detect abnormalities in medical scans, assisting healthcare professionals in diagnosis.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2000",
    tags: ["Python", "TensorFlow", "OpenCV", "Medical AI"],
    githubUrl: "https://github.com/yourusername/medical-vision",
    category: "Computer Vision",
    icon: <ChartBar className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 4,
    title: "Reinforcement Learning for Game AI",
    description: "Using reinforcement learning algorithms to train AI agents to play classic arcade games with human-level performance.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=2000",
    tags: ["Python", "OpenAI Gym", "PyTorch", "RL"],
    githubUrl: "https://github.com/yourusername/rl-game-ai",
    category: "Reinforcement Learning",
    icon: <Brain className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 5,
    title: "Machine Learning Classification Toolkit",
    description: "A toolkit that implements various classification algorithms and provides visualization tools for understanding model performance.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
    tags: ["Python", "Scikit-learn", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/yourusername/ml-classification",
    demoUrl: "https://demo-url.com",
    category: "Machine Learning",
    icon: <Database className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 6,
    title: "Sentiment Analysis Dashboard",
    description: "A web application for real-time sentiment analysis of social media posts and customer feedback.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000",
    tags: ["Python", "NLTK", "React", "D3.js", "NLP"],
    githubUrl: "https://github.com/yourusername/sentiment-dashboard",
    category: "NLP",
    icon: <ChartBar className="h-6 w-6 text-ai-purple" />,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["All", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"];
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">ML Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my machine learning and artificial intelligence projects
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
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects match your search criteria.</p>
              <Button variant="ghost" onClick={() => { setFilter("All"); setSearchQuery(""); }} className="mt-4">
                Clear filters
              </Button>
            </div>
          ) : (
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
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <CardTitle>{project.title}</CardTitle>
                    </div>
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
                        View Details
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

export default Projects;
