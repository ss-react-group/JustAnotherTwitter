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
interface IFacebookRegisterState {
  errorMessage: string;
}
@inject('stores')
@observer
export class FbLoginButton extends Component<
  IFacebookRegisterProps,
  IFacebookRegisterState
> {
  constructor(props: IFacebookRegisterProps) {
    super(props);
    this.state = {
      errorMessage: null
    };
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
        const { token, foundUser } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', foundUser.id);
        this.props.stores.userDetails.user = { ...foundUser };
      })
      .catch(error => {
        this.setState({
          errorMessage: 'Problem with connections'
        });
      });
  };

  render() {
    return (
      <div className="facebook-login">
        <FacebookLogin
          appId="295196024410730"
          fields="id,birthday,last_name,first_name,email,location"
          callback={this.handleFacebookResponse}
          textButton="with Facebook"
          cssClass="facebook-login__button"
        />
        <span className="facebook-login__error-message">
          {this.state.errorMessage}
        </span>
      </div>
    );
  }
}
