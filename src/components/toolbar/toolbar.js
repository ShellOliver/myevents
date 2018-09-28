import React from 'react';
import styles from './toolbar.css';
import PropTypes from 'prop-types';

const toolbar = (props) => {
  return (
    <main style={{ backgroundColor: props.color }} className={styles}>
      <div className={styles.items}>
        <div className={styles.title}>{props.title}</div>
        {props.children}
      </div>
    </main>
  )
}

toolbar.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
}

export default toolbar;