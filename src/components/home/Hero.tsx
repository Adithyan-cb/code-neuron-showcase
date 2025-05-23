
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "hey, i'm Adithyan";
  
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute right-1/2 top-0 -ml-24 transform-gpu blur-3xl lg:ml-24 xl:ml-48">
          <div 
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-ai-purple to-ai-blue opacity-30"
            style={{
              clipPath: "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"
            }}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in flex items-center justify-center" style={{ animationDelay: "100ms" }}>
            <span>{text}</span>
            <span className="ml-1 w-1 h-10 bg-ai-purple inline-block animate-pulse"></span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            I'm passionate about artificial intelligence, machine learning, and building 
            applications that solve real-world problems through innovative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Link to="/projects">
              <Button size="lg" className="w-full sm:w-auto bg-ai-purple hover:bg-ai-purple/90">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                About Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
