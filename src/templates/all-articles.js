import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Layout from '../components/Layout'
import Footer from './components/footer'

export default class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Banner>All Articles</Banner>
        <div className="article">
        <center><h1><a href="/tags/" title="Search What The Cancer by Tags / Unique Identifiers">Search by Tag</a></h1></center>
                  <hr />
            {posts
              .map(({ node: post }) => (
                <div className="content" key={post.id}>
                  
                  <p>
                    <Link to={post.fields.slug}>
                    </Link>
                    <img src={post.frontmatter.header} alt={post.frontmatter.title} style={{ width: '100%'}}></img>
                    <small>{post.frontmatter.title}<br></br>{post.frontmatter.date}</small>
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

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          
          
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            header
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
