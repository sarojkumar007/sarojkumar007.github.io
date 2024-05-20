import React from "react"

import { siteConfig } from "@config/index"

import { SiFacebook, SiX, SiWhatsapp } from "@icons-pack/react-simple-icons"
import slugify from "@lib/slugify"

import { Link, graphql, useStaticQuery } from "gatsby"
import GoogleAds from "./short/GoogleAds"
import SideBarSection from "./short/SideBarSection"

interface BlogSideBarProps {
  shareLink?: string
}

export const GetTags = () => {
  const tags = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 1000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return tags
}

const BlogSideBar = ({ shareLink }: BlogSideBarProps) => {
  const tags = GetTags().allMarkdownRemark.group

  return (
    <>
      <div className="w-full md:w-96 md:basis-96 md:sticky md:top-28 mx-auto md:self-start">
        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl">
          <SideBarSection icon="auto_awesome" heading="Popular">
            <p>
              <Link
                to={`/blog/effectively-using-icons-in-websites`}
                className="blog_link"
              >
                Effectively using Icons in Websites ✌🏻
              </Link>
            </p>
            <p>
              <Link
                to={`/blog/how-to-start-front-end-web-development`}
                className="blog_link"
              >
                How to Start Front-end Web Development
              </Link>
            </p>
          </SideBarSection>
          <SideBarSection icon="campaign" heading="Message">
            <p>
              I'll be adding more posts soon. If you have any topic of interest
              or suggestion, contact me.
            </p>
            <Link to={`/contact`} className="blog_link">
              Suggest
            </Link>
          </SideBarSection>
          <SideBarSection
            icon="label"
            heading={
              <div className="flex-1 flex items-center justify-between">
                <span>Topics</span>
                {/* <Link to={`/blog/topic`} className="blog_link">
                  See All
                </Link> */}
              </div>
            }
          >
            <div className="flex items-center flex-wrap gap-2">
              {tags.map(
                (t: { fieldValue: string; totalCount: number }, i: number) => (
                  <Link
                    to={`/blog/tags/${slugify(t.fieldValue)}`}
                    key={i}
                    className="tag2"
                  >
                    {t.fieldValue}
                  </Link>
                )
              )}
            </div>
          </SideBarSection>
          <SideBarSection icon="share" heading="Spread the Word">
            <div className="flex items-center space-x-4">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURI(
                  `Check out this Blog - ${shareLink}`
                )}`}
                target={`_blank`}
                rel="noreferrer noopener"
              >
                <SiWhatsapp className="w-5 h-5" title="" color="#25D366" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                  shareLink as string
                )}&ref=plugin&src=share_button`}
                target={`_blank`}
                rel="noreferrer noopener"
              >
                <SiFacebook className="w-6 h-6" title="" color="#0866FF" />
              </a>
              <a
                href={`https://x.com/share?text=${encodeURI(
                  `Blog by ${siteConfig.title}`
                )}&url=${encodeURI(shareLink as string)}`}
                target={`_blank`}
                rel="noreferrer noopener"
              >
                <SiX className="w-6 h-6" title="" color="#000" />
              </a>
            </div>
          </SideBarSection>
        </div>
        <GoogleAds className="p-8 border rounded-md mt-4" />
      </div>
    </>
  )
}

export default BlogSideBar
