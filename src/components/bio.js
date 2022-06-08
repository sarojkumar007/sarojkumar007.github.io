import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Twitter } from "react-feather"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio__avatar"
        layout="fixed"
        formats={["auto", "webp"]}
        src="../images/profile.webp"
        width={40}
        height={40}
        quality={100}
        alt="Profile picture"
      />
      {author?.name && (
        <div className="bio__meta">
          <p>
            <strong>{author.name}</strong>
            <br />
            <span className="abs_center">{author?.summary || null}<span className="bull">&bull;</span><a href={`https://twitter.com/${social?.twitter || ``}`} className="bio__link abs_center">
              <Twitter />
            </a>
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
