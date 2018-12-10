import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Layout from '../components/Layout'

export default class Resource extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Banner>Resources</Banner>
        <div className="article">
                  <hr />
            {posts
              .map(({ node: post }) => (
                <div className="content" key={post.id}>
                  
                  <p>
                    <Link to={post.fields.slug}>
                    </Link>
                    <img src={post.frontmatter.resourceImage} alt={post.frontmatter.resourceName} style={{ width: '100%'}}></img>
                    <small>{post.frontmatter.resourceName}<br></br>{post.frontmatter.resourcePrice}</small>
                  </p>
                  <p>
                    <Link className="button is-small" to={post.fields.slug}>
                      View Resource →
                    </Link>
                  </p>
                </div>
              ))}
        </div>
      </Layout>
    )
  }
}

Resource.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ResourceQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "resource" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          
          
          fields {
            slug
          }
          frontmatter {
            resourceDescription,
            image,
            resourceName,
            resourceImage,
            resourcePrice,
            resourceLink,
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`