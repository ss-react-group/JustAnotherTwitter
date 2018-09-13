import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './BackgroundImage.scss';
import { IStores } from '../../interfaces/stores';
import { FileUploadDropdown } from '../FileUploadDropdown';

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
  static defaultProps = {
    assets: {
      background: {
        filePath: ''
      }
    }
  };

  constructor(props: IBackgroundImageProps) {
    super(props);
  }

  public render() {
    return (
      <div className="background">
        <FileUploadDropdown />

        <span className="image-message">Change image</span>

        <figure className="background__figure">
          <img
            src={
              this.props.stores
                ? this.props.stores.assets.background.filePath
                : ''
            }
            alt="Background image"
          />
        </figure>
      </div>
    );
  }
}
