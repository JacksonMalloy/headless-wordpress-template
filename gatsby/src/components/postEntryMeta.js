import React from 'react'

import { Link } from "gatsby"

const PostEntryMeta = ({ post }) => (
  <div>
    <div style={{ textAlign: `center` }}>
      <Link to={`/author/${post.author.slug}`}>
        Author Link Here
      </Link>
    </div>
    <div style={{ textAlign: `center` }}>
      <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
    </div>
  </div>
)

export default PostEntryMeta