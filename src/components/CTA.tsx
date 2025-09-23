export function CTA() {
  return (
    <section id="dominate" className="py-24 bg-gradient-to-r from-gray-900 to-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-black mb-8">
          READY TO<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">DOMINATE YOUR MARKET?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Stop playing nice with mediocre software. It's time to unleash digital warfare on your competition. 
          Let's build something that doesn't just work — something that <span className="text-orange-400 font-bold">destroys everything in its path.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-black font-black py-4 px-12 text-lg hover:from-orange-400 hover:to-red-500 transform hover:scale-105 transition-all duration-200 shadow-2xl">
            START THE ANNIHILATION
          </button>
          <button className="border-2 border-gray-600 text-gray-300 font-bold py-4 px-12 text-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-200">
            VIEW OUR ARSENAL
          </button>
        </div>
      </div>
    </section>
  );
}