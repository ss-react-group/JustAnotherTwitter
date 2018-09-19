import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { FileUpload } from '../FileUpload';
import { getAsset } from '../../services/Asset';
import { IStores } from '../../interfaces/stores';
import { IAsset } from '../../interfaces/Asset';
import './Avatar.scss';

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
      <div className={`avatar ${this.props.big && 'avatar--big'}`}>
        <div
          className={`avatar__container ${this.props.big &&
            'avatar__container--big'}`}
        >
          <figure
            className={`avatar__figure ${this.props.big &&
              'avatar__figure--big'}`}
          >
            {this.props.upload && <FileUpload avatar />}
            <img
              className={`avatar__image ${this.props.big &&
                'avatar__image--big'}`}
              src={this.props.source}
            />
          </figure>
        </div>
      </div>
    );
  }
}
