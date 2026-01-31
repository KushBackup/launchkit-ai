type Testimonial = {
  name: string;
  role: string;
  business: string;
  quote: string;
  metrics: Record<string, string>;
  verified: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Indie Hacker',
    business: 'TaskFlow AI',
    quote: 'LaunchKit took my idea from napkin sketch to $5k MRR in 3 weeks. The AI did market research, built the MVP, and even found my first 10 customers. This is insane.',
    metrics: {
      'Revenue': '$5,000 MRR',
      'Customers': '47',
      'Time': '21 days',
    },
    verified: true,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Serial Entrepreneur',
    business: 'Portfolio of 3 SaaS',
    quote: 'I have built 3 businesses with LaunchKit in the past 2 months. Each one is generating revenue. The lead generation alone is worth 10x the subscription cost.',
    metrics: {
      'Businesses': '3',
      'Revenue': '$12,000 MRR',
      'Leads': '600',
    },
    verified: true,
  },
  {
    name: 'Jessica Park',
    role: 'Non-Technical Founder',
    business: 'HealthTrack Pro',
    quote: 'I know healthcare, not code. LaunchKit handled everything technical. Now I have a live app, 80 leads, and 3 pilot customers. Game changer.',
    metrics: {
      'Customers': '3',
      'Leads': '80',
      'Time': '14 days',
    },
    verified: true,
  },
  {
    name: 'Tom Harrison',
    role: 'Agency Owner',
    business: 'White-labeling LaunchKit',
    quote: 'We resell LaunchKit to our clients as a premium service. They love it, we make margin, everyone wins. The white-label option is perfect.',
    metrics: {
      'Clients': '12',
      'Revenue': '$25,000 MRR',
      'Success': '100%',
    },
    verified: true,
  },
];

export const SOCIAL_PROOF = {
  totalBusinessesLaunched: 50,
  totalRevenueGenerated: 500000,
  averageTimeToLaunch: 14,
  customerSatisfaction: 4.8,
  activeCustomers: 120,
  leadGenerated: 15000,
};