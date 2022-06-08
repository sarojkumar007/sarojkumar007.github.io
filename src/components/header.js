import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Menu, ArrowLeft } from 'react-feather'

const header = ({ onNavTrigger }) => {
	return (
		<header className="header">
			<button className="navTrigger" aria-label="navTrigger" onClick={onNavTrigger}>
				<ArrowLeft className="xIcon" />
				<Menu className="barIcon" />
			</button>
			<div className="title">
				<StaticImage
					className="title__img"
					layout="fixed"
					formats={["auto", "avif", "webp"]}
					src="../images/logo-2x.png"
					width={50}
					height={50}
					quality={100}
					alt="Site Logo"
				/>
				<span className="title__text">Saroj Kumar Sahoo</span>
			</div>
		</header>
	)
}

export default header
