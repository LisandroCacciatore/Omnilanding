import { useEffect, useState } from 'react';

export default function useScrollSpy(ids, rootMargin = '-30% 0px -60% 0px') {
  const [active, setActive] = useState(ids[0] || '');

  useEffect(() => {
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids.join('|'), rootMargin]);

  return active;
}
