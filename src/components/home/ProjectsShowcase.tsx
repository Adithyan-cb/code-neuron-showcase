
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink, Brain, Database, ChartBar,Code,FileText,Bot,BookOpenText} from "lucide-react";

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
    image: "https://i.pinimg.com/736x/89/f0/c4/89f0c4c973d860e562a7d57ff255ef84.jpg",
    tags: ["Python", "Streamlit","Groq","Langchain"],
    githubUrl: "https://github.com/Adithyan-cb/Alice",
    demoUrl: "https://chat-with-alice.streamlit.app/",
    category: "Streamlit & Groq",
    icon: <Bot className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 2,
    title: "SummizeAI",
    description: "Summize is an AI-powered text and PDF summarization tool designed to quickly distill large documents into concise, insightful summaries. Leveraging state-of-the-art natural language processing models, Summize supports various file formats and delivers accurate summaries with minimal user input.",
    image: "https://images.unsplash.com/photo-1528459199957-0ff28496a7f6?q=80&w=443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Groq", "Streamlit"],
    githubUrl: "https://github.com/Adithyan-cb/summizeAI",
    demoUrl:"https://summize.streamlit.app/",
    category: "Streamlit & Groq",
    icon: <FileText className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 3,
    title: "Code Critic",
    description: "Code Critic is an innovative web application that assists developers in refining and optimizing their source code. Built with Python, Streamlit, and integrated with Groq powered by the Llama3 model, Code Critic provides a seamless experience where you can simply upload your code, and our tool reviews it to suggest improvements and highlight potential bug fixes.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python","Streamlit","Groq"],
    githubUrl: "https://github.com/Adithyan-cb/codeCritic",
    demoUrl: "https://code-critic-ai.streamlit.app/",
    category: "Streamlit & Groq",
    icon: <Code className="h-6 w-6 text-ai-purple" />,
  },
  {
    id: 4,
    title: "Neural Nectar",
    description: "NeuralNectar is a curated collection of AI, ML, and DL resources, designed to fuel your learning journey from beginner to expert with essential concepts, projects, and hands-on examples.",
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Markdown"],
    githubUrl: "https://github.com/Adithyan-cb/NeuralNectar",
    category: "Learning Resources",
    icon: <BookOpenText className="h-6 w-6 text-ai-purple" />,
  },
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["Streamlit & Groq","Learning Resources"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
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
