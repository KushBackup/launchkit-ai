export const FAQ_ITEMS = [
  {
    category: "General",
    questions: [
      {
        q: "What exactly does LaunchKit AI do?",
        a: "LaunchKit is an autonomous AI agent that builds complete businesses for you. We handle market research, product development (websites/apps), lead generation, marketing campaigns, and sales outreach. You provide the idea, we execute everything else.",
      },
      {
        q: "Do I need technical skills or coding experience?",
        a: "Not at all. LaunchKit is designed for non-technical founders. We handle all the technical work—design, development, deployment, and infrastructure. You focus on strategy and closing deals.",
      },
      {
        q: "How long does it take to launch a business?",
        a: "Typically 10-14 days from idea to live product with qualified leads. Some projects are faster (landing pages in 3-5 days), others take longer (complex web apps 14-21 days). We prioritize speed without sacrificing quality.",
      },
      {
        q: "What types of businesses can LaunchKit build?",
        a: "We excel at digital businesses: SaaS products, info products, marketplaces, service businesses with online presence, e-commerce stores. If it can be built as a website or web app, we can build it.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "Can I cancel anytime?",
        a: "Yes. All plans are month-to-month with no long-term commitment. Cancel anytime from your dashboard. Annual plans are prorated if you cancel early.",
      },
      {
        q: "What happens if I\"m not satisfied?",
        a: "We offer a 14-day satisfaction guarantee. If we don\"t deliver what we promised, you get a full refund—no questions asked. We stand behind our work.",
      },
      {
        q: "Do you offer custom plans for agencies or enterprises?",
        a: "Yes. If you need white-label solutions, higher project limits, or custom integrations, contact us at hello@launchkit.ai for a custom quote.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, Amex) via Stripe. Annual plans can also be paid via ACH/bank transfer.",
      },
    ],
  },
  {
    category: "How It Works",
    questions: [
      {
        q: "What information do I need to provide to get started?",
        a: "Just your business idea in plain English. Example: AI-powered meal planning app for busy parents. We handle the rest—market research, validation, feature planning, and execution.",
      },
      {
        q: "Can I provide feedback during the build process?",
        a: "Absolutely. We share progress updates every 2-3 days. You review, provide feedback, and we iterate. This is your business—you stay in control.",
      },
      {
        q: "What if I want to make changes after launch?",
        a: "Changes and iterations are included in all plans. Need a new feature? Want to pivot? Just tell us. We\"re your ongoing execution team, not a one-time service.",
      },
      {
        q: "Do I get access to the source code and designs?",
        a: "Yes. Everything we build is yours—source code, design files, content, lead lists. Full ownership, no lock-in. Export everything anytime.",
      },
    ],
  },
  {
    category: "Lead Generation & Sales",
    questions: [
      {
        q: "How do you generate leads?",
        a: "We use a multi-channel approach: web scraping (Reddit, Product Hunt, LinkedIn), database lookups, social media mining, and manual research. All leads are qualified for your specific business and industry.",
      },
      {
        q: "Are the leads exclusive to me?",
        a: "Yes. Every lead we generate is exclusively yours. We don\"t resell or share lead lists. Each customer gets unique, targeted prospects.",
      },
      {
        q: "Will you do the sales calls for me?",
        a: "We handle cold outreach (emails, LinkedIn messages) and book demos/calls. You take it from there—closing deals and building relationships. We can provide sales scripts and guidance.",
      },
      {
        q: "What\"s the typical response rate for cold outreach?",
        a: "Industry standard is 1-3% for cold emails. Our personalized approach typically achieves 5-8% response rates, with 1-2% booking demos. We A/B test and optimize continuously.",
      },
    ],
  },
  {
    category: "Investor Outreach",
    questions: [
      {
        q: "Do you guarantee investor funding?",
        a: "No one can guarantee funding. What we do: create a compelling pitch deck, identify investors whose thesis matches your business, and make warm/cold introductions. You close the deal.",
      },
      {
        q: "How do you find relevant investors?",
        a: "We research: (1) Portfolio companies similar to yours, (2) Investment thesis alignment, (3) Check size match, (4) Recent activity. We prioritize quality over quantity.",
      },
      {
        q: "Can LaunchKit help with accelerator applications (YC, Techstars)?",
        a: "Yes (Growth and Scale plans). We help prepare applications, refine your pitch, and maximize your chances. Many of our customers have been accepted to top accelerators.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What tech stack do you use?",
        a: "We choose the best stack for your project. Typically: Next.js/React for web apps, Tailwind CSS for styling, Vercel/Netlify for hosting, Stripe for payments. We prioritize speed, reliability, and cost-efficiency.",
      },
      {
        q: "How secure is my data and business information?",
        a: "Very secure. We use encrypted storage, follow GDPR/privacy best practices, and never share your data. All communication is encrypted. You can request data deletion anytime.",
      },
      {
        q: "What happens to my business if I cancel?",
        a: "You keep everything. All code, designs, domains, and assets transfer to you. We provide export instructions and help with handoff if needed.",
      },
    ],
  },
];

export const FEATURE_COMPARISON = {
  competitors: [
    { name: "LaunchKit AI", isUs: true },
    { name: "Traditional Agency", price: "$50,000+" },
    { name: "Freelancer", price: "$5,000-15,000" },
    { name: "No-Code Tools", price: "$50-200/mo" },
    { name: "AI Assistants", price: "$20-60/mo" },
  ],
  categories: [
    {
      name: "Market Research",
      features: [
        { name: "Competitor Analysis", values: [true, true, "sometimes", false, "advice only"] },
        { name: "Customer Segmentation", values: [true, true, "sometimes", false, "advice only"] },
        { name: "Pricing Strategy", values: [true, true, "sometimes", false, "advice only"] },
        { name: "TAM/SAM/SOM Analysis", values: [true, true, false, false, false] },
      ],
    },
    {
      name: "Product Development",
      features: [
        { name: "Landing Page", values: [true, true, true, true, false] },
        { name: "Full Web App/MVP", values: [true, true, true, "DIY", false] },
        { name: "Design + Branding", values: [true, true, "extra cost", "DIY", false] },
        { name: "Deployment + Hosting", values: [true, true, "sometimes", "DIY", false] },
      ],
    },
    {
      name: "Lead Generation",
      features: [
        { name: "Qualified Leads", values: ["200-500/mo", "optional extra", "not included", "not included", "not included"] },
        { name: "Contact Enrichment", values: [true, "sometimes", false, false, false] },
        { name: "Email Outreach", values: [true, "optional", "not included", "not included", "not included"] },
        { name: "Demo Booking", values: [true, false, false, false, false] },
      ],
    },
    {
      name: "Marketing",
      features: [
        { name: "Product Hunt Launch", values: [true, "sometimes", false, false, "advice only"] },
        { name: "Social Media Campaign", values: [true, "extra cost", false, false, "advice only"] },
        { name: "Content Strategy", values: [true, "extra cost", false, false, "advice only"] },
        { name: "Analytics Setup", values: [true, true, false, "DIY", false] },
      ],
    },
    {
      name: "Investor Support",
      features: [
        { name: "Pitch Deck Creation", values: [true, "extra cost", "not included", "not included", false] },
        { name: "Investor Introductions", values: ["10-50", "sometimes", false, false, false] },
        { name: "Accelerator Prep", values: [true, "sometimes", false, false, false] },
      ],
    },
    {
      name: "Speed & Cost",
      features: [
        { name: "Time to Launch", values: ["10-14 days", "2-6 months", "1-3 months", "1-4 weeks (DIY)", "N/A"] },
        { name: "Monthly Cost", values: ["$99-599", "$10k-50k one-time", "$1k-5k/month", "$50-200", "$20-60"] },
        { name: "Ongoing Support", values: [true, "retainer", "hourly", false, false] },
      ],
    },
  ],
};