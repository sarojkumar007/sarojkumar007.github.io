import React from 'react'
import Layout from "../components/layout"
import ResourceGroup from '../components/ResourceGroup'
import Seo from "../components/seo"
// import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { resources } from '../data/resourcesData'
import slugify from '../helper/slugify'


const Resources = () => {

	return (
		<Layout>
			<Seo title="Resources | Saroj Kumar Sahoo" />
			<section className="sec sec_hero sec_hero--resources abs_center">
				<h2 className="hero_head">Resources, <small>you might find useful.</small></h2>
				<svg><use href="#six"></use></svg>
			</section>
			<div className={`resources__cat_wrap sticky`}>
				<div className="resources__cat tags__wrap scroll-x">
					{resources && resources.map((t, i) => (
						<a href={`#${slugify(t.cat)}`} className="tag__icon tag__link" key={i}>
							{<t.icon />}
							<span>{t.cat}</span>
						</a>
					))}
				</div>
			</div>
			<section className="sec resources">
				{resources && resources.map((r, i) => (
					<ResourceGroup key={i} title={r.cat} icon={<r.icon />} list={r.resources} />
				))}
			</section>
		</Layout>
	)
}

export default Resources
