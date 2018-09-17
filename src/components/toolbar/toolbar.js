import React, { Component } from 'react';
import styles from './toolbar.css';

export default class Toolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       color: this.props.color,
       title: this.props.title,
    }
  }
  

  render() {
    return (
      <main style={{backgroundColor: this.state.color}} className={styles}>
        <ul>
          <li className={styles.title}>{this.state.title}</li>
          <li className={styles.item}>item1</li>
          <li className={styles.item}>item2</li>
          <li className={styles.item}>item3</li>
        </ul>
      </main>
    )
  }
}
