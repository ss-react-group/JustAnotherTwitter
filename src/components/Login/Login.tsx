import * as React from 'react';
import {extendObservable} from "mobx";
import {inject, observer} from 'mobx-react';
import { auth } from '../../helpers/Db';
import {encrypt} from "../../helpers/Encrypting";
import {IStores} from "../../interfaces";
import './Login.scss';

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
          password: encrypt(password)
        };
    this.authenticate(userDetails);
  };

  onChange = (e: any) => {
    const {name, value} = e.target;
    this[name] = value;
  };

  authenticate = (userDetails:any) => {
    auth('/user_login', userDetails).then(response => {
        const {token} = response;
        response.foundUser && localStorage.setItem('userDetails', JSON.stringify(response.foundUser));
        token && localStorage.setItem('token', response.token);
        this.props.stores.userDetails.user = {...response.foundUser, token};
    }).catch((error:Error)=> console.log(error));
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
