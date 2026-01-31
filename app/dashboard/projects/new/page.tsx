"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    industry: "",
    targetMarket: "",
    monetization: "",
    timeline: "2-weeks",
    priority: "leads",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Send to API
    console.log("Creating project:", formData);
    
    // Redirect to dashboard
    router.push("/dashboard");
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold mb-8">Launch a New Business 🚀</h1>

        {/* Progress Steps */}
        <div className="flex justify-between mb-12">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 ${s < 3 ? "mr-4" : ""}`}
            >
              <div
                className={`h-2 rounded-full ${
                  s <= step ? "bg-primary" : "bg-gray-200"
                }`}
              />
              <div className="text-sm mt-2 text-gray-600">
                {s === 1 && "Idea"}
                {s === 2 && "Details"}
                {s === 3 && "Preferences"}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Core Idea */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g., TaskFlow AI"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Describe Your Idea
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="e.g., AI-powered task management tool for remote teams that automatically prioritizes work based on deadlines, dependencies, and team capacity."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Be specific. The more detail, the better we can build.
                </p>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition"
              >
                Next →
              </button>
            </div>
          )}

          {/* Step 2: Market & Industry */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">Select industry...</option>
                  <option value="saas">SaaS / Software</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="marketplace">Marketplace</option>
                  <option value="healthtech">Health Tech</option>
                  <option value="fintech">Fintech</option>
                  <option value="edtech">Education</option>
                  <option value="productivity">Productivity</option>
                  <option value="marketing">Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Target Market
                </label>
                <input
                  type="text"
                  value={formData.targetMarket}
                  onChange={(e) =>
                    setFormData({ ...formData, targetMarket: e.target.value })
                  }
                  placeholder="e.g., Remote teams, B2B SaaS companies, 10-50 employees"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  How Will It Make Money?
                </label>
                <select
                  value={formData.monetization}
                  onChange={(e) =>
                    setFormData({ ...formData, monetization: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="">Select model...</option>
                  <option value="subscription">Subscription (SaaS)</option>
                  <option value="onetime">One-time payment</option>
                  <option value="freemium">Freemium</option>
                  <option value="marketplace">Marketplace fees</option>
                  <option value="ads">Advertising</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Preferences */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">
                  Launch Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="1-week">1 week (fast track)</option>
                  <option value="2-weeks">2 weeks (standard)</option>
                  <option value="3-weeks">3 weeks (thorough)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Primary Focus
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="leads">Lead Generation</option>
                  <option value="product">Product Quality</option>
                  <option value="speed">Speed to Market</option>
                  <option value="investors">Investor Ready</option>
                </select>
                <p className="text-sm text-gray-600 mt-2">
                  We"ll prioritize this in our execution.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">
                  📋 What Happens Next?
                </h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✓ We start market research (within 24 hours)</li>
                  <li>✓ You"ll receive a detailed research report (Day 3)</li>
                  <li>✓ MVP development begins (Day 4)</li>
                  <li>✓ Lead generation kicks off (Day 7)</li>
                  <li>✓ Product launch + outreach (Day 10-14)</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition"
                >
                  🚀 Launch Project
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}