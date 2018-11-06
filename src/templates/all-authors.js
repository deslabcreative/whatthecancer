/* import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Layout from '../components/Layout'
import Footer from './components/footer'

export default class Author extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Banner>Meet Our Team</Banner>
        <div className="article">
            {posts
              .map(({ node: post }) => (
                <div className="content" key={post.id}>
                  
                  <p>
                    <Link to={post.fields.slug}>
                    </Link>
                    <img src={post.frontmatter.coverImage} alt={post.frontmatter.authorName} style={{ width: '100%'}}></img>
                    <small>{post.frontmatter.authorName}<br></br></small>
                  </p>
                  <p>
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
        </div>
      </Layout>
    )
  }
}

Author.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const authorQuery = graphql`
  query InfoQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___authorName] },
      filter: { frontmatter: { templateKey: { eq: "author-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          
          fields {
            slug
          }
          frontmatter {
            authorName
            authorDescription
            coverImage
            authorRecommended
            authorRecommendedImage
          }
        }
      }
    }
  }
`
*/