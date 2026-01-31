"use client";

import React from 'react';

interface FeatureComparisonProps {
  competitors: Array<{ name: string; isUs?: boolean; price?: string }>;
  categories: Array<{
    name: string;
    features: Array<{
      name: string;
      values: Array<boolean | string>;
    }>;
  }>;
}

export default function FeatureComparison({ competitors, categories }: FeatureComparisonProps) {
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <span className="text-2xl">✓</span>;
    } else if (value === false) {
      return <span className="text-2xl text-neutral-300">✗</span>;
    } else {
      return <span className="text-caption text-neutral-600">{value}</span>;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-display font-headline mb-6">How We Compare</h2>
        <p className="text-body text-neutral-600 max-w-2xl mx-auto">
          See why founders choose LaunchKit over agencies, freelancers, and DIY tools.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-6 font-headline text-lg border-b border-neutral-200">Feature</th>
              {competitors.map((comp, i) => (
                <th
                  key={i}
                  className={`p-6 text-center border-b border-neutral-200 ${
                    comp.isUs ? "bg-black text-white" : "bg-neutral-50"
                  }`}
                >
                  <div className="font-headline text-lg">{comp.name}</div>
                  {comp.price && (
                    <div className="text-caption mt-1 opacity-70">
                      {comp.price}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category, catIndex) => (
              <React.Fragment key={`cat-${catIndex}`}>
                <tr className="bg-neutral-100">
                  <td
                    colSpan={competitors.length + 1}
                    className="p-4 font-headline text-sm uppercase tracking-luxury"
                  >
                    {category.name}
                  </td>
                </tr>
                {category.features.map((feature, featIndex) => (
                  <tr
                    key={`feat-${catIndex}-${featIndex}`}
                    className="border-b border-neutral-200 hover:bg-neutral-50 transition"
                  >
                    <td className="p-6 text-body text-neutral-700">{feature.name}</td>
                    {feature.values.map((value, valIndex) => (
                      <td
                        key={valIndex}
                        className={`p-6 text-center ${
                          competitors[valIndex]?.isUs ? "bg-neutral-50" : ""
                        }`}
                      >
                        {renderValue(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 text-center">
        <a
          href="#pricing"
          className="btn-primary inline-block animate-pop"
          style={{ animationDelay: '200ms' }}
        >
          Get Started with LaunchKit
        </a>
      </div>
    </div>
  );
}
