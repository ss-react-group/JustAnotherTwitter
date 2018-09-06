import * as React from 'react';
import { Component } from 'react';
import { Route, Redirect } from 'react-router';

// import Home from './Home';

interface ISecuredRouteProps {
  component: any;
  guard: any;
  path: string;
  redirectTo: string;
}

interface ISecuredRouteState {}

class SecuredRoute extends Component<ISecuredRouteProps, ISecuredRouteState> {
  constructor(props: ISecuredRouteProps) {
    super(props);
  }

  render() {
    if (this.props.guard) {
      return <Route path={this.props.path} component={this.props.component} />;
    }
    {
      return <Redirect to={this.props.redirectTo} />;
    }
  }
}

export default SecuredRoute;
