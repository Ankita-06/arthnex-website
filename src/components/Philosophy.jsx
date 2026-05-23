import './Philosophy.css';

const Philosophy = () => (
  // <section id="philosophy">
  //   <div className="container">
  //     <div className="philosophy-layout">
  //       <div className="philosophy-left reveal-left">
  //         <div className="section-label">Our Philosophy</div>
  //         <h2 className="section-headline">How we<br />think.</h2>
  //         <p className="section-sub">
  //           We have strong opinions about software — how it should be built, how it should behave, and how it should make people feel. These aren't just values. They're constraints we impose on every decision.
  //         </p>
  //       </div>

  //       <div className="philosophy-right">
  //         {principles.map((p, i) => (
  //           <div className={`principle-item reveal delay-${i + 1}`} key={i}>
  //             <div className="principle-num">{p.num}</div>
  //             <div className="principle-content">
  //               <h3>{p.title}</h3>
  //               <p>{p.desc}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // </section>
    <section id="philosophy">
    <div className="container">
      <div className="philosophy-layout">
        <div className="philosophy-left reveal-left">
          <div className="section-label">Engineering Philosophy</div>
          <h2 className="section-headline">
            How we
            <br />
            think.
          </h2>
          <p className="section-sub">
            We have strong opinions about software — how it should be built, how
            it should behave, and how it should make people feel. These aren't
            just values. They're constraints we impose on every decision.
          </p>
        </div>
        <div className="principles-list reveal-right">
          <div className="principle-item">
            <div className="principle-num">01</div>
            <div className="principle-content">
              <h3>Architecture is never an afterthought</h3>
              <p>
                We don't "refactor later." We make hard architectural decisions
                early — even when it's slower — because technical debt is a tax
                on every future feature.
              </p>
            </div>
          </div>
          <div className="principle-item">
            <div className="principle-num">02</div>
            <div className="principle-content">
              <h3>Design and engineering are one discipline</h3>
              <p>
                The best software we admire blurs the line between design and
                code. We hold both in our heads simultaneously. Pixels and logic
                are not separate concerns.
              </p>
            </div>
          </div>
          <div className="principle-item">
            <div className="principle-num">03</div>
            <div className="principle-content">
              <h3>Performance is a feature, not a setting</h3>
              <p>
                Users notice speed even when they don't consciously think about
                it. We obsess over load times, animations, and interaction
                latency like it's the core product.
              </p>
            </div>
          </div>
          <div className="principle-item">
            <div className="principle-num">04</div>
            <div className="principle-content">
              <h3>Ship embarrassingly small, then grow</h3>
              <p>
                We believe in the smallest version that proves a hypothesis. Not
                an MVP as an excuse to build less — but a focused experiment
                that teaches us what to build next.
              </p>
            </div>
          </div>
          <div className="principle-item">
            <div className="principle-num">05</div>
            <div className="principle-content">
              <h3>Real users over imagined ones</h3>
              <p>
                We talk to people before we build for them. No feature leaves
                our hands without someone outside our team having seen it first.
                Assumptions are the enemy.
              </p>
            </div>
          </div>
          <div className="principle-item">
            <div className="principle-num">06</div>
            <div className="principle-content">
              <h3>Boring technology, exciting outcomes</h3>
              <p>
                We reach for proven tools. React, Next.js, TypeScript, Firebase.
                The excitement should come from what we build with them — not
                from chasing the newest framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Philosophy;
