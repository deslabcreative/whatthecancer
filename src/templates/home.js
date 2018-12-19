import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Email from './components/email'
import Banner from './components/banner'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = ({ 
  title,
  content, 
  contentComponent,
  image,
  announcementBlurb,
  announcementImage,
  announcementLink 
}) => {
  const PageContent = contentComponent || Content

  return ( 
    <Layout>
      <Banner background={image}>{title}</Banner>
      <section className="article greenLink">
        <PageContent className="content" content={content} />
        <br></br>
        <br></br>
      </section>
      <Link to={announcementLink}>
        <section>
          <header className="half" style={{backgroundImage: 'url("'+announcementImage+'")'}}>
            <h1 className="half-bannerTitle">{announcementBlurb}</h1>
          </header>
        </section>
      </Link>
      <Email />
    </Layout>
              
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.file,
  announcementBlurb: PropTypes.string,
  announcementLink: PropTypes.string,
  announcementImage: PropTypes.file,
  contentComponent: PropTypes.func,
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      image={post.frontmatter.image}
      announcementBlurb={post.frontmatter.announcementBlurb}
      announcementLink={post.frontmatter.announcementLink}
      announcementImage={post.frontmatter.announcementImage}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) { 
      id
      html
      frontmatter {
        title
        image
        announcementBlurb
        announcementLink
        announcementImage
      }
    }
  }
`
