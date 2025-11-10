export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  funFact: string;
}

export const team: TeamMember[] = [
  {
    id: 'sarah',
    name: 'Sarah Chen',
    role: 'Founder & Lead Explorer',
    image: '/placeholder.svg',
    bio: 'With 15 years curating bespoke journeys, Sarah believes travel should transform, not just transport. Former National Geographic contributor.',
    funFact: 'Has summited Kilimanjaro three times to raise funds for local schools.'
  },
  {
    id: 'marcus',
    name: 'Marcus Okonkwo',
    role: 'Cultural Experience Director',
    image: '/placeholder.svg',
    bio: 'UNESCO heritage specialist passionate about authentic cultural exchange. Speaks 7 languages and has lived on 4 continents.',
    funFact: 'Once spent a month living with a nomadic tribe in Mongolia.'
  },
  {
    id: 'elena',
    name: 'Elena Rossi',
    role: 'Sustainability Coordinator',
    image: '/placeholder.svg',
    bio: 'Environmental scientist turned travel designer. Ensures every journey leaves destinations better than we found them.',
    funFact: 'Designed our carbon-neutral trek certification program used by 40+ operators.'
  },
  {
    id: 'david',
    name: 'David Park',
    role: 'Adventure Operations',
    image: '/placeholder.svg',
    bio: 'Former expedition guide with certifications in mountaineering, diving, and wilderness medicine. Safety meets adventure.',
    funFact: 'Crossed the Arctic Circle by kayak and still insists summer is overrated.'
  }
];
