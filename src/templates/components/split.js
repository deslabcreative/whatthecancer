import React from 'react'

const Split = ({children, background, recommendedTitle, authorName, authorBio}) => (
    <header className="split">
        <div className="left" style={{backgroundImage: 'url("'+background+'")'}}>
            <p>
                <h3>Recommended Article</h3>
                <span>{recommendedTitle}</span>
            </p>
        </div>
        <div className="right green-bg">
            <p>
                <h3>{authorName}</h3>
                <span>{authorBio}</span>
            </p>
        </div>
    </header>
)

export default Split
