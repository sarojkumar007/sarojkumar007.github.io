import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "@components/Layout"
import Seo from "@components/Seo"
import SkillGroup from "@components/SkillGroup"
import DesignedSection from "@components/short/DesignedSection"
import { IconLike1, IconLike2, IconLike3 } from "@components/svgs/IconLike"
import PageGridSVG from "@components/svgs/PageGrid"
import { skills } from "@config/site_data"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <Layout>
      <header className="min-h-[70vh] md:min-h-[90vh] w-full header">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[70vh] md:min-h-[90vh] px-4 py-20 md:px-16 md:py-36 flex justify-center items-center"
          designNo={`two`}
        >
          <div className="">
            <h1 className="text-white">
              <span className="text-xl md:text-3xl font-medium">Hi, I'm</span>
              <br />
              <span className="text-4xl md:text-6xl font-semibold">
                Saroj Kumar Sahoo
              </span>
            </h1>
            <p className="my-4 font-sailec text-white text-base md:text-xl">
              Automation Engineer & Front-end Dev
              <span className="hidden md:inline">eloper</span>
            </p>

            <div className="mt-8">
              <button
                className="rounded-md text-[0.8125rem] font-semibold leading-5 bg-gray-50/10 hover:bg-gray-100/20 backdrop-blur-sm text-white disabled:hover:bg-gray-50/10"
                disabled
              >
                <div className="px-4 py-3 rounded-md flex items-center gap-2">
                  <span className="material-symbols-rounded">download</span>
                  <span>Download Resume</span>
                </div>
              </button>
            </div>
          </div>
        </DesignedSection>
      </header>
      {/* ABOUT SECTION */}
      <section className="relative w-full px-4 py-12 md:px-16 md:py-24">
        <div className="dots_base dots_base_light hidden dark:inline-block"></div>
        <div className="dots_base dots_base_dark dark:hidden"></div>

        <div className="text-center">
          <div className="text-3xl md:text-5xl font-semibold">
            <h1>
              A short summary of <br className="hidden md:inline" />
              <span className="gradient_multi_text">Who I am</span>.
            </h1>
            {/* <div className="w-full h-[6px] mt-2 gradient_multi rounded-sm"></div> */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 p-2 md:p-12">
          <figure className="grid place-items-center">
            <StaticImage
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/profile2.png"
              width={320}
              height={367}
              quality={100}
              alt="Profile"
            />
            {/* <img src={`/profile2.png`} alt="Profile" width={320} height={320} /> */}
          </figure>
          <div className="grid grid-items-center px-2 py-8 md:p-8">
            <div className="text-base md:text-lg font-sailec font-medium">
              <p>
                Automation Engineer at{" "}
                <a
                  href={`https://www.hcltech.com/`}
                  target={`_blank`}
                  rel="noreferrer noopener"
                  className="global_link"
                >
                  HCLTech, Noida
                </a>
                , where I design and implement automated solutions for various
                projects.
              </p>
              <br />
              <p>
                I have a Bachelor of Technology degree in Computer Science and
                Engineering from{" "}
                <a
                  href={`https://gcekbpatna.ac.in/`}
                  target={`_blank`}
                  rel="noreferrer noopener"
                  className="global_link"
                >
                  GCEK Bhawanipatna
                </a>
                , Odisha
              </p>
              <br />
              <p>
                I have a passion for Web Development and I enjoy creating
                dynamic and responsive website.
              </p>
              <br />
              <Link
                to={`/about`}
                className="!inline-flex items-center gap-2 transition-colors gradient_multi_text"
              >
                <span className="">More about me</span>
                <span className="material-symbols-rounded">trending_flat</span>
              </Link>
              <br />
              <br />
              <p className="text-sm flex gap-2">
                <span className="hashTag gradient_blue_text">#nightowl</span>
                <span className="hashTag gradient_blue_text">#engineer</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* LIKES SECTION */}
      <section className="relative w-full px-4 py-12 md:px-16 md:py-24">
        <PageGridSVG
          className="absolute bottom-0 left-1/2 text-gray-300 w-full max-w-[724px]"
          style={{
            transform: "translateX(-50%)",
          }}
        />
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-semibold">
            <h1>
              What I’m <span className="gradient_multi_text">passionate</span>{" "}
              and
              <br className="hidden md:inline" />{" "}
              <span className="gradient_blue_text">enthusiastic</span> about.
            </h1>
            {/* <div className="w-full h-[6px] mt-2 gradient_multi rounded-sm"></div> */}
          </div>
        </div>
        <div className="mt-12 p-2 md:p-12">
          <div className="grid place-items-center p-16">
            <div className="circular_wrap">
              <div className="circular circular_1">
                <div className="circular_box circular_box__1">
                  <StaticImage
                    src={`../images/assets/Like_1_active.png`}
                    alt="Like1"
                    layout="constrained"
                  />
                </div>
              </div>
              <div className="circular circular_2">
                <div className="circular_box circular_box__1">
                  <StaticImage
                    src={`../images/assets/Like_2_active.png`}
                    alt="Like2"
                    layout="constrained"
                  />
                </div>
              </div>
              <div className="circular circular_3">
                <div className="circular_box circular_box__1">
                  <StaticImage
                    src={`../images/assets/Like_3_active.png`}
                    alt="Like3"
                    layout="constrained"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 border-2 rounded-md backdrop-blur-sm card_1">
              <IconLike1 className="inline-block rounded-full w-12 h-12 mb-2" />

              <h3 className="text-lg text-multi-c1 font-semibold">
                Creative Coding &amp; Front-end
              </h3>
              <div className="font-sailec font-normal mt-4 space-y-4">
                <p className="text-base">
                  I love to create expressive and interactive projects with
                  code.
                </p>
                <p className="text-base">
                  Build eye-catching and high performant websites, SPAs, WebApps
                  that work across different devices 💻.
                </p>
                <p className="text-base">
                  I enjoy combining my coding skills with my artistic vision to
                  make unique and engaging web experiences.
                </p>
              </div>
            </div>
            {/* -------- */}
            <div className="p-6 border-2 rounded-md backdrop-blur-sm card_1">
              <IconLike2 className="inline-block rounded-full w-12 h-12 mb-2" />

              <h3 className="text-lg text-multi-c1 font-semibold">
                Automation Scripting
              </h3>
              <div className="font-sailec font-normal mt-4 space-y-4">
                <p className="text-base">
                  An Automation Engineer who uses PowerShell and Bash to create
                  powerful and efficient solutions for various challenges.
                </p>
                <p className="text-base">
                  PowerShell to leverage its cross-platform capabilities and
                  rich command set. Bash to harness its simplicity and
                  flexibility with{" "}
                  <span className="whitespace-nowrap">speed ⚡.</span>
                </p>
                <p className="text-base">
                  I enjoy combining my coding skills with my problem-solving
                  abilities to automate tasks that save time and resources.
                </p>
              </div>
            </div>
            {/* -------- */}
            <div className="p-6 border-2 rounded-md backdrop-blur-sm card_1">
              <IconLike3 className="inline-block rounded-full w-12 h-12 mb-2" />

              <h3 className="text-lg text-multi-c1 font-semibold">
                JavaScript
              </h3>
              <div className="font-sailec font-normal mt-4 space-y-4">
                <p className="text-base">
                  JavaScript has been one of my favourite languages and will
                  continue to be.
                </p>
                <p className="text-base">
                  I love to experiment a ton of things with it, starting from
                  simple HelloWorld app to complex Web Applications.
                </p>
                <p className="text-base">
                  React and Angular with TypeScript are my preferred choices
                  without a doubt 😊. <br />
                  <span className="text-sm">
                    A few lines here can't describe my love for JavaScript
                    though.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SKILLS SECTION */}
      <section className="relative w-full px-4 py-8 md:px-10 md:py-12">
        <div className="text-center md:text-left">
          <div className="text-3xl md:text-5xl font-semibold">
            <h1 className="">
              My areas of <span className="gradient_blue_text">competence</span>{" "}
              and <br className="hidden md:inline" />
              <span className="gradient_multi_text">knowledge</span>.
            </h1>
            {/* <div className="w-full h-[6px] mt-2 gradient_multi rounded-sm"></div> */}
          </div>
        </div>
        <div className="mt-8 md:mt-12 space-y-8">
          {Object.entries(skills).map(([c, v], i) => (
            <SkillGroup key={i} cat={c} s={v} />
          ))}
        </div>
        <p className="mt-8 text-sm font-sailec">
          <span className="font-medium">P.S. :</span> I'm constantly pushing
          myself learn new things and refine old ones 😋
        </p>
      </section>
      {/* LIB SECTION */}
      <section className="relative w-full px-4 py-5 md:px-10 md:py-10 gradient_multi">
        <div className="bg-white/80 rounded-md backdrop-blur-sm">
          <h1 className="text-gray-800 text-3xl md:text-5xl text-center md:text-left px-4 md:px-8 pt-8">
            A brand new <span className="gradient_multi_text">CSS Library</span>
            {` `}is brewing!
          </h1>
          <p className="px-8 my-8 text-xl dark:text-gray-700">
            <span className="gradient_multi_text">Minute-CSS</span> is a
            component based CSS library, made just for developers{" "}
            <br className="hidden md:inline" /> who can use most commonly used
            components in just a minute.
          </p>
          <div className="px-8 pb-8 space-y-2">
            <p className="text-gray-600 dark:text-gray-700 text-xl">
              Interested to <span className="text-gray-900">Open Source</span>?
            </p>
            <p className="text-md dark:text-gray-700">
              Email me through <Link to="/contact" className="blog_link">contact page</Link> to contribute.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

export const Head = ({ data: { site } }) => {
  return <Seo title={`Home`} description={site.siteMetadata.description} />
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`
