import React from 'react'
import PropTypes from 'prop-types'

const card = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>{props.image}</div>
      <div>{props.description}</div>
    </div>
  )
}

card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}

export default card
