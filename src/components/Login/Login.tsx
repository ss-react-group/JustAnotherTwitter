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
  error: string;
}

@inject('stores')
@observer
export class Login extends React.Component<ILoginProps, ILoginState> {

  private error: string;

  constructor(props: ILoginProps) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
      error: ''
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

  authenticate = (userDetails: any, ) => {
    this.error = '';
    UserAuthenticate('/user_login', userDetails)
      .then(response => {
        const { token, foundUser } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', foundUser.id);
        this.props.stores.userDetails.user = { ...foundUser };
      })
      .catch(err => {
        this.error =  'Wrong email or password';
      });
  };

  render() {
    // @ts-ignore
    const { email, password, error} = this;
    return (
      <div className="login">
        <p>Log in</p>
        {error && <p className="login__error">{error}</p>}
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
