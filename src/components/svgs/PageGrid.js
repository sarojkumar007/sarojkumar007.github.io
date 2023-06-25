import React from "react"

const PageGridSVG = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 724 244"
      {...props}
    >
      <g stroke="currentColor" clipPath="url(#clip0_40_2)">
        <path
          strokeLinecap="round"
          strokeLinejoin="bevel"
          d="M40 180V60M80 220V20M120 240V0M200 240V0M160 160V20M240 220V60M320 240V0M560 240V0M680 180V60M640 220V20M600 240V0M520 140V20M280 240V0M360 100V0M400 240V0M440 240V0M480 240V0"
        ></path>
        <path d="M60 39.5L660 39.5"></path>
        <path d="M0 79.5L720 79.5"></path>
        <path d="M0 119.5L720 119.5"></path>
        <path d="M0 159.5L360 159.5"></path>
        <path d="M420 159.5L720 159.5"></path>
        <path d="M60 199.5L660 199.5"></path>
        <path d="M359.5 240L359.5 140"></path>
      </g>
      <defs>
        <clipPath id="clip0_40_2">
          <path fill="#fff" d="M0 0H724V244H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default PageGridSVG
