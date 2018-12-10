import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Email from './components/email'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = ({ title, content, contentComponent, homeImage, bannerSlogan, announcementBlurb, announcementImage, announcementLink }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <section>
        <header style={{backgroundImage: 'url("'+homeImage+'")'}}>
          <h1 className="bannerTitle">{bannerSlogan}</h1>
        </header>
      </section>
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
  homeImage: PropTypes.file,
  bannerSlogan: PropTypes.string,
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
      homeImage={post.frontmatter.file}
      bannerSlogan={post.frontmatter.string}
      announcementBlurb={post.frontmatter.string}
      announcementLink={post.frontmatter.string}
      announcementImage={post.frontmatter.file}
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
        homeImage
        bannerSlogan
        announcementBlurb
        announcementLink
        announcementImage
      }
    }
  }
`
