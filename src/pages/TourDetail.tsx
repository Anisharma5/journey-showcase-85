import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { tours } from '@/data/tours';
import { 
  Calendar, 
  TrendingUp, 
  Star, 
  MapPin, 
  Check, 
  ArrowLeft,
  Mail
} from 'lucide-react';

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">Tour Not Found</h1>
            <p className="text-muted-foreground">The tour you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/destinations">Browse Destinations</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const difficultyColor = {
    'Easy': 'bg-accent/20 text-accent border-accent/30',
    'Moderate': 'bg-gold/20 text-gold border-gold/30',
    'Challenging': 'bg-destructive/20 text-destructive border-destructive/30'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Image */}
      <section className="relative h-[60vh]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container px-4 pb-8">
          <Button asChild variant="ghost" className="mb-4 text-white hover:bg-white/10">
            <Link to="/destinations">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Link>
          </Button>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className={difficultyColor[tour.difficulty]}>
                {tour.difficulty}
              </Badge>
              <Badge variant="outline" className="bg-background/20 text-white border-white/30">
                <MapPin className="mr-1 h-3 w-3" />
                {tour.destination}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{tour.title}</h1>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-6 border-b border-border/40 bg-muted/30">
        <div className="container px-4">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="font-medium">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span className="font-medium">{tour.difficulty} Level</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold fill-gold" />
              <span className="font-medium">{tour.rating} / 5.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-1">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6 pt-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">About This Journey</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {tour.overview}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Highlights</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary" className="space-y-4 pt-6">
                  <h2 className="text-2xl font-bold text-primary mb-6">Day by Day</h2>
                  {tour.itinerary.map((day) => (
                    <Card key={day.day} className="p-6 border-border/50">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-accent font-bold">{day.day}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-primary mb-2">{day.title}</h3>
                          <p className="text-sm text-muted-foreground">{day.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="inclusions" className="space-y-6 pt-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">What's Included</h2>
                    <div className="space-y-3">
                      {tour.inclusions.map((inclusion, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-border/50 sticky top-24 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Interested in This Journey?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Get in touch with us to customize this itinerary to your preferences, or inquire about group departures and private tours.
                  </p>
                </div>
                
                <Button asChild className="w-full bg-accent hover:bg-accent/90" size="lg">
                  <Link to="/contact#form">
                    <Mail className="mr-2 h-5 w-5" />
                    Request Custom Itinerary
                  </Link>
                </Button>
                
                <div className="pt-6 border-t border-border/40 space-y-3">
                  <p className="text-xs text-muted-foreground">
                    <strong>Planning ahead?</strong> We recommend booking 4-6 months in advance for optimal availability.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Have questions?</strong> Our travel specialists are here to help craft your perfect journey.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetail;
