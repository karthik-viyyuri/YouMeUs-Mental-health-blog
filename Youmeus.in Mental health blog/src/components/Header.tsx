import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Search, User, Tag, BookOpen, Users, MessageCircle, Heart, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import AuthDialog from "./AuthDialog";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navigationItems = [
    { label: "About Us", href: "#about", icon: User, isScroll: true },
    { label: "Blog Posts", href: "/blog", icon: Tag, isScroll: false },
    { label: "Short Stories", href: "#stories", icon: BookOpen, isScroll: true },
    { label: "Discussion", href: "/discussion", icon: MessageCircle, isScroll: false },
    { label: "Connect", href: "#connect", icon: Heart, isScroll: true },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSmoothScroll = (href: string) => {
    const targetId = href.substring(1); // Remove the '#' from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Add motion blur effect to body
      document.body.style.filter = 'blur(2px)';
      document.body.style.transition = 'filter 0.3s ease-out';
      
      // Perform smooth scroll
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Remove blur after scroll animation
      setTimeout(() => {
        document.body.style.filter = 'none';
      }, 800);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      {/* Top Search Bar */}
      <div className="border-b bg-muted/30">
        <div className="container flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">You,Me,Us</span>
          </a>
          
          <div className="flex items-center space-x-4">
            <div className="relative w-full max-w-md">
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-4 pr-10 bg-background"
              />
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {/* User Authentication */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata?.avatar_url} alt={user.user_metadata?.full_name} />
                      <AvatarFallback>
                        {user.user_metadata?.full_name?.charAt(0)?.toUpperCase() || user.email?.charAt(0)?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setAuthDialogOpen(true)}
                className="flex items-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container">
        <div className="flex h-16 items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return item.isScroll ? (
                <button
                  key={item.label}
                  onClick={() => handleSmoothScroll(item.href)}
                  className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                >
                  <IconComponent className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span>{item.label}</span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                >
                  <IconComponent className="h-4 w-4 group-hover:text-primary transition-colors" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t bg-background md:hidden pb-4">
            <div className="px-4 py-2">
              <div className="relative mb-4">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-4 pr-10"
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <nav className="px-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return item.isScroll ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleSmoothScroll(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors w-full text-left"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
      
      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </header>
  );
};

export default Header;