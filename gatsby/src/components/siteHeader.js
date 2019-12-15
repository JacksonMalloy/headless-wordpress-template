import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

const SiteHeader = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header>
        <div>
          <Link to="/">
            {data.site.siteMetadata.title}
          </Link>
        </div>
      </header>
    )}
  />
)

export default SiteHeader