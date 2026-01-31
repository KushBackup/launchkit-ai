interface TestimonialCardProps {
  name: string;
  role: string;
  business: string;
  quote: string;
  metrics: Record<string, string>;
  verified: boolean;
}

export default function TestimonialCard({
  name,
  role,
  business,
  quote,
  metrics,
  verified,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
          {name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{name}</h3>
            {verified && (
              <span className="text-primary" title="Verified customer">
                ✓
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-primary font-semibold text-sm">{business}</p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key}>
            <div className="text-2xl font-bold text-primary">{value}</div>
            <div className="text-sm text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface TestimonialsSectionProps {
  testimonials: Array<TestimonialCardProps>;
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Founders. Real Results.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how LaunchKit helped entrepreneurs go from idea to revenue in weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Join Them - Start Building →
          </a>
        </div>
      </div>
    </section>
  );
}