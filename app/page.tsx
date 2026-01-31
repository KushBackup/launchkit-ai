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
      {/* ZARA-style Minimal Header */}
      <header className="border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container-custom py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-headline tracking-tight">LAUNCHKIT</div>
            <nav className="hidden md:flex space-x-10">
              <a href="#philosophy" className="text-sm uppercase tracking-luxury text-neutral-600 hover:text-black transition">Philosophy</a>
              <a href="#process" className="text-sm uppercase tracking-luxury text-neutral-600 hover:text-black transition">Process</a>
              <a href="#pricing" className="text-sm uppercase tracking-luxury text-neutral-600 hover:text-black transition">Pricing</a>
              <a href="#clients" className="text-sm uppercase tracking-luxury text-neutral-600 hover:text-black transition">Clients</a>
            </nav>
            <a href="#pricing" className="btn-primary">
              Begin
            </a>
          </div>
        </div>
      </header>

      {/* Hero - Full-width, Minimal, Impactful */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-hero font-headline mb-8 text-balance">
              Build Your<br />Business<br />in Two Weeks
            </h1>
            <p className="text-body-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
              Autonomous AI execution. From concept to deployed product to closed deals. No meetings. No delays. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="#pricing" className="btn-primary">
                Start Building
              </a>
              <a href="#process" className="btn-secondary">
                Our Process
              </a>
            </div>
            <div className="flex justify-center gap-12 text-sm text-neutral-500 uppercase tracking-luxury">
              <div>50+ Businesses</div>
              <div className="border-l border-neutral-300"></div>
              <div>$500k Revenue</div>
              <div className="border-l border-neutral-300"></div>
              <div>14 Days Avg</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section (ZARA-style full-width image + text) */}
      <section id="philosophy" className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <p className="text-caption uppercase tracking-luxury text-neutral-500 mb-4">Our Philosophy</p>
              <h2 className="text-display font-headline mb-8">Speed Is The New Competitive Advantage</h2>
              <p className="text-body text-neutral-600 mb-6 leading-relaxed">
                Most businesses fail not from bad ideas, but from slow execution. Six months to launch. Three months in development hell. Endless meetings with agencies.
              </p>
              <p className="text-body text-neutral-600 mb-6 leading-relaxed">
                We eliminate all of that. Our AI autonomously builds your complete business—market research, product development, customer acquisition—in 14 days.
              </p>
              <p className="text-body text-neutral-600 leading-relaxed">
                No hand-holding. No back-and-forth. Just pure execution.
              </p>
            </div>
            <div className="aspect-[4/5] bg-neutral-200 rounded-sm"></div>
          </div>
        </div>
      </section>

      {/* Process Section (Clean, numbered steps) */}
      <section id="process" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <p className="text-caption uppercase tracking-luxury text-neutral-500 mb-4">How We Work</p>
            <h2 className="text-display font-headline">Three Steps to Market</h2>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-20">
            {[
              { 
                num: "01", 
                title: "Research & Strategy", 
                desc: "Deep market analysis. Competitor landscape. Customer segments. Positioning strategy. Everything documented in 24 hours.",
                deliverables: ["Market Analysis Report", "Competitor Deep-Dive", "Customer Personas", "Go-to-Market Strategy"]
              },
              { 
                num: "02", 
                title: "Build & Deploy", 
                desc: "Landing page. MVP product. Payment processing. Analytics. Deployed to production. Live URL. Ready to accept customers.",
                deliverables: ["Landing Page", "Full Product/MVP", "Stripe Integration", "Analytics Setup"]
              },
              { 
                num: "03", 
                title: "Launch & Scale", 
                desc: "Lead generation. Cold outreach. Product Hunt launch. First 10 customers. Investor intros. Revenue in week one.",
                deliverables: ["100+ Leads", "Email Campaigns", "Launch Strategy", "Customer Acquisition"]
              }
            ].map((step) => (
              <div key={step.num} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="text-6xl font-headline text-neutral-300">{step.num}</div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-title font-headline mb-4">{step.title}</h3>
                  <p className="text-body text-neutral-600 mb-6 leading-relaxed">{step.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {step.deliverables.map((item, i) => (
                      <span key={i} className="text-caption uppercase tracking-luxury px-4 py-2 border border-neutral-300 text-neutral-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid (ZARA-style grid layout) */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-display font-headline">Complete Business Build</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-neutral-300">
            {[
              { icon: "📊", title: "Market Research", desc: "Deep analysis. Competitor intel. Customer insights." },
              { icon: "🎨", title: "Product Design", desc: "Landing pages. MVP builds. Full deployments." },
              { icon: "🎯", title: "Lead Generation", desc: "200+ qualified leads. Monthly pipeline filled." },
              { icon: "📧", title: "Sales Outreach", desc: "Cold emails. Follow-ups. Demo bookings." },
              { icon: "🚀", title: "Launch Strategy", desc: "Product Hunt. Social media. Maximum reach." },
              { icon: "💰", title: "Investor Outreach", desc: "Pitch decks. Warm intros. Fundraising support." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 hover:bg-neutral-50 transition-all duration-300 group">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-subtitle font-headline mb-3 group-hover:text-primary transition">{item.title}</h3>
                <p className="text-body text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - ZARA-style minimal cards */}
      <section id="pricing" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <p className="text-caption uppercase tracking-luxury text-neutral-500 mb-4">Investment</p>
            <h2 className="text-display font-headline mb-6">Choose Your Plan</h2>
            <p className="text-body text-neutral-600 max-w-2xl mx-auto">
              One-time payment. No subscriptions. Full ownership of everything we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - ZARA-style minimal testimonials */}
      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* Feature Comparison */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <FeatureComparison competitors={FEATURE_COMPARISON.competitors} categories={FEATURE_COMPARISON.categories} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-display font-headline">Common Questions</h2>
          </div>
          <FAQSection items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA Section (ZARA-style minimal) */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-display font-headline mb-8">Ready to Build?</h2>
          <p className="text-body-lg text-neutral-300 mb-12 max-w-2xl mx-auto">
            Start your business today. No meetings. No delays. Just results.
          </p>
          <a href="#pricing" className="inline-block px-12 py-5 bg-white text-black text-sm uppercase tracking-luxury hover:bg-neutral-100 transition-all duration-300">
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer (ZARA-style minimal) */}
      <footer className="border-t border-neutral-200 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="text-2xl font-headline mb-4">LAUNCHKIT</div>
              <p className="text-caption text-neutral-600">
                Autonomous business building through AI.
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-luxury mb-4">Product</h4>
              <div className="space-y-3">
                <a href="#process" className="block text-caption text-neutral-600 hover:text-black transition">How It Works</a>
                <a href="#pricing" className="block text-caption text-neutral-600 hover:text-black transition">Pricing</a>
                <a href="#clients" className="block text-caption text-neutral-600 hover:text-black transition">Case Studies</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-luxury mb-4">Company</h4>
              <div className="space-y-3">
                <a href="#" className="block text-caption text-neutral-600 hover:text-black transition">About</a>
                <a href="#" className="block text-caption text-neutral-600 hover:text-black transition">Contact</a>
                <a href="#" className="block text-caption text-neutral-600 hover:text-black transition">Terms</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-luxury mb-4">Follow</h4>
              <div className="space-y-3">
                <a href="#" className="block text-caption text-neutral-600 hover:text-black transition">Twitter</a>
                <a href="#" className="block text-caption text-neutral-600 hover:text-black transition">LinkedIn</a>
                <a href="#" className="block text-caption text-neutral-600 hover:text-black transition">GitHub</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-caption text-neutral-500">
            © 2026 LaunchKit AI. Built with speed.
          </div>
        </div>
      </footer>
    </div>
  );
}
