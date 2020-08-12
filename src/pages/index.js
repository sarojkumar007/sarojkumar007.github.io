import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import BrandSprite from "../images/sprites/brands.svg"
import SolidSprite from "../images/sprites/solid.svg"
// import profileImg from "../images/profile.webp"

export default () => {
  return (
    <>
    <Layout>
      <SEO title="Home" />
      <section className="sp-section sp-section-hero">
        <h1>Hi,</h1>
        <p>I am a creative front-end <br />Designer and Developer.</p>
        <div className="sp-social--container">
          <span>
            <a href="https://www.instagram.com/dev_sarojkumar/?hl=en" className="sp-link sp-social sp-social-insta" title="Instagram" target="_blank" rel="noopener noreferrer">
              <svg fill="url(#insta-grad) #999">
                <use href={BrandSprite + "#instagram"}></use>
              </svg>
            </a>
          </span>
          <span>
            <a href="https://github.com/sarojkumar007" className="sp-link sp-social sp-social-github" title="GitHub" target="_blank" rel="noopener noreferrer">
              <svg fill="#333">
                <use href={BrandSprite + "#github"}></use>
              </svg>
            </a>
          </span>
          <span>
            <a href="https://www.youtube.com/channel/UCANhxvv4PbbxDithrq8_LBw" className="sp-link sp-social sp-social-yt" title="YouTube" target="_blank" rel="noopener noreferrer">
              <svg fill="#ff0000">
                <use href={BrandSprite + "#youtube"}></use>
              </svg>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/saroj-kumar-007/" className="sp-link sp-social sp-social-linkedin" title="Linkedin" target="_blank" rel="noopener noreferrer">
              <svg fill="#0e76a8">
                <use href={BrandSprite + "#linkedin"}></use>
              </svg>
            </a>
          </span>
        </div>
      </section>
      <section className="sp-section sp-section-about">
        <h2 className="sp-heading">About Me</h2>
        <div>
          <img src="/profile.webp" alt="Saroj Kumar" className="sp-section-about--img" />
          <p className="sp-section-about--text">Hey! Thanks for being here.<br />I am a graduate in Computer Science and Engineering, studied in Govt. College of Engineering Kalahandi, Bhawanipatna.<br />My main domain is Web. I love JavaScript and currently working on Web Optimization and SEO. I love to design pixel perfect websites that are interactive and eye catching. I have hands-on experience in Node.js along with MongoDB. <Link to="/about" className="sp-link">Read More</Link></p>
        </div>
      </section>
      <section className="sp-section sp-section-loves">
        <div><h2 className="sp-heading">Things I Love</h2></div>
        <div className="sp-section-loves--container">
          <div className="sp-section-loves-item">
            <svg fill="url(#l-grad) #999">
              <use href={SolidSprite + "#puzzle-piece"}></use>
            </svg>
            <h3 className="sp-heading-2">Creative Coding</h3>
            <p>I love creative coding because, I design and code things that are eye-catching. It motivates me to work on my passion.</p>
          </div>
          <div className="sp-section-loves-item">
            <svg fill="url(#l-grad) #999">
              <use href={SolidSprite + "#code"}></use>
            </svg>
            <h3 className="sp-heading-2">Front-end</h3>
            <p>I'm more focused on front-end and love to work with React as well as pure HTML and CSS.</p>
          </div>
          <div className="sp-section-loves-item">
            <svg fill="url(#l-grad) #999">
              <use href={BrandSprite + "#js-square"}></use>
            </svg>
            <h3 className="sp-heading-2">JavaScript</h3>
            <p>I love JavaScript more than anything. I love to work with JAM Stack. A few lines here can't describe the love for JavaScript though.</p>
          </div>
        </div>
      </section>
      <section className="sp-section sp-section-skills">
        <h2 className="sp-heading">My Skill Set</h2>
        <div className="sp-section-skills--container">
          <div className="sp-section-skills--item" title="HTML5">
            <svg>
              <use href={BrandSprite + "#html5"}></use>
            </svg>
          </div>
          <div className="sp-section-skills--item" title="CSS3">
            <svg>
              <use href={BrandSprite + "#css3-alt"}></use>
            </svg>
          </div>
          <div className="sp-section-skills--item" title="JavaScript">
            <svg>
              <use href={BrandSprite + "#js-square"}></use>
            </svg>
          </div>
          <div className="sp-section-skills--item" title="Sass(CSS Framework)">
            <svg>
              <use href={BrandSprite + "#sass"}></use>
            </svg>
          </div>
          <div className="sp-section-skills--item" title="React Framework">
            <svg>
              <use href={BrandSprite + "#react"}></use>
            </svg>
          </div>
          <div className="sp-section-skills--item" title="Node.js">
            <svg>
              <use href={BrandSprite + "#node"}></use>
            </svg>
          </div>
        </div>
      </section>
    </Layout>
    </>
  )
}
