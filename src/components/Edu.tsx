import React from "react"

import type { Education } from "@lib/types"
import type { FC } from "react"

type EduProps = {
  ed: Education
}

{
  /* <ol className="relative border-l border-gray-200 dark:border-gray-700"></ol> */
}

const Edu: FC<EduProps> = ({ ed }) => {
  return (
    <>
      <li className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-700/50 dark:bg-blue-200">
          <span className="material-symbols-rounded text-sm gradient_multi_text">
            home_work
          </span>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {ed.title}
        </h3>
        <div className="flex items-center space-x-2 mb-2">
          <time className="block text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
            <>
              From {ed.duration.from} to {ed.duration.to}
            </>
          </time>
          <span className="inline-block overflow-hidden rounded-full w-1.5 h-1.5  gradient_multi"></span>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {ed.stream || ""}
          </p>
        </div>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {ed.location}
        </p>
        {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {ed.description}
        </p> */}
      </li>
    </>
  )
}

export default Edu
