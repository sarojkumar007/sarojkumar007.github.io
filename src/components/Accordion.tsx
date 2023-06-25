import React from "react"

import type { FC, JSX, ReactNode } from "react"
import { useState } from "react"
import { ChevronDown } from "react-feather"

type AccordionProps = {
  Head: JSX.Element | JSX.Element[]
  children: ReactNode
  open?: boolean
}

const Accordion: FC<AccordionProps> = ({ Head, children, open }) => {
  const [isActive, setIsActive] = useState(open || false)

  return (
    <>
      <div className={`accordion ${isActive ? "active" : ""}`}>
        <div
          className="accordion__head"
          role={`button`}
          onClick={() => {
            setIsActive(a => !a)
          }}
          onKeyUp={e => {
            if (e.key === " " || e.code == "Space") setIsActive(a => !a)
          }}
          tabIndex={0}
        >
          {Head}
          <span className="accordion__head_anchor">
            <ChevronDown />
          </span>
        </div>
        <div className="accordion__body">{children}</div>
      </div>
    </>
  )
}

export default Accordion
