import * as React from 'react';
import { Component } from 'react';
import './index.less';

interface IBackgroundImageProps {}

interface IBackgroundImageState {}

export default class BackgroundImage extends Component<
  IBackgroundImageProps,
  IBackgroundImageState
> {
  constructor(props: IBackgroundImageProps) {
    super(props);
  }

  render() {
    return (
      <div className="background-image">
        <figure className="background-image__figure">
          <img
            src="https://images.unsplash.com/photo-1536221236547-04007cfc3d8b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d542ff4e10ff7de9d35d2ec8a467454&auto=format&fit=crop&w=1950&q=80"
            alt=""
            className="background-image__image"
          />
        </figure>
      </div>
    );
  }
}
