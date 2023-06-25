import React from "react"

import type { FC } from "react"

import { social } from "@config/index"
import { Link } from "gatsby"

import {
  SiGatsby,
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons"

import IconLogo from "./svgs/IconLogo"

const FooterMain: FC = () => {
  return (
    <>
      {/* <div className="footer_graphic w-full h-32"></div> */}
      <footer className="footer grid grid-cols-1 md:grid-cols-2 justify-center border-t border-t-gray-200 dark:border-t-gray-700">
        <div className="p-4 md:p-12 grid grid-cols-1 md:flex items-center gap-8 md:gap-2 justify-items-center">
          <Link to={"/"} className="cursor-pointer md:mr-8">
            <IconLogo className="w-10 h-10" />
          </Link>
          <div className="flex items-center space-x-2">
            <a
              href={`https://instagram.com/${social.instagram}`}
              target={`_blank`}
              rel={`noreferrer noopener`}
              className="footer_icon_link"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href={`https://github.com/${social.github}`}
              target={`_blank`}
              rel={`noreferrer noopener`}
              className="footer_icon_link"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href={`https://linkedin.com/in/${social.linkedin}`}
              target={`_blank`}
              rel={`noreferrer noopener`}
              className="footer_icon_link"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap space-x-2 justify-center items-center dark:text-gray-400">
            <span>Made with</span>
            <span
              className="material-symbols-rounded gradient_orange_text"
              style={{
                fontVariationSettings: "'FILL' 1",
              }}
            >
              favorite
            </span>
            <span>and</span>
            <SiGatsby
              color="#663399"
              className="w-6 h-6 bg-white rounded-full"
              title="Gatsby"
            />
            <span>by</span>
            <span
              className="text-gray-900 dark:text-white"
              title="Saroj Kumar Sahoo"
            >
              Saroj Kumar
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export { FooterMain }
