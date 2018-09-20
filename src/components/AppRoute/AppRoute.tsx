import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { IStores } from '../../interfaces';

interface IAppRouteProps {
  guarded?: boolean;
  stores?: IStores;
  layout: any;
  component: any;
  path: string;
  exact?: boolean;
}

@inject('stores')
@observer
export class AppRoute extends React.Component<IAppRouteProps> {
  render() {
    const { exact, path } = this.props;
    const restProps = {
      exact,
      path
    };

    return this.props.guarded ? (
      this.props.stores.userDetails.user ? (
        <Route
          {...restProps}
          render={props => (
            <this.props.layout>
              <this.props.component {...props} />
            </this.props.layout>
          )}
        />
      ) : (
        <Redirect to="/login" />
      )
    ) : (
      <Route
        {...restProps}
        render={props => (
          <this.props.layout>
            <this.props.component {...props} />
          </this.props.layout>
        )}
      />
    );
  }
}
