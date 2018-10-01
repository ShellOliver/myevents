import React, { Component } from 'react'
import Input from '../input/input'
import Button from '../button/button'

export default class Login extends Component {
  onsubmit () {
    console.log('aqui')
  }

  render () {
    return (
      <div>
        <Input label='User' type='text' width='25em' required />
        <Input label='Password' type='text' width='25em' required />
        <Button click={this.onsubmit} name='entrar' width='37em' />
      </div>
    )
  }
}
