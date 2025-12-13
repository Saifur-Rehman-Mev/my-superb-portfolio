import { Star, Quote, MessageSquarePlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FloatingShapes from "@/components/ui/FloatingShapes";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Abdul Ghaffar",
    role: "Owner, Central Auto Zone Auto Service & Sales",
    location: "Calgary, Canada",
    rating: 5,
    content:
      "Saifur did an outstanding job developing our website for Central Auto Zone Auto Service & Sales here in Calgary. From the beginning, he clearly understood our business needs and delivered a clean, modern, and fully functional website. Communication was smooth, timelines were respected, and every requested change was handled quickly and professionally. We're extremely happy with the final result and highly recommend Saifur to anyone looking for reliable and high-quality web development services.",
  },
];

const Testimonial = () => {
  return (
    <Layout>
      <FloatingShapes />

      {/* Header */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase animate-slide-up">
              Client Reviews
            </p>
            <h1 className="section-title mb-6 animate-slide-up">
              What My <span className="text-gradient">Clients Say</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up-delayed">
              Real feedback from real clients. I take pride in delivering
              exceptional results and building lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={80} className="text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-8 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-primary text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Review CTA */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MessageSquarePlus size={40} className="text-primary" />
              </div>
              <h2 className="section-title mb-6">
                Share Your <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have we worked together? I'd love to hear about your experience.
                Your feedback helps me improve and helps others make informed
                decisions.
              </p>
              <Link to="/contact">
                <Button size="lg" className="font-display text-lg px-8 py-6">
                  <MessageSquarePlus className="mr-2" size={20} />
                  Add Your Review
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

export default Testimonial;
