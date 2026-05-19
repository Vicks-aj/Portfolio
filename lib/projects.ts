export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  type: 'app' | 'landing-page'
  status: 'completed' | 'in-progress'
  image: string
  role: string
  tools: string[]
  keyFeatures: string[]
  categories: string[]
  figmaUrl?: string
  behanceUrl?: string
  challenge: string
  solution: string
}

export const projects: Project[] = [
  {
    id: 'pilltime',
    title: 'PillTime',
    description: 'Medication reminder app for chronic illness patients',
    longDescription: 'PillTime helps patients with chronic illnesses take their medications at the right time with the right dose. The app provides timely reminders, tracks medication history, and improves patient compliance.',
    type: 'app',
    status: 'in-progress',
    image: '/pilltime-hero.png',
    role: 'UI/UX Designer',
    challenge: 'Patients with chronic illnesses struggle to remember medication schedules, leading to poor health outcomes and reduced compliance.',
    solution: 'Created an intuitive app with timely reminders, clear dosage information, and a calendar interface that makes medication management effortless.',
    tools: ['Figma', 'Prototyping', 'User Research'],
    keyFeatures: [
      'Smart medication reminders with customizable intervals',
      'Integrated calendar view for medication schedules',
      'Dosage tracking and history',
      'Google Calendar sync capability'
    ],
    categories: ['Healthcare', 'Mobile App', 'UX Design'],
    figmaUrl: 'https://www.figma.com/design/LCgJdkYRTG3np4xgAR1GsV/PillTime?node-id=0-1&t=JdEt5G5X9VP72bJo-1',
    behanceUrl: 'https://www.behance.net/awojobivictor',
  },
  {
    id: 'campus-app',
    title: 'Campus Loop',
    description: 'Student schedule and campus event management app',
    longDescription: 'A comprehensive campus application for students to manage class schedules, discover campus events, buy/sell items, and connect with classmates. Features calendar integration and push notifications.',
    type: 'app',
    status: 'in-progress',
    image: '/campus-loop.png',
    role: 'UI/UX Designer',
    challenge: 'Students lack a unified platform to discover and manage campus events, class schedules, and academic opportunities effectively.',
    solution: 'Designed a comprehensive app that combines calendar management with event discovery and social features for student engagement.',
    tools: ['Figma', 'User Testing', 'Information Architecture'],
    keyFeatures: [
      'Smart schedule management with multiple class types',
      'Campus event discovery and filtering',
      'Social integration for student connections',
      'Location-based event recommendations'
    ],
    categories: ['Education', 'Mobile App', 'Marketplace'],
    figmaUrl: 'https://www.figma.com/design/2l63ynIeCxo0K5aVO4L3aw/Campus-App?node-id=1440-1844&t=TcZ8WrMIs93g9igp-1',
    behanceUrl: 'https://www.behance.net/awojobivictor',
  },
  {
    id: 'quick-bite',
    title: 'Quick Bite',
    description: 'Food delivery app with location-based restaurant discovery',
    longDescription: 'Quick Bite connects users with nearby restaurants and food delivery services. The app features smart location-based search, real-time order tracking, and personalized recommendations.',
    type: 'app',
    status: 'in-progress',
    image: '/quickbite-hero.png',
    role: 'UI/UX Designer',
    challenge: 'Users struggle to find nearby food options quickly with clear pricing and verified reviews from the community.',
    solution: 'Created an intuitive food discovery platform with location-based restaurant recommendations and transparent pricing information.',
    tools: ['Figma', 'Design System', 'Prototyping'],
    keyFeatures: [
      'Real-time location-based restaurant discovery',
      'Smart category filtering and search',
      'Clear pricing and delivery information',
      'Order tracking and history'
    ],
    categories: ['Food & Beverage', 'Marketplace', 'Mobile App'],
    figmaUrl: 'https://www.figma.com/design/igafgaNCHu3QGzCGZsnRX1/Food-App?node-id=67-170&t=lUOGKhSrG5QKXoKx-1',
    behanceUrl: 'https://www.behance.net/awojobivictor',
  },
  {
    id: 'piggyvest-redesign',
    title: 'PiggyVest Redesign',
    description: 'Modern landing page redesign for fintech savings platform',
    longDescription: 'A comprehensive redesign of the PiggyVest landing page emphasizing savings products, investment opportunities, and user testimonials. The design showcases multiple savings vehicles and builds trust through social proof.',
    type: 'landing-page',
    status: 'completed',
    image: '/piggyvest.png',
    role: 'UI/UX Designer',
    challenge: 'A conceptual redesign project focused on exploring new visual directions and modern aesthetics for an already successful fintech platform.',
    solution: 'Developed a fresh visual identity with updated typography, a modern color palette, and refined interface components.',
    tools: ['Figma', 'Web Design', 'Responsive Design'],
    keyFeatures: [
      'Bold hero section with clear value proposition',
      'Product showcase with social proof and testimonials',
      'Responsive design for all devices',
      'Improved conversion-focused CTAs'
    ],
    categories: ['Fintech', 'Web Design', 'Landing Page'],
    behanceUrl: 'https://www.behance.net/gallery/230396715/PIggyVest-Landing-Page-Redesign',
  },
  {
    id: 'inertia-agency',
    title: 'Inertia Agency',
    description: 'Creative agency portfolio with bold editorial design',
    longDescription: 'A bold and creative portfolio website for a design agency, featuring stunning typography, motion design, and editorial-style storytelling. Showcases past work and agency philosophy through immersive design.',
    type: 'landing-page',
    status: 'completed',
    image: '/inertia-agency.png',
    role: 'UI/UX Designer',
    challenge: 'Needed a website that showcases creative work and expertise while maintaining professionalism and encouraging client inquiries.',
    solution: 'Created a bold, editorial-style design with focus on visual storytelling, case studies, and establishing thought leadership.',
    tools: ['Figma', 'Web Design', 'Typography', 'Motion'],
    keyFeatures: [
      'Portfolio case studies with detailed process and results',
      'Service showcase with clear descriptions and pricing',
      'Client testimonials and success metrics',
      'Contact and inquiry management system'
    ],
    categories: ['Creative', 'Web Design', 'Portfolio'],
    figmaUrl: 'https://www.figma.com/design/qidQEUopUdtWiuJxqPOkQJ/Landing-Page?node-id=67-197&t=4zt7iydgd2RjHNcT-1',
    behanceUrl: 'https://www.behance.net/awojobivictor',
  }
]
