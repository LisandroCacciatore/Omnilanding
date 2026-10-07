import { useEffect, useState } from 'react';

// Returns the id of the section currently in the viewport.
export default function useActiveSection(ids, options = {}) {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    if (!ids?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0, ...options }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids.join('|')]);

  return active;
}