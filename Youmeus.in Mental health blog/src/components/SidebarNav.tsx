import { useState, useEffect } from "react";
import { Home, User, FileText, BookOpen, MessageCircle, Search, Users, Mail } from "lucide-react";

const SidebarNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: FileText, label: "Blog", href: "#blog" },
    { icon: BookOpen, label: "Stories", href: "#stories" },
    { icon: MessageCircle, label: "Discussion", href: "#discussion" },
    { icon: Search, label: "Search", href: "#search" },
    { icon: Users, label: "Connect", href: "#connect" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isScrolled) return null;

  return (
    <div className="hidden lg:block">
      <div className="sticky top-24 bg-card rounded-xl border p-4 shadow-sm">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-center p-3 text-muted-foreground hover:text-primary hover:bg-primary-soft/20 rounded-lg transition-all group"
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarNav;