import type { Metadata } from 'next';
import type { Key } from 'react';

import Accordion from '@components/Accordion';
import DesignedSection from '@components/short/DesignedSection';

import ProjectCard from '@components/ProjectCard';
import { projectsList } from '@config/site_data';
import {
  SiAnsible,
  SiBlender,
  SiCitrix,
  SiGnubash,
  SiMicrosoftazure,
  SiMongodb,
  SiNodedotjs,
  SiPowershell,
  SiPython,
  SiRaspberrypi,
} from '@icons-pack/react-simple-icons';
import { ExternalLink } from 'react-feather';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  return (
    <>
      <header className="min-h-[50vh] md:min-h-[70vh] w-full header_projects">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[50vh] md:min-h-[70vh] px-4 py-20 md:px-16 md:py-36 grid place-items-center"
          designNo="six"
        >
          <h2 className="text-gray-50 text-3xl md:text-5xl font-medium">
            Projects,{' '}
            <span className="text-2xl md:text-3xl">I have done so far.</span>
          </h2>
        </DesignedSection>
      </header>
      <section className="relative w-full px-4 py-8 md:px-16 md:py-20">
        <div className="text-3xl md:text-5xl font-semibold">
          <h1 className="">
            My <span className="gradient_blue_text">Academic</span> and{' '}
            <span className="gradient_multi_text">Work</span> Projects.
          </h1>
        </div>
        <div className="my-4 grid grid-cols-1">
          <Accordion
            Head={
              <div className="flex items-center">
                <span className="material-symbols-rounded gradient_multi_text mr-4 basis-6">
                  auto_fix
                </span>
                <div className="flex-1 flex flex-wrap items-baseline">
                  <h3 className="text-xl md:text-2xl mr-2">
                    CFT and Workload Automation
                  </h3>
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    HCLTech, Noida
                  </span>
                </div>
              </div>
            }
            open={true}
          >
            <figure>
              <img
                src={'/project/workload_automation.webp'}
                alt="CFT and Workload Automation"
                width={240}
                height={160}
                style={{ objectPosition: 'top' }}
              />
            </figure>
            <p>
              Features that I worked on with Automation while solving Customer
              Facing Tasks and Workload Automation and providing solutions to
              client requirements.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="tag1">
                <SiPowershell />
                <span>PowerShell</span>
              </span>
              <span className="tag1">
                <SiGnubash />
                <span>Bash</span>
              </span>
              <span className="tag1">
                <SiPython />
                <span>Python</span>
              </span>
              <span className="tag1">
                <SiAnsible />
                <span>Ansible</span>
              </span>
            </div>
            <h3 className="text-base font-normal">Additional Tools used:</h3>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="tag1">
                <SiCitrix />
                <span>Citrix</span>
              </span>
              <span className="tag1">
                <SiMicrosoftazure />
                <span>Microsoft Azure</span>
              </span>
            </div>
            <ul className="ul">
              <li>
                Reduced workload and manual effort by 85% through Scripts.
              </li>
              <li>
                Provided automation solutions on tracks like Wintel, AD, Linux,
                Cloud and Backup.
              </li>
              <li>
                Revised, modularized and updated old code bases to modern
                development standards, reducing operational overheads and
                improving efficiency.
              </li>
              <li>
                Automated reporting, monitoring, maintaining infrastructures for
                vCenters, RVTools, Active Directory and Azure.
              </li>
            </ul>
          </Accordion>
          {/* -------------- */}
          <Accordion
            Head={
              <div className="flex items-center">
                <span className="material-symbols-rounded gradient_multi_text mr-4 basis-6">
                  monitoring
                </span>
                <div className="flex-1 flex flex-wrap items-baseline">
                  <h3 className="text-xl md:text-2xl mr-2">
                    Data Simulator on 2D/3D Space using Python
                  </h3>
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    DRDO, Chandipur
                  </span>
                </div>
              </div>
            }
            open={false}
          >
            <figure>
              <img
                src={'/project/data_sim.webp'}
                alt="Data Simulator on 2D/3D Space using Python"
                width={240}
                height={160}
              />
            </figure>
            <p>
              An Graphical User Interface for measuring cursor/pointer movement
              in 2D/3D space.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="tag1">
                <SiPython />
                <span>Python</span>
              </span>
              <span className="tag1">
                <span>tkinter (Tcl/Tk GUI toolkit)</span>
              </span>
            </div>
            <h3 className="text-base font-normal">Additional Tools used:</h3>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="tag1">
                <SiBlender />
                <span>Blender</span>
              </span>
            </div>
          </Accordion>
          {/* -------------- */}
          <Accordion
            Head={
              <div className="flex items-center">
                <span className="material-symbols-rounded gradient_multi_text mr-4 basis-6">
                  agriculture
                </span>
                <div className="flex-1 flex flex-wrap items-baseline">
                  <h3 className="text-xl md:text-2xl mr-2">
                    Application based Smart Irrigation System using Machine
                    Learning
                  </h3>
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    MHRD, Govt. of India
                  </span>
                </div>
              </div>
            }
            open={false}
          >
            <figure>
              <img
                src={'/project/sis.webp'}
                alt="Smart Irrigation System"
                width={240}
                height={160}
              />
            </figure>
            <p>
              Solution for Automatic Irrigation System using Machine Learning to
              predict Irrigation and Preserving Data in Database for future
              usage.
            </p>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="tag1">
                <SiPython />
                <span>Python</span>
              </span>
              <span className="tag1">
                <span className="material-symbols-rounded">smart_toy</span>
                <span>ML</span>
              </span>
              <span className="tag1">
                <SiNodedotjs />
                <span>Node.js</span>
              </span>
              <span className="tag1">
                <span>Micro Services</span>
              </span>
              <span className="tag1">
                <SiMongodb />
                <span>MongoDB</span>
              </span>
            </div>
            <h3 className="text-base font-normal">Additional Tools used:</h3>
            <div className="flex flex-wrap gap-2 my-4">
              <span className="tag1">
                <SiRaspberrypi />
                <span>Raspberry Pi Compute Module 4</span>
              </span>
              <span className="tag1">
                <span>DS18B20 Temperature Sensors</span>
              </span>
              <span className="tag1">
                <span>DHT11 Humidity Sensors</span>
              </span>
            </div>
            <p>
              Its an automated irrigation system that diagnoses data fetched
              from sensors like Temperature and Humidity of soil, then analizes
              the irrigation process. There are certain other parameters like
              moisture, crop type, time of year and so, which again play an
              important role on irrigation process. Weather prediction can also
              be an extended feature.
            </p>
          </Accordion>
        </div>
      </section>
      <section className="relative w-full px-4 pb-8 md:px-16 md:pb-20">
        <div className="text-3xl md:text-5xl font-semibold">
          <h1 className="">
            My <span className="gradient_blue_text">Short</span> Projects.
          </h1>
        </div>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projectsList.sideProjects.map((p) => (
            <ProjectCard key={p.id as Key} {...p} />
          ))}
        </div>
      </section>
      <section className="relative w-full px-4 pb-8 md:px-16 md:pb-20">
        <div className="banner">
          <div className="banner_content h-32 w-full grid grid-cols-1 md:flex items-center md:space-x-4 !p-4 md:!p-8">
            <div className="flex items-center">
              <div className="justify-self-start px-3 pt-2.5 pb-1.5 md:px-4 md:pt-3.5 md:pb-2.5 rounded-xl md:rounded-3xl bg-white">
                <span className="material-symbols-rounded gradient_multi_text text-2xl md:text-4xl">
                  campaign
                </span>
              </div>
              <p className="text-sm md:text-lg text-white ml-2 md:ml-4">
                You can access all these Mini Projects here,
              </p>
            </div>
            <a
              href={`https://sarojkumar.dev/Mini-Projects/`}
              target={`_blank`}
              rel="noreferrer noopener"
              className="flex items-center underline underline-offset-4 text-white group"
            >
              <span>Mini Projects</span>
              <ExternalLink className="w-4 h-4 ml-1 hidden group-hover:inline group-focus:inline" />
            </a>
          </div>
        </div>
      </section>
      <section className="relative w-full px-4 pb-8 md:px-16 md:pb-20">
        <div className="text-3xl md:text-5xl font-semibold">
          <h1 className="">
            Mini <span className="gradient_multi_text">Games</span>.
          </h1>
        </div>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projectsList.miniGames.map((p) => (
            <ProjectCard key={p.id as Key} {...p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
