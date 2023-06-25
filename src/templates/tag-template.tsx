import React from "react"

import BlogLayout from "@components/BlogLayout"
import BlogPreview from "@components/BlogPreview"
import Layout from "@components/Layout"
import Seo from "@components/Seo"
import DesignedSection from "@components/short/DesignedSection"
import { siteConfig } from "@config/index"
import slugify from "@lib/slugify"
import { BlogPostGQL } from "@lib/types"
import { Link, graphql } from "gatsby"

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <header className="min-h-[30vh] md:min-h-[40vh] w-full header_blog">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[30vh] md:min-h-[40vh] px-4 py-20 md:px-16 md:py-36 grid place-items-center"
          designNo="six"
        >
          <h2 className="text-gray-50 text-3xl md:text-5xl font-medium">
            Blogs{" "}
            <span className="text-2xl md:text-3xl">tagged with {tag}</span>
          </h2>
        </DesignedSection>
      </header>
      <BlogLayout
        shareLink={`${siteConfig.homepage}/blog/tags/${slugify(tag)}`}
      >
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <span className="material-symbols-rounded text-2xl mr-2">
              page_info
            </span>
            <span className="text-lg md:text-xl">
              {totalCount} {totalCount > 1 ? "Posts" : "Post"}
            </span>
          </div>
          <div className="space-y-4">
            {nodes.map((post: BlogPostGQL) => {
              return <BlogPreview key={post.fields.slug} post={post} />
            })}
          </div>
        </div>
      </BlogLayout>
    </Layout>
    // <>
    //   <h3>{tag}</h3>
    //   <p>Total: {totalCount}</p>
    //   {nodes.map(post => {
    //     const title = post.frontmatter.title || post.fields.slug
    //     return (
    //       <Link to={`/blog/${post.fields.slug}`} key={post.fields.slug}>
    //         <h2>{title}</h2>
    //         <p>Read: {post.fields.readingTime.text}</p>
    //       </Link>
    //     )
    //   })}
    // </>
  )
}

export const Head = ({
  data: {
    site: { siteMetadata },
  },
  pageContext,
}) => {
  return (
    <Seo
      title={`Blogs tagged with ${pageContext.tag}`}
      description={siteMetadata.description}
    />
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
