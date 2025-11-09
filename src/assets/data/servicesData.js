import artCurationImg from '../services/artCuration.jpg'
import filmProductionImg from '../services/filmProduction.png'
import brandingImg from '../services/branding.png'

import artCuration1 from '../services/Art Curation Icons 01.svg'
import artCuration2 from '../services/Art Curation Icons 02.svg'
import artCuration3 from '../services/Art Curation Icons 03.svg'
import artCuration4 from '../services/Art Curation Icons 04.svg'

import branding1 from '../services/Branding Vector 01.svg'
import branding2 from '../services/Branding Vector 02.svg'
import branding3 from '../services/Branding Vector 03.svg'
import branding4 from '../services/Branding Vector 04.svg'

import camera1 from '../services/Camera 01.svg'
import camera2 from '../services/Camera 02.svg'
import camera3 from '../services/Camera 03.svg'
import camera4 from '../services/Camera 04.svg'

export const servicesData = [
  {
    id: 'art-curation',
    title: 'Art Curation',
    quote: '"V take art where it belongs, to the people." - Vernita Verma',
    image: artCurationImg,
    description: "Art isn't meant to sit on distant walls - it's meant to breathe, to travel, to belong. Through every festival, every performance, and every gathering, we help stories find their stage and their people.",
    tagline: 'V curates:',
    services: [
      'Art Festivals',
      'Live Performances',
      'Community Events',
      'Cultural Storytelling'
    ],
    decorativeIcons: {
      topLeft: artCuration2,
      topRight: artCuration3,
      middleRight: artCuration1,
      bottomRight: artCuration4
    }
  },
  {
    id: 'film-production',
    title: 'Film Production',
    quote: '"Filmmaking is a chance to live many lifetimes." - Robert Altman',
    image: filmProductionImg,
    description: "Who says films are just an escape? We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.",
    tagline: 'V crafts:',
    services: [
      'Documentaries',
      'Corporate Videos',
      '2D Animation Videos',
      '3D Animation Videos'
    ],
    decorativeIcons: {
      topLeft: camera4,
      topRight: camera1,
      middleRight: camera3,
      bottomRight: camera2
    }
  },
  {
    id: 'branding',
    title: 'Branding',
    quote: '"A brand is a voice, and a product is a souvenir." - Lisa Gansky',
    image: brandingImg,
    description: "A brand isn't just what you see - it's what you remember, what you carry home, and what you trust. We shape brands that people remember, return to, and fall in love with.",
    tagline: 'V creates:',
    services: [
      'Branding & Communication',
      'Market Mapping',
      'Content Management',
      'Social Media Management',
      'Rebranding'
    ],
    decorativeIcons: {
      topLeft: branding2,
      topRight: branding4,
      middleRight: branding3,
      bottomRight: branding1
    }
  }
]
