import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SVG404 from '../images/404.svg'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Seo title="404: Not Found" />
      <section className="sec sec404 abs_center">
        <div className="sec404__wrap abs_center">
          <figure className="sec404__fig">
            <img src={SVG404} alt="404:NotFound" />
          </figure>
          <h1 className="sec404__title">ERROR_404</h1>
          <h2 className="sec404__head">Uh oh! Seems this path does not exist.</h2>
          <p className="sec404__text text">Mind going <Link className="global__link" to="/">Home</Link> or reading some <Link to="/blog/" className="global__link">Blog</Link>?</p>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
