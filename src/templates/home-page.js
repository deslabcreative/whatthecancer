import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Banner from './components/banner'
import { graphql, Link } from 'gatsby'

export const HomePageTemplate = ({
  home_image,
  title,
  home_content,
}) => (
  <div>
    <Layout>
      <section>
      <Banner background={home_image}>{title}</Banner>
      </section>
    </Layout>
    <section className="article greenLink">
      <p>
        {home_content}
      </p>
      <br></br>
      <br></br>
    </section>
    <Link to="/blog">
      <section>
        <header className="half" style={{backgroundImage: 'url("/img/home.jpg")'}}>
          <h1 className="half-bannerTitle">Read the Blog.</h1>
        </header>
      </section>
    </Link>
  </div>
)

HomePageTemplate.propTypes = {
  home_image: PropTypes.string,
  title: PropTypes.string,
  home_content: PropTypes.string,
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <HomePageTemplate
        home_image={frontmatter.home_image}
        title={frontmatter.title}
        home_content={frontmatter.home_content}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        home_image
        home_content
      }
    }
  }
`


