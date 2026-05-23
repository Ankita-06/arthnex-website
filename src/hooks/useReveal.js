import { useEffect } from 'react';

/**
 * useReveal — Attaches an IntersectionObserver to any elements
 * with .reveal, .reveal-left, or .reveal-right class names and
 * adds the 'visible' class when they enter the viewport.
 */
const useReveal = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useReveal;
