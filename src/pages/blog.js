import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Calendar, BookOpen, User } from "react-feather"
import BlogLayout from "../components/BlogLayout"
import slugify from "../helper/slugify"

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Blog Post`
  const posts = data.allMarkdownRemark.nodes

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title="Blogs" />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout>
      <Seo title="Blog | Saroj Kumar Sahoo" />
      <section className="sec blog">
        <h2 className="sec__heading">
          <span>Blog</span>
        </h2>
        <Bio />
        <BlogLayout shareTitle="Blog by Saroj Kumar Sahoo" shareUrl="/blog">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <Link to={`/blog/${post.fields.slug.replace('/', '')}`} itemProp="url" className="blog__item" key={post.fields.slug}>
                <article className=""
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <h3 className="blog__item--head" itemProp="headline">{title}</h3>
                  <div className="blog__item--meta v_center">
                    <div className="meta__i">
                      <Calendar />
                      <span>{post.frontmatter.date}</span>
                    </div>
                    <div className="meta__i">
                      <User />
                      <span>{post.frontmatter.author}</span>
                    </div>
                    <div className="meta__i">
                      <BookOpen />
                      <span>{post.fields.readingTime.text}</span>
                    </div>
                  </div>
                  <div className="blog__item--tags v_center">
                    {post.frontmatter.tags.map((t, i) => (
                      <Link to={`/blog/tags/${slugify(t)}`} className="tag__link abs_center" key={i}>
                        <span>{t}</span>
                      </Link>
                    ))}
                  </div>
                  <p
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </article>
              </Link>
            )
          })}
        </BlogLayout>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
          readingTime{
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          author
          tags
        }
      }
    }
  }
`
