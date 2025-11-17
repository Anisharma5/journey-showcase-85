import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/destinations", label: "Destinations" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Compass className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold tracking-tight text-primary">
            Uphill diaries
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(link.to) ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            variant="default"
            className="bg-accent hover:bg-accent/90"
          >
            <Link to="/contact#form">Plan Your Journey</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 text-base font-medium transition-colors hover:text-accent ${
                  isActive(link.to) ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="default"
              className="w-full bg-accent hover:bg-accent/90"
            >
              <Link to="/contact#form" onClick={() => setMobileMenuOpen(false)}>
                Plan Your Journey
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
