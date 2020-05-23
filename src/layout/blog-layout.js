import React from "react"
import { Link } from "gatsby"
import solidSprite from "../images/sprites/solid.svg"
import brandSprite from "../images/sprites/brands.svg"
import BlogStyles from "../pages/blog.module.scss"

export default (props) => {

	return (
		<div className={BlogStyles.pageContainer}>
			{props.children}
			<div className={BlogStyles.pageSidebar}>
				<h2 className="sp-heading-3">Most Popular</h2>
				<div className={BlogStyles.popularPostContainer}>
					<svg>
						<use href={solidSprite + "#award"}></use>
					</svg>
					<Link to="/blog/how-to-start-front-end-web-development" className={BlogStyles.popular} activeClassName={BlogStyles.active}>How to Start Front-end Web Development</Link>
				</div>
				<h2 className="sp-heading-3">Message for Readers</h2>
				<div className={BlogStyles.popularPostContainer}>
					<svg>
						<use href={solidSprite + "#bookmark"}></use>
					</svg>
					<span className={BlogStyles.popular}>Currently, few posts are being published. But, you will see more soon. Reply me your topic of interest in contact section.</span>
				</div>
				<h2 className="sp-heading-3">Spread the Word</h2>
				<div className={BlogStyles.shareBtnContainer}>
					<a href={`https://www.facebook.com/sharer/sharer.php?u=https://sarojkumar007.github.io${props.shareURL}&ref=plugin&src=share_button`} className={BlogStyles.shareBtn}>
						<svg>
							<use href={brandSprite + "#facebook"}></use>
						</svg>
					</a>
					<a href={`https://web.whatsapp.com/send?text=https://sarojkumar007.github.io${props.shareURL}`} className={`${BlogStyles.shareBtn} ${BlogStyles.waDesktop}`}>
						<svg>
							<use href={brandSprite + "#whatsapp"}></use>
						</svg>
					</a>
					<a href={`whatsapp://send?text=https://sarojkumar007.github.io${props.shareURL}`} className={`${BlogStyles.shareBtn} ${BlogStyles.waMobile}`}>
						<svg>
							<use href={brandSprite + "#whatsapp"}></use>
						</svg>
					</a>
					<a href={`https://twitter.com/share?text="${props.shareTitle}" - &url=https://sarojkumar007.github.io${props.shareURL}`} className={BlogStyles.shareBtn}>
						<svg>
							<use href={brandSprite + "#twitter"}></use>
						</svg>
					</a>
				</div>
			</div >
		</div >
	)
}