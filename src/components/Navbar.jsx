import { useEffect, useRef } from 'react';
import { Rocket, Gamepad2 } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/20 dark:bg-black/20 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight text-lg">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 text-white shadow">
            <Gamepad2 size={18} />
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">MarioVerse</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#work" className="hover:text-red-500 transition-colors">Work</a>
          <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-semibold shadow hover:shadow-lg transition">
          <Rocket size={16} /> Start Quest
        </a>
      </nav>
    </header>
  );
}
