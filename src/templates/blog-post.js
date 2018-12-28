import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Split from './components/split'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  header,
  title,
  recommendedName,
  recommendedImage,
  recommendedLink,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} - Dr Lisa Dawson - What The Cancer</title>
        <meta name="description" content={description}/>
      </Helmet>
      <Banner background={header}>{title}</Banner>
      <div className="article">
        <p>{description}</p><br /><br />
        <PostContent content={content} />
      </div>
      <Split background={recommendedImage} recommendedTitle={recommendedName} link={recommendedLink} authorName="Lisa Dawson" authorBio="Oncologist, Speaker and Author" />
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  header: PropTypes.file,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  tags: PropTypes.string,
  recommendedName: PropTypes.string,
  recommendedImage: PropTypes.file,
  recommendedLink: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog | What The Cancer`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        header={post.frontmatter.header}
        recommendedName={post.frontmatter.recommendedName}
        recommendedImage={post.frontmatter.recommendedImage}
        recommendedLink={post.frontmatter.recommendedLink}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        header
        recommendedName
        recommendedImage
        recommendedLink
      }
    }
  }
`
