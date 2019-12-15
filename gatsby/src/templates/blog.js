import React, { Component } from "react"
import { graphql, navigate } from "gatsby"
import CategoriesWidget from "../components/categoriesWidget"
import RecentCommentsWidget from "../components/recentCommentsWidget"
import RecentPostsWidget from "../components/recentPostsWidget"
import PostEntry from "../components/postEntry"
import HomepageLayout from "../components/homepageLayout"
import Seo from "../components/seo"

class Blog extends Component {
  renderPreviousLink = () => {
    const {
      pageContext: { pageNumber },
    } = this.props

    let previousLink = null

    if (!pageNumber) {
      return null
    } else if (1 === pageNumber) {
      previousLink = `/`
    } else if (1 < pageNumber) {
      previousLink = `/page/${pageNumber - 1}`
    }

    return (
      <button onClick={() => navigate(previousLink)}>
        Previous Posts
      </button>
    )
  }

  renderNextLink = () => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = this.props

    if (hasNextPage) {
      return (
        <button
        
          onClick={() => navigate(`/page/${pageNumber + 1}`)}
        >
          Next Posts
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      data,
      location,
      pageContext: { pageNumber },
    } = this.props
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``
    return (
      <HomepageLayout pageNumber={pageNumber} location={{ location }}>
        <Seo title={`Blog${blogPageNumber}`} />
        <div>
          <div >
            {data &&
              data.wpgraphql &&
              data.wpgraphql.posts.nodes.map(post => (
                <div key={post.id}>
                  <PostEntry post={post} />
                </div>
              ))}
          </div>
          <div>
            <RecentPostsWidget />
            <CategoriesWidget />
            <RecentCommentsWidget />
          </div>
        </div>
        <div>
          <div>
            <div>
              
              {this.renderPreviousLink()}
            </div>
          </div>
          <div>
            <div>
              {this.renderNextLink()}
            </div>
          </div>
        </div>
      </HomepageLayout>
    )
  }
}

export default Blog

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
        }
      }
    }
  }
`