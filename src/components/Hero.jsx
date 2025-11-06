import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5');
  }, []);

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
            Awwwards-level Portfolio with a Mario Twist
          </h1>
          <p ref={subtitleRef} className="mt-4 max-w-2xl text-base md:text-lg text-black/80 dark:text-white/80">
            Playful interactions, buttery-smooth motion, and 3D flair. Jump into worlds of code, design, and motion — just like collecting coins.
          </p>
          <div ref={ctaRef} className="mt-8 flex items-center gap-4">
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-yellow-400 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5">
              View Quests
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-black/60 backdrop-blur px-6 py-3 font-semibold border border-white/30 hover:bg-white/90 dark:hover:bg-black/70 transition">
              Hire Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white dark:from-black/40 dark:to-black/80" />
    </section>
  );
}
