import * as React from 'react';

import './BackgroundImage.scss';

interface IBackgroundImageProps {
  source: string;
}

interface IBackgroundImageState {}

class BackgroundImage extends React.Component<
  IBackgroundImageProps,
  IBackgroundImageState
> {
  constructor(props: IBackgroundImageProps) {
    super(props);
  }

  public render() {
    return (
      <div className="background">
        <img src={this.props.source} alt="Background image" />
      </div>
    );
  }
}

export default BackgroundImage;
