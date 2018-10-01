import PropTypes from 'prop-types'
import style from './button.css'
import React from 'react'

const Button = ({ name, click, width }) => (
  <button className={style} style={{ width }} onClick={click}>{name}</button>
)

Button.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func,
  width: PropTypes.string
}

export default Button
