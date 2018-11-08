import React from 'react'
import { graphql, Link } from 'gatsby'

const Footer = ({children, background, recommendedTitle, authorName, authorBio}) => (
    <footer className="split">
        <div className="full white-bg">
            <p>
                <a href="https://www.whatthecancer.com" title="What The Cancer">Share whatthecancer.com</a><br></br>
                <a href="https://www.whatthecancer.com" title="Home - What The Cancer">Home</a><br></br>
                <a href="https://www.whatthecancer.com/about" title="About - What The Cancer">About</a><br></br>
                <a href="https://www.whatthecancer.com/lisa" title="Dr Lisa Dawson - What The Cancer">About Lisa</a><br></br>
                <a href="https://www.whatthecancer.com/contact" title="Ask a Question - What The Cancer">Ask a question</a><br></br>
                <a href="https://www.whatthecancer.com/resources" title="Resources - What The Cancer">Our Resources</a><br></br>
                <a href="https://www.whatthecancer.com/listen" title="Listen to our Podcast - What The Cancer">Listen</a><br></br>
                <a href="https://www.whatthecancer.com/jargon" title="Understand what the Medical Jargon surrounding your cancer journey means in plain English - What The Cancer">Jargon Dictionary</a><br></br>
                <br></br>
                <br></br>
                <span className="left-fifty">© What The Cancer, 2018</span>
                <img className="deslab-logo" src="../../../img/deslab-blue.png" alt="Deslab Creative" />
            </p>
        </div>
        
    </footer>
)

export default Footer
