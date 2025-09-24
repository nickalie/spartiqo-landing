export function Hero() {
  return (
    <section className="hero relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <img src="/logo.svg" alt="Spartiqo" className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 mx-auto mb-4 sm:mb-6" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight sm:leading-none">
          WE BUILD<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">UNSTOPPABLE</span><br />
          SOFTWARE
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-4xl mx-auto font-light px-2">
          High-load applications that crush the competition. Mass market solutions that dominate industries. 
          <span className="text-orange-400 font-semibold"> Your business doesn't just grow — it conquers.</span>
        </p>
        {/*<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">*/}
        {/*  <button className="bg-gradient-to-r from-orange-500 to-red-600 text-black font-black py-3 px-6 sm:py-4 sm:px-12 text-base sm:text-lg hover:from-orange-400 hover:to-red-500 transform hover:scale-105 transition-all duration-200 shadow-lg">*/}
        {/*    UNLEASH YOUR POTENTIAL*/}
        {/*  </button>*/}
        {/*  <button className="border-2 border-orange-400 text-orange-400 font-black py-3 px-6 sm:py-4 sm:px-12 text-base sm:text-lg hover:bg-orange-400 hover:text-black transition-all duration-200">*/}
        {/*    SEE OUR WORK*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}