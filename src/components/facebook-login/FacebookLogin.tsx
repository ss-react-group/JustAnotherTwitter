import * as React from 'react';
import { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

interface IFacebookLoginProps {}

interface IFacebookLoginState {
  responseData: {};
}

class FacebookLoginComponent extends Component<
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
    this.setState({
      responseData: response
    });
  };

  render() {
    return (
      <div className="Facebook-login">
        <FacebookLogin
          appId="295196024410730"
          fields="id,location,birthday,last_name,first_name"
          callback={this.handleFacebookResponse}
        />
        <p>{JSON.stringify(this.state.responseData)}</p>
      </div>
    );
  }
}

export default FacebookLoginComponent;
