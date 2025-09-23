const year = Math.max(2025, new Date().getFullYear());

export function App() {
  return (
    <>
      <header className="bg-blue-600 text-white p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Spartiqo</h1>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-blue-200">Features</a></li>
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-5xl font-bold mb-6">Welcome to Spartiqo</h2>
            <p className="text-xl mb-8">Transform your business with our innovative solutions</p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Fast Performance</h4>
                <p className="text-gray-600">Lightning-fast solutions built for modern web</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Scalable</h4>
                <p className="text-gray-600">Grows with your business needs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Secure</h4>
                <p className="text-gray-600">Enterprise-grade security you can trust</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-8">About Spartiqo</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are dedicated to providing cutting-edge solutions that help businesses thrive in the digital age.
              Our team of experts combines innovation with reliability to deliver exceptional results.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
            <p className="text-lg text-gray-700 mb-8">Ready to start your journey with Spartiqo?</p>
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {year} Spartiqo. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}