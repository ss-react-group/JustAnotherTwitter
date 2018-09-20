import * as React from 'react';
import './Avatar.scss';
import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces/stores';
import { FileUpload } from '../FileUpload';

interface IAvatarProps {
  stores?: IStores;
  upload?: boolean;
  big?: boolean;
  source: string;
}

interface IAvatarState {
  avatarImageSrc: string;
}

@inject('stores')
@observer
export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  static defaultProps = {
    source: '/images/default-image-square.png'
  };

  constructor(props: IAvatarProps) {
    super(props);
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
            {this.props.upload && (
              <FileUpload
                avatar
                inputData={this.props.stores.assets.avatar.type_id}
              />
            )}
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
