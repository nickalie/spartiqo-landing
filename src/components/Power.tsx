export function Power() {
  const metrics = [
    {
      value: "99.99%",
      title: "UPTIME",
      description: "Your competition sleeps. Your software never does."
    },
    {
      value: "1M+",
      title: "CONCURRENT USERS",
      description: "Built to handle apocalyptic traffic loads."
    },
    {
      value: "< 100MS",
      title: "RESPONSE TIME",
      description: "Faster than your users can blink."
    }
  ];

  return (
    <section id="power" className="py-12 sm:py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 sm:mb-12 md:mb-16 leading-tight">
          BUILT FOR<br />
          <span className="text-orange-400">DESTRUCTION</span>
        </h2>
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-12 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-orange-400 text-3xl sm:text-4xl font-black mb-3 sm:mb-4">{metric.value}</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{metric.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}