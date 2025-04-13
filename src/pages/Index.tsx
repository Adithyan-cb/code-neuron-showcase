
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import BlogPreview from "@/components/home/BlogPreview";
import TechStack from "@/components/home/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectsShowcase />
        <BlogPreview />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
