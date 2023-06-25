import React from "react"

import { Experience } from "@lib/types"
import type { FC } from "react"

type ExpProps = {
  exp: Experience
}

const Exp: FC<ExpProps> = ({ exp }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-start mb-4 md:space-x-2">
        <span className="material-symbols-rounded self-start mt-1 mr-1 gradient_blue_text">
          rocket_launch
        </span>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:items-baseline md:space-x-2">
            <h3 className="text-2xl">{exp.role}</h3>
            <span className="text-sm text-gray-400">{exp.location}</span>
          </div>
          {exp.duration.from && exp.duration.to && (
            <p className="mr-auto mt-1 mb-2 text-sm gradient_multi_text">
              {exp.duration.from} &mdash; {exp.duration.to}
            </p>
          )}
          <p className="text-base">{exp.desc}</p>
        </div>
      </div>
    </>
  )
}

export default Exp
