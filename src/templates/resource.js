import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Split from './components/split'
import Content, { HTMLContent } from '../components/Content'

export const ResourcePostTemplate = ({
  content,
  contentComponent,
  resourceDescription,
  image,
  title,
  resourceName,
  resourceImage,
  resourcePrice,
  resourceLink,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <Banner background={resourceImage}>{resourceName}</Banner>
      <div className="article">
        <p>{resourceDescription}</p><br /><br />
        <PostContent content={content} />
      </div>
      <Split background="/img/resource-splash.jpg" recommendedTitle="View All Our Resources" link="https://www.whatthecancer.com/resources" authorName={resourcePrice} authorBio="Download / Purchase this resource resource here" rightLink={resourceLink} />
    </div>
  )
}

ResourcePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  resourceDescription: PropTypes.string,
  image: PropTypes.file,
  helmet: PropTypes.instanceOf(Helmet),
  resourceName: PropTypes.string,
  title: PropTypes.string,
  resourceImage: PropTypes.file,
  resourcePrice: PropTypes.string,
  resourceLink: PropTypes.string,
}

const ResourcePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResourcePostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        resourceDescription={post.frontmatter.resourceDescription}
        helmet={<Helmet title={`${post.frontmatter.resourceName} | A Resource from What The Cancer`} />}
        tags={post.frontmatter.tags}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        resourceName={post.frontmatter.resourceName}
        resourceImage={post.frontmatter.resourceImage}
        resourcePrice={post.frontmatter.resourcePrice}
        resourceLink={post.frontmatter.resourceLink}
      />
    </Layout>
  )
}

ResourcePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ResourcePost

export const resourceQuery = graphql`
  query ResourcePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        resourceDescription,
        image,
        title,
        resourceName,
        resourceImage,
        resourcePrice,
        resourceLink,
      }
    }
  }
`
