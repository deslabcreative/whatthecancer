import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ResourceTemplate = ({
  content,
  contentComponent,
  description,
  header,
  tags,
  title,
  helmet,
}) => {
  const ResourceContent = contentComponent || Content

  return (
    <section className="wrapper">
      {helmet || ''}
      <Banner background={header}>{title}</Banner>
      <div className="article">
        <p>{description}</p>
        <ResourceContent content={content} />
      </div>
      
      
    </section>
  )
}

ResourceTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  header: PropTypes.file,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Resource = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResourceTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        header={post.frontmatter.header}
      />
    </Layout>
  )
}

Resource.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Resource

export const pageQuery = graphql`
  query ResourceByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        header
      }
    }
  }
`
