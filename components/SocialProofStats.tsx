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
}: SocialProofProps) {
  const stats = [
    {
      value: `${totalBusinessesLaunched}+`,
      label: "Businesses Launched",
    },
    {
      value: `$${(totalRevenueGenerated / 1000).toFixed(0)}K`,
      label: "Customer Revenue",
    },
    {
      value: `${averageTimeToLaunch}`,
      label: "Days to Launch",
    },
  ];

  return (
    <section className="py-16 bg-black text-white animate-fade-in">
      <div className="container-custom">
        <div className="grid grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} style={{ animationDelay: `${index * 100}ms` }} className="animate-pop">
              <div className="text-5xl font-headline mb-3">
                {stat.value}
              </div>
              <div className="text-caption uppercase tracking-luxury text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
