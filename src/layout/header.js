import React from "react"
import {Link} from "gatsby"
import Logo from "../images/favicon.png"

export default () => {
	return(
	<>
		<header className="sp-header">
			<div className="sp-header-brand">
      			<img className="sp-header-brand--img" src={Logo} alt="Logo"></img>
				<h1 className="sp-header-brand--text">Saroj Kumar Sahoo</h1>
			</div>
			<div className="sp-header-meta">
				<ul>
					<li>
						<Link to="/" activeClassName="active">Home</Link>
					</li>
					<li>
						<Link to="/about" activeClassName="active">About</Link>
					</li>
					<li>
						<Link to="/projects" activeClassName="active">Projects</Link>
					</li>
					<li>
						<Link to="/contact" activeClassName="active">Contact</Link>
					</li>
					<li>
						<Link to="/blog" activeClassName="active">Blog</Link>
					</li>
				</ul>
			</div>
		</header>
	</>
	)
}
