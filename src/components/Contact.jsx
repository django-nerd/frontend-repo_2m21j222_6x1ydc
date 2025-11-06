import { useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';
import gsap from 'gsap';

export default function Contact() {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
  }, []);

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div ref={cardRef} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-8 text-center shadow">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Let’s build your next level</h3>
          <p className="mt-2 text-black/70 dark:text-white/70">Open to collaborations, freelance work, or full-time roles.</p>
          <a
            href="mailto:hello@portfolio.dev"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-semibold shadow hover:shadow-lg transition"
          >
            <Mail size={16} /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
