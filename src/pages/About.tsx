import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, GraduationCap, FileText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="text-center lg:text-left">
                  <div className="mb-6 mx-auto lg:mx-0 w-48 h-48 overflow-hidden rounded-full border-4 border-ai-purple">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">Adithyan</h1>
                  <p className="text-ai-purple font-medium mb-4">Student & Self-taught ML Enthusiast</p>
                  <p className="text-muted-foreground mb-6">
                    Exploring the fascinating world of machine learning and artificial intelligence through self-study and personal projects.
                  </p>
                  
                  <div className="flex justify-center lg:justify-start space-x-3 mb-6">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="mailto:your.email@example.com">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Mail className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        I'm a college student passionate about machine learning and artificial intelligence. My journey into AI began during my undergraduate studies, where I became fascinated by the potential of algorithms to learn patterns and make decisions.
                      </p>
                      <p>
                        Currently, I'm self-studying various ML and AI concepts, focusing on natural language processing and computer vision applications. I enjoy implementing research papers and building projects that apply these techniques to solve interesting problems.
                      </p>
                      <p>
                        When I'm not coding or training models, you can find me contributing to open-source projects, participating in ML competitions, or helping fellow students understand complex concepts. I'm always looking to connect with others who share my enthusiasm for AI and ML.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Python</Badge>
                          <Badge>JavaScript</Badge>
                          <Badge>SQL</Badge>
                          <Badge>C++</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">AI/ML Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>PyTorch</Badge>
                          <Badge>TensorFlow</Badge>
                          <Badge>Scikit-learn</Badge>
                          <Badge>Hugging Face</Badge>
                          <Badge>LangChain</Badge>
                          <Badge>OpenCV</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Web Development</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>React</Badge>
                          <Badge>Flask</Badge>
                          <Badge>FastAPI</Badge>
                          <Badge>HTML/CSS</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Git</Badge>
                          <Badge>Docker</Badge>
                          <Badge>Jupyter</Badge>
                          <Badge>Google Colab</Badge>
                          <Badge>Kaggle</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="education">
                  <h2 className="text-2xl font-bold mb-6">Education</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <GraduationCap className="h-6 w-6 mr-4 text-ai-purple flex-shrink-0 mt-1" />
                          <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                              <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
                              <span className="text-muted-foreground">2021 - Present</span>
                            </div>
                            <p className="text-muted-foreground mb-2">State University</p>
                            <div className="space-y-2">
                              <p>Focusing on machine learning and computational mathematics.</p>
                              <p>Relevant coursework: Data Structures, Algorithms, Machine Learning Fundamentals, Linear Algebra, Statistics</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <Badge variant="outline">Machine Learning</Badge>
                                <Badge variant="outline">Algorithms</Badge>
                                <Badge variant="outline">Data Science</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <FileText className="h-6 w-6 mr-4 text-ai-purple flex-shrink-0 mt-1" />
                          <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                              <h3 className="text-xl font-semibold">Online Courses & Certifications</h3>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <p className="font-medium">Deep Learning Specialization - Coursera</p>
                                <p className="text-muted-foreground">2023</p>
                              </div>
                              <div>
                                <p className="font-medium">Machine Learning - Stanford Online</p>
                                <p className="text-muted-foreground">2022</p>
                              </div>
                              <div>
                                <p className="font-medium">PyTorch for Deep Learning - Fast.ai</p>
                                <p className="text-muted-foreground">2023</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
