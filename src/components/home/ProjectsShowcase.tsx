
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink, Brain, Database, ChartBar } from "lucide-react";

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

// Sample projects data
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Alice",
    description: "Alice 👾– A chill, relatable chatbot with a playful vibe. Built with Streamlit (frontend) and Meta Llama 3 (through Groq) for fast, engaging conversations. Alice’s witty, supportive personality makes every chat feel like hanging out with your bestie. 😎",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000",
    tags: ["Python", "Streamlit","Groq","Langchain"],
    githubUrl: "https://github.com/Adithyan-cb/Alice",
    demoUrl: "https://chat-with-alice.streamlit.app/",
    category: "Deep Learning",
    icon: <Brain className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 2,
    title: "SummizeAI",
    description: "Summize is an AI-powered text and PDF summarization tool designed to quickly distill large documents into concise, insightful summaries. Leveraging state-of-the-art natural language processing models, Summize supports various file formats and delivers accurate summaries with minimal user input.",
    image: "https://images.unsplash.com/photo-1528459199957-0ff28496a7f6?q=80&w=443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Groq", "Streamlit"],
    githubUrl: "https://github.com/Adithyan-cb/summizeAI",
    demoUrl:"https://summize.streamlit.app/",
    category: "NLP",
    icon: <Database className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 3,
    title: "Code Critic",
    description: "A toolkit that implements various classification algorithms and provides visualization tools for understanding model performance.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000",
    tags: ["Python", "Scikit-learn", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/yourusername/ml-classification",
    category: "Machine Learning",
    icon: <ChartBar className="h-6 w-6 text-ai-purple" />,
  },
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", "Machine Learning", "Deep Learning", "NLP"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured ML Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore some of my machine learning and AI projects
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
