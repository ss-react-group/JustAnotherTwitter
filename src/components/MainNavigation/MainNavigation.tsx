import * as React from 'react';

import './MainNavigation.scss';

import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
interface IMainNavigationProps {
  stores?: any;
}

@inject('stores')
@observer
export class MainNavigation extends React.Component<IMainNavigationProps> {
  constructor(props: IMainNavigationProps) {
    super(props);
  }

  handleLogout = (event: any) => {
    event.preventDefault();
    this.props.stores.userDetails.user = null;
    localStorage.removeItem('userId');
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
