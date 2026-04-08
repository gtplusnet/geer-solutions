import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function StatCounter({ value, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    let startTime = null;
    let rafId;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-text-white/70 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
