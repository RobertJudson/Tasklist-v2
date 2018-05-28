import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './store/routes';

import Login from './views/containers/screens/login/login';

import './App.css';

class App extends Component {
  render() {
    return (
      
      <div>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
