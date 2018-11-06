/* import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Email from './components/email-form'
import Split from './components/split'
import Footer from './components/footer'
import Content, { HTMLContent } from '../components/Content'

export const AuthorPostTemplate = ({
  content,
  contentComponent,
  authorDescription,
  coverImage,
  // tags,
  authorName,
  authorRecommended,
  authorRecommendedImage,
}) => {
  const PostContentTwo = contentComponentTwo || ContentTwo
  return (
    <div>
      <Banner background={coverImage}>{authorName}</Banner>
      <div className="article">
        <p>{authorDescription}</p>
        <PostContentTwo content={content} />
      </div>
      <Split background={coverImage} recommendedTitle={authorRecommended} authorName={authorName} authorBio={authorDescription} />
    </div>
  )
}

AuthorPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  authorDescription: PropTypes.string,
  coverImage: PropTypes.file,
  authorName: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  authorRecommended: PropTypes.string,
  authorRecommendedImage: PropTypes.file,
}

const AuthorPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AuthorPostTemplate
        contentTwo={post.html}
        contentTwoComponent={HTMLContent}
        authorDescription={post.frontmatter.authorDescription}
        helmet={<Helmet authorName={`${post.frontmatter.authorName} | Author`} />}
        authorName={post.frontmatter.authorName}
        coverImage={post.frontmatter.coverImage}
        authorRecommended={post.frontmatter.authorRecommended}
        authorRecommendedImage={post.frontmatter.authorRecommendedImage}
      />
    </Layout>
  )
}

AuthorPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AuthorPost

export const authorQuery = graphql`
  query AuthorPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        authorName
        authorDescription
        coverImage
        authorRecommended
        authorRecommendedImage
      }
    }
  }
`
*/