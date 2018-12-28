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

            {posts
              .map(({ node: post }) => (

                <Link to={post.fields.slug}>
                  <div className="listing" key={post.id} style={{backgroundImage: 'url("'+post.frontmatter.resourceImage+'")'}}>
                    <div className="glaze">
                      <h1>{post.frontmatter.resourceName}</h1>{post.frontmatter.resourcePrice}
                    </div>
                  </div>
                </Link>
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