import * as React from 'react';
import { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { auth } from '../../../../helpers/db';
import { IStores } from '../../../../interfaces';
import {inject, observer} from "mobx-react";
import './FbLoginButton.scss';

interface IFacebookRegisterProps {
  stores?: IStores
}

@inject("stores")
@observer
export class FbLoginButton extends Component<IFacebookRegisterProps, {} > {
  constructor(props: IFacebookRegisterProps) {
    super(props);
  }

  handleFacebookResponse = (response: any): void => {
    const userDetails = {
      firstName: response.first_name || '',
      lastName: response.last_name || '',
      email: response.email || '',
      birthday: response.birthday || '',
      location: response.location || ''
    };

    auth(userDetails).then(response => {
      const token = response.token;
      this.props.stores.userDetails.user  = {...response.sprededResponse, token};
      localStorage.setItem('userDetails', JSON.stringify(this.props.stores.userDetails.user));
      localStorage.setItem('token', this.props.stores.userDetails.user.token);
    });
  };

  render() {
    return (
        <FacebookLogin
          appId="295196024410730"
          fields="id,birthday,last_name,first_name,email,location"
          callback={this.handleFacebookResponse}
          textButton="with Facebook"
          cssClass="facebook-button"
        />
    );
  }
}
