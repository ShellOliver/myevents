import React from 'react';
import styles from './toolbar.css';
import PropTypes from 'prop-types';

const toolbar = (props) => {
  return (
    <main style={{ backgroundColor: props.color }} className={styles}>
      <ul>
        <li className={styles.title}>{props.title}</li>
        <li className={styles.item}>item1</li>
        <li className={styles.item}>item2</li>
        <li className={styles.item}>item3</li>
      </ul>
    </main>
  )
}

toolbar.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

export default toolbar;