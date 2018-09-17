import * as React from 'react';
import { Redirect } from 'react-router-dom';
import './Authentication.scss';
import { JatLogo } from '../../components/JatLogo';
import { Slogan } from '../../components/Slogan';
import { Login } from '../../components/Login';
import { Register } from '../../components/Register';
import { inject, observer } from 'mobx-react';

interface IAuthorizationProps {
  stores?: any;
}

@inject('stores')
@observer
export class Authentication extends React.Component<IAuthorizationProps, {}> {
  constructor(props: IAuthorizationProps) {
    super(props);
  }
  render() {
    return this.props.stores.userDetails.user ? (
      <Redirect exact to="/" />
    ) : (
      <React.Fragment>
        <div className="auth-content">
          <div className="auth-content__left">
            <JatLogo />
          </div>
          <div className="auth-content__right">
            <Slogan />
            <div className="auth-content__card">
              <Login />
              <Register />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
