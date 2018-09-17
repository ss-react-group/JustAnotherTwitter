import * as React from 'react';

import './MainNavigation.scss';
import { Component } from 'react';
import { inject, observer } from 'mobx-react';

interface IMainNavigationProps {
  stores?: any;
}

@inject('stores')
@observer
export class MainNavigation extends Component<IMainNavigationProps> {
  constructor(props: IMainNavigationProps) {
    super(props);
  }

  handleLogout = () => {
    this.props.stores.userDetails.user = null;
    localStorage.removeItem('userDetails');
    localStorage.removeItem('token');
  };

  render() {
    return (
      <ul className="navigation-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a onClick={this.handleLogout}>Log out</a>
        </li>
      </ul>
    );
  }
}
