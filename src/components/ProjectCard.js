import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { Github } from '@icons-pack/react-simple-icons'
import { Calendar, Info, Tag } from 'react-feather'
import Modal from './Modal'

const ProjectCard = ({ id, name, date, tags, img, desc, liveLink, gitLink }) => {

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [cardColorNo, setCardColorNo] = useState(0)

	const dt = new Date(date)
	const projDate = dt.toLocaleString('en-US', {
		day: 'numeric', // numeric, 2-digit
		year: 'numeric', // numeric, 2-digit
		month: 'short', // numeric, 2-digit, long, short, narrow
	})

	useEffect(() => {
		setCardColorNo(Math.floor(Math.random() * 6))
	}, [setCardColorNo])

	return (
		<>
			<Modal id={id} isOpen={isModalOpen} handleClose={() => { setIsModalOpen(false) }}>
				<figure className="project__illustration abs_center" style={{
					'backgroundImage': `linear-gradient(to right, rgba(var(--rgb-2),.3), rgba(var(--rgb-1),.3)), url(${img})`
				}}>
					<h2 className="project__heading">{name}</h2>

					<div className="project__cta">
						{liveLink && (
							<a className="btn live" href={liveLink} target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon icon={faBolt} title="" />
								<span>See Live</span>
							</a>
						)}
						{gitLink && (
							<a className="btn github" href={gitLink} target="_blank" rel="noreferrer noopener">
								<Github title="" />
								<span>GitHub</span>
							</a>
						)}
					</div>
				</figure>
				<div className="project__meta">
					<div className="project__meta-item">
						<Calendar />
						<span>{projDate}</span>
					</div>
					<div className="project__meta-item">
						<Tag />
						{tags.map((t, i) => (<span key={i} className="meta__tag">{t}</span>))}
					</div>
				</div>
				<p>{desc}</p>
			</Modal>
			<div className={`project_card t${cardColorNo}`}>
				<div className="project_card__detail">
					<h3 className="head">{name}</h3>
					<div className="meta">
						<div className="meta__i">
							<Calendar />
							<span>{projDate}</span>
						</div>
						<div className="meta__i">
							<Tag />
							{tags.map((t, i) => (<span key={i} className="meta__tag">{t}</span>))}
						</div>
					</div>
					{/* <p className="desc">{desc}</p> */}
					<div className="cta">
						{/* -------- */}
						{liveLink && (<>
							<a href={liveLink} target="_blank" rel="noreferrer noopener" className="btn project_btn live" style={{ 'marginRight': '1rem' }} title="See Live">
								<FontAwesomeIcon icon={faBolt} title="" />
							</a>
						</>)}
						{/* -------- */}
						{/* {gitLink && (<>
							<a href={gitLink} target="_blank" rel="noreferrer noopener" className="btn project_btn github" style={{ 'marginRight': '1rem' }} title="GitHub">
								<Github title="" />
							</a>
						</>)} */}
						{/* -------- */}
						{/* {!liveLink && !gitLink && (<span className="text_mute">Private Repo</span>)} */}

						<button className="btn project_btn info" onClick={
							() => { setIsModalOpen(true) }
						}>
							<Info />
							<span>Details</span>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProjectCard
