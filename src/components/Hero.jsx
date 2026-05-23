import { useEffect } from 'react';
import { heroStats } from '../data/siteData';
import './Hero.css';

const Hero = () => {
  // Mouse parallax for orbs
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const orb1 = document.querySelector('.hero-orb-1');
      const orb2 = document.querySelector('.hero-orb-2');
      if (orb1) orb1.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
      if (orb2) orb2.style.transform = `translate(${-x * 0.3}px, ${-y * 0.3}px)`;
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Software Studio · Since 2024</div>

          <h1 className="hero-headline">
            We don't just<br />
            write code.<br />
            <span className="line-accent">We engineer futures.</span>
          </h1>

          <p className="hero-sub">
            Arthnex is a software studio at the intersection of craft and ambition — building
            digital products, SaaS platforms, and tools that people actually love using.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-hero-primary">
              Explore Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-hero-secondary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M1 5L7 8.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Let's Talk
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat, i) => (
              <div key={i}>
                <div
                  className="hero-stat-num"
                  data-count={stat.count || undefined}
                >
                  {stat.value}
                </div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
