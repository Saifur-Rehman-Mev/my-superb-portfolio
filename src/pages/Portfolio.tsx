import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "HavenStay",
    description: "A full-stack hotel booking website with authorization and authentication. Users can browse hotels, make reservations, and manage their bookings securely.",
    tags: ["JavaScript", "Node.js", "Express.js", "EJS", "Tailwind"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Saifur-Rehman-Mev/HavenStay",
  },
  {
    id: 2,
    title: "NodeXpressDB",
    description: "A CRUD application where every user can post, update, delete, or view their data. Simple and effective data management system.",
    tags: ["JavaScript", "Node.js", "Express.js", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Saifur-Rehman-Mev/NodeXpressDB",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "A Netflix clone currently under development. Building a modern streaming platform UI with React and modern web technologies.",
    tags: ["React.js", "Tailwind", "Redux Toolkit", "React Router"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Saifur-Rehman-Mev/Netflix-clone",
    inProgress: true,
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <FloatingShapes />
      
      {/* Header */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase animate-slide-up">
              My Work
            </p>
            <h1 className="section-title mb-6 animate-slide-up">
              Personal <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up-delayed">
              Side projects and experiments that showcase my skills in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* In Progress Badge */}
                  {project.inProgress && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                      In Progress
                    </div>
                  )}
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="font-display">
                        <Github size={16} className="mr-2" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-16">
            <div className="glass-card inline-block rounded-2xl p-8 glow-effect">
              <h3 className="font-display text-2xl font-bold mb-4">
                Want to See <span className="text-gradient">More Projects?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions.
              </p>
              <a href="https://github.com/Saifur-Rehman-Mev" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-display font-semibold">
                  <Github size={20} className="mr-2" />
                  View More Projects
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

export default Portfolio;
