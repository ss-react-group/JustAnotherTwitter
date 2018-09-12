import * as React from 'react';
import './Avatar.scss';
import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces/stores';

interface IAvatarProps {
  stores?: IStores;
}

interface IAvatarState {}

@inject('stores')
@observer
export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  public render() {
    return (
      <figure className="avatar">
        <img
          className="avatar__image"
          src={
            this.props.stores ? this.props.stores.assets.avatar.filePath : ''
          }
        />
      </figure>
    );
  }
}
