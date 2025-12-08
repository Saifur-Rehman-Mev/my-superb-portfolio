import { ExternalLink, Briefcase, Users, Store, Dumbbell, ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
          
          {freelanceProjects.length === 1 && (
            <div className="text-center mt-12">
              <p className="text-muted-foreground text-lg">
                More projects coming soon! <span className="text-primary">Stay tuned.</span>
              </p>
            </div>
          )}
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