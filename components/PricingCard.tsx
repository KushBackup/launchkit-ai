"use client";

import { useState } from "react";

interface PricingCardProps {
  name: string;
  price: number;
  priceId: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ name, price, priceId, features, popular }: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, plan: name }),
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
    <div className={`border-2 rounded-xl p-8 hover:shadow-lg transition ${
      popular 
        ? "border-primary bg-gradient-to-b from-indigo-50 to-white transform scale-105 shadow-xl" 
        : "border-gray-200 hover:border-primary"
    }`}>
      {popular && (
        <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
          ⭐ MOST POPULAR
        </div>
      )}
      <h3 className="text-3xl font-bold mb-2">{name}</h3>
      <div className="text-5xl font-bold text-primary mb-6">
        ${price}<span className="text-xl text-gray-600">/mo</span>
      </div>
      <ul className="space-y-3 mb-8 text-left">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-500 font-bold mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="block w-full bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white text-center px-6 py-3 rounded-lg font-semibold transition"
      >
        {loading ? "Loading..." : "Get Started"}
      </button>
    </div>
  );
}
