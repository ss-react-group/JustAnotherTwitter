import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import SecuredRoute from './components/SecuredRoute';

import './App.scss';
import './assets/styles/common.scss';

import { MainLayout } from './components/Layouts/MainLayout';
import { Authorization } from './pages/Authorization';

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
    getAsset(2, 1).then((result: IAsset) => {
      this.props.stores.assets.set('avatar', result.filePath);
    });

    getAsset(2, 2).then((result: IAsset) => {
      this.props.stores.assets.set('background', result.filePath);
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <SecuredRoute
              component={MainLayout}
              path="/home"
              guard={this.props.stores.userDetails.user}
            />
            {this.props.stores.userDetails.user ? (
              <Redirect to="/home" />
            ) : (
              <Route exact path="/" component={Authorization} />
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}
