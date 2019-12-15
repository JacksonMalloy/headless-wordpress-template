import React from "react"
import SiteLayout from "../components/siteLayout"
import { graphql } from "gatsby"
import CategoriesWidget from "../components/categoriesWidget"
import RecentCommentsWidget from "../components/recentCommentsWidget"
import RecentPostsWidget from "../components/recentPostsWidget"
import PostEntry from "../components/postEntry"
import Seo from "../components/seo"

const CategoryTemplate = props => {
  const {
    location,
    data: {
      wpgraphql: { category },
    },
  } = props
  return (
    <SiteLayout location={location}>
      <Seo title={`${category.name}`} />
      <div>
        <div>
          <h1>Category: {category.name}</h1>
          <br/>
          {category.posts.nodes &&
            category.posts.nodes.map(post => <PostEntry post={post} />)}
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

export default CategoryTemplate

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!) {
    wpgraphql {
      category(id: $id) {
        id
        name
        slug
        posts(first: 100) {
          nodes {
            ...PostEntryFragment
          }
        }
      }
    }
  }
`