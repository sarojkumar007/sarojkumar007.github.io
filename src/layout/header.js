import React from "react"
import { Link } from "gatsby"
import Logo from "../images/favicon.png"
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome"
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle"
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject"
import { AiOutlineIdcard } from "@react-icons/all-files/ai/AiOutlineIdcard"
import { GrArticle } from "@react-icons/all-files/gr/GrArticle"

export default () => {
	return (
		<>
			<header className="sp-header">
				<div className="sp-header-brand">
					<img className="sp-header-brand--img" src={Logo} alt="SP Logo"></img>
					<h1 className="sp-header-brand--text">Saroj Kumar Sahoo</h1>
				</div>
				<div className="sp-header-meta">
					<ul>
						<li>
							<Link to="/" activeClassName="active" className="sp-icon-link">
								<AiOutlineHome />
							&nbsp;Home
						</Link>
						</li>
						<li>
							<Link to="/about/" activeClassName="active" className="sp-icon-link">
								<AiOutlineInfoCircle />
								&nbsp;About
							</Link>
						</li>
						<li>
							<Link to="/projects/" activeClassName="active" className="sp-icon-link">
								<AiOutlineProject />
								&nbsp;Projects
							</Link>
						</li>
						<li>
							<Link to="/contact/" activeClassName="active" className="sp-icon-link">
								<AiOutlineIdcard />
								&nbsp;Contact
							</Link>
						</li>
						<li>
							<Link to="/blog/" activeClassName="active" className="sp-icon-link">
								<GrArticle />
								&nbsp;Blog
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	)
}
