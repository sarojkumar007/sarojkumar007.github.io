const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const readingTime = require("reading-time")
const slugify = require("./src/lib/slugify.js")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, "src"),
        "@components": path.join(__dirname, "src/components"),
        "@pages": path.join(__dirname, "src/pages"),
        "@config": path.join(__dirname, "src/config"),
        "@lib": path.join(__dirname, "src/lib"),
      },
    },
  })
}

// Define the template for blog post
const blogTemplate = path.resolve(`./src/templates/blog-post-template.tsx`)
const tagTemplate = path.resolve(`./src/templates/tag-template.tsx`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      const tagSet = new Set()
      post.frontmatter.tags.forEach(t => tagSet.add(t))

      const tagList = Array.from(tagSet)

      tagList.forEach(t => {
        createPage({
          path: `/blog/tags/${slugify(t)}`,
          component: tagTemplate,
          context: {
            tag: t,
          },
        })
      })

      createPage({
        path: `blog/${post.fields.slug}`,
        component: blogTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: value.replace(new RegExp("/", "g"), ""),
    })
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.rawMarkdownBody),
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
