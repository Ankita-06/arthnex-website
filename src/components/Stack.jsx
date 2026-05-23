import './Stack.css';

const Stack = () => (
    <section id="stack">
    <div className="container">
      <div className="stack-header">
        <div className="section-label reveal">Technology Stack</div>
        <h2 className="section-headline reveal delay-1">
          Our tools of
          <br />
          choice.
        </h2>
        <p className="section-sub reveal delay-2">
          Carefully chosen for reliability, developer experience, and ecosystem
          maturity. Not the newest — the most dependable.
        </p>
      </div>
      <div className="stack-categories">
        <div className="stack-category reveal">
          <h4>Frontend &amp; Web</h4>
          <div className="stack-pills">
            <div className="stack-pill">
              <div className="pill-dot pill-react" />
              React.js
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-next" />
              Next.js
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-tailwind" />
              Tailwind CSS
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-ts" />
              TypeScript
            </div>
          </div>
        </div>
        <div className="stack-category reveal delay-1">
          <h4>Mobile Development</h4>
          <div className="stack-pills">
            <div className="stack-pill">
              <div className="pill-dot pill-native" />
              React Native
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-flutter" />
              Flutter
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-ts" />
              Dart
            </div>
          </div>
        </div>
        <div className="stack-category reveal delay-2">
          <h4>Backend &amp; Infrastructure</h4>
          <div className="stack-pills">
            <div className="stack-pill">
              <div className="pill-dot pill-node" />
              Node.js
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-firebase" />
              Firebase
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-supabase" />
              Supabase
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-vercel" />
              Vercel
            </div>
          </div>
        </div>
        <div className="stack-category reveal delay-3">
          <h4>Design &amp; Collaboration</h4>
          <div className="stack-pills">
            <div className="stack-pill">
              <div className="pill-dot pill-figma" />
              Figma
            </div>
            <div className="stack-pill">
              <div className="pill-dot pill-git" />
              Git &amp; GitHub
            </div>
            <div className="stack-pill">
              <div className="pill-dot" style={{ background: "#FF7262" }} />
              Framer
            </div>
            <div className="stack-pill">
              <div className="pill-dot" style={{ background: "#4A154B" }} />
              Notion
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stack;
