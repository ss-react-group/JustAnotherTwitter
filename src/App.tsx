import * as React from 'react';
import { Component } from 'react';
import './App.less';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';

import SecuredRoute from './components/secured-route';

const loggedIn = false;
class App extends Component {
  public render() {
    return (
      <Router>
        <div className="router">
          <Route exact path="/" component={Home} />
          <SecuredRoute
            component={User}
            path="/user"
            guard={loggedIn}
            redirectTo="/"
          />
        </div>
      </Router>
    );
  }
}

export default App;
