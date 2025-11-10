export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
  trip: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer Adams',
    location: 'London, UK',
    image: '/placeholder.svg',
    quote: 'Every detail was perfection. From the private tea ceremony in Kyoto to the sunrise at Torres Base, this was travel elevated to art.',
    trip: 'Japan Heritage Journey'
  },
  {
    id: '2',
    name: 'Michael Torres',
    location: 'Austin, USA',
    image: '/placeholder.svg',
    quote: 'I\'ve traveled extensively, but their approach to sustainable tourism and genuine local connections is unmatched. Life-changing.',
    trip: 'Morocco Explorer'
  },
  {
    id: '3',
    name: 'Sophie Andersson',
    location: 'Stockholm, Sweden',
    image: '/placeholder.svg',
    quote: 'As a solo female traveler, I felt safe, empowered, and deeply inspired. The guides weren\'t just knowledgeable—they were storytellers.',
    trip: 'Patagonia Adventure'
  }
];
