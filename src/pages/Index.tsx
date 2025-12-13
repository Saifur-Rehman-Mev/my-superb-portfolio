import { ArrowRight, Code2, Palette, Rocket, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { Button } from "@/components/ui/button";

const Index = () => {
  const skills = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable code" },
    { icon: Palette, title: "UI/UX Design", description: "Creating beautiful user experiences" },
    { icon: Rocket, title: "Performance", description: "Optimized for speed and efficiency" },
  ];

  return (
    <Layout>
      <FloatingShapes />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="animate-slide-up">
              <p className="text-primary font-medium mb-4 tracking-wider uppercase">
                Software & Web Developer
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-slide-up">
              <span className="block">Hi, I'm <span className="text-gradient">Saifur Rehman</span></span>
              <span className="block">Building Digital</span>
              <span className="text-gradient">Experiences</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up-delayed font-body">
              I craft modern web applications with clean code and stunning designs. 
              Let's turn your ideas into reality.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up-delayed" style={{ animationDelay: "0.4s" }}>
              <Link to="/projects">
                <Button size="lg" className="group font-display font-semibold">
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-display font-semibold">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="glass-card p-8 rounded-2xl glow-effect group hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="section-title mb-6">
                Ready to Start a <span className="text-gradient">Project?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's collaborate and create something amazing together. I'm always open to discussing new opportunities.
              </p>
              <Link to="/contact">
                <Button size="lg" className="font-display font-semibold">
                  Let's Talk
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog CTA Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen size={40} className="text-primary" />
              </div>
              <h2 className="section-title mb-6">
                Read My <span className="text-gradient">Blogs</span> Here
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                I write about programming, web development, and technology. Sharing my knowledge and experiences 
                through articles on JavaScript, React, Node.js, and more.
              </p>
              <a href="https://hashnode.com/@SaifurRehmanMev" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-display font-semibold">
                  Visit My Blog
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
