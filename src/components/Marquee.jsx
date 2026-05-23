import { marqueeItems } from '../data/siteData';
import './Marquee.css';

const Marquee = () => {
  // Duplicate for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="marquee-item">
            <div className="dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
