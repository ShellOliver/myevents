import React, { Component } from 'react'
import styles from './input.css'
import PropTypes from 'prop-types'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      label: this.props.label,
      type: this.props.type,
      width: this.props.width
    }
  }

  render () {
    return (
      <div className={styles.main}>
        <div className={styles.label}>{this.props.label}</div>
        <input type={this.state.type} style={{ width: this.state.width }} />
      </div>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string
}

export default Input
