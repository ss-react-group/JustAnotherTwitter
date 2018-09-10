import * as React from 'react';
import { Component } from 'react';
import { encrypt } from '../../helpers/password-encrypting';

interface IPasswordEncryptingProps {}

interface IPasswordEncryptingState {
  passwordInputValue: string;
  encryptedPassword: string;
}

class PasswordEncrypting extends Component<
  IPasswordEncryptingProps,
  IPasswordEncryptingState
> {
  constructor(props: IPasswordEncryptingProps) {
    super(props);

    this.state = {
      passwordInputValue: '',
      encryptedPassword: ''
    };
  }

  // Methods
  handleOnChange = (event: any): void => {
    const { value } = event.target;

    this.setState({
      passwordInputValue: value
    });
  };

  handleSubmit = (event: any): void => {
    event.preventDefault();
    const encrypted = encrypt(this.state.passwordInputValue, 4);
    this.setState({
      encryptedPassword: encrypted
    });
  };

  render() {
    return (
      <div className="passwordencrypting">
        <form onSubmit={this.handleSubmit}>
          <input
            type="password"
            name=""
            id=""
            value={this.state.passwordInputValue}
            onChange={this.handleOnChange}
          />
          <button type="submit">Send</button>
        </form>

        {this.state.encryptedPassword ? (
          <p>{this.state.encryptedPassword}</p>
        ) : (
          <p>Generate password</p>
        )}
      </div>
    );
  }
}

export default PasswordEncrypting;
