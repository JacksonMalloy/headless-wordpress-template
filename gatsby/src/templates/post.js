import React from "react"
import { graphql } from "gatsby"

import SiteLayout from "../components/siteLayout"
import CategoriesWidget from "../components/categoriesWidget"
import RecentCommentsWidget from "../components/recentCommentsWidget"
import RecentPostsWidget from "../components/recentPostsWidget"
import PostEntryMeta from "../components/postEntryMeta"
import Seo from "../components/seo"

const renderTermNodes = (nodes, title) => (
  <div>
    {title}
    {nodes.map(term => (
      <div>{term.name}</div>
    ))}
  </div>
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null }
  </>
)

const Post = props => {
  const {
    location,
    data: {
      wpgraphql: { post },
    },
  } = props
  const { title, content } = post
  return (
    <SiteLayout location={location}>
      <Seo title={`${post.title}`} />
      <div >
        <div>
          <h1>{title}</h1>
          <br />
          <div >
            <div >
              <PostEntryMeta post={post} />
            </div>
            <div >
              <div dangerouslySetInnerHTML={{ __html: content }} />
              {post.categories.nodes.length || post.tags.nodes.length
                ? renderTerms(post.categories.nodes, post.tags.nodes)
                : null}
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

export default Post

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        author {
          name
          slug
          avatar {
            url
          }
        }
        tags {
          nodes {
            name
            link
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`