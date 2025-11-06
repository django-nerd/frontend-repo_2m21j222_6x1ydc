import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-black/60 dark:text-white/60">
      © {new Date().getFullYear()} MarioVerse — Built with love, motion, and coins.
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white dark:from-black dark:to-zinc-900 text-black dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
