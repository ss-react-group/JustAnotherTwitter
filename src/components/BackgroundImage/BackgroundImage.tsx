import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './BackgroundImage.scss';
import { IStores } from '../../interfaces/stores';

interface IBackgroundImageProps {
  stores?: IStores;
}

interface IBackgroundImageState {}

@inject('stores')
@observer
class BackgroundImage extends React.Component<
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
      <figure className="background">
        <img
          src={
            this.props.stores
              ? this.props.stores.assets.background.filePath
              : ''
          }
          alt="Background image"
        />
      </figure>
    );
  }
}

export default BackgroundImage;
