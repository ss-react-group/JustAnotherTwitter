import * as React from 'react';
import { IPost } from '../post.interface';
import { getAllPosts } from './All-posts.service';
import SinglePost from '../Single-post/Single-post';

export interface IAllPostsProps {}

export interface IAllPostsState {
  posts: IPost[];
}

class AllPosts extends React.Component<IAllPostsProps, IAllPostsState> {
  constructor(props: IAllPostsProps) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    getAllPosts().then((response: any) => {
      console.log(response);
      this.setState({
        posts: response
      });
    });
  }

  render() {
    return (
      <ul className="all-posts-component">
        {this.state.posts.map((post: IPost) => (
          <SinglePost key={post.id} postContent={post} />
        ))}
      </ul>
    );
  }
}

export default AllPosts;
