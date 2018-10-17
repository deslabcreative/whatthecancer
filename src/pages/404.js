import React from 'react'
import Layout from '../components/Layout'
import Banner from '../templates/components/banner'

const NotFoundPage = () => (
  <Layout>
    <Banner>Page Not Found</Banner>
    <div className="article">
        <p>
          You may have come across a page that does not exist or is broken...
          If you think the page should be here, please get in touch.
        </p>  
    </div>
    
  </Layout>
)

export default NotFoundPage
