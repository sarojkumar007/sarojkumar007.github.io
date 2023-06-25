import React from "react"
import BlogSideBar from "./BlogSideBar"

interface BlogLayoutProps {
  shareLink?: string
  children: React.ReactNode
}

const BlogLayout = ({ shareLink, children }: BlogLayoutProps) => {
  return (
    <>
      <div className="blog__container">
        {children}
        <BlogSideBar shareLink={shareLink} />
      </div>
    </>
  )
}

export default BlogLayout
