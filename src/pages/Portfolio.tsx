import { ExternalLink, Github } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { Button } from "@/components/ui/button";

const freelanceProjects = [
  {
    id: 1,
    title: "Central Auto Zone",
    description: "A professional auto parts e-commerce website with product catalog, search functionality, and modern UI.",
    tags: ["Web Development", "E-Commerce", "UI/UX"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    liveUrl: "https://centralautozone.com/",
  },
];

const personalProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team features, and analytics.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and scheduling.",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with smart responses and conversation history.",
    tags: ["React", "OpenAI", "Socket.io", "Express"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
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
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up-delayed">
              A collection of projects that showcase my skills in web development, 
              from concept to deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Freelance Projects */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="section-title mb-4">
              Freelance <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world projects delivered for clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {freelanceProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="font-display">
                        <ExternalLink size={16} className="mr-2" />
                        Visit Site
                      </Button>
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="section-title mb-4">
              Personal <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Side projects and experiments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden group glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="font-display">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="bg-background/80">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
