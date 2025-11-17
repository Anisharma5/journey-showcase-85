import { Link } from "react-router-dom";
import {
  Compass,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-primary">
                Uphill diaries
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating transformative journeys that connect you to the world's
              most extraordinary places and cultures.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_.sakshii_sharma._?igsh=MWN6aWlmM3gyMGtscw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064672274731"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/destinations"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  All Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/about#team"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  to="/about#sustainability"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#travel-tips"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Travel Tips
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  The Uphill Diaries
                  <br />
                  The Mall Shimla, Himachal Pradesh 171001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+14155551234"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 7876887463
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:sakshi1512002@gmail.com"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  sakshi1512002@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Uphill diaries Travel. All rights
            reserved. | Crafted with passion for explorers.
          </p>
        </div>
      </div>
    </footer>
  );
};
