import PricingCard from "@/components/PricingCard";
import FAQSection from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialCard";
import SocialProofStats from "@/components/SocialProofStats";
import FeatureComparison from "@/components/FeatureComparison";
import EmailWaitlist from "@/components/EmailWaitlist";

import { PRICING_PLANS } from "@/lib/pricing-config";
import { TESTIMONIALS, SOCIAL_PROOF } from "@/lib/testimonials";
import { FAQ_ITEMS, FEATURE_COMPARISON } from "@/lib/faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">🚀 LaunchKit AI</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary font-medium transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary font-medium transition">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium transition">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-primary font-medium transition">FAQ</a>
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
          <p className="text-sm text-gray-500 mb-8">
            ✨ 50+ businesses launched • $500k+ in customer revenue generated
          </p>

          {/* Email Waitlist */}
          <div className="max-w-lg mx-auto">
            <EmailWaitlist />
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <SocialProofStats {...SOCIAL_PROOF} />

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Everything You Need to Launch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📊", title: "Market Research", desc: "Deep analysis of your market, competitors, and customer segments. Know exactly what to build and who to sell to." },
              { icon: "🎨", title: "Product Development", desc: "Landing page, MVP, and full product deployment. From design to live site in days, not months." },
              { icon: "🎯", title: "Lead Generation", desc: "200+ qualified leads per month. We find your customers, not the other way around." },
              { icon: "📧", title: "Sales Outreach", desc: "Personalized cold emails, follow-ups, and demo booking. We handle the heavy lifting." },
              { icon: "🚀", title: "Launch Strategy", desc: "Product Hunt, Reddit, social media campaigns. Maximum visibility from day one." },
              { icon: "💰", title: "Investor Outreach", desc: "Pitch deck creation and warm intros to relevant investors. Fundraising made simple." }
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

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { step: "1", title: "Share Your Idea", desc: "Tell us your business concept in plain English. No business plan needed." },
              { step: "2", title: "AI Builds Everything", desc: "Our AI conducts market research, builds your product, generates leads, and creates marketing materials—all autonomously." },
              { step: "3", title: "Launch & Grow", desc: "We handle Product Hunt launch, cold outreach, investor connections. You focus on closing deals." },
              { step: "4", title: "Get Your First Customer", desc: "Within 2 weeks, you will have a live product and qualified leads in your inbox. No coding, no guesswork." }
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div id="testimonials">
        <TestimonialsSection testimonials={TESTIMONIALS} />
      </div>

      {/* Feature Comparison */}
      <FeatureComparison {...FEATURE_COMPARISON} />

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <PricingCard 
                key={plan.name} 
                name={plan.name}
                price={plan.monthlyPrice}
                priceId={plan.priceId.monthly}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            💡 <strong>All plans include:</strong> Full source code ownership, 14-day money-back guarantee, no lock-in
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_ITEMS} />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Join 120+ entrepreneurs who chose execution over endless planning.
          </p>
          <a href="#pricing" className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition">
            Start Building Today →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">🚀 LaunchKit AI</div>
              <p className="text-gray-400 text-sm">
                Autonomous AI that builds businesses while you sleep.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About</a></li>
                <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="/case-studies" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="mailto:hello@launchkit.ai" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/refund" className="hover:text-white transition">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 LaunchKit AI. Built by AI, for builders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}