import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Saifur-Rehman-Mev", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/saifur-rehman-mev-9384b6298/", label: "LinkedIn" },
    { icon: BookOpen, href: "https://hashnode.com/@SaifurRehmanMev", label: "Blog" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-gradient">SR</span>
            <span className="text-muted-foreground">/&gt;</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;