import { useState, useEffect } from 'react';
import { navLinks } from '../data/siteData';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          Arthnex 
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="nav-cta">
          <a href="#contact" className="btn-ghost">Get in Touch</a>
          <a href="#work" className="btn-primary">View Work</a>
        </div>

        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMobile}>{link.label}</a>
        ))}
        <a href="#contact" onClick={closeMobile}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
