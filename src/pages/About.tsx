import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Twitter, GraduationCap, FileText } from "lucide-react";

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
                      src="/images/profile-pic.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">Adithyan CB</h1>
                  <p className="text-ai-purple font-medium mb-4">Student & Self-taught ML Enthusiast</p>
                  <p className="text-muted-foreground mb-6">
                    Exploring the fascinating world of machine learning and artificial intelligence through self-study and personal projects.
                  </p>
                  
                  <div className="flex justify-center lg:justify-start space-x-3 mb-6">
                    <a href="https://github.com/adithyan-cb" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://linkedin.com/in/adithyan-cb" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="mailto:adhicodes34@gmail.com">
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
                      Hello there! 👋 I'm Adithyan C B, a passionate tech enthusiast in my 2nd year of BCA. I'm diving deep into the world of technology and love exploring emerging trends in Artificial Intelligence 🤖, deep learning 📚, and large language models 🧠. I enjoy experimenting with different programming tools and frameworks, always eager to learn, grow, and build innovative solutions. Join me as I embark on this exciting journey of discovery and development!.
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
                          <Badge>C++</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">AI/ML Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>PyTorch</Badge>
                          <Badge>Scikit-learn</Badge>
                          <Badge>LangChain</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Web Development</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>FastAPI</Badge>
                          <Badge>HTML/CSS</Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Git</Badge>
                          <Badge>Google Colab</Badge>
                          <Badge>Streamlit</Badge>
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
                              <h3 className="text-xl font-semibold">Bachelor in Computer Application ( BCA )</h3>
                              <span className="text-muted-foreground">2024 - Present</span>
                            </div>
                            <p className="text-muted-foreground mb-2">Tharanannellur Arts & Science college</p>
                            <div className="space-y-3">
                              <p>Focusing on computer applications and software development, equipping students with foundational and specialized skills in various areas of information technology.</p>
                              <p>Relevant coursework: Programming Language,Data structures & Algorithms,DBMS,Web development,Operating Systems,Computer network,Software engineering,
                                Web technologies,Computer Architecture,Mathematics & Statistics,Specialized/Elective courses.
                              </p>
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
                                <p className="font-medium">Pandas - Kaggle</p>
                                <p className="text-muted-foreground">2025</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => window.open("https://drive.google.com/file/d/1ge-qkwhm7QAp_BHJZQrmD9cmD962Blqf/view?usp=drive_link", "_blank")}
                                  className="mt-2"
                                >
                                  View Certificate
                                </Button>
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
