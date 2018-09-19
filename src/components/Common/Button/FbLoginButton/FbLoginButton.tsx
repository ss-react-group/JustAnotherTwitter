import * as React from 'react';
import { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FacebookLogin from 'react-facebook-login';
import { auth } from '../../../../helpers/Db';
import { IStores } from '../../../../interfaces';
import './FbLoginButton.scss';

interface IFacebookRegisterProps {
  stores?: IStores;
}

@inject('stores')
@observer
export class FbLoginButton extends Component<IFacebookRegisterProps, {}> {
  constructor(props: IFacebookRegisterProps) {
    super(props);
  }

  handleFacebookResponse = (response: any): void => {
    const userDetails = {
      firstName: response.first_name || '',
      lastName: response.last_name || '',
      email: response.email || '',
      birthday: response.birthday || '',
      location: (response.location && response.location.name) || ''
    };

    auth('/user_register', userDetails).then(response => {
      const {token} = response;
      token && localStorage.setItem('token', token);
      response.spreadedResponse && localStorage.setItem(
        'userDetails',
        JSON.stringify(response.spreadedResponse)
      );
      this.props.stores.userDetails.user = {
        ...response.spreadedResponse,
        token
      };
    }).catch((error:Error)=> console.log(error));
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
