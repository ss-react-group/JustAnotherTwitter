import * as React from 'react';
import './Avatar.scss';
import { observer, inject } from 'mobx-react';

interface IAvatarProps {
  store?: any;
}

@inject('store')
@observer
class Avatar extends React.Component<IAvatarProps> {
  public render() {
    return (
      <div className="avatar">
        <img className="avatar__image" src={this.props.store.image.avatar} />
      </div>
    );
  }
}

export default Avatar;
