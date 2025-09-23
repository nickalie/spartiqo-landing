export function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <img src="/logo.svg" alt="Spartiqo" className="h-8 w-8" />
          <h1 className="text-xl font-black tracking-tight">SPARTIQO</h1>
        </div>
        <ul className="flex space-x-8">
          <li><a href="#services" className="hover:text-orange-400 transition-colors font-medium">SERVICES</a></li>
          <li><a href="#power" className="hover:text-orange-400 transition-colors font-medium">POWER</a></li>
          <li><a href="#dominate" className="hover:text-orange-400 transition-colors font-medium">DOMINATE</a></li>
        </ul>
      </nav>
    </header>
  );
}