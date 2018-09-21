import React, { Component } from 'react';
import Toolbar from './components/toolbar/toolbar';
import {Switch, Route} from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="App">
      
        <Toolbar title="title" color='red' />
        <Switch>
        <div>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
        </div>
        </Switch>
      </div>
    );
  }
}

export default App;
