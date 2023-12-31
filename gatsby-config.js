/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  siteConfig,
  social: { twitter },
  seo,
} = require("./src/config/")

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    author: {
      name: siteConfig.title,
      summary: siteConfig.desc,
    },
    description: siteConfig.desc,
    siteUrl: siteConfig.homepage,
    social: {
      twitter,
    },
  },
  trailingSlash: "always",
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "blog_head_anchor",
            },
          },
          {
            resolve: "gatsby-remark-code-titles",
            options: {
              className: "code-title",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          // CHECK Later: gatsby-remark-copy-linked-files
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // SEO
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [seo.GA4_MEASUREMENT_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteConfig.homepage,
        sitemap: [
          `${siteConfig.homepage}/sitemap-index.xml`,
          `${siteConfig.homepage}/sitemap-0.xml`,
        ],
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // Extra
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  readingTime: node.fields.readingTime.text,
                  description: node.frontmatter.description,
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog/${node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${node.fields.slug}`,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  html
                  fields {
                    slug
                    readingTime{
                      text
                    }
                  }
                  frontmatter {
                    title
                    date
                    description
                    tags
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Saroj Kumar's Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: "Saroj Kumar",
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-2x.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
