import * as React from 'react';
import { FbLoginButton } from '../Common/Button';
import './Register.scss';

export const Register = () => (
  <header>
    <div>
      <div className="facebook-login">
        <p>Log in</p>
        <FbLoginButton />
      </div>
    </div>
  </header>
);
