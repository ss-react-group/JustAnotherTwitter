import * as React from 'react';
import './Avatar.scss';

interface IAvatarProps {
  source: string;
} // Application state
interface IAvatarState {}
class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  constructor(props: IAvatarProps) {
    super(props);
  }
  public render() {
    return (
      <div className="avatar">
        <img className="avatar__image" src={this.props.source} />
      </div>
    );
  }
}

export default Avatar;
