import { Heart, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "About": [
      { label: "Our Story", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Mission", href: "#mission" },
      { label: "Contact", href: "#contact" }
    ],
    "Resources": [
      { label: "Crisis Support", href: "#crisis" },
      { label: "Mental Health Resources", href: "#resources" },
      { label: "Support Groups", href: "#support" },
      { label: "Professional Help", href: "#help" }
    ],
    "Community": [
      { label: "Discussion Forum", href: "#discussion" },
      { label: "Share Your Story", href: "#share" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Events", href: "#events" }
    ],
    "Legal": [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Editorial Policy", href: "#editorial" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@mindfulstories.com", label: "Email" }
  ];

  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">You,Me,Us</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Empowering mental health through shared stories, community support, 
              and professional resources.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Crisis Support Banner */}
        <div className="bg-card border rounded-lg p-4 mb-8">
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-2">Need Immediate Support?</h4>
            <p className="text-muted-foreground text-sm mb-3">
              If you're experiencing a mental health crisis, please reach out for professional help immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-primary font-medium">Crisis Text Line: Text HOME to 741741</span>
              <span className="text-primary font-medium">National Suicide Prevention Lifeline: 988</span>
              <span className="text-primary font-medium">International: befrienders.org</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 You,Me,Us. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#editorial" className="hover:text-primary transition-colors">
                Editorial Policy
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-xs text-muted-foreground">
            <p>
              Disclaimer: This website provides general information and discussions about mental health. 
              It is not intended as medical advice and should not be a substitute for professional mental health care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;