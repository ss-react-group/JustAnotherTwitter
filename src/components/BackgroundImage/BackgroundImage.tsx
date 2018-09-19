import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './BackgroundImage.scss';
import { IStores } from '../../interfaces';
import { FileUpload } from '../FileUpload';
import { IAsset } from '../../interfaces/asset';
import { host } from '../../env/environment';

interface IBackgroundImageProps {
  stores?: IStores;
}

interface IBackgroundImageState {}

@inject('stores')
@observer
export class BackgroundImage extends React.Component<
  IBackgroundImageProps,
  IBackgroundImageState
> {
  constructor(props: IBackgroundImageProps) {
    super(props);
  }
  componentWillMount() {
    if (this.props.stores.userDetails.user) {
      const assetsArray: IAsset[] = this.props.stores.userDetails.user.assets;

      if (assetsArray.length > 0) {
        console.log(assetsArray);
        const backgroundImage = assetsArray.filter(
          asset => asset.assets_type.type === 'background'
        );
        this.props.stores.assets.background = backgroundImage[0];
      } else {
        this.props.stores.assets.background.filePath = `assets/static/background.jpg`;
      }
    }
  }

  public render() {
    return (
      <div className="background">
        <FileUpload
          background
          inputData={this.props.stores.assets.background}
        />

        <figure className="background__figure">
          <img
            className="background__image"
            src={host + this.props.stores.assets.background.filePath}
            alt="Background image"
          />
        </figure>
      </div>
    );
  }
}
