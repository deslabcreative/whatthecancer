import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Banner from '../../templates/components/banner'


const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <Helmet title={`Tags | ${title}`} />
    <Banner>Find Articles by "Tag"</Banner>
    <div className="article">
      
            <ul className="taglist">
              {group.map(tag => (
                <div className="content" key={tag.fieldValue}>
                  <Link className="greenLink" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <h1>
                    {tag.fieldValue} 
                    </h1>
                    
                  </Link>
                  
                </div>
              ))}
            </ul>
    </div>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
