import santoriniImage from '@/assets/santorini.jpg';
import kyotoImage from '@/assets/kyoto.jpg';
import patagoniaImage from '@/assets/patagonia.jpg';

export interface Tour {
  id: string;
  title: string;
  destination: string;
  region: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  rating: number;
  image: string;
  gallery: string[];
  overview: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  highlights: string[];
}

export const tours: Tour[] = [
  {
    id: 'greek-islands-escape',
    title: 'Greek Islands Odyssey',
    destination: 'Santorini & Mykonos',
    region: 'Europe',
    duration: '8 Days / 7 Nights',
    difficulty: 'Easy',
    rating: 4.9,
    image: santoriniImage,
    gallery: [santoriniImage, santoriniImage, santoriniImage],
    overview: 'Discover the magic of the Cyclades on this curated journey through Greece\'s most iconic islands. From Santorini\'s legendary sunsets to Mykonos\' vibrant charm, experience authentic tavernas, azure waters, and timeless beauty at your own pace.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Santorini',
        description: 'Private transfer to your luxury cave hotel in Oia. Welcome dinner overlooking the caldera at sunset.'
      },
      {
        day: 2,
        title: 'Explore Santorini',
        description: 'Visit ancient Akrotiri ruins, wine tasting at a family vineyard, and sunset sailing on a traditional catamaran.'
      },
      {
        day: 3,
        title: 'Leisure Day',
        description: 'Free day to explore hidden beaches, hike the coastal trail, or relax at your hotel spa.'
      },
      {
        day: 4,
        title: 'Ferry to Mykonos',
        description: 'Morning ferry to Mykonos. Afternoon exploring Mykonos Town\'s charming windmills and Little Venice.'
      },
      {
        day: 5,
        title: 'Delos & Beach Day',
        description: 'Guided tour of sacred Delos island followed by beach time at Ornos or Psarou.'
      },
      {
        day: 6,
        title: 'Local Experiences',
        description: 'Cooking class with a local chef, sunset horseback riding, and dinner under the stars.'
      },
      {
        day: 7,
        title: 'Free Exploration',
        description: 'Your day to discover hidden gems, shop local boutiques, or simply unwind.'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Private transfer to Mykonos Airport for your onward journey.'
      }
    ],
    inclusions: [
      '7 nights boutique accommodation',
      'Daily breakfast',
      '5 guided experiences',
      'Inter-island ferry tickets',
      'Airport & hotel transfers',
      '24/7 local concierge support'
    ],
    highlights: [
      'Sunset views from Oia castle',
      'Wine tasting at volcanic vineyards',
      'Private catamaran cruise',
      'UNESCO-listed Delos tour',
      'Traditional Greek cooking class'
    ]
  },
  {
    id: 'japan-heritage-journey',
    title: 'Japan Heritage Journey',
    destination: 'Kyoto, Nara & Osaka',
    region: 'Asia',
    duration: '10 Days / 9 Nights',
    difficulty: 'Moderate',
    rating: 5.0,
    image: kyotoImage,
    gallery: [kyotoImage, kyotoImage, kyotoImage],
    overview: 'Immerse yourself in Japan\'s spiritual heart through ancient temples, serene gardens, and living traditions. This journey balances cultural depth with modern comforts, featuring tea ceremonies, geisha encounters, and stays in traditional ryokans.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kyoto',
        description: 'Welcome to Kyoto. Private transfer to your traditional ryokan. Evening orientation walk through Gion district.'
      },
      {
        day: 2,
        title: 'Temples & Gardens',
        description: 'Visit Kinkaku-ji (Golden Pavilion), Ryoan-ji rock garden, and Arashiyama bamboo forest.'
      },
      {
        day: 3,
        title: 'Tea Ceremony & Zen',
        description: 'Private tea ceremony with a tea master. Afternoon meditation session at a Zen temple.'
      },
      {
        day: 4,
        title: 'Geisha Experience',
        description: 'Exclusive geisha encounter with performance, followed by kaiseki dinner in a traditional machiya.'
      },
      {
        day: 5,
        title: 'Day Trip to Nara',
        description: 'Explore Todai-ji temple, feed the sacred deer, and stroll through Nara Park.'
      },
      {
        day: 6,
        title: 'Fushimi Inari & Sake',
        description: 'Hike the famous torii gates trail. Sake brewery tour and tasting in Fushimi district.'
      },
      {
        day: 7,
        title: 'To Osaka',
        description: 'Morning free. Transfer to Osaka. Evening food tour in Dotonbori district.'
      },
      {
        day: 8,
        title: 'Osaka Castle & Markets',
        description: 'Visit Osaka Castle, explore Kuromon Market, and experience street food culture.'
      },
      {
        day: 9,
        title: 'Free Day',
        description: 'Optional day trips to Himeji Castle or Mount Koya, or explore Osaka at leisure.'
      },
      {
        day: 10,
        title: 'Sayonara',
        description: 'Final breakfast. Private transfer to Kansai International Airport.'
      }
    ],
    inclusions: [
      '9 nights accommodation (ryokans & hotels)',
      'Daily breakfast, 4 dinners',
      '7 guided cultural experiences',
      'All train transfers (JR Pass)',
      'English-speaking guides',
      'Entrance fees to all sites'
    ],
    highlights: [
      'Private tea ceremony with master',
      'Geisha entertainment evening',
      'Stay in authentic ryokan',
      'Fushimi Inari torii gates',
      'Arashiyama bamboo grove'
    ]
  },
  {
    id: 'patagonia-adventure',
    title: 'Patagonia Wilderness Explorer',
    destination: 'Torres del Paine & El Calafate',
    region: 'Americas',
    duration: '12 Days / 11 Nights',
    difficulty: 'Challenging',
    rating: 4.8,
    image: patagoniaImage,
    gallery: [patagoniaImage, patagoniaImage, patagoniaImage],
    overview: 'Journey to the end of the world for an unforgettable encounter with nature\'s raw power. Trek beneath the Paine Massif, witness thundering glaciers, and camp under southern stars in one of Earth\'s last wild frontiers.',
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Punta Arenas',
        description: 'Fly to Chilean Patagonia. Transfer to Puerto Natales, gateway to Torres del Paine.'
      },
      {
        day: 2,
        title: 'Enter Torres del Paine',
        description: 'Full day exploring the park: Grey Glacier, Lake Pehoé, and wildlife spotting.'
      },
      {
        day: 3,
        title: 'Base of the Towers Trek',
        description: 'Challenging 8-hour hike to the iconic Torres Base viewpoint. Return to refugio.'
      },
      {
        day: 4,
        title: 'French Valley',
        description: 'Trek through the French Valley with 360° views of hanging glaciers and granite peaks.'
      },
      {
        day: 5,
        title: 'Grey Glacier Kayaking',
        description: 'Paddle among icebergs on Grey Lake. Afternoon at leisure in eco-lodge.'
      },
      {
        day: 6,
        title: 'Wildlife Safari',
        description: 'Early morning puma tracking safari, followed by visit to Salto Grande waterfall.'
      },
      {
        day: 7,
        title: 'Cross to Argentina',
        description: 'Scenic drive to El Calafate. Afternoon at leisure exploring this charming lakeside town.'
      },
      {
        day: 8,
        title: 'Perito Moreno Glacier',
        description: 'Full day at the massive Perito Moreno Glacier. Ice trekking on the glacier surface.'
      },
      {
        day: 9,
        title: 'Estancia Experience',
        description: 'Visit a traditional Patagonian ranch. Horseback riding and asado barbecue.'
      },
      {
        day: 10,
        title: 'El Chaltén',
        description: 'Day trip to El Chaltén. Hike to Laguna de los Tres with views of Mount Fitz Roy.'
      },
      {
        day: 11,
        title: 'Leisure & Reflection',
        description: 'Free day to revisit favorite spots, shop for local crafts, or relax.'
      },
      {
        day: 12,
        title: 'Departure',
        description: 'Transfer to El Calafate Airport for your journey home.'
      }
    ],
    inclusions: [
      '11 nights lodging (refugios & hotels)',
      'All meals during treks',
      'Expert trekking guides',
      'Park entrance fees',
      'Ground transportation',
      'Ice trekking equipment'
    ],
    highlights: [
      'Torres Base sunrise hike',
      'Grey Glacier kayaking',
      'Puma tracking safari',
      'Walk on Perito Moreno Glacier',
      'Fitz Roy mountain views'
    ]
  }
];
