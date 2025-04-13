
import { Card, CardContent } from "@/components/ui/card";

// Tech type definition
type Tech = {
  name: string;
  icon: string;
  category: string;
};

// Sample tech stack data
const techStack: Tech[] = [
  // AI/ML frameworks
  { name: "PyTorch", icon: "🔥", category: "AI/ML Frameworks" },
  { name: "TensorFlow", icon: "📊", category: "AI/ML Frameworks" },
  { name: "Scikit-learn", icon: "🧮", category: "AI/ML Frameworks" },
  { name: "LangChain", icon: "⛓️", category: "AI/ML Frameworks" },
  
  // Programming languages
  { name: "Python", icon: "🐍", category: "Languages" },
  {name: "C++",icon:"👾", category: "Languages"},
  
  // Web technologies
  { name: "FastAPI", icon: "⚡", category: "Web" },
  { name: "HTML & CSS ", icon:"📑", category: "Web" },
  
  // Tools
  { name: "Git", icon: "🔄", category: "Tools & Libraries" },
  { name: "Google Colab", icon: "📁", category: "Tools & Libraries" },
  { name: "Jupyter", icon: "📓", category: "Tools & Libraries" },
  { name: "Streamlit" , icon: "🛠", category: "Tools & Libraries"}
];

const TechStack = () => {
  // Group tech by category
  const categories = [...new Set(techStack.map(tech => tech.category))];
  
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to bring AI solutions to life
        </p>
      </div>
      
      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {techStack
                .filter(tech => tech.category === category)
                .map((tech) => (
                  <Card key={tech.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
