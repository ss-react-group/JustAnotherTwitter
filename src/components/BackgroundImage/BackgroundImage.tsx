import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { FileUpload } from '../FileUpload';
import { getAsset } from '../../services';
import { IStores } from '../../interfaces';
import { IAsset } from '../../interfaces';
import './BackgroundImage.scss';

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

  componendDidMount() {
    getAsset(this.props.stores.userDetails.user.id, 2).then(
      (result: IAsset) => {
        this.props.stores.assets.set('background', result.filePath);
      }
    );
  }

  public render() {
    return (
      <div className="background">
        <FileUpload background />

        <figure className="background__figure">
          <img
            src={this.props.stores.assets.background.filePath}
            alt="Background image"
          />
        </figure>
      </div>
    );
  }
}
