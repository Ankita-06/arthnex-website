import './Vision.css';

const Vision = () => (
  // <section id="vision">
  //   <div className="vision-bg" />
  //   <div className="container vision-content">
  //     <div className="vision-quote reveal">
  //       We believe the best software is built at the intersection of{' '}
  //       <span className="accent">deep craft</span> and{' '}
  //       <span className="accent2">long-term thinking</span>.
  //     </div>

  //     <div className="vision-cards">
  //       {visionCards.map((card, i) => (
  //         <div className={`vision-card reveal delay-${i + 1}`} key={i}>
  //           <span className="vision-card-icon">{card.icon}</span>
  //           <h3>{card.title}</h3>
  //           <p>{card.desc}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </section>
    <section id="vision">
    <div className="vision-bg" />
    <div className="container vision-content" style={{ textAlign: "center" }}>
      <div
        className="section-label reveal"
        style={{ justifyContent: "center" }}
      >
        Vision &amp; Direction
      </div>
      <h2 className="vision-quote reveal delay-1">
        Building the <span className="accent">digital infrastructure</span> of
        ideas that haven't been <span className="accent2">born yet.</span>
      </h2>
      <p
        className="section-sub reveal delay-2"
        style={{ margin: "0 auto 64px", maxWidth: 600, textAlign: "center" }}
      >
        Arthnex is a bet on the future — that small, focused teams with strong
        opinions and technical depth can build things that outlast large
        organizations. We're playing a long game.
      </p>
      <div className="vision-cards reveal delay-2">
        <div className="vision-card">
          <span className="vision-card-icon">🏗</span>
          <h3>Product Ecosystem</h3>
          <p>
            Multiple interconnected products, each solving a distinct problem,
            eventually forming a cohesive ecosystem under the Arthnex umbrella.
          </p>
        </div>
        <div className="vision-card">
          <span className="vision-card-icon">🌍</span>
          <h3>Global Reach</h3>
          <p>
            Products that start local but think globally — designed for scale
            from the first commit, not retrofitted when growth demands it.
          </p>
        </div>
        <div className="vision-card">
          <span className="vision-card-icon">🤝</span>
          <h3>Collaborative Future</h3>
          <p>
            We believe the best products are co-created. With users, with
            collaborators, with the open-source community. Always.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Vision;
