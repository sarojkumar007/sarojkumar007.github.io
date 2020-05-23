import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import Blog from "../layout/blog-layout"
import SEO from "../layout/seo"
import BlogPostStyle from "./blogPost.module.scss"
import { Helmet } from "react-helmet";

export const query = graphql`
	query($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter{
				title
				date
				author
				tags
			}
			html
			fields{
				slug
			}
		}
	}
`

export default (props) => {
	let arr = props.data.markdownRemark.frontmatter.tags
	let items = []
	for (const [index, value] of arr.entries()) {
		items.push(<span className={BlogPostStyle.tag} key={`tag-${index}`} arial-label={`tag-${index}`}>{value}</span>)
	}

	return (
		<>
			<Helmet>
				<script src="/main.js" type="text/javascript"></script>
			</Helmet>
			<Layout>
				<SEO title={props.data.markdownRemark.frontmatter.title} />
				<button id="topBtn" className={BlogPostStyle.top}>&#9650;</button>
				<section className="sp-section">
					<Blog shareURL={`/blog/${props.data.markdownRemark.fields.slug}`}
						shareTitle={props.data.markdownRemark.frontmatter.title} >
						<div className={BlogPostStyle.blog}>
							<h1 id="post-title" className={BlogPostStyle.title}>{props.data.markdownRemark.frontmatter.title}</h1>
							<p className={BlogPostStyle.meta}>PUBLISHED ON <span>{props.data.markdownRemark.frontmatter.date}</span> | By <span>{props.data.markdownRemark.frontmatter.author}</span></p>
							<div className={BlogPostStyle.tagContainer}>{items}</div>
							<br />
							<div className={BlogPostStyle.body} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
						</div>
					</Blog>
				</section>
			</Layout >
		</>
	)
}