import React from "react"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import solidSprite from "../images/sprites/solid.svg"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="sp-section sp-section-contact">
        <h2 className="sp-heading">Contact Me</h2>
        <div className="sp-section-contact--container">
          <div className="sp-section-contact-side">
            <div>
              <h3 className="sp-heading-3">I'd love to hear from you!</h3>
              <p style={{ "fontSize": "1.5rem", "fontFamily": "inherit", "color": "#333" }}><em>Your valuable feedback, means a lot !!</em></p>
            </div>
            <form method="POST" action="https://formspree.io/xpzdqyok" className="sp-contact-form">
              <div className="sp-contact-group">
                <input className="sp-contact-input" type="text" name="name" id="name" placeholder="Full Name*" aria-label="Full Name" required spellCheck="false" />
                <label htmlFor="name" className="sp-contact-label">Full Name*</label>
              </div>
              <div className="sp-contact-group">
                <input className="sp-contact-input" type="email" name="email" id="email" placeholder="Email Address*" aria-label="email" required spellCheck="false" />
                <label htmlFor="email" className="sp-contact-label">Email Address*</label>
              </div>
              <div className="sp-contact-group">
                <input className="sp-contact-input" type="text" name="subject" id="subject" placeholder="Subject" aria-label="Subject" spellCheck="false" />
                <label htmlFor="subject" className="sp-contact-label">Subject</label>
              </div>
              <div className="sp-contact-group">
                <textarea className="sp-contact-input" rows="4" cols="30" name="msg" id="msg" placeholder="Your Message*" aria-label="Message" required spellCheck="false" ></textarea>
                <label htmlFor="msg" className="sp-contact-label sp-contact-label-textarea">Your Message*</label>
              </div>
              <div className="sp-contact-cta">
                <button type="submit" className="sp-contact-btn">
                  <svg>
                    <use href={solidSprite + "#paper-plane"}></use>
                  </svg>
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="sp-section-contact-side sp-section-contact-side-show">
            {/* <div><h3 className="sp-heading-3">Quick Connect!</h3></div>
            <div className="sp-section-contact-meta">
              <svg>
                <use href={solidSprite + "#phone"}></use>
              </svg>
              <a href="tel:+919337498221" className="sp-link">+91-9337498221</a>
            </div>
            <div className="sp-section-contact-meta">
              <svg>
                <use href={solidSprite + "#envelope-open-text"}></use>
              </svg>
              <a href="mailto:mail.sarojkumar98@gmail.com" className="sp-link">mail.sarojkumar98@gmail.com</a>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact;