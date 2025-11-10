import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TeamMember } from '@/components/TeamMember';
import { team } from '@/data/team';
import { Heart, Compass, Leaf, Users, Award, Globe2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Compass className="h-16 w-16 text-accent mx-auto" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Travel That Transforms
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe the best journeys don't just take you somewhere—they change you. For over 15 years, we've been crafting transformative experiences that connect travelers to the soul of a destination.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wanderlust was born from a simple frustration: travel had become too transactional. Check the box, snap the photo, move on. We knew there was a better way—one that honored local cultures, protected fragile ecosystems, and created genuine human connections.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a handful of trips to Southeast Asia has grown into a global community of explorers who travel with purpose. Today, we operate on six continents, but our mission remains unchanged: to create journeys that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every itinerary is designed by people who've walked the path, every guide is someone we'd travel with ourselves, and every partnership is built on mutual respect and shared values.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Our team in the field"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-muted/30" id="sustainability">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">
              Our values aren't just words—they're the compass that guides every decision we make.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-lg border border-border/50 space-y-4">
              <Leaf className="h-12 w-12 text-accent" />
              <h3 className="text-2xl font-bold text-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                We partner with local communities, minimize our footprint, and invest in conservation projects. Travel should enhance, not exploit.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg border border-border/50 space-y-4">
              <Heart className="h-12 w-12 text-accent" />
              <h3 className="text-2xl font-bold text-primary">Authenticity</h3>
              <p className="text-muted-foreground">
                Skip the tourist traps. We connect you with real people, real stories, and real experiences you'll carry forever.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg border border-border/50 space-y-4">
              <Award className="h-12 w-12 text-accent" />
              <h3 className="text-2xl font-bold text-primary">Excellence</h3>
              <p className="text-muted-foreground">
                From the moment you inquire to the day you return home, we obsess over every detail to ensure your journey exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-background" id="team">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-primary mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              We're explorers, storytellers, and dream enablers—united by the belief that travel changes lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <Globe2 className="h-10 w-10 text-accent mx-auto" />
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Countries Explored</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="h-10 w-10 text-accent mx-auto" />
              <p className="text-4xl font-bold text-primary">3,200+</p>
              <p className="text-sm text-muted-foreground">Happy Travelers</p>
            </div>
            <div className="text-center space-y-2">
              <Heart className="h-10 w-10 text-accent mx-auto" />
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Return Rate</p>
            </div>
            <div className="text-center space-y-2">
              <Leaf className="h-10 w-10 text-accent mx-auto" />
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Carbon Offset</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
