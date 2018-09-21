import * as React from 'react';
import { TweetList } from '../../components/TweetList';
import { inject, observer } from 'mobx-react';

interface IHomeProps {
  stores?: any;
}

@inject('stores')
@observer
export class Home extends React.Component<IHomeProps> {
  componentDidMount() {
    this.props.stores.userDetails.get('me');
  }

  render() {
    return (
      <React.Fragment>
        <TweetList />
      </React.Fragment>
    );
  }
}
