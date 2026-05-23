import { team } from '../data/siteData';
import './Team.css';

const Team = () => (
  <section id="team">
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>The Team</div>
        <h2 className="section-headline reveal delay-1">Two engineers.<br />One mission.</h2>
        <p className="section-sub reveal delay-2" style={{ margin: '0 auto' }}>
          Small by choice. Focused by design. We believe the best products are built by
          people who care deeply, not teams that are merely large.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member, i) => (
          <div className={`team-card reveal delay-${i + 1}`} key={i}>
            {/* <div className="team-avatar" style={{ background: member.gradient }}>
               <img
    src={member.image}
    className="team-avatar-img"
  />
              <div className="team-role-badge">{member.badge}</div>
            </div> */}
            <div className="team-avatar-wrapper">
  <div className="team-avatar" style={{ background: member.gradient }}>
    <img src={member.image} className="team-avatar-img" />
  </div>

  {/* <div className="team-role-badge">{member.badge}</div> */}
</div>
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div>
            <div className="team-bio">{member.bio}</div>
            <div className="team-skills">
              {member.skills.map((skill) => (
                <span key={skill} className="team-skill">{skill}</span>
              ))}
            </div>
            {/* <div className="team-links">
              {member.links.map((link, j) => (
                <a key={j} href={link.href} className="team-link">{link.ty}</a>
              ))}
            </div> */}
            <div className="team-links">
  {member.links.map((link, j) => (
    <a
      key={j}
      href={link.href}
      className="team-link"
      title={link.type}
    >
      {link.type === 'github' && (
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="currentColor"
        >
          <path d="M7 0C3.13 0 0 3.13 0 7c0 3.1 2.01 5.73 4.8 6.65.35.06.48-.15.48-.34v-1.2C3.22 12.46 2.82 11.2 2.82 11.2c-.32-.81-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.54-.18-3.16-.77-3.16-3.43 0-.76.27-1.38.72-1.87-.07-.17-.31-.88.07-1.84 0 0 .58-.19 1.9.71A6.6 6.6 0 0 1 7 3.7c.59 0 1.18.08 1.74.23 1.32-.9 1.9-.71 1.9-.71.38.96.14 1.67.07 1.84.45.49.72 1.11.72 1.87 0 2.67-1.63 3.25-3.18 3.42.25.22.47.64.47 1.29v1.92c0 .19.13.4.48.33A7 7 0 0 0 14 7c0-3.87-3.13-7-7-7z" />
        </svg>
      )}

      {link.type === 'linkedin' && (
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="currentColor"
        >
          <path d="M3.2 4.9H1V13h2.2V4.9zM2.1 4C1.4 4 .9 3.5.9 2.8S1.4 1.6 2.1 1.6s1.2.5 1.2 1.2S2.8 4 2.1 4zM13 13h-2.2V9.1c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8 0 .1-.1.3-.1.5V13H6.3V4.9h2.1v.9c.3-.5.9-1.1 2.1-1.1 1.5 0 2.6 1 2.6 3.1L13 13z" />
        </svg>
      )}

      {link.type === 'twitter' && (
        <svg
          width={14}
          height={14}
          viewBox="0 0 14 14"
          fill="currentColor"
        >
          <path d="M11.2 1H13L8.6 6l5.1 6.7h-3.9L6.6 9 3.3 13H1.5l4.7-5.4L1.1 1h4l2.7 3.6L11.2 1z" />
        </svg>
      )}
      {link.type === 'link' && (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L11 4" />
    <path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 1 0 7.07 7.07L13 20" />
  </svg>
)}
    </a>
  ))}
</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  //   <section id="team">
  //   <div className="container">
  //     <div style={{ textAlign: "center", marginBottom: 56 }}>
  //       <div
  //         className="section-label reveal"
  //         style={{ justifyContent: "center" }}
  //       >
  //         The Founders
  //       </div>
  //       <h2 className="section-headline reveal delay-1">
  //         Two engineers.
  //         <br />
  //         One mission.
  //       </h2>
  //     </div>
  //     <div className="team-grid">
  //       <div className="team-card reveal delay-1">
  //         <div className="team-avatar">
  //           A<div className="team-role-badge">⚡</div>
  //         </div>
  //         <div className="team-name">Founder · Engineer 1</div>
  //         <div className="team-role">Co-Founder · React Engineer</div>
  //         <p className="team-bio">
  //           Full-stack React developer obsessed with product thinking. Bridges
  //           the gap between engineering and vision — always asking "why" before
  //           "how".
  //         </p>
  //         <div className="team-skills">
  //           <span className="team-skill">React.js</span>
  //           <span className="team-skill">Next.js</span>
  //           <span className="team-skill">React Native</span>
  //           <span className="team-skill">Product Thinking</span>
  //         </div>
  //         <div className="team-links">
  //           <a href="#" className="team-link" title="GitHub">
  //             <svg
  //               width={14}
  //               height={14}
  //               viewBox="0 0 14 14"
  //               fill="currentColor"
  //             >
  //               <path d="M7 0C3.13 0 0 3.13 0 7c0 3.1 2.01 5.73 4.8 6.65.35.06.48-.15.48-.34v-1.2C3.22 12.46 2.82 11.2 2.82 11.2c-.32-.81-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.54-.18-3.16-.77-3.16-3.43 0-.76.27-1.38.72-1.87-.07-.17-.31-.88.07-1.84 0 0 .58-.19 1.9.71A6.6 6.6 0 0 1 7 3.7c.59 0 1.18.08 1.74.23 1.32-.9 1.9-.71 1.9-.71.38.96.14 1.67.07 1.84.45.49.72 1.11.72 1.87 0 2.67-1.63 3.25-3.18 3.42.25.22.47.64.47 1.29v1.92c0 .19.13.4.48.33A7 7 0 0 0 14 7c0-3.87-3.13-7-7-7z" />
  //             </svg>
  //           </a>
  //           <a href="#" className="team-link" title="LinkedIn">
  //             <svg
  //               width={14}
  //               height={14}
  //               viewBox="0 0 14 14"
  //               fill="currentColor"
  //             >
  //               <path d="M3.2 4.9H1V13h2.2V4.9zM2.1 4C1.4 4 .9 3.5.9 2.8S1.4 1.6 2.1 1.6s1.2.5 1.2 1.2S2.8 4 2.1 4zM13 13h-2.2V9.1c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8 0 .1-.1.3-.1.5V13H6.3V4.9h2.1v.9c.3-.5.9-1.1 2.1-1.1 1.5 0 2.6 1 2.6 3.1L13 13z" />
  //             </svg>
  //           </a>
  //           <a href="#" className="team-link" title="Twitter/X">
  //             <svg
  //               width={14}
  //               height={14}
  //               viewBox="0 0 14 14"
  //               fill="currentColor"
  //             >
  //               <path d="M11.2 1H13L8.6 6l5.1 6.7h-3.9L6.6 9 3.3 13H1.5l4.7-5.4L1.1 1h4l2.7 3.6L11.2 1z" />
  //             </svg>
  //           </a>
  //         </div>
  //       </div>
  //       <div className="team-card reveal delay-2">
  //         <div
  //           className="team-avatar"
  //           style={{
  //             background: "linear-gradient(135deg, var(--accent2), #00A87A)"
  //           }}
  //         >
  //           B<div className="team-role-badge">🎯</div>
  //         </div>
  //         <div className="team-name">Founder · Engineer 2</div>
  //         <div className="team-role">Co-Founder · Full-Stack Engineer</div>
  //         <p className="team-bio">
  //           Versatile engineer across web and mobile — equally comfortable in
  //           React, React Native, and Flutter. The one who makes things ship.
  //         </p>
  //         <div className="team-skills">
  //           <span className="team-skill">React.js</span>
  //           <span className="team-skill">React Native</span>
  //           <span className="team-skill">Flutter</span>
  //           <span className="team-skill">Full-Stack</span>
  //         </div>
  //         <div className="team-links">
  //           <a href="#" className="team-link" title="GitHub">
  //             <svg
  //               width={14}
  //               height={14}
  //               viewBox="0 0 14 14"
  //               fill="currentColor"
  //             >
  //               <path d="M7 0C3.13 0 0 3.13 0 7c0 3.1 2.01 5.73 4.8 6.65.35.06.48-.15.48-.34v-1.2C3.22 12.46 2.82 11.2 2.82 11.2c-.32-.81-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.54-.18-3.16-.77-3.16-3.43 0-.76.27-1.38.72-1.87-.07-.17-.31-.88.07-1.84 0 0 .58-.19 1.9.71A6.6 6.6 0 0 1 7 3.7c.59 0 1.18.08 1.74.23 1.32-.9 1.9-.71 1.9-.71.38.96.14 1.67.07 1.84.45.49.72 1.11.72 1.87 0 2.67-1.63 3.25-3.18 3.42.25.22.47.64.47 1.29v1.92c0 .19.13.4.48.33A7 7 0 0 0 14 7c0-3.87-3.13-7-7-7z" />
  //             </svg>
  //           </a>
  //           <a href="#" className="team-link" title="LinkedIn">
  //             <svg
  //               width={14}
  //               height={14}
  //               viewBox="0 0 14 14"
  //               fill="currentColor"
  //             >
  //               <path d="M3.2 4.9H1V13h2.2V4.9zM2.1 4C1.4 4 .9 3.5.9 2.8S1.4 1.6 2.1 1.6s1.2.5 1.2 1.2S2.8 4 2.1 4zM13 13h-2.2V9.1c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8 0 .1-.1.3-.1.5V13H6.3V4.9h2.1v.9c.3-.5.9-1.1 2.1-1.1 1.5 0 2.6 1 2.6 3.1L13 13z" />
  //             </svg>
  //           </a>
  //           <a href="#" className="team-link" title="Twitter/X">
  //             <svg
  //               width={14}
  //               height={14}
  //               viewBox="0 0 14 14"
  //               fill="currentColor"
  //             >
  //               <path d="M11.2 1H13L8.6 6l5.1 6.7h-3.9L6.6 9 3.3 13H1.5l4.7-5.4L1.1 1h4l2.7 3.6L11.2 1z" />
  //             </svg>
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </section>
);

export default Team;
