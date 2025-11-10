import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DestinationCard } from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

type Region = 'All' | 'Europe' | 'Asia' | 'Africa' | 'Americas';

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');

  const regions: Region[] = ['All', 'Europe', 'Asia', 'Africa', 'Americas'];

  const filteredDestinations = selectedRegion === 'All'
    ? destinations
    : destinations.filter(dest => dest.region === selectedRegion);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-muted-foreground">
              From ancient temples to untamed wilderness, explore destinations that will forever change the way you see the world.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-border/40 sticky top-20 z-40 bg-background/95 backdrop-blur">
        <div className="container px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? 'default' : 'outline'}
                onClick={() => setSelectedRegion(region)}
                className={selectedRegion === region ? 'bg-accent hover:bg-accent/90' : ''}
              >
                {region}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 flex-1">
        <div className="container px-4">
          {filteredDestinations.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                Showing {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'}
                {selectedRegion !== 'All' && ` in ${selectedRegion}`}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No destinations found in this region. Try selecting a different region.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
