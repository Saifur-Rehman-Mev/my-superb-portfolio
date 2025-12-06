import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FloatingShapes from "@/components/ui/FloatingShapes";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large React applications with proper state management and code organization.",
    category: "React",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    title: "The Power of TypeScript in Modern Development",
    excerpt: "Discover how TypeScript can improve your development workflow and catch bugs before they reach production.",
    category: "TypeScript",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
    category: "CSS",
    date: "Nov 18, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "API Design Best Practices",
    excerpt: "Essential principles for designing RESTful APIs that are intuitive, scalable, and developer-friendly.",
    category: "Backend",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Getting Started with Next.js 14",
    excerpt: "Explore the new features in Next.js 14 and learn how to build modern web applications with the App Router.",
    category: "Next.js",
    date: "Nov 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&h=500&fit=crop",
  },
  {
    id: 6,
    title: "Mastering Tailwind CSS",
    excerpt: "Tips and tricks for writing efficient and maintainable styles with Tailwind CSS utility classes.",
    category: "CSS",
    date: "Oct 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=500&fit=crop",
  },
];

const Blog = () => {
  return (
    <Layout>
      <FloatingShapes />
      
      {/* Header */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase animate-slide-up">
              Blog
            </p>
            <h1 className="section-title mb-6 animate-slide-up">
              Thoughts & <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up-delayed">
              Sharing my knowledge about web development, design, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl overflow-hidden group">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
                  Featured Post
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Link 
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center text-primary font-semibold group/link"
                >
                  Read Article
                  <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="glass-card rounded-2xl overflow-hidden group glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary text-sm font-semibold group/link"
                  >
                    Read More
                    <ArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
