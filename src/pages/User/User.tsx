import * as React from 'react';
import { TweetList } from '../../components/TweetList';
import { Followers } from '../../components/Followers';
import { TweetModal } from '../../components/TweetModal';
import { inject, observer } from 'mobx-react';

interface IUserProps {
  match: any;
  stores?: any;
}

@inject('stores')
@observer
export class User extends React.Component<IUserProps> {
  componentWillMount() {
    let userId = this.props.match.params.userId;

    if (userId === 'me') {
      userId = String(this.props.stores.userDetails.user.id);
    }
    this.props.stores.userDetails.userPageId = userId;
    this.props.stores.userDetails.get(userId);
  }

  componentDidUpdate() {
    let userId = this.props.match.params.userId;
    if (this.props.match.params.userId === 'me') {
      userId = String(this.props.stores.userDetails.user.id);
    }
    this.props.stores.userDetails.userPageId = userId;

    this.props.stores.userDetails.get(userId);
  }

  render() {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <TweetList userId={this.props.stores.userDetails.userPageId} />
        <Followers userId={this.props.stores.userDetails.userPageId} />
=======
        <TweetList userId={userId} />
        <TweetModal />
        <Followers />
>>>>>>> develop
      </React.Fragment>
    );
  }
}
