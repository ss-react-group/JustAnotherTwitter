import * as React from 'react';
import './Avatar.scss';
import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces/stores';
import { FileUpload } from '../FileUpload';

interface IAvatarProps {
  stores?: IStores;
}

interface IAvatarState {}

@inject('stores')
@observer
export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  public render() {
    return (
      <div className="avatar">
        <div className="avatar__container">
          <figure className="avatar__figure">
            <FileUpload avatar />
            <img
              className="avatar__image"
              src={
                this.props.stores
                  ? this.props.stores.assets.avatar.filePath
                  : ''
              }
            />
          </figure>
        </div>
      </div>
    );
  }
}
