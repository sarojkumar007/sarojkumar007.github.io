import React from 'react'
import { Heart, Coffee, Twitter, Codepen, Youtube, Zap } from 'react-feather'
import config from '../data/config'

const Footer = ({ type }) => {
	return (
		<>
			<footer className={`footer ${type === '1' ? 'main' : 'secondary'}`}>
				<div className="footer__copy">
					<div className="abs_center" style={{ 'flexWrap': 'wrap' }}>
						<span>Made with</span>
						<Heart style={{ 'margin': '0 .5rem', 'width': '2rem', 'height': '2rem' }} />
						<span>and</span>
						<Coffee style={{ 'margin': '0 .5rem', 'width': '2rem', 'height': '2rem' }} />
						<span>by <a href={config.githubLink} className="global__link" style={{ 'color': 'var(--c-2)' }} target="_blank" rel="noreferrer noopener">Saroj Kumar</a></span>
					</div>
					<div className="abs_center mute" style={{ 'flexWrap': 'wrap' }}>
						<Zap />
						<span>Powered by <a href="https://www.gatsbyjs.com/" className="global__link" style={{ 'color': 'var(--c-2)' }} target="_blank" rel="noreferrer noopener">Gatsby</a></span>
					</div>
				</div>
				<div className="footer__social">
					<a href={config.twitterLink} className="" target="_blank" rel="noreferrer noopener">
						<Twitter />
					</a>
					<a href={config.codepenLink} className="" target="_blank" rel="noreferrer noopener">
						<Codepen />
					</a>
					<a href={config.youtubeLink} className="" target="_blank" rel="noreferrer noopener">
						<Youtube />
					</a>
				</div>
			</footer>
		</>
	)
}

export default Footer
