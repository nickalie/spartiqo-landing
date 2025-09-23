import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Power } from './components/Power';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Power />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}