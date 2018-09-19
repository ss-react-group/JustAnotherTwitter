import * as React from 'react';
import { Link } from 'react-router-dom';
import './Followers.scss';
import { inject, observer } from 'mobx-react';
import { Avatar } from '../Avatar';

interface IFollowers {
  stores?: any;
}

@inject('stores')
@observer
export class Followers extends React.Component<IFollowers> {
  componentWillMount() {
    this.props.stores.followers.get();
  }

  render() {
    return (
      <aside className="content__followers">
        <h1 className="content__title">Followers</h1>
        <ul className="followers__list">
          {this.props.stores.followers.list.map((follower: any) => (
            <Link
              className="followers__list__link"
              key={follower.id}
              to={`/user/${follower.id}`}
            >
              <li className="followers__list__item">
                <Avatar source={follower.avatar} />
                <h3 className="item__name">{`${
                  follower.firstName
                } ${follower.lastName}`}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    );
  }
}
