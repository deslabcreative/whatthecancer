import React from 'react'

const Split = ({children, background, recommendedTitle, authorName, authorBio, link, rightLink}) => (
    <header className="split">
        <a href={link} title={recommendedTitle}>
            <div className="left" style={{backgroundImage: 'url("'+background+'")'}}>
                <p>
                    <h3>Recommended</h3>
                    <span>{recommendedTitle}</span>
                </p>
            </div>
        </a>
        <a href={rightLink || "#"} title={authorName}>
            <div className="right green-bg">
                <p>
                    <h3>{authorName}</h3>
                    <span>{authorBio}</span>
                </p>
            </div>
        </a>
    </header>
)

export default Split
