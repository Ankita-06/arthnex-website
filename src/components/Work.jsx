import './Work.css';

const Work = () => (
  <section id="work">
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 56
        }}
      >
        <div>
          <div className="section-label reveal">Selected Work</div>
          <h2 className="section-headline reveal delay-1">
            Products we're
            <br />
            proud of.
          </h2>
        </div>
        <p
          className="section-sub reveal delay-2"
          style={{ maxWidth: 360, marginBottom: 0 }}
        >
          Early-stage but never half-baked. Every product we ship reflects our
          full commitment.
        </p>
      </div>
      <div className="work-grid">
        {/* Featured */}
        <div className="work-card work-card-featured reveal">
          <div className="work-card-visual">
            <div className="work-art-dots" />
            <div className="work-visual-art">
              <div className="work-rings">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
                <div className="ring-center">SL</div>
              </div>
            </div>
          </div>
          <div className="work-card-body">
            <div className="work-status status-live">Live</div>
            <h3>ScreenerLens</h3>
            <p>
              A Chrome Extension that enhances how users research, screen, and
              evaluate content directly in their browser. Built for speed,
              designed for focus.
            </p>
            <div className="work-tags">
              <span className="work-tag">Chrome Extension</span>
              <span className="work-tag">React</span>
              <span className="work-tag">Browser API</span>
              <span className="work-tag">JavaScript</span>
            </div>
            <a href="/" className="work-link">
              View Project
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ClassMitra */}
        <div className="work-card reveal delay-1">
          <div className="work-card-visual classmitra-art">
            <div className="work-visual-art">
              <div className="work-rings classmitra-rings">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
                <div
                  className="ring-center"
                  style={{
                    background: "linear-gradient(135deg, #4F8EF7, #38C9B0)",
                    fontSize: 10
                  }}
                >
                  CM
                </div>
              </div>
            </div>
          </div>
          <div className="work-card-body">
            <div className="work-status status-beta">In Development</div>
            <h3>ClassMitra</h3>
            <p>
              The digital operating system for India's local tuition ecosystem —
              streamlining homework, attendance, fees, and progress tracking
              while keeping teachers, parents, and students in sync.
            </p>
            <div className="work-tags">
              <span className="work-tag">Mobile App</span>
              <span className="work-tag">React Native</span>
              <span className="work-tag">Education</span>
            </div>
            <a href="/" className="work-link">
              Coming Soon
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ShaadiVerse */}
        <div className="work-card reveal delay-2">
          <div className="work-card-visual shaadi-art">
            <div className="work-visual-art">
              <div className="work-rings shaadi-rings">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
                <div
                  className="ring-center"
                  style={{
                    background: "linear-gradient(135deg, #FF6482, #FFB430)",
                    fontSize: 10
                  }}
                >
                  SV
                </div>
              </div>
            </div>
          </div>
          <div className="work-card-body">
            <div className="work-status status-beta">In Development</div>
            <h3>ShaadiVerse</h3>
            <p>
              A digital platform reimagining the wedding experience — connecting
              families, vendors, and moments in one beautiful ecosystem.
            </p>
            <div className="work-tags">
              <span className="work-tag">Web App</span>
              <span className="work-tag">Next.js</span>
              <span className="work-tag">Platform</span>
            </div>
            <a href="/" className="work-link">
              Coming Soon
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ArthGrow */}
        <div className="work-card reveal delay-3">
          <div
            className="work-card-visual"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,212,170,0.04), rgba(52,211,153,0.04))"
            }}
          >
            <div className="work-visual-art">
              <div className="work-rings">
                <div
                  className="ring ring-1"
                  style={{ borderColor: "rgba(0,212,170,0.3)" }}
                />
                <div
                  className="ring ring-2"
                  style={{ borderColor: "rgba(0,212,170,0.5)" }}
                />
                <div
                  className="ring ring-3"
                  style={{ borderColor: "rgba(0,212,170,0.7)" }}
                />
                <div
                  className="ring-center"
                  style={{ background: "var(--accent2)", fontSize: 10 }}
                >
                  AG
                </div>
              </div>
            </div>
          </div>
          <div className="work-card-body">
            <div className="work-status status-soon">Upcoming</div>
            <h3>ArthGrow</h3>
            <p>
              A personal finance application designed around Indian savings
              patterns — smart, simple, and built for how real people think
              about money.
            </p>
            <div className="work-tags">
              <span className="work-tag">Mobile App</span>
              <span className="work-tag">React Native</span>
              <span className="work-tag">Finance</span>
            </div>
            <a href="/" className="work-link">
              In Stealth
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Placeholder */}
        <div className="work-card reveal delay-3">
          <div className="work-card-visual coming-art">
            <div className="work-visual-art">
              <div className="coming-inner">
                <div className="coming-dots">
                  <div className="coming-dot" />
                  <div className="coming-dot" />
                  <div className="coming-dot" />
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: 1
                  }}
                >
                  More products brewing
                </p>
              </div>
            </div>
          </div>
          <div className="work-card-body">
            <div className="work-status status-soon">Something New</div>
            <h3>Next Chapter</h3>
            <p>
              We're always building. The next product in our pipeline is in
              active development. Watch this space — it'll be worth the wait.
            </p>
            <div className="work-tags">
              <span className="work-tag">TBA</span>
              <span className="work-tag">2025</span>
            </div>
            <a href="#contact" className="work-link">
              Stay in the Loop
              <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6H11M11 6L6 1M11 6L6 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Work;