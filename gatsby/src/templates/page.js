import React from "react"
import { graphql } from "gatsby"

import SiteLayout from "../components/siteLayout"
import CategoriesWidget from "../components/categoriesWidget"
import RecentCommentsWidget from "../components/recentCommentsWidget"
import RecentPostsWidget from "../components/recentPostsWidget"
import Seo from "../components/seo"

const Page = props => {
  const {
    location,
    data: {
      wpgraphql: { page },
    },
  } = props
  const { title, content } = page
  return (
    <SiteLayout location={location}>
      <Seo title={`${page.title}`} />
      <div >
        <div>
          <h1>{title}</h1>
          <br />
          <div>
            <div>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
        <div>
          <RecentPostsWidget />
          <CategoriesWidget />
          <RecentCommentsWidget />
        </div>
      </div>
    </SiteLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`