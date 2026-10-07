import { useEffect, useRef } from 'react';

/**
 * Agrega la clase `revealed` a los elementos con la clase `timeline-item`
 * cuando entran al viewport. Se aplica por contenedor.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const items = root.querySelectorAll('.timeline-item');
    if (!items.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.1 }
    );

    items.forEach((it) => obs.observe(it));
    return () => obs.disconnect();
  }, []);

  return ref;
}
