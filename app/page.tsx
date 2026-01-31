import PricingCard from '@/components/PricingCard';
import { STRIPE_PRICES } from '@/lib/stripe-config';

export default function Home() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      priceId: STRIPE_PRICES.starter,
      features: [
        '1 business project/month',
        'Market research report',
        'Simple landing page',
        'Basic MVP',
        '50 qualified leads',
        'Launch support',
        'Email support'
      ]
    },
    {
      name: 'Growth',
      price: 299,
      priceId: STRIPE_PRICES.growth,
      popular: true,
      features: [
        '2 active projects',
        'Complete business launch',
        'Full landing page + brand',
        'MVP web app',
        '200 qualified leads/month',
        'Cold email campaigns (50)',
        'Investor pitch deck',
        '10 investor intros',
        'Priority support'
      ]
    },
    {
      name: 'Scale',
      price: 599,
      priceId: STRIPE_PRICES.scale,
      features: [
        '3+ active projects',
        'Custom design',
        'Advanced MVP features',
        '500 qualified leads/month',
        'Automated outreach (100+)',
        'Partnership sourcing',
        '50 investor intros',
        'Monthly strategy call',
        '24/7 Slack support'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">🚀 LaunchKit AI</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary font-medium transition">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary font-medium transition">Pricing</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition">How It Works</a>
            </nav>
            <a href="#pricing" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Build Your Business
            </span>
            <br />
            in 2 Weeks
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            AI agent that autonomously builds your complete business—from market research to deployed product to closed customers. No coding required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="#pricing" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Start Building →
            </a>
            <a href="#how-it-works" className="bg-white border-2 border-primary text-primary hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition">
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-500">
            ✨ 50+ businesses launched • $500k+ in customer revenue generated
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Everything You Need to Launch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📊', title: 'Market Research', desc: 'Deep analysis of your market, competitors, and customer segments. Know exactly what to build and who to sell to.' },
              { icon: '🎨', title: 'Product Development', desc: 'Landing page, MVP, and full product deployment. From design to live site in days, not months.' },
              { icon: '🎯', title: 'Lead Generation', desc: '200+ qualified leads per month. We find your customers, not the other way around.' },
              { icon: '📧', title: 'Sales Outreach', desc: 'Personalized cold emails, follow-ups, and demo booking. We handle the heavy lifting.' },
              { icon: '🚀', title: 'Launch Strategy', desc: 'Product Hunt, Reddit, social media campaigns. Maximum visibility from day one.' },
              { icon: '💰', title: 'Investor Outreach', desc: 'Pitch deck creation and warm intros to relevant investors. Fundraising made simple.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join 50+ entrepreneurs who chose execution over endless planning.
          </p>
          <a href="#pricing" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition">
            Start Building Today →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 LaunchKit AI. Built by AI, for builders.</p>
        </div>
      </footer>
    </div>
  );
}
