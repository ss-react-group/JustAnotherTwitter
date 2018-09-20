import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from './components/AppRoute';
import { MainLayout } from './components/Layouts';

import { Authentication } from './pages/Authentication';
import { Home } from './pages/Home';
import { User } from './pages/User';

import { observer, inject } from 'mobx-react';
import { UserDetailsService } from './services/user';

import { IStores } from './interfaces';

import './App.scss';
import './assets/styles/common.scss';
interface IAppProps {
  stores?: IStores;
}

@inject('stores')
@observer
export default class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps, public userDetailsServer: UserDetailsService) {
    super(props);
    this.userDetailsServer = new UserDetailsService();
  }

  componentWillMount() {
    const logedInUser = localStorage.getItem('userId');
    if (logedInUser) {
      this.userDetailsServer.getUserDetails(logedInUser).then(response => {
        this.props.stores.userDetails.user = { ...response };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <AppRoute
              component={Home}
              exact
              path="/"
              guarded
              layout={MainLayout}
            />

            <AppRoute
              component={User}
              path="/profile"
              guarded
              layout={MainLayout}
            />

            <Route path="/login" component={Authentication} />
          </Switch>
        </Router>
      </div>
    );
  }
}
