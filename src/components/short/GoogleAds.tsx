import React, { FC } from "react"

const GoogleAds: FC<any> = (props: any) => {
  const classProps = props.className || ""
  const { className: _, ...otherProps } = props

  return (
    <>
      <div className={`g-ads w-full ${classProps}`} {...otherProps}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9840063743847527"
          crossOrigin="anonymous"
        ></script>
        {/* SidebarAds */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9840063743847527"
          data-ad-slot="3126839442"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </>
  )
}

export default GoogleAds
