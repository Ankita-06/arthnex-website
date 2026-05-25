import './Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-inner">
      <a href="#hero" className="footer-logo">Arthnex</a>
      <p className="footer-copy">© 2024 Arthnex. All rights reserved.</p>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a href="mailto:arthnex.tech@gmail.com">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
