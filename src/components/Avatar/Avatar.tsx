import * as React from 'react';
import './Avatar.scss';
import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces/stores';
import { FileUpload } from '../FileUpload';
import { getAsset } from '../../services/asset';
import { IAsset } from '../../interfaces/asset';

interface IAvatarProps {
  stores?: IStores;
  source: string;
  upload?: boolean;
  big?: boolean;
}

interface IAvatarState {}

@inject('stores')
@observer
export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  static defaultProps = {
    upload: false,
    big: false
  };

  componendDidMount() {
    getAsset(this.props.stores.userDetails.user.id, 1).then(
      (result: IAsset) => {
        this.props.stores.assets.set('avatar', result.filePath);
      }
    );
  }

  public render() {
    return (
      <div className={this.props.big ? 'avatar--big' : 'avatar'}>
        <div
          className={
            this.props.big ? 'avatar__container--big' : 'avatar__container'
          }
        >
          <figure
            className={
              this.props.big ? 'avatar__figure--big' : 'avatar__figure'
            }
          >
            {this.props.upload && <FileUpload avatar />}
            <img
              className={
                this.props.big ? 'avatar__image--big' : 'avatar__image'
              }
              src={this.props.source}
            />
          </figure>
        </div>
      </div>
    );
  }
}
