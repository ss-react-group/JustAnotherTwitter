import * as React from 'react';
import { Component } from 'react';
import './App.less';

import logo from './logo.svg';

import FacebookLoginComponent from './components/facebook-login/FacebookLogin';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FacebookLoginComponent />
      </div>
    );
  }
}

export default App;
