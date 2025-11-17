import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DestinationCard } from "@/components/DestinationCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { destinations } from "@/data/destinations";
import { Compass, Heart, Users, Leaf, ArrowRight, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-main.jpg";

const Home = () => {
  const featuredDestinations = destinations.slice(0, 3);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "We'll be in touch with exclusive travel inspiration.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Traveler overlooking mountain vista at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>

        <div className="relative z-10 container px-4 text-center text-white space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4">
            Curated Journeys.
            <br />
            Unforgettable Moments.
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto text-balance">
            Experience the world through expertly crafted adventures that
            transform the way you travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
            >
              <Link to="/destinations">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/30 hover:backdrop-blur-sm transition-all duration-300 ease-out focus:ring-2 focus:ring-white/50 focus:outline-none"
            >
              <Link to="/about" aria-label="Learn more about our story">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Why Travel With Us
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe travel should be more than seeing places—it should be
              about feeling them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Tailor-Made Itineraries
              </h3>
              <p className="text-muted-foreground">
                Every journey is uniquely crafted to match your passions, pace,
                and purpose.
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">Local Experts</h3>
              <p className="text-muted-foreground">
                Connect with passionate guides who share insider stories you
                won't find in guidebooks.
              </p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Sustainable Travel
              </h3>
              <p className="text-muted-foreground">
                We partner with communities and practice responsible tourism
                that preserves cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Featured Destinations
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked journeys to inspire your next adventure
              </p>
            </div>
            <Button
              asChild
              variant="ghost"
              className="hidden sm:flex hover:bg-accent/10 hover:text-accent"
            >
              <Link to="/destinations">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Button
              asChild
              variant="ghost"
              className="hover:bg-accent/10 hover:text-accent"
            >
              <Link to="/destinations">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Traveler Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from explorers who've experienced the world with us
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <Mail className="h-12 w-12 text-accent mx-auto" />
            <h2 className="text-3xl font-bold text-primary">Stay Inspired</h2>
            <p className="text-lg text-muted-foreground">
              Get exclusive travel tips, destination guides, and early access to
              new journeys.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
