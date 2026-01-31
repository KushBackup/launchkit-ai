interface SocialProofProps {
  totalBusinessesLaunched: number;
  totalRevenueGenerated: number;
  averageTimeToLaunch: number;
  customerSatisfaction: number;
  activeCustomers: number;
  leadGenerated: number;
}

export default function SocialProofStats({
  totalBusinessesLaunched,
  totalRevenueGenerated,
  averageTimeToLaunch,
  customerSatisfaction,
  activeCustomers,
  leadGenerated,
}: SocialProofProps) {
  const stats = [
    {
      value: `${totalBusinessesLaunched}+`,
      label: "Businesses Launched",
      icon: "🚀",
    },
    {
      value: `$${(totalRevenueGenerated / 1000).toFixed(0)}k+`,
      label: "Customer Revenue Generated",
      icon: "💰",
    },
    {
      value: `${averageTimeToLaunch} days`,
      label: "Average Time to Launch",
      icon: "⚡",
    },
    {
      value: `${customerSatisfaction}/5`,
      label: "Customer Satisfaction",
      icon: "⭐",
    },
    {
      value: `${activeCustomers}+`,
      label: "Active Customers",
      icon: "👥",
    },
    {
      value: `${(leadGenerated / 1000).toFixed(0)}k+`,
      label: "Leads Generated",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Founders Worldwide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}