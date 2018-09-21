import React, { Component } from 'react'
import Input from '../input/input';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Input label="User" type="text" width="25em" required/>
        <Input label="Password" type="text" width="25em" required/>
      </div>
    )
  }
}
