import * as React from 'react';
import './Authorization.scss';
import { JatLogo } from './../../components/JatLogo';
import { Slogan } from './../../components/Slogan';
import { Login } from '../../components/Login';
import { Register } from '../../components/Register';

export const Authorization = () => (
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
