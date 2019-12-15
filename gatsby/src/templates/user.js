import React from "react"
import SiteLayout from "../components/siteLayout"

import { graphql } from "gatsby"
import CategoriesWidget from "../components/categoriesWidget"
import RecentCommentsWidget from "../components/recentCommentsWidget"
import RecentPostsWidget from "../components/recentPostsWidget"
import PostEntry from "../components/postEntry"
import Seo from "../components/seo"

const User = props => {
  const {
    location,
    data: {
      wpgraphql: { user },
    },
  } = props
  return (
    <SiteLayout location={location}>
      <Seo title={`${user.name}`} />
      <div>
        <div>
          <h1>{user.name}</h1>
          <h2>Latest Posts</h2>
          {user.posts.nodes.map(post => (
            <PostEntry post={post} />
          ))}
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

export default User

export const pageQuery = graphql`
  query user($id: ID!) {
    wpgraphql {
      user(id: $id) {
        name
        avatar {
          url
        }
        posts {
          nodes {
            ...PostEntryFragment
          }
        }
      }
    }
  }
`