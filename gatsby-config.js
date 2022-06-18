const config = require('./src/data/config');

module.exports = {
  siteMetadata: {
    title: config.title,
    author: {
      name: config.author.name,
      summary: config.author.summary,
    },
    description: config.description,
    siteUrl: config.siteUrl,
    social: {
      twitter: config.twitter,
    },
  },
  plugins: [
    // Anchor
    // {
    //   resolve: "gatsby-plugin-anchor-links",
    //   options: {
    //     offset: -80
    //   }
    // },
    // Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'code-title',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
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
              showLineNumbers: false,
              noInlineHighlight: false
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    // SOURCE File System
    // Source JSON
    // -----------
    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/json`,
    //     name: `json`,
    //   },
    // },
    // ------------
    // Source Markdown
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    // Source Image
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // SEO
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          config.GA4_MEASUREMENT_ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        sitemap: [
          `${config.siteUrl}/sitemap-index.xml`,
          `${config.siteUrl}/sitemap-0.xml`
        ],
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // Design
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0575E6`,
        showSpinner: true,
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
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Saroj Kumar's Blog RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
