import * as React from "react"

import { Link, graphql } from "gatsby"

import BlogLayout from "@components/BlogLayout"
import Layout from "@components/Layout"
import Seo from "@components/Seo"
import DesignedSection from "@components/short/DesignedSection"
import { siteConfig } from "@config/index"
import slugify from "@lib/slugify"
import { BlogPostView } from "@lib/types"
import { BookOpen, Calendar, Tag, User } from "react-feather"
import Accordion from "@components/Accordion"

interface BlogPostTemplateProps {
  data: {
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    markdownRemark: BlogPostView
  }
}

const BlogPostTemplate = ({
  data: { previous, next, markdownRemark: post },
}: BlogPostTemplateProps) => {
  return (
    <Layout>
      <header className="min-h-[30vh] md:min-h-[40vh] w-full header_blog">
        <DesignedSection
          className="absolute top-0 left-0 w-full min-h-[30vh] md:min-h-[40vh] px-4 py-20 md:px-24 md:py-36 grid place-items-center"
          designNo="two"
        >
          <div>
            <h2 className="text-gray-50 text-3xl md:text-5xl font-medium text-center">
              {post.frontmatter.title}
            </h2>
            <div className="flex items-center justify-center flex-wrap text-white gap-2 mt-8">
              <div className="flex items-center text-white">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.frontmatter.date}</span>
              </div>
              {/* <span>&bull;</span> */}
              <div className="flex items-center text-white">
                <BookOpen className="w-4 h-4 mr-1" />
                <span>{post.fields.readingTime.text}</span>
              </div>
              {/* <span>&bull;</span> */}
              <div className="flex flex-wrap items-center text-sm space-x-1">
                <Tag className="w-4 h-4 mr-1" />
                {post.frontmatter.tags.map(t => (
                  <Link
                    to={`/blog/tags/${slugify(t)}`}
                    key={t as React.Key}
                    className="tag2 !border-gray-200 !text-white"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center flex-wrap text-white mt-4">
              <div className="flex items-center text-white">
                <User className="w-4 h-4 mr-1" />
                <span>{post.frontmatter.author}</span>
              </div>
            </div>
          </div>
        </DesignedSection>
      </header>
      <BlogLayout
        shareLink={`${siteConfig.homepage}/blog/${post.fields.slug}/`}
      >
        <div className="max-w-full mx-auto flex-1">
          <div className="blog_content mb-4 font-sailec">
            <Accordion
              Head={
                <h3 className="flex items-center">
                  <span className="material-symbols-rounded mr-4 -translate-y-[2px]">
                    list_alt
                  </span>
                  <span>TABLE OF CONTENTS</span>
                </h3>
              }
            >
              <section
                className="toc_main"
                dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              />
            </Accordion>
            <article
              className="!mt-8"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          <nav className="">
            <ul className="flex justify-between">
              {previous ? (
                <li>
                  <Link
                    to={`/blog/${previous.fields.slug}`}
                    className="flex items-center space-x-2"
                    title={previous.frontmatter.title}
                  >
                    <span className="material-symbols-rounded text-2xl">
                      arrow_left_alt
                    </span>
                    <div className="flex flex-col">
                      <span>Previous Post</span>
                      {/* <small className="text-xs">
                        ({previous.frontmatter.title})
                      </small> */}
                    </div>
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
              {next ? (
                <li>
                  <Link
                    to={`/blog/${next.fields.slug}`}
                    className="flex items-center space-x-2"
                    title={next.frontmatter.title}
                  >
                    <div className="flex flex-col">
                      <span>Next Post</span>
                      {/* <small className="text-xs">
                        ({next.frontmatter.title})
                      </small> */}
                    </div>
                    <span className="material-symbols-rounded text-2xl">
                      arrow_right_alt
                    </span>
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
            </ul>
          </nav>
        </div>
      </BlogLayout>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={`${post.frontmatter.title} by ${post.frontmatter.author}`}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        description
        tags
      }
      tableOfContents
      fields {
        slug
        readingTime {
          text
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
