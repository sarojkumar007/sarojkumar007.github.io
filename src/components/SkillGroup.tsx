import { SkillGroupType } from "@lib/types"
import type { FC } from "react"
import React from "react"

const SkillGroup: FC<SkillGroupType> = ({ cat, s }) => {
  return (
    <>
      <div className="">
        <h3 className="text-2xl font-sailec font-medium text-gray-700 dark:text-gray-200 flex items-center">
          <span className="material-symbols-rounded">line_end_diamond</span>
          <span className="ml-2">{cat}</span>
        </h3>
        <div className="mt-4 grid grid-cols-2 md:flex md:flex-wrap gap-2 justify-center md:justify-start">
          {s.map((skl, i) => (
            <div
              key={i}
              className="bg-white border border-gray-400 flex items-center rounded-md px-2 py-2 md:min-w-[180px] hover:shadow-md"
            >
              {
                <skl.icon
                  title=""
                  className="skill_icon"
                  color={skl.color || ""}
                />
              }
              <div className="ml-4 flex flex-col justify-center">
                <h4 className="text-base font-medium text-gray-600">
                  {skl.skill}
                </h4>
                {/* <span className="text-sm text-gray-500">{skl.level}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillGroup
