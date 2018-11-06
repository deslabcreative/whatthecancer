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
  heading,
  description,
  intro,
  main,
  resource,
  testimonials,
  fullImage,
  pricing,
}) => (
  <Layout>
    <Banner background={image}>{title}</Banner>
    <div className="article">
  
    
              <h2>{heading}</h2>
              <p>{description}</p>
              
              <Testimonials testimonials={testimonials} />
            
          
     
    
    </div>
  </Layout>
)

ResourcePageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ResourcePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div>
      <ResourcePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
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
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        
        
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
