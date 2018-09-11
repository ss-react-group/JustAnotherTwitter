import * as React from 'react';
import { IPost } from '../post.interface';

export interface ISinglePostProps {
  postContent: IPost;
}

export interface ISinglePostState {}

class SinglePost extends React.Component<ISinglePostProps, ISinglePostState> {
  constructor(props: ISinglePostProps) {
    super(props);
  }
  render() {
    return (
      <div className="single-post">
        <p>{this.props.postContent.user.firstName}</p>
        <p>{this.props.postContent.content}</p>
      </div>
    );
  }
}

export default SinglePost;
