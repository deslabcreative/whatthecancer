import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Layout from '../components/Layout'
import { kebabCase } from 'lodash'


export default class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>All Articles - What the Cancer</title>
        </Helmet>
        <Banner>All Articles</Banner>
        <div className="floatingTags">
        Refine by popular Categories: &nbsp; &nbsp; &nbsp; <a href="/tags/food">Food</a>&nbsp;&nbsp;&nbsp;<a href="/tags/exercise">Exercise</a>&nbsp;&nbsp;&nbsp;<a href="/tags/sleep">Sleep</a>&nbsp;&nbsp;&nbsp;<a href="/tags/spirituality">Spirituality</a>&nbsp;&nbsp;&nbsp;<a href="/tags/">More Categories</a>
        </div>
        <div className="article">
            {posts
              .map(({ node: post }) => (
                <div className="content" key={post.id}>
                  
                  <p>
                    <Link to={post.fields.slug}>
                      <img src={post.frontmatter.header} alt={post.frontmatter.title} style={{ width: '100%'}}></img>
                    </Link>
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