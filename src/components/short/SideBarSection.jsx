import React from "react"

const SideBarSection = ({ icon, heading, children }) => {
  return (
    <>
      <h3 className="text-xl flex items-center">
        <span className="material-symbols-rounded gradient_multi_text mr-2">
          {icon}
        </span>
        {heading}
      </h3>
      <div className="my-4 space-y-2">{children}</div>
    </>
  )
}

export default SideBarSection
