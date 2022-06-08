import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Share2, Tag, TrendingUp } from 'react-feather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { Facebook, Twitter, Whatsapp } from '@icons-pack/react-simple-icons'
import slugify from '../helper/slugify'
import siteConfig from '../data/config'

export const GetTags = () => {
	const tags = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

	return tags;
};

const BlogLayout = ({ shareUrl, shareTitle, children }) => {

	const tags = GetTags().allMarkdownRemark.group;

	return (
		<>
			<div className="blog__container">
				<div className="blog__list">
					<div className="blog__list-wrap">
						{children}
					</div>
				</div>
				<div className="blog__sidebar">
					<div className="sidebar__head v_center">
						<TrendingUp />
						<h3 className="">Most Popular</h3>
					</div>
					<div className="sidebar__content">
						<Link className="sidebar__link" to="/blog/effectively-using-icons-in-websites">
							<span>Effectively using Icons in Websites ✌🏻</span>
						</Link>
						<Link className="sidebar__link" to="/blog/how-to-start-front-end-web-development">
							<span>How to Start Front-end Web Development</span>
						</Link>
					</div>
					<div className="sidebar__head v_center">
						<FontAwesomeIcon icon={faBullhorn} />
						<h3>Message to Readers</h3>
					</div>
					<div className="sidebar__content">
						<p className="text">I'll be adding more posts soon. If you have any topic of interest, contact me, <Link to={`/contact/`} className="global__link">Here</Link></p>
					</div>
					<div className="sidebar__head v_center">
						<Tag />
						<h3>Tags</h3>
					</div>
					<div className="sidebar__content v_center">
						<div className="tags__wrap">
							{tags.map((t, i) => (
								<Link to={`/blog/tags/${slugify(t.fieldValue)}`} className="tag__link abs_center" key={i} title={`${t.totalCount} post${t.totalCount > 1 ? 's' : ''} in ${t.fieldValue}`}>
									<span>{`${t.fieldValue}`}</span>
								</Link>
							))}
						</div>
					</div>
					<div className="sidebar__head v_center">
						<Share2 />
						<h3>Spread the word</h3>
					</div>
					<div className="sidebar__content v_center">
						<a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(`${siteConfig.siteUrl}${shareUrl}`)}&ref=plugin&src=share_button`} className="abs_center fb" target="_blank" rel="noreferrer noopener">
							<Facebook />
						</a>
						<a href={`https://api.whatsapp.com/send?text=${encodeURI(`Check out this blog - ${siteConfig.siteUrl}${shareUrl}`)}`} className="abs_center wp" target="_blank" rel="noreferrer noopener">
							<Whatsapp />
						</a>
						<a href={`https://twitter.com/share?text="${shareTitle}" - &url=${encodeURI(`${siteConfig.siteUrl}${shareUrl}`)}`} className="abs_center tw" target="_blank" rel="noreferrer noopener">
							<Twitter />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogLayout