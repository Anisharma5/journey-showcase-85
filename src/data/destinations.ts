import santoriniImage from '@/assets/santorini.jpg';
import kyotoImage from '@/assets/kyoto.jpg';
import patagoniaImage from '@/assets/patagonia.jpg';

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Africa' | 'Americas';
  flag: string;
  image: string;
  description: string;
  highlight: string;
  tours: string[];
}

export const destinations: Destination[] = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    flag: '🇬🇷',
    image: santoriniImage,
    description: 'Whitewashed villages perched on dramatic volcanic cliffs overlooking the endless Aegean blue.',
    highlight: 'Iconic sunsets and Mediterranean serenity',
    tours: ['greek-islands-escape']
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    flag: '🇯🇵',
    image: kyotoImage,
    description: 'Ancient temples, serene bamboo groves, and timeless geisha traditions in Japan\'s cultural heart.',
    highlight: 'Zen gardens meet timeless tradition',
    tours: ['japan-heritage-journey']
  },
  {
    id: 'patagonia',
    name: 'Patagonia',
    country: 'Argentina & Chile',
    region: 'Americas',
    flag: '🇦🇷',
    image: patagoniaImage,
    description: 'Untamed wilderness where glaciers meet mountains in one of Earth\'s most pristine frontiers.',
    highlight: 'Epic landscapes for the adventurous soul',
    tours: ['patagonia-adventure']
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    flag: '🇲🇦',
    image: '/placeholder.svg',
    description: 'A vibrant medina where spice-scented souks and ornate riads tell stories of ancient caravans.',
    highlight: 'Exotic elegance in the heart of Morocco',
    tours: ['morocco-explorer']
  },
  {
    id: 'alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    flag: '🇨🇭',
    image: '/placeholder.svg',
    description: 'Majestic peaks, pristine lakes, and world-class alpine luxury in Europe\'s mountain paradise.',
    highlight: 'Alpine serenity meets luxury chalets',
    tours: ['alpine-retreat']
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    flag: '🇮🇩',
    image: '/placeholder.svg',
    description: 'Emerald rice terraces, sacred temples, and tropical beaches on the Island of the Gods.',
    highlight: 'Spiritual beauty and island paradise',
    tours: ['bali-wellness-escape']
  }
];
