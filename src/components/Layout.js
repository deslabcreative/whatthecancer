import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../templates/components/footer'
import Banner from '../templates/components/banner'
import './all.sass'

const TemplateWrapper = ({ children, backgroundImg }) => (
  <div>
    <Helmet title="What The Cancer" />
    <Sidebar />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
