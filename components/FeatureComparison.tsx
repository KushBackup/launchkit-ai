"use client";

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

export default function FeatureComparison({
  competitors,
  categories,
}: FeatureComparisonProps) {
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <span className="text-green-600 text-2xl">✓</span>;
    } else if (value === false) {
      return <span className="text-red-400 text-2xl">✗</span>;
    } else {
      return <span className="text-sm text-gray-600">{value}</span>;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Compare
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why founders choose LaunchKit over agencies, freelancers, and
            DIY tools.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-bold">Feature</th>
                {competitors.map((comp, i) => (
                  <th
                    key={i}
                    className={`p-4 text-center ${
                      comp.isUs ? "bg-primary text-white" : ""
                    }`}
                  >
                    <div className="font-bold">{comp.name}</div>
                    {comp.price && (
                      <div className="text-sm font-normal mt-1 opacity-90">
                        {comp.price}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category, catIndex) => (
                <>
                  <tr key={`cat-${catIndex}`} className="bg-gray-100">
                    <td
                      colSpan={competitors.length + 1}
                      className="p-4 font-bold text-lg"
                    >
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature, featIndex) => (
                    <tr
                      key={`feat-${catIndex}-${featIndex}`}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="p-4 text-gray-700">{feature.name}</td>
                      {feature.values.map((value, valIndex) => (
                        <td
                          key={valIndex}
                          className={`p-4 text-center ${
                            competitors[valIndex]?.isUs ? "bg-primary/5" : ""
                          }`}
                        >
                          {renderValue(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Get Started with LaunchKit →
          </a>
        </div>
      </div>
    </section>
  );
}