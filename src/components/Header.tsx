import { useState } from 'preact/hooks';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img src="/logo.svg" alt="Spartiqo" className="h-6 w-6 sm:h-8 sm:w-8" />
          <h1 className="text-lg sm:text-xl font-black tracking-tight">SPARTIQO</h1>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          <li><a href="#services" className="hover:text-orange-400 transition-colors font-medium">SERVICES</a></li>
          <li><a href="#power" className="hover:text-orange-400 transition-colors font-medium">POWER</a></li>
          <li><a href="#dominate" className="hover:text-orange-400 transition-colors font-medium">DOMINATE</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800 md:hidden">
            <ul className="flex flex-col space-y-4 px-6 py-6">
              <li><a href="#services" className="block hover:text-orange-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>SERVICES</a></li>
              <li><a href="#power" className="block hover:text-orange-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>POWER</a></li>
              <li><a href="#dominate" className="block hover:text-orange-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>DOMINATE</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}