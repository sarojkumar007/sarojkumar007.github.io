import React from "react"

import { Link, graphql } from "gatsby"

import BlogLayout from "@components/BlogLayout"
import BlogPreview from "@components/BlogPreview"
import Layout from "@components/Layout"
import Seo from "@components/Seo"
import DesignedSection from "@components/short/DesignedSection"
import { siteConfig } from "@config/index"
import { BlogPostGQL } from "@lib/types"

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <header className="min-h-[30vh] md:min-h-[40vh] w-full header_blog">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[30vh] md:min-h-[40vh] px-4 py-20 md:px-16 md:py-36 grid place-items-center"
          designNo="two"
        >
          <h2 className="text-gray-50 text-3xl md:text-5xl font-medium">
            Blogs <span className="text-2xl md:text-3xl"></span>
          </h2>
        </DesignedSection>
      </header>
      <BlogLayout shareLink={`${siteConfig.homepage}/blog/`}>
        <div className="flex-1">
          <div className="space-y-4">
            {posts.map((post: BlogPostGQL) => {
              return <BlogPreview key={post.fields.slug} post={post} />
            })}
          </div>
        </div>
      </BlogLayout>
      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={`/blog/${post.fields.slug}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <h3>SLUG : {post.fields.slug}</h3>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogPage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data: { site } }) => (
  <Seo title="Blog" description={site.siteMetadata.description} />
)

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          author
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
