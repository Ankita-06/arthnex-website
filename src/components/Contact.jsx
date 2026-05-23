import { useState } from 'react';
import { contactWays, inquiryTypes } from '../data/siteData';
import './Contact.css';

const Contact = ({ onToast }) => {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      onToast('Please fill in your name and email.', false);
      return;
    }
    onToast("Message sent! We'll be in touch soon 🚀", true);
    setForm({ name: '', email: '', type: '', message: '' });
  };

  return (
    // <section id="contact">
    //   <div className="contact-bg" />
    //   <div className="container">
    //     <div className="contact-layout">
    //       <div className="contact-left reveal-left">
    //         <div className="section-label">Get in Touch</div>
    //         <h2 className="section-headline">Let's build<br />something great.</h2>
    //         <p className="section-sub">
    //           Whether you have a project, a question, or just want to see what we're working
    //           on next — we'd love to hear from you.
    //         </p>

    //         <div className="contact-ways">
    //           {contactWays.map((way, i) => {
    //             const inner = (
    //               <>
    //                 <div className="contact-way-icon">{way.icon}</div>
    //                 <div className="contact-way-text">
    //                   <h4>{way.title}</h4>
    //                   <p>{way.detail}</p>
    //                 </div>
    //               </>
    //             );
    //             return way.href ? (
    //               <a key={i} href={way.href} className="contact-way">{inner}</a>
    //             ) : (
    //               <div key={i} className="contact-way">{inner}</div>
    //             );
    //           })}
    //         </div>
    //       </div>

    //       <div className="contact-right reveal-right">
    //         <div className="contact-form">
    //           <div className="form-row">
    //             <div className="form-group">
    //               <label>Name</label>
    //               <input
    //                 type="text" name="name" value={form.name}
    //                 placeholder="Your name" onChange={handleChange} autoComplete="off"
    //               />
    //             </div>
    //             <div className="form-group">
    //               <label>Email</label>
    //               <input
    //                 type="email" name="email" value={form.email}
    //                 placeholder="your@email.com" onChange={handleChange} autoComplete="off"
    //               />
    //             </div>
    //           </div>
    //           <div className="form-group">
    //             <label>What are you working on?</label>
    //             <select name="type" value={form.type} onChange={handleChange}>
    //               <option value="" disabled>Select inquiry type</option>
    //               {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
    //             </select>
    //           </div>
    //           <div className="form-group">
    //             <label>Tell us more</label>
    //             <textarea
    //               name="message" rows="5" value={form.message}
    //               placeholder="Describe your project, idea, or question..."
    //               onChange={handleChange}
    //             />
    //           </div>
    //           <button className="form-submit" onClick={handleSubmit}>
    //             Send Message
    //             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    //               <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    //             </svg>
    //           </button>
    //           <p className="form-note">We read every message. Usually respond within 24 hours.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
      <section id="contact">
    <div className="contact-bg" />
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div
          className="section-label reveal"
          style={{ justifyContent: "center" }}
        >
          Let's Build Together
        </div>
        <h2
          className="section-headline reveal delay-1"
          style={{ marginBottom: 16 }}
        >
          You have a problem.
          <br />
          We have solutions.
        </h2>
        <p
          className="section-sub reveal delay-2"
          style={{ margin: "0 auto", textAlign: "center", maxWidth: 520 }}
        >
          Whether you have a project in mind, want to collaborate, or just want
          to talk shop — we're genuinely interested in hearing from you.
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-left reveal-left">
          <div className="contact-ways">
            <a href="mailto:hello@arthnex.com" className="contact-way">
              <div className="contact-way-icon">📧</div>
              <div className="contact-way-text">
                <h4>Drop an email</h4>
                <p>hello@arthnex.com</p>
              </div>
            </a>
            <a href="#" className="contact-way">
              <div className="contact-way-icon">💼</div>
              <div className="contact-way-text">
                <h4>LinkedIn</h4>
                <p>linkedin.com/company/arthnex</p>
              </div>
            </a>
            <a href="#" className="contact-way">
              <div className="contact-way-icon">🐙</div>
              <div className="contact-way-text">
                <h4>GitHub</h4>
                <p>github.com/arthnex</p>
              </div>
            </a>
            <div className="contact-way" style={{ borderStyle: "dashed" }}>
              <div className="contact-way-icon">📍</div>
              <div className="contact-way-text">
                <h4>Based in India</h4>
                <p>Working globally · Remote-first</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right reveal-right">
          <div className="contact-form" id="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  id="f-name"
                  placeholder="Your name"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  id="f-email"
                  placeholder="your@email.com"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label>What are you working on?</label>
              <select id="f-type">
                <option value="" disabled="" selected="">
                  Select inquiry type
                </option>
                <option>Freelance / Client Project</option>
                <option>Product Collaboration</option>
                <option>Partnership</option>
                <option>Job / Work With Us</option>
                <option>Just saying hi 👋</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell us more</label>
              <textarea
                id="f-msg"
                rows={5}
                placeholder="Describe your project, idea, or question..."
                defaultValue={""}
              />
            </div>
            <button className="form-submit" onclick="submitForm()">
              Send Message
              <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="form-note">
              We read every message. Usually respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
