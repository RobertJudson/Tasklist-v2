import React, { Component } from 'react';
import Routes from './store/routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HEADER</h1>
        <Routes />
      </div>
    );
  }
}

export default App;
