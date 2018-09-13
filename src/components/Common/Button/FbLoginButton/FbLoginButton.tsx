import * as React from 'react';
import { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

interface IFacebookLoginProps {}

interface IFacebookLoginState {
  responseData: {};
}

export class FacebookLoginComponent extends Component<
  IFacebookLoginProps,
  IFacebookLoginState
> {
  constructor(props: IFacebookLoginProps) {
    super(props);
    this.state = {
      responseData: {}
    };
  }

  handleFacebookResponse = (response: any): void => {
    const userObj = {
      firstName: response.first_name,
      lastName: response.last_name,
      email: response.email,
      birthday: response.birthday,
      location: response.location.name
    };

    const authorizeUser = fetch(
      'http://localhost:8081/api/v1/public/user_authenticate',
      {
        method: 'POST',
        body: JSON.stringify(userObj),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    authorizeUser.then(jsonResponse => jsonResponse.json()).then(response => {
      this.setState({
        responseData: response.sprededResponse
      });
    });
  };

  render() {
    return (
      <div className="Facebook-login">
        <FacebookLogin
          appId="295196024410730"
          fields="id,location,birthday,last_name,first_name,email"
          callback={this.handleFacebookResponse}
        />
        <p>{JSON.stringify(this.state.responseData)}</p>
      </div>
    );
  }
}
