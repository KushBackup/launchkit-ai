// Enhanced pricing tiers with annual options
export const STRIPE_PRICES = {
  // Monthly prices
  starter: "price_starter_monthly",
  growth: "price_growth_monthly",
  scale: "price_scale_monthly",
  
  // Annual prices (20% discount)
  starterAnnual: "price_starter_annual",
  growthAnnual: "price_growth_annual",
  scaleAnnual: "price_scale_annual",
};

export const PRICING_PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for first-time entrepreneurs",
    monthlyPrice: 99,
    annualPrice: 950,
    monthlySavings: 0,
    annualSavings: 238,
    priceId: {
      monthly: STRIPE_PRICES.starter,
      annual: STRIPE_PRICES.starterAnnual,
    },
    features: [
      "1 business project per month",
      "Complete market research report",
      "Landing page (deployed live)",
      "Basic MVP development",
      "50 qualified leads generated",
      "Product Hunt launch support",
      "Email support (24-48hr response)",
    ],
    limits: [
      "Single active project",
      "Basic design templates",
      "Standard lead quality",
    ],
    valueDelivered: "$15,000",
    popularFor: "Side hustlers, validators, first-time founders",
  },
  {
    name: "Growth",
    tagline: "For serious founders ready to scale",
    monthlyPrice: 299,
    annualPrice: 2870,
    monthlySavings: 0,
    annualSavings: 718,
    priceId: {
      monthly: STRIPE_PRICES.growth,
      annual: STRIPE_PRICES.growthAnnual,
    },
    popular: true,
    features: [
      "2 active business projects",
      "Deep market + competitor analysis",
      "Full landing page + brand identity",
      "Advanced MVP (web app/service)",
      "200 qualified leads per month",
      "Personalized cold email campaign (50)",
      "Social media launch strategy",
      "Investor pitch deck creation",
      "10 targeted investor introductions",
      "Sales playbook + demo script",
      "Priority support (Slack + Email)",
    ],
    limits: [
      "2 concurrent projects",
      "Customizable templates",
    ],
    valueDelivered: "$60,000",
    popularFor: "Serial entrepreneurs, funded founders, growth seekers",
  },
  {
    name: "Scale",
    tagline: "Maximum firepower for portfolio builders",
    monthlyPrice: 599,
    annualPrice: 5750,
    monthlySavings: 0,
    annualSavings: 1438,
    priceId: {
      monthly: STRIPE_PRICES.scale,
      annual: STRIPE_PRICES.scaleAnnual,
    },
    features: [
      "3+ active business projects",
      "Custom design (no templates)",
      "Advanced MVP with premium features",
      "500+ qualified leads per month",
      "Automated outreach sequences (100+)",
      "Partnership & affiliate deal sourcing",
      "50 targeted investor introductions",
      "Monthly 30-min strategy call",
      "Dedicated Slack channel (24/7)",
      "Revenue optimization consulting",
      "A/B testing + analytics setup",
      "White-label branding option",
    ],
    limits: [
      "Up to 5 concurrent projects",
    ],
    valueDelivered: "$150,000",
    popularFor: "Serial entrepreneurs, agencies, growth-stage companies",
  },
];

export const ADD_ONS = [
  {
    name: "Extra Project Slot",
    price: 50,
    description: "Add one more active business project",
    availableFor: ["Starter", "Growth", "Scale"],
  },
  {
    name: "White-Label Branding",
    price: 100,
    description: "Custom branding for agencies reselling our service",
    availableFor: ["Growth", "Scale"],
  },
  {
    name: "Priority Feature Requests",
    price: 200,
    description: "Get your feature requests prioritized in our roadmap",
    availableFor: ["All"],
  },
  {
    name: "Dedicated Account Manager",
    price: 500,
    description: "Personal point of contact for all your businesses",
    availableFor: ["Scale"],
  },
];