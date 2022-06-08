import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { faGamepad, faMedal, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectCard from '../components/ProjectCard'
import { projectsList } from '../data/siteData'

const Projects = () => {
	return (
		<Layout>
			<Seo title="Projects | Saroj Kumar Sahoo" />
			<section className="sec sec_hero sec_hero--project abs_center">
				<h2 className="hero_head">Projects, <small>I have done</small>.</h2>
				<svg>
					<use href="#six"></use>
				</svg>
			</section>
			<section className="sec projects">
				{/* ----- */}
				<div className="projects__group">
					<div className="projects__group--head">
						<FontAwesomeIcon icon={faUniversity} />
						<h3>Academic</h3>
					</div>
					<div className="projects__group--body">
						{projectsList.academic.map((p, i) => (
							<ProjectCard key={i} id={p.id} name={p.name} date={p.date} tags={p.tags} img={p.image} desc={p.desc} liveLink={p.liveLink} gitLink={p.gitLink} />
						))}
					</div>
				</div>
				{/* ----- */}
				<div className="projects__group">
					<div className="projects__group--head">
						<FontAwesomeIcon icon={faMedal} />
						<h3>Side Projects</h3>
					</div>
					<div className="projects__group--body">
						{projectsList.sideProjects.map((p, i) => (
							<ProjectCard key={i} id={p.id} name={p.name} date={p.date} tags={p.tags} img={p.image} desc={p.desc} liveLink={p.liveLink} gitLink={p.gitLink} />
						))}
					</div>
				</div>
				{/* ----- */}
				<div className="projects__group">
					<div className="projects__group--head">
						<FontAwesomeIcon icon={faGamepad} />
						<h3>Mini Games</h3>
					</div>
					<div className="projects__group--body">
						{projectsList.miniGames.map((p, i) => (
							<ProjectCard key={i} id={p.id} name={p.name} date={p.date} tags={p.tags} img={p.image} desc={p.desc} liveLink={p.liveLink} gitLink={p.gitLink} />
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Projects
