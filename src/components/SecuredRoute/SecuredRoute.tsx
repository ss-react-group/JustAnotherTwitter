import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router';

interface ISecuredRouteProps {
  component: any;
  guard: any;
  path: string;
  exact?: boolean;
}

interface ISecuredRouteState {}

export class SecuredRoute extends Component<
  ISecuredRouteProps,
  ISecuredRouteState
> {
  constructor(props: ISecuredRouteProps) {
    super(props);
  }

  render() {
    return this.props.guard ? (
      <Route path={this.props.path} component={this.props.component} />
    ) : (
      <Redirect to="/login" />
    );
  }
}
