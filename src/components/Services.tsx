export function Services() {
  const services = [
    {
      icon: "⚡",
      title: "HIGH-LOAD ANNIHILATION",
      description: "Millions of users? Terabytes of data? We build systems that laugh at traffic spikes and devour computational challenges."
    },
    {
      icon: "🚀",
      title: "MASS MARKET DOMINATION",
      description: "Consumer apps that become addictive. B2B platforms that become indispensable. We create digital crack that users can't quit."
    },
    {
      icon: "💀",
      title: "BUSINESS WARFARE",
      description: "Custom enterprise solutions that obliterate inefficiency and turn your business into a precision killing machine."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-16">
          WE DON'T JUST CODE.<br />
          <span className="text-orange-400">WE ANNIHILATE PROBLEMS.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black border border-gray-800 p-8 hover:border-orange-400 transition-all duration-300 group">
              <div className="text-4xl mb-4 text-orange-400">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}