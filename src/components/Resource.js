import React from 'react'
import PropTypes from 'prop-types'
import v4 from 'uuid'

const Resources = ({ resource }) => (
  <div>
    {resource.map(resource => (
      <article key={v4()} className="message">
        <div className="message-body">
          {resource.resourceName}
          <br />
          <cite> – {resource.resourceDescription}</cite>
        </div>
      </article>
    ))}
  </div>
)

Resources.propTypes = {
  resource: PropTypes.arrayOf(
    PropTypes.shape({
      resourceName: PropTypes.string,
      resourceDescription: PropTypes.string,
      resourcePrice: PropTypes.string,
      resourceURL: PropTypes.string,
    })
  ),
}

export default Resources
