import React from "react"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import ErrorStyles from "./error.module.scss"

export default () => {
    return(
        <Layout>
            <SEO title="Error 404" />
            <section className={`sp-section ${ErrorStyles.container}`}>
                <div className={ErrorStyles.errImg}>
                </div>
                <h2 className={ErrorStyles.errMsg}>Uh oh! Looks like you have lost.</h2>
                <p className={ErrorStyles.errText}>Mind going<a href="/">Home</a>
                or Reading some<a href="/blog">Blog</a></p>
            </section>
        </Layout>
    )
}
