import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SecuredRoute from './components/SecuredRoute';

import './App.scss';
import './assets/styles/common.scss';

import { Authentication } from './pages/Authentication';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { getAsset } from './services/asset';
import { IAsset } from './interfaces/asset';
import { observer, inject } from 'mobx-react';

interface IAppProps {
  stores?: any;
}

@inject('stores')
@observer
export default class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.props.stores.userDetails.user = userDetails;
  }

  componentDidMount() {
    getAsset(this.props.stores.userDetails.user.id, 1).then(
      (result: IAsset) => {
        this.props.stores.assets.set('avatar', result.filePath);
      }
    );

    getAsset(this.props.stores.userDetails.user.id, 2).then(
      (result: IAsset) => {
        this.props.stores.assets.set('background', result.filePath);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <SecuredRoute
              component={Home}
              exact
              path="/"
              guard={this.props.stores.userDetails.user}
            />
            <SecuredRoute
              component={User}
              path="/profile"
              guard={this.props.stores.userDetails.user}
            />
            <Route path="/login" component={Authentication} />
          </Switch>
        </Router>
      </div>
    );
  }
}
