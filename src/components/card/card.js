import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Card = ({title, image, description}) => (
    <div>
      <h3>{title}</h3>
      <div>{image}</div>
      <div>{description}</div>
    </div>
)

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}

export default Card
