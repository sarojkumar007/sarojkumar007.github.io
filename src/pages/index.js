import React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import BrandSprite from "../images/sprites/brands.svg"
import SolidSprite from "../images/sprites/solid.svg"
// import profileImg from "../images/profile.webp"
import { SiPowershell } from "@react-icons/all-files/si/SiPowershell"
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs"
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { FaPython } from "@react-icons/all-files/fa/FaPython"
import { SiPhp } from "@react-icons/all-files/si/SiPhp"

// TODO: Transform every other icon into React-Icons

export default () => {

  const greetVisitor = () => {
    const dt = new Date().getHours();
    if (dt >= 5 && dt < 12) {
      return "Good Morning"
    }
    else if (dt >= 12 && dt < 18) {
      return "Good Afternoon"
    }
    else {
      return "Good Evening"
    }
  }

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <section className="sp-section sp-section-hero">
          <h1>{greetVisitor()} Wanderer!</h1>
          <p>I am an Automation Engineer and  <br />creative front-end Designer and Developer.</p>
          <p className="sp-heading-3 sp-text-mute" style={{ 'textTransform': 'uppercase', 'fontSize': '1.5rem', 'color': 'inherit  ', 'marginBottom': '0' }}>Let's Connect:</p><br />
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
            {/* <span>
              <a href="https://www.youtube.com/channel/UCANhxvv4PbbxDithrq8_LBw" className="sp-link sp-social sp-social-yt" title="YouTube" target="_blank" rel="noopener noreferrer">
                <svg fill="#ff0000">
                  <use href={BrandSprite + "#youtube"}></use>
                </svg>
              </a>
            </span> */}
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
            <p className="sp-section-about--text">Hey! Thanks for being here.<br />I am an Automation Engineer at <a className="sp-link" href="https://www.hcltech.com/" target="_blank" rel="noreferrer noopener">HCL</a> , Graduated in Computer Science and Engineering from Govt. College of Engineering Kalahandi, Bhawanipatna.<br /><br />My main domain is Automation Scripting and Web. I am currently working on Scripting (Windows and Linux) and Web Optimization and SEO. I love to design pixel perfect websites that are interactive and eye catching. I have hands-on experience in Node.js along with MongoDB. <Link to="/about/" className="sp-link">Read More</Link></p>
          </div>
        </section>
        <section className="sp-section sp-section-loves">
          <div><h2 className="sp-heading">Things I Love</h2></div>
          <div className="sp-section-loves--container">
            <div className="sp-section-loves-item">
              <svg fill="url(#l-grad) #999">
                <use href={SolidSprite + "#scroll"}></use>
              </svg>
              <h3 className="sp-heading-2">Automation Scripting</h3>
              <p>I do script to automate things which reduce the Man Power required to do certain handy tasks. Automating things improves productivity and efficiency. </p>
            </div>
            <div className="sp-section-loves-item">
              <svg fill="url(#l-grad) #999">
                <use href={SolidSprite + "#code"}></use>
              </svg>
              <h3 className="sp-heading-2">Creative Coding &amp; Front-end</h3>
              <p>I love creative coding because, I design and code things that are eye-catching. I love to work with React as well as pure HTML and CSS.</p>
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
              <h3 className="sp-text-mute">HTML5</h3>
            </div>
            <div className="sp-section-skills--item" title="CSS3">
              <svg>
                <use href={BrandSprite + "#css3-alt"}></use>
              </svg>
              <h3 className="sp-text-mute">CSS3</h3>
            </div>
            <div className="sp-section-skills--item" title="JavaScript">
              <svg>
                <use href={BrandSprite + "#js-square"}></use>
              </svg>
              <h3 className="sp-text-mute">JavaScript</h3>
            </div>
            <div className="sp-section-skills--item" title="Sass(CSS Framework)">
              <svg>
                <use href={BrandSprite + "#sass"}></use>
              </svg>
              <h3 className="sp-text-mute">Sass</h3>
            </div>
            <div className="sp-section-skills--item" title="React Framework">
              <svg>
                <use href={BrandSprite + "#react"}></use>
              </svg>
              <h3 className="sp-text-mute">React Framework</h3>
            </div>
            <div className="sp-section-skills--item" title="Node.js">
              <FaNodeJs title="Node.js" />
              <h3 className="sp-text-mute">Node.js</h3>
            </div>
            <div className="sp-section-skills--item">
              <SiPowershell title="PowerShell Scripting" />
              <h3 className="sp-text-mute">PowerShell</h3>
            </div>
            <div className="sp-section-skills--item">
              <SiGnubash title="Bash Scripting" />
              <h3 className="sp-text-mute">Bash</h3>
            </div>
            <div className="sp-section-skills--item">
              <SiPhp title="PHP" />
              <h3 className="sp-text-mute">PHP</h3>
            </div>
            <div className="sp-section-skills--item">
              <FaPython title="Python Programming" />
              <h3 className="sp-text-mute">Python</h3>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}