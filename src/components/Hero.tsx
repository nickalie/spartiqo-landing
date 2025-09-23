export function Hero() {
  return (
    <section className="hero relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <img src="/logo.svg" alt="Spartiqo" className="h-48 w-48 mx-auto mb-6" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
          WE BUILD<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">UNSTOPPABLE</span><br />
          SOFTWARE
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto font-light">
          High-load applications that crush the competition. Mass market solutions that dominate industries. 
          <span className="text-orange-400 font-semibold"> Your business doesn't just grow — it conquers.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-black font-black py-4 px-12 text-lg hover:from-orange-400 hover:to-red-500 transform hover:scale-105 transition-all duration-200 shadow-lg">
            UNLEASH YOUR POTENTIAL
          </button>
          <button className="border-2 border-orange-400 text-orange-400 font-black py-4 px-12 text-lg hover:bg-orange-400 hover:text-black transition-all duration-200">
            SEE OUR WORK
          </button>
        </div>
      </div>
    </section>
  );
}