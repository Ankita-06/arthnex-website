import './About.css';

const About = () => (
   <section id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-visual reveal-left">
          <div className="about-visual-inner">
            <div className="code-window">
              <div className="code-titlebar">
                <div className="code-dot red" />
                <div className="code-dot yellow" />
                <div className="code-dot green" />
                <div className="code-filename">arthnex.config.ts</div>
              </div>
              <div className="code-body">
                <div>
                  <span className="c-purple">const</span>{" "}
                  <span className="c-blue">arthnex</span> = {"{"}
                </div>
                <div>
                  &nbsp;&nbsp;<span className="c-green">mission</span>:{" "}
                  <span className="c-orange">"Build what matters"</span>,
                </div>
                <div>
                  &nbsp;&nbsp;<span className="c-green">approach</span>:{" "}
                  <span className="c-orange">"Craft first"</span>,
                </div>
                <div>
                  &nbsp;&nbsp;<span className="c-green">team</span>: [
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c-orange">"React Engineer"</span>,
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c-orange">"Flutter Developer"</span>,
                </div>
                <div>&nbsp;&nbsp;],</div>
                <div>
                  &nbsp;&nbsp;<span className="c-green">building</span>: {"{"}
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="c-teal">products</span>:{" "}
                  <span className="c-orange">true</span>,
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-teal">saas</span>:{" "}
                  <span className="c-orange">true</span>,
                </div>
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-teal">future</span>
                  : <span className="c-orange">always</span>,
                </div>
                <div>&nbsp;&nbsp;{"}"},</div>
                <div>
                  &nbsp;&nbsp;<span className="c-green">status</span>:{" "}
                  <span className="c-teal">"In progress 🚀"</span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
            <div className="about-glow" />
          </div>
        </div>
        <div className="about-text reveal-right">
          <div className="section-label">About Arthnex</div>
          <h2 className="section-headline">
            We build with
            <br />
            intention.
          </h2>
          <p className="section-sub">
            Arthnex is a software studio born from two engineers who believe the
            best products come from deep care — about users, about craft, and
            about the long game. We're not an agency. We're not a portfolio.
            We're a product studio building real things.
          </p>
          <div className="belief-list">
            <div className="belief-item">
              <div className="belief-icon">⚡</div>
              <div>
                <h4>Speed without shortcuts</h4>
                <p>
                  We ship fast. But we never ship things that'll slow us down
                  later. Architecture is a first-class concern from day one.
                </p>
              </div>
            </div>
            <div className="belief-item">
              <div className="belief-icon">🎯</div>
              <div>
                <h4>Problems before solutions</h4>
                <p>
                  Every product we build starts with a real problem. We don't
                  build features — we solve pains that people actually feel.
                </p>
              </div>
            </div>
            <div className="belief-item">
              <div className="belief-icon">🔭</div>
              <div>
                <h4>Long-term thinking</h4>
                <p>
                  We're not here to flip a project. We're here to build things
                  that outlast trends and create genuine, compounding value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
