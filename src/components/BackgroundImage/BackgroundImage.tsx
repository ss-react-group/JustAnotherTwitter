import * as React from 'react';
import { observer, inject } from 'mobx-react';

import './BackgroundImage.scss';

interface IBackgroundImageProps {
  store?: any;
}

interface IBackgroundImageState {}

@inject('store')
@observer
class BackgroundImage extends React.Component<
  IBackgroundImageProps,
  IBackgroundImageState
> {
  constructor(props: IBackgroundImageProps) {
    super(props);
  }

  public render() {
    return (
      <figure className="background">
        <img src={this.props.store.image.background} alt="Background image" />
      </figure>
    );
  }
}

export default BackgroundImage;
