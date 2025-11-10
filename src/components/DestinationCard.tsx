import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute top-4 left-4 text-4xl">{destination.flag}</div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
          <p className="text-sm text-white/90">{destination.country}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {destination.highlight}
        </p>
        <Button
          asChild
          variant="ghost"
          className="w-full justify-between group/btn hover:bg-accent/10 hover:text-accent"
        >
          <Link to={`/tours/${destination.tours[0]}`}>
            Explore Tours
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
};
