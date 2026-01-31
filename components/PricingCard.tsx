"use client";

import { useState } from "react";

interface PricingPlan {
  name: string;
  tagline?: string;
  price?: number;
  monthlyPrice?: number;
  annualPrice?: number;
  priceId: string | { monthly: string; annual: string };
  features: string[];
  popular?: boolean;
  limits?: string[];
  monthlySavings?: number;
  annualSavings?: number;
  valueDelivered?: string;
  popularFor?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  const [loading, setLoading] = useState(false);
  
  // Handle both price structures (simple price or monthly/annual)
  const displayPrice = plan.price || plan.monthlyPrice || 0;
  const actualPriceId = typeof plan.priceId === 'string' ? plan.priceId : plan.priceId.monthly;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: actualPriceId, plan: plan.name }),
      });
      
      const { url } = await response.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className={`
        border border-neutral-300 bg-white p-10 
        hover:shadow-2xl transition-all duration-500
        ${plan.popular ? 'md:-translate-y-4 shadow-xl' : ''}
      `}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {plan.popular && (
        <div className="text-caption uppercase tracking-luxury text-neutral-600 mb-4 pb-4 border-b border-neutral-200">
          Recommended
        </div>
      )}
      
      <h3 className="text-subtitle font-headline mb-4">{plan.name}</h3>
      
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-headline">${displayPrice}</span>
          <span className="text-caption text-neutral-500 ml-2">one-time</span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-10">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start text-body text-neutral-700">
            <span className="text-neutral-400 mr-3 text-sm">—</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Select Plan"}
      </button>
    </div>
  );
}
