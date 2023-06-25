import React from "react"

import type { FC, Key } from "react"

import { formatDate } from "@lib/index"
import { ShortProject } from "@lib/types"
import { GitHub } from "react-feather"

const ProjectCard: FC<ShortProject> = ({
  id,
  name,
  image,
  date,
  desc,
  gitLink,
  liveLink,
  tags,
}) => {
  return (
    <>
      <div className="design">
        <div className="project_card">
          <figure className="w-full h-24 overflow-hidden rounded-lg mb-4">
            <img
              src={image}
              alt={name}
              className="h-[inherit] w-[inherit] object-cover object-center"
            />
          </figure>
          <h3 className="text-lg md:text-xl gradient_multi_text font-medium">
            {name}
          </h3>
          <div className="flex flex-wrap items-center mb-2">
            <div className="flex flex-wrap items-center text-sm space-x-1 my-2 mr-2">
              <span className="material-symbols-rounded gradient_multi_text text-xl">
                calendar_month
              </span>
              <span className="text-gray-600 dark:text-gray-500">
                <>{formatDate(date)}</>
              </span>
            </div>
            <div className="flex flex-wrap items-center text-sm space-x-1 my-2">
              <span className="material-symbols-rounded gradient_blue_text text-xl">
                sell
              </span>
              {tags.map(t => (
                <span key={t as Key} className="tag2">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="mb-4 text-sm font-sailec">{desc}</p>
          <div className="flex justify-end mt-auto">
            <div className="flex items-center space-x-2">
              {liveLink && (
                <a type="button" href={liveLink} className="button_2">
                  <span className="material-symbols-rounded gradient_multi_text text-xl mr-1">
                    captive_portal
                  </span>
                  <span className="gradient_multi_text">Live Link</span>
                </a>
              )}

              {gitLink && (
                <a
                  type="button"
                  href={gitLink}
                  className="button_2 !bg-gray-950 !border-gray-950 shadow-md shadow-gray-600"
                >
                  <GitHub className="w-5 h-5 mr-1 text-white" />
                  <span className="text-white">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
