import React from "react"
import SolidSprite from "../images/sprites/solid.svg"

export default () => {
	return(
		<footer className="sp-footer">
			<div className="sp-footer-links">
			</div>
			<div className="sp-footer--container">
				<div className="sp-footer-text">Made with <a className="sp-link" href="https://gatsbyjs.org/">Gatsby</a> and
					<svg fill="url(#l-grad) #999">
						<use href={SolidSprite + "#coffee"}></use>
					</svg>
				</div>
				<div className="sp-footer-credits">By <a className="sp-link" href="https://github.com/sarojkumar007" target="_blank" rel="noopener noreferrer">dev_sarojkumar</a></div>
			</div>
		</footer>
	)
}
