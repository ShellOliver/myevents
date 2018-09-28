import React, { Component } from 'react'
import Toolbar from './components/toolbar/toolbar'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/home/home'
import Item from './components/toolbar/item/item'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Toolbar title='title' color='lightblue'>
          <Item name='home' route='/home' />
          <Item name='login' route='/login' />
        </Toolbar>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App
