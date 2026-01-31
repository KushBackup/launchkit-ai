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
    <div className="animate-fade-in bg-white border border-neutral-300 p-10 hover:shadow-lg transition-all duration-500">
      {/* Minimal Header */}
      <div className="mb-8 pb-6 border-b border-neutral-200">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-headline text-xl">{name}</h3>
          {verified && (
            <span className="text-neutral-400" title="Verified">✓</span>
          )}
        </div>
        <p className="text-caption text-neutral-600">{role}, {business}</p>
      </div>

      {/* Quote - ZARA-style elegant typography */}
      <blockquote className="text-body text-neutral-700 leading-relaxed mb-8 font-accent italic">
        "{quote}"
      </blockquote>

      {/* Metrics - Minimal grid */}
      <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key}>
            <div className="text-2xl font-headline mb-1">{value}</div>
            <div className="text-caption uppercase tracking-luxury text-neutral-500">
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
    <section id="clients" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <p className="text-caption uppercase tracking-luxury text-neutral-500 mb-4">Client Stories</p>
          <h2 className="text-display font-headline mb-6">Built With Speed</h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            Real founders. Real businesses. Real revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
