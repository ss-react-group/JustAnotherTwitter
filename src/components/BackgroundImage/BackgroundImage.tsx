import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './BackgroundImage.scss';
import { IStores } from '../../interfaces';
import { FileUpload } from '../FileUpload';
// import { IAsset } from '../../interfaces/asset';
// import { host } from '../../env/environment';

interface IBackgroundImageProps {
  stores?: IStores;
  upload?: boolean;
}

interface IBackgroundImageState {}

@inject('stores')
@observer
export class BackgroundImage extends React.Component<
  IBackgroundImageProps,
  IBackgroundImageState
> {
  static defaultProps = {
    upload: false
  };

  constructor(props: IBackgroundImageProps) {
    super(props);
  }

  public render() {
    return (
      <div className="background">
        {this.props.upload && (
          <FileUpload
            background
            inputData={this.props.stores.userDetails.background.type_id}
          />
        )}

        <figure className="background__figure">
          <img
            className="background__image"
            src={this.props.stores.userDetails.background.filePath}
            alt="Background image"
          />
        </figure>
      </div>
    );
  }
}
