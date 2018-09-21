import React, { Component } from 'react'
import Card from '../card/card';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Card title="title" image="imagePath" description="description"/>
      </div>
    )
  }
}
