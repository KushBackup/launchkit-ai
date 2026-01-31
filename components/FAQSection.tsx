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
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-8 flex justify-between items-start gap-6 hover:opacity-70 transition"
      >
        <span className="font-headline text-xl">{question}</span>
        <span 
          className="text-2xl flex-shrink-0 transition-transform duration-300" 
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="pb-8 text-body text-neutral-600 leading-relaxed">
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
    <div>
      {/* Category tabs - ZARA-style minimal */}
      <div className="flex flex-wrap gap-6 mb-12 justify-center">
        {items.map((category) => (
          <button
            key={category.category}
            onClick={() => {
              setOpenCategory(category.category);
              setOpenQuestion(null);
            }}
            className={`
              text-caption uppercase tracking-luxury pb-2 border-b-2 transition-all duration-300
              ${openCategory === category.category
                ? "border-black text-black"
                : "border-transparent text-neutral-500 hover:text-black"
              }
            `}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Questions - Clean accordion */}
      <div className="border-t border-neutral-200">
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

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <p className="text-body text-neutral-600 mb-4">
          Need more information?
        </p>
        <a
          href="mailto:hello@launchkit.ai"
          className="text-sm uppercase tracking-luxury text-black hover:opacity-70 transition border-b border-black pb-1"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
