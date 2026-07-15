import { ExternalLink, Briefcase, Users, Store, Dumbbell, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { Button } from "@/components/ui/button";

const freelanceProjects = [
  {
    id: 1,
    title: "Vikrant Machinery Pvt Ltd",
    description: "A professional corporate website for an industrial machinery company. Features company profile, product showcase, and inquiry functionality.",
    tags: ["React", "Next.js", "Tailwind", "CMS"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    liveUrl: "https://vikrantmachinery.com/",
  },
  {
    id: 2,
    title: "Vijay Machinery",
    description: "Industrial machinery company website currently under development. Will feature product catalog, client portal, and business inquiry system.",
    tags: ["React", "Next.js", "Tailwind", "Under Development"],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop",
    inProgress: true,
  },
  {
    id: 3,
    title: "Central Auto Zone",
    description: "A professional auto parts e-commerce website with product catalog, search functionality, and modern UI.",
    tags: ["TypeScript", "React", "Supabase", "Auth.js"],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    liveUrl: "https://centralautozone.com/",
  },
];

const services = [
  {
    icon: Store,
    title: "Restaurant Websites",
    description: "Modern, appetizing websites with online menus, reservations, and ordering systems.",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    description: "Dynamic websites with class schedules, membership management, and trainer profiles.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "Full-featured online stores with product catalogs, payments, and inventory management.",
  },
  {
    icon: Users,
    title: "Small Business",
    description: "Professional websites that help local businesses establish their online presence.",
  },
];

const Freelance = () => {
  return (
    <Layout>
      <FloatingShapes />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-slide-up">
              <Briefcase size={18} className="text-primary" />
              <span className="text-primary font-medium">Available for Hire</span>
            </div>
            
            <h1 className="section-title mb-6 animate-slide-up">
              Hire Me for <span className="text-gradient">Freelance</span> Projects
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-slide-up-delayed leading-relaxed">
              I help small businesses like <span className="text-primary font-semibold">restaurants</span>, 
              <span className="text-primary font-semibold"> gyms</span>, and 
              <span className="text-primary font-semibold"> e-commerce stores</span> build 
              modern, high-converting websites that drive real results.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up-delayed">
              <div className="glass-card px-6 py-4 rounded-2xl">
                <p className="text-3xl font-display font-bold text-gradient">5+</p>
                <p className="text-muted-foreground text-sm">Months Experience</p>
              </div>
              <div className="glass-card px-6 py-4 rounded-2xl">
                <p className="text-3xl font-display font-bold text-gradient">100%</p>
                <p className="text-muted-foreground text-sm">Client Satisfaction</p>
              </div>
              <div className="glass-card px-6 py-4 rounded-2xl">
                <p className="text-3xl font-display font-bold text-gradient">Fast</p>
                <p className="text-muted-foreground text-sm">Delivery Time</p>
              </div>
            </div>
            
            <Link to="/contact">
              <Button size="lg" className="font-display text-lg px-8 py-6 glow-effect">
                Let's Work Together
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase">What I Offer</p>
            <h2 className="section-title mb-6">
              Services for <span className="text-gradient">Small Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored web solutions to help your business grow and stand out online.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-8 rounded-2xl text-center group hover:border-primary/50 transition-all duration-300 glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase">My Work</p>
            <h2 className="section-title mb-6">
              Freelance <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects delivered for real clients with real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
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
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="font-display">
                          <ExternalLink size={16} className="mr-2" />
                          Visit Site
                        </Button>
                      </a>
                    )}
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
                  <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View More Projects
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="section-title mb-6">
                Ready to Start Your <span className="text-gradient">Project</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life. Get in touch today!
              </p>
              <Link to="/contact">
                <Button size="lg" className="font-display text-lg px-8 py-6">
                  Get a Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Freelance;
