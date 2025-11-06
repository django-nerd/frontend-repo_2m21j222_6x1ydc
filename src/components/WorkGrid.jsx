import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const projects = [
  {
    title: 'Warp Pipe E‑Commerce',
    desc: 'Next-gen shop with playful micro-interactions and 3D product previews.',
    tag: 'UI/UX'
  },
  {
    title: 'Mushroom Kingdom Docs',
    desc: 'Developer docs with candy-smooth scroll and section wayfinding.',
    tag: 'Docs'
  },
  {
    title: 'Kart Racer Telemetry',
    desc: 'Real-time dashboards tuned for speed, clarity, and delight.',
    tag: 'Data Viz'
  },
  {
    title: 'Castle Portfolio',
    desc: 'Cinematic case studies with GSAP scenes and layered parallax.',
    tag: 'Case Study'
  }
];

export default function WorkGrid() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-100px' });

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-yellow-400 text-white shadow">
            <Sparkles size={18} />
          </span>
          <h2 ref={headingRef} className="text-2xl md:text-4xl font-extrabold tracking-tight">Featured Quests</h2>
        </div>
        <p className="mt-2 text-black/70 dark:text-white/70 max-w-2xl">A selection of worlds I built — fast, playful, and production-ready.</p>

        <div ref={gridRef} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, type: 'spring', stiffness: 120 }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur shadow hover:shadow-xl"
            >
              <div className="aspect-video bg-gradient-to-br from-red-500/20 via-yellow-400/20 to-blue-500/20" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-full">
                    <Star size={12} /> {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-yellow-300">
                  Enter level →
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
