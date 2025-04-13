
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin, FileText, GraduationCap, Briefcase } from "lucide-react";

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
                  <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                  <p className="text-ai-purple font-medium mb-4">AI Engineer & ML Researcher</p>
                  <p className="text-muted-foreground mb-6">
                    Building intelligent solutions to solve real-world problems through the power of machine learning and artificial intelligence.
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
                  
                  <div className="flex justify-center lg:justify-start">
                    <a href="/resume.pdf" download>
                      <Button className="bg-ai-purple hover:bg-ai-purple/90 flex items-center">
                        <Download className="mr-2 h-4 w-4" /> Download Resume
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        I'm an AI Engineer and ML Researcher specializing in developing intelligent systems that solve real-world problems. My journey in artificial intelligence began during my undergraduate studies in Computer Science, where I was fascinated by the potential of machines to learn and adapt.
                      </p>
                      <p>
                        Currently, I focus on natural language processing and computer vision applications, with a particular interest in making AI more accessible and ethically sound. I enjoy tackling complex problems and turning cutting-edge research into practical solutions.
                      </p>
                      <p>
                        When I'm not coding or training models, you can find me contributing to open-source projects, writing technical blog posts, or mentoring aspiring AI engineers. I'm passionate about knowledge sharing and believe in the collaborative nature of the AI community.
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
                          <Badge>AWS</Badge>
                          <Badge>Google Cloud</Badge>
                          <Badge>Jupyter</Badge>
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
                              <h3 className="text-xl font-semibold">M.S. in Computer Science, AI Specialization</h3>
                              <span className="text-muted-foreground">2020 - 2022</span>
                            </div>
                            <p className="text-muted-foreground mb-2">Stanford University</p>
                            <div className="space-y-2">
                              <p>Focused on advanced machine learning techniques, deep learning, and natural language processing.</p>
                              <p>Thesis: "Improving Transformer Efficiency Through Dynamic Pruning Techniques"</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <Badge variant="outline">Deep Learning</Badge>
                                <Badge variant="outline">NLP</Badge>
                                <Badge variant="outline">Computer Vision</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <GraduationCap className="h-6 w-6 mr-4 text-ai-purple flex-shrink-0 mt-1" />
                          <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                              <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
                              <span className="text-muted-foreground">2016 - 2020</span>
                            </div>
                            <p className="text-muted-foreground mb-2">Massachusetts Institute of Technology</p>
                            <div className="space-y-2">
                              <p>Graduated with honors, minor in Mathematics.</p>
                              <p>Senior project: "Reinforcement Learning Approaches to Gameplay Optimization"</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <Badge variant="outline">Machine Learning</Badge>
                                <Badge variant="outline">Algorithms</Badge>
                                <Badge variant="outline">Software Engineering</Badge>
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
                              <h3 className="text-xl font-semibold">Certifications</h3>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <p className="font-medium">Deep Learning Specialization - Coursera</p>
                                <p className="text-muted-foreground">2021</p>
                              </div>
                              <div>
                                <p className="font-medium">AWS Machine Learning Specialty</p>
                                <p className="text-muted-foreground">2022</p>
                              </div>
                              <div>
                                <p className="font-medium">TensorFlow Developer Certificate</p>
                                <p className="text-muted-foreground">2021</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="experience">
                  <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <Briefcase className="h-6 w-6 mr-4 text-ai-purple flex-shrink-0 mt-1" />
                          <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                              <h3 className="text-xl font-semibold">AI Research Engineer</h3>
                              <span className="text-muted-foreground">2022 - Present</span>
                            </div>
                            <p className="text-muted-foreground mb-4">Google AI Research</p>
                            <div className="space-y-2">
                              <p>Working on developing more efficient and interpretable deep learning models for NLP tasks.</p>
                              <p>Contributing to open-source projects to enhance LLM capabilities.</p>
                              <p>Authored research papers on model optimization and efficiency techniques.</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <Badge variant="outline">PyTorch</Badge>
                                <Badge variant="outline">Transformers</Badge>
                                <Badge variant="outline">Research</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <Briefcase className="h-6 w-6 mr-4 text-ai-purple flex-shrink-0 mt-1" />
                          <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                              <h3 className="text-xl font-semibold">Machine Learning Engineer</h3>
                              <span className="text-muted-foreground">2020 - 2022</span>
                            </div>
                            <p className="text-muted-foreground mb-4">Tesla Autopilot</p>
                            <div className="space-y-2">
                              <p>Developed computer vision algorithms for autonomous driving systems.</p>
                              <p>Improved object detection accuracy by 12% through model architecture innovations.</p>
                              <p>Optimized inference performance for real-time processing on vehicle hardware.</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <Badge variant="outline">TensorFlow</Badge>
                                <Badge variant="outline">Computer Vision</Badge>
                                <Badge variant="outline">CUDA</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <Briefcase className="h-6 w-6 mr-4 text-ai-purple flex-shrink-0 mt-1" />
                          <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                              <h3 className="text-xl font-semibold">Data Science Intern</h3>
                              <span className="text-muted-foreground">Summer 2019</span>
                            </div>
                            <p className="text-muted-foreground mb-4">Amazon</p>
                            <div className="space-y-2">
                              <p>Built recommendation algorithms for product search ranking.</p>
                              <p>Implemented A/B testing frameworks to evaluate algorithm performance.</p>
                              <p>Analyzed user behavior data to identify opportunities for search improvement.</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                <Badge variant="outline">Python</Badge>
                                <Badge variant="outline">Recommendation Systems</Badge>
                                <Badge variant="outline">SQL</Badge>
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
