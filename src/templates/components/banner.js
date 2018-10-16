import React from 'react'

const Banner = ({children, background}) => (
    <header style={{backgroundImage: 'url("'+background+'")'}}>
        <h1 className="bannerTitle">{children}</h1>
    </header>
)

export default Banner
