import { Download, Briefcase } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB / PostgreSQL", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

const experience = [
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "July 2025 - Present",
    description: "Building modern web applications and websites for clients worldwide. Specializing in React, Next.js, and full-stack development.",
  },
];

const About = () => {
  return (
    <Layout>
      <FloatingShapes />
      
      {/* Header */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                  alt="Saifur Rehman"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 animate-float">
                <p className="text-4xl font-display font-bold text-gradient">5+</p>
                <p className="text-muted-foreground">Months Experience</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-primary font-medium mb-4 tracking-wider uppercase animate-slide-up">
                About Me
              </p>
              <h1 className="section-title mb-6 animate-slide-up">
                Hi, I'm <span className="text-gradient">Saifur Rehman</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 animate-slide-up-delayed">
                I'm a passionate web developer creating 
                beautiful, functional, and user-friendly websites and applications.
              </p>
              <p className="text-lg text-muted-foreground mb-8 animate-slide-up-delayed" style={{ animationDelay: "0.3s" }}>
                My journey in tech started with curiosity and has evolved into a passion 
                for crafting digital experiences that make a difference. I believe in 
                clean code, thoughtful design, and continuous learning.
              </p>
              <Button className="font-display font-semibold animate-slide-up-delayed" style={{ animationDelay: "0.4s" }}>
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="glass-card rounded-xl p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-3">
                  <span className="font-display font-semibold">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase size={12} className="text-primary-foreground" />
                </div>
                
                <div className="glass-card rounded-xl p-6 ml-4">
                  <span className="text-primary text-sm font-medium">{exp.period}</span>
                  <h3 className="font-display text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
