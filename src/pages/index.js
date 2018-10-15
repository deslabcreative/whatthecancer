import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const Home = ({children}) => (
  <div>
    <Layout>
      <section>
        <header style={{backgroundImage: 'url("/img/home.jpg")'}}>
          <h1 className="bannerTitle">Don’t let cancer control you, let’s take control of it.</h1>
        </header>
      </section>
    </Layout>
    <section className="article">
    <p>
          Hi I’m Lisa Dawson. I am a Medical Oncologist, Lifestyle Medicine champion, published author
          and mother of 6 children.  I’m bringing you this podcast and website to help you discern what
          to believe on social media and the internet about your cancer journey. I hope to help you 
          take control of your cancer journey and discover how much you can do to make that journey better
          and more successful.  I initially started out in my medicine career as a GP 
          and saw the huge need for patients to be equipped with life changing truths about the role of diet, 
          exercise, stress and sleep to be healthy. 80% of chronic disease today is preventable by a change in
          our lifestyles. To that end I wrote a book called Healthy Happy Free in 2005 encouraging people to
          change their lifestyles to prevent and reverse ill health.
          <br /><br />
          In 2008 I changed track in my career and re-trained as a Medical Oncologist. I was initially
          skeptical about chemotherapy. I have always had a somewhat questioning but open mind. After many years 
          of treating cancer patients I am left in no doubt that chemotherapy can make a big impact on cancer, 
          sometimes curing people sometimes improving quality of life as cancer is brought under control and 
          symptoms subside.  In those we can’t cure we can certainly buy some quality time for many. In the 
          last few years the advent of some remarkable new drugs has seen a significant improvement in cure 
          rates and how long people can live even if not cured. In particular immunotherapy in showing huge 
          promise in extending life and even curing late stage 4 cancers. It’s been exciting to be part of this. 
          Despite the sometimes questionable ethics of drug companies the drugs themselves show huge promise 
          when used in the right way.  Despite this I think the medical profession as a whole  has been slow to 
          pick up on the advances being made in the area of ‘lifestyle medicine’. By attending to diet, nutrition, 
          stress and sleep we can make a substantial difference to someone staying cancer free after curative 
          treatment, to chemotherapy side effects and someone’s quality and length of life if they have stage 4 
          (incurable) cancer. If we had drugs that offered the benefits exercise does for example we wouldn’t 
          hesitate to prescribe it for everybody but it’s hardly mentioned as part of a person’s treatment or 
          recovery plan. I think this is because we are quite precise as doctors and we need to be able to offer 
          well evidenced advice in a concise way, The reality is as doctors we don’t have clear cut ‘lifestyle 
          prescriptions’ we can offer patients and there is still a lot of debate over things like ‘the best diet’!  
          Doctors also have little time to address these things and are a little skeptical as patients rarely 
          succeed in following this sort of advice when given generally.  
          <br /><br />
          Recently I have joined the faculty of a 
          company called Prekure. The faculty have internationally respected leaders in ‘lifestyle medicine’ 
          helping design and write courses for both health professionals and patients. I’m excited as we start 
          to see the tipping point reached in medicine where we will soon see doctors and nurses equipped to 
          prescribe lifestyle changes to help patients get well and stay well.  These course and prescriptions 
          are under construction but will soon be available from this website. In addition to this we hope to 
          raise up a ‘new profession’ of health coaches to help patients make the necessary changes.

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