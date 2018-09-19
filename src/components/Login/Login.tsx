import * as React from 'react';
import { extendObservable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { UserAuthenticate } from '../../helpers/UserAuthenticate';
import './Login.scss';
import { IStores } from '../../interfaces';
import { encrypt } from '../../helpers/Encrypting';

interface ILoginProps {
  stores?: IStores;
}

interface ILoginState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: string;
}

@inject('stores')
@observer
export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    extendObservable(this, {
      email: '',
      password: ''
    });
  }

  validateForm = () => {
    // @ts-ignore
    const { email, password } = this;
    return !(email && password);
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    // @ts-ignore
    const { email, password } = this;

    const userDetails = {
      email,
      password: encrypt(password)
    };
    this.authenticate(userDetails);
  };

  onChange = (e: any) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  authenticate = (userDetails: any) => {
    UserAuthenticate('/user_login', userDetails)
      .then(response => {
        const { token, foundUser } = response;
        console.log(response);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', foundUser.id);
        this.props.stores.userDetails.user = { ...foundUser };
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    // @ts-ignore
    const { email, password } = this;
    return (
      <div className="login">
        <p>Log in</p>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <input
            name="email"
            placeholder="john@doe.com"
            autoFocus
            type="email"
            required
            value={email}
            onChange={this.onChange}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={this.onChange}
          />
          <button className="login__button" type="submit">
            log in
          </button>
        </form>
      </div>
    );
  }
}
