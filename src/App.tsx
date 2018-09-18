import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SecuredRoute } from './components/SecuredRoute';
import { IStores } from './interfaces';

import { Authentication } from './pages/Authentication';
import { Home } from './pages/Home';
import { User } from './pages/User';

import { observer, inject } from 'mobx-react';
import { UserDetailsService } from './services/user';

import './App.scss';
import './assets/styles/common.scss';
interface IAppProps {
  stores?: IStores;
}

@inject('stores')
@observer
export default class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);
  }

  componentWillMount() {
    const logedInUser = localStorage.getItem('userId');
    if (logedInUser) {
      UserDetailsService(logedInUser).then(response => {
        console.log(response);
        this.props.stores.userDetails.user = { ...response };
      });
    }
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
