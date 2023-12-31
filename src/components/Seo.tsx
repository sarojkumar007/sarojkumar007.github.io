/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import * as React from "react"

import { siteConfig } from "@config/index"
import { graphql, useStaticQuery } from "gatsby"

interface SEOProps {
  title: string
  description?: string
  children?: React.ReactNode
}

const Seo = ({ description, title, children }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>
        {defaultTitle ? `${title} - ${defaultTitle}'s Portfolio` : title}
      </title>
      <meta id="description" name="description" content={metaDescription} />
      <meta name="keywords" content={siteConfig.keywords.join(",")} />
      <meta
        id="og:title"
        property="og:title"
        content={defaultTitle ? `${title} | ${defaultTitle}` : title}
      />
      <meta
        id="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta id="og:type" property="og:type" content="website" />
      <meta property="og:site_name" content={defaultTitle} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.social?.twitter || ``}
      />
      <meta
        id="twitter:title"
        name="twitter:title"
        content={defaultTitle ? `${title} | ${defaultTitle}` : title}
      />
      <meta
        id="twitter:description"
        name="twitter:description"
        content={metaDescription}
      />
      <meta name="author" content="Saroj Kumar Sahoo" />
      <meta id="robots" name="robots" content="index, follow" />
      {children}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9840063743847527"
        crossOrigin="anonymous"
      ></script>
    </>
  )
}

export default Seo
