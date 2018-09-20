import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Avatar } from '../Avatar';
import { host } from '../../env';
import './Followers.scss';

interface IFollowers {
  stores?: any;
  userId: string;
}

@inject('stores')
@observer
export class Followers extends React.Component<IFollowers> {
  componentDidMount() {
    this.props.stores.followers.get(this.props.userId);
  }

  render() {
    return (
      <aside className="content__followers">
        <h1 className="content__title">
          Following - {this.props.stores.followers.list.length}
        </h1>
        <ul className="followers__list">
          {this.props.stores.followers.list.length > 0 &&
            this.props.stores.followers.list.map((follower: any) => (
              <Link
                className="followers__list__link"
                key={follower.followed_id}
                to={`/profile/${follower.followed_id}`}
              >
                <li className="followers__list__item">
                  <Avatar
                    source={`${host}${follower.user.assets[0].filePath}`}
                  />
                  <h3 className="item__name">{`${follower.user.firstName} ${
                    follower.user.lastName
                  }`}</h3>
                </li>
              </Link>
            ))}
        </ul>
      </aside>
    );
  }
}
