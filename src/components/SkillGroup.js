import React from 'react'

const SkillGroup = ({ cat, s }) => {
	return (
		<div className="skillGroup">
			<h3 className="skillGroup__heading">{cat}</h3>
			<div className="skillGroup__list">
				{s.map((skl, i) => (
					<div key={i} className="skillGroup__item">
						<span className="skillGroup__icon">{<skl.icon title="" />}</span>
						<div className="skillGroup__content">
							<h4>{skl.skill}</h4>
							<span>{skl.level}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default SkillGroup
