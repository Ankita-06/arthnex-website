import { useEffect } from 'react';

/**
 * useCounter — Animates elements with [data-count] attribute
 * counting up from 0 to target when they scroll into view.
 */
const useCounter = () => {
  useEffect(() => {
    const animateCount = (el, target) => {
      let current = 0;
      const step = Math.ceil(target / 30);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + '+';
        if (current >= target) clearInterval(timer);
      }, 40);
    };

    const statEls = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.count, 10);
            animateCount(entry.target, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useCounter;
