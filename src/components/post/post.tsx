import * as React from 'react';
import { Component } from 'react';
import { Fetch } from '../../helpers/fetch';

import PasswordEncrypting from '../password-encrypting/PasswordEncrypting';
// Interface for single post object;
interface IPost {
  id: number;
  authorId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// Interface for props
interface PostProps {
  name?: string;
}

// Interface for state
interface PostState {
  postsArray: IPost[];
}

// Post class
class Post extends Component<PostProps, PostState> {
  constructor(props: PostProps, private fetch: Fetch) {
    super(props);
    // Init state object
    this.state = {
      postsArray: []
    };
    // Create new instance of Fetch
    this.fetch = new Fetch();
  }

  //   Hook for mount event
  public componentDidMount = () => {
    // Send GET request
    const postsList = this.fetch.request(
      'http://localhost:8081/api/v1/secured/posts',
      {
        method: 'GET'
      }
    );

    // Menage Promise
    postsList.then(response => {
      this.setState({
        postsArray: [...response]
      });
    });
  };

  //   Render DOM
  public render() {
    return (
      <div className="post">
        <PasswordEncrypting />
        <ul>
          {this.state.postsArray.map(post => (
            <li>
              <div key={post.id}>{post.content}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Post;
