import {
  faBullhorn,
  faGamepad,
  faMagic,
  faMedal,
  faRobot,
  faSeedling,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Ansible,
  Blender,
  Citrix,
  Gnubash,
  Microsoftazure,
  Mongodb,
  Nodedotjs,
  Powershell,
  Python,
  Raspberrypi,
} from '@icons-pack/react-simple-icons';
import React from 'react';
import { ExternalLink } from 'react-feather';
import Accordion from '../components/Accordion';
import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/seo';
import { siteUrl } from '../data/config';
import { projectsList } from '../data/siteData';
import DataSimImg from '../images/project/data_sim.webp';
import SISImg from '../images/project/sis.webp';
import WLAutoImg from '../images/project/workload_automation.webp';

const Projects = () => {
  return (
    <Layout>
      <Seo title="Projects | Saroj Kumar Sahoo" />
      <section className="sec sec_hero sec_hero--project abs_center">
        <h2 className="hero_head">
          Projects, <small>I have done</small>.
        </h2>
        <svg>
          <use href="#six"></use>
        </svg>
      </section>
      <section className="sec projects">
        {/* ----- */}
        <div className="projects__group">
          <div className="projects__group--head">
            <FontAwesomeIcon icon={faUniversity} />
            <h3>Academic / Featured Projects</h3>
          </div>
          <div className="">
            {/* --------------- */}
            <Accordion
              Head={
                <div className="v_center">
                  <FontAwesomeIcon
                    icon={faMagic}
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      flexBasis: '2.4rem',
                      marginRight: '1rem',
                      color: 'var(--c-2)',
                    }}
                  />
                  <div className="tags__wrap fx1">
                    <h3 className="projects__head">
                      CFT &amp; Workload Automation
                    </h3>
                    <span className="projects__head_sub">
                      <small className="mute">HCLTech, Noida, India</small>
                    </span>
                  </div>
                </div>
              }
              open={false}
            >
              <figure>
                <img
                  src={WLAutoImg}
                  alt="CFT and Workload Automation"
                  style={{ objectPosition: 'top' }}
                />
              </figure>
              <div className="projects__body">
                <p className="text text_justify">
                  Lists points that I worked on with Automation while solving
                  Customer Facing Tasks and Workload Automation and providing
                  solutions to client requirements.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <p>
                    <strong>Technologies Used:</strong>
                  </p>
                  <div className="f_wrap">
                    <div className="tech_tag">
                      <Powershell />
                      <span>PowerShell</span>
                    </div>
                    <div className="tech_tag">
                      <Gnubash />
                      <span>Bash</span>
                    </div>
                    <div className="tech_tag">
                      <Python />
                      <span>Python</span>
                    </div>
                    <div className="tech_tag">
                      <Ansible />
                      <span>Ansible</span>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <p>
                    <strong>Additional Tools Used:</strong>
                  </p>
                  <div className="f_wrap">
                    <div className="tech_tag">
                      <Citrix />
                      <span>Citrix</span>
                    </div>
                    <div className="tech_tag">
                      <Microsoftazure />
                      <span>Microsoft Azure</span>
                    </div>
                  </div>
                </div>
                <p className="text text_justify">
                  <ul style={{ paddingLeft: 24, fontFamily: 'inherit' }}>
                    <li>
                      Reduced workload and manual effort by 85% through Scripts.
                    </li>
                    <li>
                      Provided automation solutions on tracks like Wintel, AD,
                      Linux, Cloud and Backup.
                    </li>
                    <li>
                      Revised, modularized and updated old code bases to modern
                      development standards, reducing operational overheads and
                      improving efficiency.
                    </li>
                    <li>
                      Automated reporting, monitoring, maintaining
                      infrastructures for vCenters, RVTools, Active Directory
                      and Azure.
                    </li>
                  </ul>
                </p>
              </div>
            </Accordion>
            {/* --------------- */}
            <Accordion
              Head={
                <div className="v_center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      flexBasis: '2.4rem',
                      marginRight: '1rem',
                      color: 'var(--c-2)',
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <div className="tags__wrap fx1">
                    <h3 className="projects__head">
                      Data Simulator on 2D/3D Space using Python
                    </h3>
                    <span className="projects__head_sub">
                      <small className="mute">DRDO, Chandipur</small>
                    </span>
                  </div>
                </div>
              }
              open={false}
            >
              <figure>
                <img src={DataSimImg} alt="Data Simulator" />
              </figure>
              <div className="projects__body">
                <p className="text text_justify">
                  An Graphical User Interface for measuring cursor/pointer
                  movement in 2D/3D space.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <p>
                    <strong>Technologies Used:</strong>
                  </p>
                  <div className="f_wrap">
                    <div className="tech_tag">
                      <Python />
                      <span>Python</span>
                    </div>
                    <div className="tech_tag">
                      <span>tkinter (Tcl/Tk GUI toolkit)</span>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <p>
                    <strong>Additional Tools Used:</strong>
                  </p>
                  <div className="f_wrap">
                    <div className="tech_tag">
                      <Blender />
                      <span>Blender</span>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
            {/* --------------- */}
            <Accordion
              Head={
                <div className="v_center">
                  <FontAwesomeIcon
                    icon={faSeedling}
                    style={{
                      width: '2.4rem',
                      height: '2.4rem',
                      flexBasis: '2.4rem',
                      marginRight: '1rem',
                      color: 'var(--c-2)',
                    }}
                  />
                  <div className="tags__wrap fx1">
                    <h3 className="projects__head">
                      Application based Smart Irrigation System using Machine
                      Learning
                    </h3>
                    <span className="projects__head_sub">
                      <small className="mute">MHRD, Govt. of India</small>
                    </span>
                  </div>
                </div>
              }
              open={true}
            >
              <figure>
                <img src={SISImg} alt="Smart Irrigation System" />
              </figure>
              <div className="projects__body">
                <p className="text text_justify">
                  Solution for Automatic Irrigation System using Machine
                  Learning to predict Irrigation and Preserving Data in Database
                  for future usage.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <p>
                    <strong>Technologies Used:</strong>
                  </p>
                  <div className="f_wrap">
                    <div className="tech_tag">
                      <Python />
                      <span>Python</span>
                    </div>
                    <div className="tech_tag">
                      <FontAwesomeIcon icon={faRobot} />
                      <span>ML</span>
                    </div>
                    <div className="tech_tag">
                      <Nodedotjs />
                      <span>Node.js</span>
                    </div>
                    <div className="tech_tag">
                      <span>Micro Services</span>
                    </div>
                    <div className="tech_tag">
                      <Mongodb />
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <p>
                    <strong>Additional Tools Used:</strong>
                  </p>
                  <div className="f_wrap">
                    <div className="tech_tag">
                      <Raspberrypi />
                      <span>Raspberry Pi Compute Module 4</span>
                    </div>
                    <div className="tech_tag">
                      <span>DS18B20 Temperature Sensors</span>
                    </div>
                    <div className="tech_tag">
                      <span>DHT11 Humidity Sensors</span>
                    </div>
                  </div>
                </div>
                <p className="text text_justify">
                  {' '}
                  Its an automated irrigation system that diagnoses data fetched
                  from sensors like <strong>Temperature</strong> and{' '}
                  <strong>Humidity</strong> of soil, then analizes the
                  irrigation process. There are certain other parameters like
                  moisture, crop type, time of year and so, which again play an
                  important role on irrigation process. Weather prediction can
                  also be an extended feature.
                </p>
              </div>
            </Accordion>
            {/* --------------- */}
          </div>
        </div>
        {/* ----- */}
        <div className="projects__group">
          <div className="projects__group--head">
            <FontAwesomeIcon icon={faMedal} />
            <h3>Mini Projects</h3>
          </div>
          <div className="projects__group--body">
            {projectsList.sideProjects.map((p, i) => (
              <ProjectCard
                key={i}
                id={p.id}
                name={p.name}
                date={p.date}
                tags={p.tags}
                img={p.image}
                desc={p.desc}
                liveLink={p.liveLink}
                gitLink={p.gitLink}
              />
            ))}
          </div>
        </div>
        {/* ----- */}

        <div className="announce">
          <FontAwesomeIcon icon={faBullhorn} className="announce_icon" />
          <div className="content">
            All these Mini Projects can also be accessed here,
          </div>
          <a
            className="announce_link"
            href={`${siteUrl}/Mini-Projects/`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>Mini Projects</span>
            <ExternalLink />
          </a>
        </div>

        {/* ----- */}
        <div className="projects__group">
          <div className="projects__group--head">
            <FontAwesomeIcon icon={faGamepad} />
            <h3>Mini Games</h3>
          </div>
          <div className="projects__group--body">
            {projectsList.miniGames.map((p, i) => (
              <ProjectCard
                key={i}
                id={p.id}
                name={p.name}
                date={p.date}
                tags={p.tags}
                img={p.image}
                desc={p.desc}
                liveLink={p.liveLink}
                gitLink={p.gitLink}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
