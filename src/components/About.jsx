import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">About</h2>
        <p ref={ref} className="mt-4 text-black/75 dark:text-white/75 leading-relaxed">
          I craft experiential interfaces that feel like a game: rewarding micro-interactions, joyful motion, and crisp performance. From concept to ship, I design, animate, and build — blending 3D, GSAP, and modern web stacks.
        </p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <li className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-4">
            Motion Systems
          </li>
          <li className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-4">
            3D & WebGL
          </li>
          <li className="rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-4">
            Design + Code
          </li>
        </ul>
      </div>
    </section>
  );
}
