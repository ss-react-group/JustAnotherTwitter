import * as React from 'react';
import { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { UserAuthenticate } from '../../../../helpers/UserAuthenticate';
import { IStores } from '../../../../interfaces';
import { inject, observer } from 'mobx-react';
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
      location: response.location.name || ''
    };

    UserAuthenticate('/user_register', userDetails)
      .then(response => {
        const { token, spreadedResponse } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', spreadedResponse.id);
        this.props.stores.userDetails.user = { ...spreadedResponse };
      })
      .catch(function(error) {
        console.log(error);
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
