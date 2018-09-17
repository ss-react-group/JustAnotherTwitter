import * as React from 'react';
import './Avatar.scss';
import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces/stores';
import { FileUpload } from '../FileUpload';
import { getAsset } from '../../services/asset';
import { IAsset } from '../../interfaces/asset';

interface IAvatarProps {
  stores?: IStores;
}

interface IAvatarState {}

@inject('stores')
@observer
export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  componendDidMount() {
    getAsset(this.props.stores.userDetails.user.id, 1).then(
      (result: IAsset) => {
        this.props.stores.assets.set('avatar', result.filePath);
      }
    );
  }

  public render() {
    return (
      <div className="avatar">
        <div className="avatar__container">
          <figure className="avatar__figure">
            <FileUpload avatar />
            <img
              className="avatar__image"
              src={this.props.stores.assets.avatar.filePath}
            />
          </figure>
        </div>
      </div>
    );
  }
}
