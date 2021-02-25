import React from "react"
import Layout from "../layout/layout"
import Blog from "../layout/blog-layout"
import SEO from "../layout/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import BlogStyles from "./blog.module.scss"

export default () => {
	const data = useStaticQuery(graphql`
		query{
			allMarkdownRemark{
				edges{
					node{
						frontmatter{
							title
							date
							author
							tags
						}
						fields{
							slug
						}
					}
				}
			}
		}
	`)
	return (
		<Layout>
			<section className="sp-section sp-section-blog">
				<SEO title="Blog" />
				<h2 className="sp-heading">Blog</h2>
				<Blog shareURL={`/blog`} shareTitle="Blog by Saroj Kumar Sahoo">
					<div className={BlogStyles.blogContainer}>
						{data.allMarkdownRemark.edges.map(e => {
							let arr = e.node.frontmatter.tags
							let items = []
							for (const [index, value] of arr.entries()) {
								items.push(<span className={BlogStyles.tag} key={index} arial-label={`tag-${index}`}>{value}</span>)
							}
							return (
								<Link to={`/blog/${e.node.fields.slug}`} key={e.node.fields.slug} aria-label={`blog-${e.node.fields.slug}`} className={BlogStyles.blogLink}>
									<h1 className={BlogStyles.title}>{e.node.frontmatter.title}</h1>
									<p className={BlogStyles.meta}>PUBLISHED ON : <span>{e.node.frontmatter.date}</span> | AUTHOR : <span>{e.node.frontmatter.author}</span></p>
									<div className={BlogStyles.tagContainer}>{items}</div>
								</Link>
							)
						})}
					</div>
				</Blog>
			</section>
		</Layout>
	)
}