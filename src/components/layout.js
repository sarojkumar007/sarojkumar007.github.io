import React, { useState, useEffect } from "react"
import '../styles/style.min.css'

import Header from './header'
import Footer from "./footer";
import { Link as GLink } from "gatsby";
import { Info, Award, Home, Mail, Edit3, Sun, Moon, Link } from 'react-feather'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import config from '../data/config';
import { Github, Instagram, Linkedin } from "@icons-pack/react-simple-icons";

const Layout = ({ fType = "0", children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // SET THEME BASED ON PREVIOUS CHOICE
    window.document.querySelector(':root').setAttribute('dark-mode', isDark);
    const themePref = window.localStorage.getItem('dark-theme');
    (themePref && (themePref === 'true' || themePref === 'false')) ? setIsDark(JSON.parse(themePref)) : window.localStorage.setItem('dark-theme', JSON.stringify(isDark));

    // HANDLER FOR NAVIGATION

    const handleWinCLick = (e) => {
      const clickElem = e.target;
      if (!(clickElem.closest('.sideBar') || clickElem.closest('.header'))) {
        if (isNavOpen) { setIsNavOpen(false) }
      }
    }

    window.addEventListener('click', handleWinCLick, true)

    return () => {
      window.removeEventListener('click', handleWinCLick, true)
    }

  }, [isDark, setIsDark, isNavOpen, setIsNavOpen])

  return (
    <>
      <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
        <linearGradient id="l-grad" x2="1" y2="1">
          <stop offset="0%" stopColor="#0575E6" />
          <stop offset="100%" stopColor="#021B79" />
        </linearGradient>
      </svg>
      <svg style={{ width: 0, height: 0, position: "absolute" }} aria-hidden="true" focusable="false">
        <symbol id="one" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="var(--default-bg-color)" d="M0,96L1440,320L1440,320L0,320Z"></path>
        </symbol>
        <symbol id="two" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="var(--default-bg-color)" d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,197.3C672,203,768,149,864,138.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </symbol>
        <symbol id="three" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="var(--default-bg-color)" d="M0,128L30,144C60,160,120,192,180,197.3C240,203,300,181,360,192C420,203,480,245,540,245.3C600,245,660,203,720,192C780,181,840,203,900,181.3C960,160,1020,96,1080,80C1140,64,1200,96,1260,122.7C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </symbol>
        <symbol id="four" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="var(--default-bg-color)" d="M0,192L120,192C240,192,480,192,720,165.3C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </symbol>
        <symbol id="five" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="var(--default-bg-color)" d="M0,32L120,69.3C240,107,480,181,720,192C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </symbol>
        <symbol id="six" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="var(--default-bg-color)" d="M0,32L120,64C240,96,480,160,720,160C960,160,1200,96,1320,64L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </symbol>
      </svg>
      <div className={`mainWrapper ${isNavOpen ? 'open' : ''}`}>
        <aside className="sideBar">
          <div className="sideLinks">
            <GLink to="/" className="sideLink" activeClassName="current" title={isNavOpen ? '' : 'Home'}>
              <Home className="sideLink__icon" />
              <span>Home</span>
            </GLink>
            <GLink to="/about/" className="sideLink" activeClassName="current" title={isNavOpen ? '' : 'About'}>
              <Info className="sideLink__icon" />
              <span>About</span>
            </GLink>
            <GLink to="/projects/" className="sideLink" activeClassName="current" title={isNavOpen ? '' : 'Projects'} >
              <Award className="sideLink__icon" />
              <span>Projects</span>
            </GLink>
            <GLink to="/contact/" className="sideLink" activeClassName="current" title={isNavOpen ? '' : 'Contact'} >
              <Mail className="sideLink__icon" />
              <span>Contact</span>
            </GLink>
            <GLink to="/blog/" className="sideLink" activeClassName="current" partiallyActive={true} title={isNavOpen ? '' : 'Blog'} >
              <Edit3 className="sideLink__icon" />
              <span>Blog</span>
            </GLink>
            <GLink to="/resources/" className="sideLink" activeClassName="current" title={isNavOpen ? '' : 'Resources'} >
              <Link className="sideLink__icon" />
              <span>Resources</span>
            </GLink>
          </div>
          <div className="bottom">

            <div className="sideBar_social">
              <a href={config.instagramLink} target="_blank" rel="noreferrer noopener">
                <Instagram title="" size={24} />

              </a>
              <a href={config.githubLink} target="_blank" rel="noreferrer noopener">
                <Github title="" size={24} />
              </a>
              <a href={config.linkedinLink} target="_blank" rel="noreferrer noopener">
                <Linkedin title="" size={24} />
              </a>
            </div>

            <button className="themeSwitch" onClick={() => {
              setIsDark(!isDark);
              window.localStorage.setItem('dark-theme', JSON.stringify(!isDark));
            }} title={isDark ? 'Dark Theme' : 'Light Theme'}>
              <Sun
                className="themeIcon lightSwitch"
                style={{ 'display': isDark ? 'none' : 'inline-block' }}
              />
              <Moon
                className="themeIcon darkSwitch"
                style={{ 'display': isDark ? 'inline-block' : 'none' }}
              />
              <span className="themeText" style={{ 'display': isNavOpen ? 'flex' : 'none' }}>
                <span>{isDark ? 'Dark' : 'Light'}</span>
                <FontAwesomeIcon icon={faToggleOff} style={{ 'display': isDark ? 'none' : 'inline-block' }} />
                <FontAwesomeIcon icon={faToggleOn} style={{ 'display': isDark ? 'inline-block' : 'none' }} />
              </span>
            </button>
          </div>
        </aside>
        <Header onNavTrigger={() => { setIsNavOpen(!isNavOpen) }} />
        <div className="mainContent">
          <main className="main">{children}</main>
          <Footer type={fType} />
        </div>
      </div>
    </>
  )
}

export default Layout
