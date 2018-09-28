import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './item.css'

const item = (props) => (
  <Link className={styles.item} to={props.route}>{props.name}</Link>
)

item.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string
}

export default item
