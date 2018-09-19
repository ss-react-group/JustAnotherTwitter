import * as React from 'react';
import './Avatar.scss';
import { observer, inject } from 'mobx-react';
import { IStores } from '../../interfaces/stores';
import { FileUpload } from '../FileUpload';
import { IAsset } from '../../interfaces/asset';
import { host } from '../../env/environment';

interface IAvatarProps {
  stores?: IStores;
  upload?: boolean;
  big?: boolean;
}

interface IAvatarState {
  avatarImageSrc: string;
}

@inject('stores')
@observer
export class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  constructor(props: IAvatarProps) {
    super(props);
  }
  componentDidMount() {
    if (this.props.stores.userDetails.user.assets) {
      const assetsArray: IAsset[] = this.props.stores.userDetails.user.assets;
      if (assetsArray.length > 0) {
        const avatarImage = assetsArray.filter(
          asset => asset.assets_type.type === 'avatar'
        );
        this.props.stores.assets.avatar = avatarImage[0];
      } else {
        this.props.stores.assets.avatar.filePath = `assets/static/avatar.jpg`;
      }
    }
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
              <FileUpload avatar inputData={this.props.stores.assets.avatar} />
            )}
            <img
              className={`avatar__image ${this.props.big &&
                'avatar__image--big'}`}
              src={host + this.props.stores.assets.avatar.filePath}
            />
          </figure>
        </div>
      </div>
    );
  }
}
