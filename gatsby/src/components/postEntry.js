import React from "react"
import { Link, graphql } from "gatsby"
import config from "../config"
import PostEntryMeta from "./postEntryMeta"

const PostEntry = ({ post }) => {
  return (
    <>
      <div>
        <div>
          <PostEntryMeta post={post} />
        </div>
        <div>
          <h2>
            <Link to={`/${post.uri}`}>{post.title}</Link>
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content ? post.content.replace(config.wordPressUrl, ``) : post.content,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
    content: excerpt
    author {
      name
      slug
    }
  }
`