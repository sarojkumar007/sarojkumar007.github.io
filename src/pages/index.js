import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ChevronsRight, Download, ExternalLink } from "react-feather"
import { otherLinks, resumeLink, skills } from "../data/siteData"
import ProfileImg from '../images/profile.png'
import Int01 from '../images/int01.png'
import Int02 from '../images/int02.png'
import Int03 from '../images/int03.png'
import SkillGroup from "../components/SkillGroup"
import { Github } from "@icons-pack/react-simple-icons"

const Index = () => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  const [currentInt, setCurrentInt] = useState(0);

  useEffect(() => {
    const anim = setInterval(() => {
      // console.log(currentInt)
      setCurrentInt(currentInt + 1 > 2 ? 0 : currentInt + 1)
    }, 5000);
    return () => {
      clearInterval(anim)
    }
  }, [currentInt, setCurrentInt])

  return (
    <Layout fType="1">
      <Seo title="Saroj Kumar Sahoo - Creative Front-end Developer" />
      <section className="sec hero abs_center">
        <figure>
          <div className="hero__img"></div>
          <svg>
            <use href="#three"></use>
          </svg>
        </figure>
        <div className="hero__content">
          <span className="heading__meta fadeIn">Hi, I'm</span>
          <h1 className="heading fadeIn">
            <span className="heading__top">Saroj Kumar Sahoo</span>
            <span className="heading__bottom">Automation Engineer &amp; Front-End Web Developer</span>
          </h1>
          <div className="cta">
            <a className="cta__btn disabled" href={resumeLink} download>
              <Download />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>
      <section className="sec about">
        <h2 className="sec__heading">
          <span>About Me</span>
        </h2>
        <div className="sec__content about__content">
          <div className="about__content--info abs_center">
            <div className="">
              <p>Hello, I'm an Automation Engineer, at <a target="_blank" rel="noreferrer noopener" href={otherLinks.work.site} className="icon_link right global__link link_ext">
                <span>{otherLinks.work.title}</span>
                <ExternalLink />
              </a> based on {otherLinks.work.location}. Graduated from <a href={otherLinks.college.site} target="_blank" rel="noreferrer noopener" className="icon_link right global__link link_ext">
                  <span>{otherLinks.college.title}</span>
                  <ExternalLink />
                </a>, {otherLinks.college.location}.</p>
              <p>
                My main work of interest is Automation and Web. I love to design and code pixel-perfect websites.
                </p>
              <p>
                More about me, <Link to="/about/" className="global__link icon_link right">
                  <span>here</span>
                  <ChevronsRight />
                </Link>
              </p>
              <div className="about__tags">
                <p className="about__tag">
                  <span className="h">#</span>
                  <span>nightowl</span>
                </p>
                <p className="about__tag">
                  <span className="h">#</span>
                  <span>engineer</span>
                </p>
              </div>
            </div>

          </div>
          <figure className="about__content--picture abs_center">
            <img src={ProfileImg} alt="Profile" />
          </figure>
        </div>
      </section>
      <section className="sec interest">
        <div className="sec_dots" tabIndex="-1"></div>
        <h2 className="sec__heading right">
          <span>Things I love</span>
        </h2>
        <div className="sec__content interest__content">
          <div className="interest__content__comp abs_center">
            <div className="composition">
              <img alt="Int01" src={Int01} className={`composition__box composition__box--${((currentInt + 2) % 3) + 1}`} />
              <img alt="Int02" src={Int02} className={`composition__box composition__box--${((currentInt + 1) % 3) + 1}`} />
              <img alt="Int03" src={Int03} className={`composition__box composition__box--${((currentInt + 0) % 3) + 1}`} />
            </div>
          </div>
          <div className="interest__content__details abs_center">
            <article className={`interest__content__art interest__content__art--1 ${((currentInt + 2) % 3) + 1 === 1 ? 'current' : ''}`}>
              <h3 className="sub__heading">Automation Scripting</h3>
              <p className="text">I do script in PowerShell and Bash to automate stuff for many clients.</p>
              <p className="text">Automating things improves productivity and efficiency.</p>
            </article>
            <article className={`interest__content__art interest__content__art--2 ${((currentInt + 1) % 3) + 1 === 1 ? 'current' : ''}`}>
              <h3 className="sub__heading">Creative Coding &amp; Front-end</h3>
              <p className="text">I design and code eye-catching and high performant websites, SPAs, WebApps.
              </p>
              <p className="text">I love to work with React as well as pure HTML,CSS.</p>
            </article>
            <article className={`interest__content__art interest__content__art--3 ${((currentInt + 0) % 3) + 1 === 1 ? 'current' : ''}`}>
              <h3 className="sub__heading">JavaScript</h3>
              <p className="text">JavaScript has been one of my favourite languages and will continue to be.</p>
              <p className="text">I love to experiment a ton of things with it, starting from Hello World App to a ML Model.</p>
              <p className="text">A few lines here can't describe the love for JavaScript though.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="sec skills">
        <div className="sk">
          <div className="dots_base" tabIndex="-1"></div>
          <div className="skills_wrap">
            <h2 className="sec__heading2">
              <span>My Skills</span>
            </h2>
            <div className="skills__content">
              {Object.entries(skills).map(([c, v], i) => <SkillGroup key={i} cat={c} s={v} />)}
            </div>
          </div>
        </div>
      </section>
      <section className="sec concept">
        <h2 className="sec__heading">
          <span>A brand new CSS Library is on the way!</span>
        </h2>
        <p className="sec__text">Something's brewing ...</p>
        <div className="sec__content concept__content">
          <div className="concept__details">
            <p className="text"><span className="text_base">Minute-CSS</span> is a component based CSS library, made just for developers who can use most commonly used components in just a minute.</p>
            <div className="cta">
              <a href={otherLinks.lib.site} className="btn btn-p" target="_blank" rel="noreferrer noopener">
                <Github />
                <span>Check Library</span>
              </a>
              <div className="or">OR</div>
              <p className="text_mute">If you don't see this and want to contribute, contact me with your github username/email id.</p>
            </div>
          </div>
          <div className="concept__display"></div>
        </div>
      </section>
    </Layout>
  )
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
