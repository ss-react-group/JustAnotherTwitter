import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { AppRoute } from './components/AppRoute';
import { MainLayout } from './components/Layouts';
import { Authentication } from './pages/Authentication';
import { Home } from './pages/Home';
import { User } from './pages/User';
import './assets/styles/common.scss';
import './App.scss';

interface IAppProps {
  stores?: any;
}

@inject('stores')
@observer
export default class App extends React.Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);

    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    userDetails && (this.props.stores.userDetails.user = userDetails);
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
