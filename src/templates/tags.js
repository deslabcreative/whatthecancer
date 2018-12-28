import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Banner from './components/banner'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <Link to={post.node.fields.slug}>
                  <div className="listing" style={{backgroundImage: 'url("'+post.node.frontmatter.header+'")'}}>
                    <div className="glaze">
                      <h1>{post.node.frontmatter.title}</h1>{post.node.frontmatter.date}
                    </div>
                  </div>
                </Link>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
  
          <Helmet title={`${tag} | ${title}`} />
          <Banner>{tagHeader}</Banner>
          <div className="article">
  
              <div className="content">
                <Link to="/blog/" className="green"><h1 className="green">View all Articles</h1></Link>
                <hr />
                {postLinks}
              </div>
          </div>



      
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            header
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
