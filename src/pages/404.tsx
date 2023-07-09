import * as React from "react"

import Layout from "@components/Layout"
import Seo from "@components/Seo"

import Svg404 from '@components/svgs/Icon404';
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout>
      <header className="min-h-[90vh] grid place-items-center p-8">
        <div className="grid grid-cols-1">
          <figure className="w-full">
            <Svg404 className="w-full h-full" />
          </figure>
          <div className="mt-4 text-center">
            <h3 className="text-3xl font-sailec font-medium">
              The page doesn't exits !
            </h3>
            <p className="text-base text-gray-500">
              Try going Back Or read some{' '}
              <Link to={`/blog`} className="global_link">
                Blog
              </Link>
              .
            </p>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
