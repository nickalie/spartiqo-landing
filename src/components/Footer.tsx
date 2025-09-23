const year = Math.max(2025, new Date().getFullYear());

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/logo.svg" alt="Spartiqo" className="h-6 w-6" />
            <span className="font-black text-lg">SPARTIQO</span>
          </div>
          <div className="text-gray-400">
            <p>&copy; {year} Spartiqo. All rights reserved. Built to destroy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}