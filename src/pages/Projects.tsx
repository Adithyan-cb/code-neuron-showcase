
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Search, Bot,FileText,Code,BookOpenText } from "lucide-react";
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

const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["Streamlit & Groq","Learning Resources","All"];
  
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
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
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
