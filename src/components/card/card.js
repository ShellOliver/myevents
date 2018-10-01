import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>{this.props.image}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}

export default Card
