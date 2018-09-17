import React, { Component } from 'react';
import Toolbar from './components/toolbar/toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar title="title" color='lightBlue' />
      </div>
    );
  }
}

export default App;
