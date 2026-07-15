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
    title: "Web Developer & Digital Coordinator",
    company: "Vijay Machinery",
    period: "May 2026 - Present",
    description: "Managing website development, digital presence, and coordinating online strategies for an industrial machinery company.",
  },
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
            {/* Developer Visual */}
            <div className="relative animate-slide-up">
              <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
                
                {/* Code Editor Mockup */}
                <div className="relative z-10 bg-secondary/80 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  {/* Editor Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border/50">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs text-muted-foreground font-mono">about.tsx</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed">
                    <div className="flex gap-4">
                      <div className="text-muted-foreground/50 select-none">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                      </div>
                      <div className="text-foreground/80">
                        <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                        <p className="pl-4"><span className="text-cyan-400">name</span>: <span className="text-green-400">"Saifur Rehman"</span>,</p>
                        <p className="pl-4"><span className="text-cyan-400">role</span>: <span className="text-green-400">"Web Developer"</span>,</p>
                        <p className="pl-4"><span className="text-cyan-400">experience</span>: <span className="text-orange-400">"5+ months"</span>,</p>
                        <p className="pl-4"><span className="text-cyan-400">skills</span>: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>],</p>
                        <p className="pl-4"><span className="text-cyan-400">passion</span>: <span className="text-green-400">"Building things"</span>,</p>
                        <p className="pl-4"><span className="text-cyan-400">location</span>: <span className="text-green-400">"Ahmedabad, India"</span>,</p>
                        <p>{'}'}</p>
                        <p className="mt-2"><span className="text-purple-400">export default</span> <span className="text-blue-400">developer</span>;</p>
                        <p className="mt-4 text-muted-foreground/60">// Turning ideas into code</p>
                        <p className="text-muted-foreground/60">// and code into experiences</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-float">
                  <p className="text-2xl font-display font-bold text-gradient">5+</p>
                  <p className="text-muted-foreground text-xs">Months Experience</p>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 animate-float-delayed">
                  <p className="text-2xl font-display font-bold text-gradient">10+</p>
                  <p className="text-muted-foreground text-xs">Projects Done</p>
                </div>
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
