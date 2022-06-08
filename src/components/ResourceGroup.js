import React from 'react'
import slugify from '../helper/slugify'

const ResourceGroup = ({ title, icon, list }) => {

	return (
		<>
			<div className="resource__group" id={slugify(title)}>
				<h2 className="sub__heading abs_center">
					{icon}
					<span>{title}</span>
				</h2>
				<div className="resource__list">
					{list.map((i, index) => (
						<div className="resource__item" key={index}>
							{/* {i.image && (
								<figure>
									<img src={i.image} alt={i.title} />
								</figure>)} */}
							<a className="global__link2" href={i.link} target="_blank" rel="noreferrer noopener"><h3>{i.title}</h3></a>
							<p className="">{i.description}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default ResourceGroup
