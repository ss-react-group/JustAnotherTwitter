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
          <NavLink to="/profile/me">Profile</NavLink>
        </li>
        <li>

          <a href="#" onClick={this.handleLogout}>
            Log out
          </a>
        </li>
      </ul>
    );
  }
}
