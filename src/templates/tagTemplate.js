import React from 'react';
import { graphql, Link } from 'gatsby';

import Seo from '../components/seo';
import Layout from '../components/layout';
import BlogLayout from '../components/BlogLayout';
import slugify from '../helper/slugify';
import { Calendar, Clock, User } from 'react-feather';

const TagsPage = ({ data, pageContext }) => {
	const { tag } = pageContext;
	const { nodes, totalCount } = data.allMarkdownRemark;

	return (
		<>
			<Layout>
				<Seo title={`Blogs tagged with ${tag} | Saroj Kumar Sahoo`} description={`Check out the ${totalCount} post${totalCount > 1 ? 's' : ''} tagged with ${tag}.`} />
				<section className="sec blog">
					<h3 className="sub__heading">
						<span>Blogs tagged with {tag} <strong className="text_mute">{`[${totalCount} Post${totalCount > 1 ? 's' : ''}]`}</strong></span>
					</h3>

					<BlogLayout shareTitle={`Blogs tagged with ${tag}`} shareUrl={`/blog/tags/${slugify(tag)}`}>
						{nodes.map(post => {
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
												<Clock />
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
		</>
	);
};
export default TagsPage;

export const pageQuery = graphql`
query($tag: String) {
	allMarkdownRemark(
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { frontmatter: { tags: { in: [$tag] } } }
	) {
		totalCount
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
`;