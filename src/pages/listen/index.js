import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const Home = ({children}) => (
  <div>
    <Layout>
      <section>
        <header style={{backgroundImage: 'url("/img/listen.jpg")'}}>
          <h1 className="bannerTitle">Listen to What The Cancer</h1>
        </header>
      </section>
    </Layout>
    <section className="article greenLink">
    <p>
    Here at What The Cancer, we believe in helping you understand the sensitive topic of cancer in the sea of misinformation on the internet.  Not only do we provide you with our website with Blog Posts and more, we also have all our Videos and Podcasts on all major services which are listed below to make our content accessible to you and your lifestyle.
    <br></br>
    <br></br>
    <a href="https://itunes.apple.com/us/podcast/what-the-cancer/id1438188471?"></a>
    <a href="https://open.spotify.com/show/00H6GVQYUsn5NtyFREO9Vs?si=dCoDFUxOROCcdHtRlu6eWA"></a>
    <iframe src="https://open.spotify.com/embed/show/00H6GVQYUsn5NtyFREO9Vs" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


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

export default Home
