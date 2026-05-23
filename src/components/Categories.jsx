import { categories } from '../data/siteData';
import './Categories.css';

const Categories = () => (
   <section id="categories">
    <div className="container">
      <div className="categories-header">
        <div className="section-label reveal">What We Build</div>
        <h2 className="section-headline reveal delay-1">
          Six verticals.
          <br />
          One obsession.
        </h2>
        <p className="section-sub reveal delay-2">
          Our work spans the full spectrum of digital products — from browser
          tools to enterprise platforms. Each category reflects a different
          problem space we're tackling.
        </p>
      </div>
      <div className="categories-grid">
        <div className="cat-card reveal delay-1">
          <div className="cat-icon">🧩</div>
          <h3>Chrome Extensions</h3>
          <p>
            Browser-native tools that enhance workflows directly where users
            work — no app switching, no friction.
          </p>
          <span className="cat-tag">ScreenerLens →</span>
        </div>
        <div className="cat-card reveal delay-2">
          <div className="cat-icon">🌐</div>
          <h3>Web Applications</h3>
          <p>
            Full-stack web products built with Next.js and React — performant,
            scalable, and designed to delight.
          </p>
          <span className="cat-tag">SaaS · Platforms</span>
        </div>
        <div className="cat-card reveal delay-3">
          <div className="cat-icon">📱</div>
          <h3>Mobile Applications</h3>
          <p>
            Cross-platform mobile apps in React Native and Flutter — native
            performance, shared codebase efficiency.
          </p>
          <span className="cat-tag">iOS · Android</span>
        </div>
        <div className="cat-card reveal delay-1">
          <div className="cat-icon">☁️</div>
          <h3>SaaS Platforms</h3>
          <p>
            Subscription software products with real recurring revenue models —
            built to grow and scale autonomously.
          </p>
          <span className="cat-tag">Coming 2025</span>
        </div>
        <div className="cat-card reveal delay-2">
          <div className="cat-icon">🛠</div>
          <h3>Utility Tools</h3>
          <p>
            Focused, single-purpose tools that solve one thing perfectly. Often
            free, always useful, sometimes viral.
          </p>
          <span className="cat-tag">Developer Tools</span>
        </div>
        <div className="cat-card reveal delay-3">
          <div className="cat-icon">🔬</div>
          <h3>Experimental Lab</h3>
          <p>
            Ideas that don't fit neat categories — AI experiments, generative
            products, and things we build to learn.
          </p>
          <span className="cat-tag">In Development</span>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
