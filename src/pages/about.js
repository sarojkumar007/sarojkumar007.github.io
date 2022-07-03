import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { edu, exp } from '../data/siteData'
import AboutProfile from '../images/AboutProfile.png'

const About = () => {

	// const greetVisitor = () => {
	// 	const dt = new Date().getHours();
	// 	if (dt >= 5 && dt < 12) {
	// 		return "Good Morning"
	// 	}
	// 	else if (dt >= 12 && dt < 18) {
	// 		return "Good Afternoon"
	// 	}
	// 	else {
	// 		return "Good Evening"
	// 	}
	// }

	return (
		<Layout>
			<Seo title="About | Saroj Kumar Sahoo" />
			<section className="sec about about_main">
				<h2 className="sec__heading2 right">
					<span>About Me</span>
				</h2>

				<div className="about__wrap">
					<img src={AboutProfile} alt="About Profile" width="240" />
					<div className="about__wrap_q">
						<FontAwesomeIcon icon={faQuoteLeft} title="" className="q_icon" />
						<p className="q_text">The seas may be rough, but I am the Captain.</p>
						<cite className="q_cite">Captain Jack Sparrow</cite>
					</div>
				</div>

				<svg className="bottom_design">
					<use href="#one"></use>
				</svg>
			</section>
			<section className="sec about about__detail abs_center">
				<div className="">
					<p className="display">Hi, <small>I'm Saroj Kumar.</small></p>
					<p><span className="c-orange">Automation Engineer</span>, <span className="">DevOps Enthusiast</span>, <span className="c-orange">Web Developer</span>, <span className="">Freelancer</span>.</p>
					<p>I love to automate stuff. I make simple and attractive websites, landing pages, Site Optimization and SEO for Businesses.</p>
				</div>
			</section>
			<section className="sec about about__exp">
				<div className="about__exp_wrp">
					<h2 className="sec__heading">
						<span>Work / Responsibilities</span>
					</h2>
					<div className="exp_wrap">
						<ul>
							{exp.map((e, i) => (
								<li key={i}>
									<FontAwesomeIcon icon={faArrowAltCircleRight} title="" className="exp__point" />
									<div className="">
										<div className="exp_title">
											<h3 className="exp_title__pos">{e.role}</h3>
											<span className="exp_title__loc">{e.location}</span>
										</div>
										{e.duration.from && e.duration.to && (<>
											<div className="exp_meta">
												<div className="exp_meta__item v_center">
													<span>{e.duration.from} - {e.duration.to}</span>
												</div>
											</div>
										</>)}
										{e.desc && (<p style={{ margin: '1rem 0 0' }} className='text'>{e.desc}</p>)}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
			<section className="sec about about__edu">
				<h2 className="sec__heading">
					<span>Education</span>
				</h2>
				<div className="container">
					<ul>
						{edu.map((e, i) => (
							<li key={i}>
								<span></span>
								<div className="timel-title">{e.title}</div>
								<div className="timel-info">
									<FontAwesomeIcon icon={e.icon} className="timel-icon" />
									{e.info}
								</div>
								{/* <div className="timel-details">
									{e.description}
								</div> */}
								<div className="time">
									<span>{e.duration.to}</span>
									<span>{e.duration.from}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</Layout>
	)
}

export default About
