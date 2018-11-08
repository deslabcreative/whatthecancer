import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Banner from './components/banner'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Resources from '../components/Resource'
import Pricing from '../components/Pricing'

export const ResourcePageTemplate = ({
  image,
  title,
  description,
}) => (
  <Layout>
    <Banner background={image}>{title}</Banner>
    <div className="article">
              <p>{description}</p>
    </div>
  </Layout>
)

ResourcePageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
}

const ResourcePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div>
      <ResourcePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </div>
  )
}

ResourcePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResourcePage

export const resourcePageQuery = graphql`
  query ResourcePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
      }
    }
  }
`

