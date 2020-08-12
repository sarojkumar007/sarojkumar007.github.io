import React from "react"
import {Helmet} from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"

export default (props) =>{
	const data = useStaticQuery(graphql`
		query{
			site{
				siteMetadata{
					title
				}
			}
		}
	`)
	return(
		<Helmet title={`${props.title} | ${data.site.siteMetadata.title}`} />
	)
}