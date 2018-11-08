import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Banner from './components/banner'
import Split from './components/split'
import Content, { HTMLContent } from '../components/Content'

export const JargonPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <Banner>{title}</Banner>
      <div className="article">
        <PageContent className="content" content={content} />
      </div>   
      <Split background="img/home.jpg" recommendedTitle={title} authorName="Lisa Dawson" authorBio="Leading Oncologist, Speaker and Author" />
    </Layout>
              
  )
}

jargonPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const JargonPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <JargonPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

JargonPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default JargonPage

export const jargonPageQuery = graphql`
  query JargonPage($id: String!) {
    markdownRemark(id: { eq: $id }) { 
      id
      html
      frontmatter {
        title
      }
    }
  }
`
