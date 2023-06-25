import React, { FC } from "react"

const GoogleAds: FC<any> = (props: any) => {
  const classProps = props.className || ""
  const { className: _, ...otherProps } = props

  return (
    <>
      <div className={`g-ads w-full ${classProps}`} {...otherProps}></div>
    </>
  )
}

export default GoogleAds
