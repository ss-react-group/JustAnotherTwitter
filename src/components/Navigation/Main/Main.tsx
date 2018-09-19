import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import './Main.scss';

interface IMainProps {
  stores?: any;
}

@inject('stores')
@observer
export class Main extends React.Component<IMainProps> {
  handleLogout = (event: any) => {
    event.preventDefault();
    this.props.stores.userDetails.user = null;
    localStorage.removeItem('userDetails');
    localStorage.removeItem('token');
  };

  render() {
    return (
      <ul className="navigation-menu">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <a onClick={this.handleLogout}>Log out</a>
        </li>
      </ul>
    );
  }
}