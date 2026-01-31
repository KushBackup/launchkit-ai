"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex justify-between items-start gap-4 hover:text-primary transition"
      >
        <span className="font-semibold text-lg">{question}</span>
        <span className="text-2xl flex-shrink-0 transform transition-transform" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

interface FAQSectionProps {
  items: Array<{
    category: string;
    questions: Array<{ q: string; a: string }>;
  }>;
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(items[0]?.category || null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about launching your business with LaunchKit AI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {items.map((category) => (
              <button
                key={category.category}
                onClick={() => {
                  setOpenCategory(category.category);
                  setOpenQuestion(null);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  openCategory === category.category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            {items
              .find((cat) => cat.category === openCategory)
              ?.questions.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.q}
                  answer={item.a}
                  isOpen={openQuestion === `${openCategory}-${index}`}
                  onToggle={() =>
                    setOpenQuestion(
                      openQuestion === `${openCategory}-${index}`
                        ? null
                        : `${openCategory}-${index}`
                    )
                  }
                />
              ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We"re here to help.
            </p>
            <a
              href="mailto:hello@launchkit.ai"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-lg"
            >
              📧 Contact us at hello@launchkit.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}