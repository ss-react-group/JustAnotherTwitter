import * as React from 'react';
import {extendObservable} from "mobx";
import {inject, observer} from 'mobx-react';
import { auth } from '../../helpers/db';
import './Login.scss';
import {IStores} from "../../interfaces";
import {encrypt} from "../../helpers/Encrypting";

interface ILoginProps {
  stores?: IStores
}

interface ILoginState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: string;
}

@inject("stores")
@observer
export class Login extends React.Component <ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    extendObservable(this, {
      email: "",
      password: ""
    });
  }

  validateForm = () => {
    // @ts-ignore
    const { email, password } = this;
    return (!(email && password));
  };

  handleSubmit = (event:any) => {
    event.preventDefault();
    // @ts-ignore
    const { email, password } = this;

    const userDetails = {
          email,
          password: encrypt(password, 10)
        };
    this.authenticate(userDetails);
  };

  onChange = (e: any) => {
    const {name, value} = e.target;
    this[name] = value;
  };

  authenticate = (userDetails:any) => {
    auth(userDetails).then(response => {
      if (response.sprededResponse.password && !(encrypt(response.sprededResponse.password, 10) === encrypt(userDetails.password, 10))) {
        this.props.stores.userDetails.user  = response.sprededResponse;
        this.props.stores.userDetails.user.token = response.token;
        localStorage.setItem('userDetails', JSON.stringify(this.props.stores.userDetails.user));
        localStorage.setItem('token', this.props.stores.userDetails.user.token);
      } else {
        console.log('The username and password did not match.');
      }
    });
  };

  render() {
    // @ts-ignore
    const { email, password } = this;
    return (
      <div className="login">
        <p>Log in</p>
        <form className="login__form" onSubmit={this.handleSubmit}>
            <input name="email" placeholder="john@doe.com" autoFocus type="email" required value={email} onChange={this.onChange}/>
            <input name="password" placeholder="password" type="password" required value={password} onChange={this.onChange} />
            <button className="login__button"  type="submit">log in</button>
        </form>
      </div>
    );
  }
}