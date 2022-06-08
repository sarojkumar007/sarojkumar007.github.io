import * as React from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogLayout from "../components/BlogLayout"
import { ArrowLeft, ArrowRight, Calendar, BookOpen, User } from "react-feather"
import slugify from "../helper/slugify"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout>
      <Seo
        title={`${post.frontmatter.title} | Saroj Kumar Sahoo`}
        description={post.frontmatter.description || post.excerpt}
      />
      <section className="sec blogPost">
        <BlogLayout shareUrl={`/blog/${post.fields.slug.replace('/', '')}`} shareTitle={`${post.frontmatter.title} by ${post.frontmatter.author}`}>
          <article
            className="blogPost"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <div className="blogPost__meta v_center">
                <div className="meta__i">
                  <Calendar />
                  <span>{post.frontmatter.date}</span>
                </div>
                <div className="bull">&bull;</div>
                <div className="meta__i">
                  <User />
                  <span>{post.frontmatter.author}</span>
                </div>
                <div className="bull">&bull;</div>
                <div className="meta__i">
                  <BookOpen />
                  <span>{post.fields.readingTime.text}</span>
                </div>
              </div>
              <h1 className="blogPost__head" itemProp="headline">{post.frontmatter.title}</h1>
              <div className="tags v_center">
                {post.frontmatter.tags.map((t, i) => (
                  <Link to={`/blog/tags/${slugify(t)}`} className="tag__link abs_center" key={i}>
                    <span>{t}</span>
                  </Link>
                ))}
              </div>
            </header>
            <section
              className="blogPost__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <hr />
            <footer>
              <Bio />
            </footer>
          </article>
          <nav className="blogPost__nav">
            {previous && (
              <Link to={`/blog/${previous.fields.slug.replace('/', '')}`} rel="prev" title={previous.frontmatter.title} className="v_center blogPost__nav-link prev">
                <ArrowLeft />
                <span>Prev Post</span>
              </Link>
            )}
            {next && (
              <Link to={`/blog/${next.fields.slug.replace('/', '')}`} rel="next" title={next.frontmatter.title} className="v_center blogPost__nav-link next">
                <span>Next Post</span>
                <ArrowRight />
              </Link>
            )}
          </nav>
        </BlogLayout>
      </section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        tags
      }
      fields{
        slug
        readingTime{
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
