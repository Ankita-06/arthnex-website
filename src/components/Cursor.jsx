import { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const curRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const animate = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (curRef.current) {
        curRef.current.style.left = mx + 'px';
        curRef.current.style.top = my + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animId = requestAnimationFrame(animate);

    const hoverEls = document.querySelectorAll(
      'a, button, .cat-card, .work-card, .team-card, .belief-item, .principle-item, .stack-pill, .vision-card, .contact-way'
    );
    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={curRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
};

export default Cursor;
