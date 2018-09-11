import * as React from 'react';
import { Fetch } from '../../../helpers/fetch';
import { env } from '../../../env/environment';
import { IPost } from '../post.interface';

interface INewPostState {
  textAreaValue: string;
}

class NewPost extends React.Component<any, INewPostState> {
  constructor(props: void) {
    super(props);
    this.state = {
      textAreaValue: ''
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();

    const postObject: IPost = {
      authorId: 1,
      content: this.state.textAreaValue
    };
    const createNewPost = Fetch.request(env.api_secured + '/add_new_post', {
      method: 'POST',
      body: JSON.stringify(postObject),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    createNewPost.then(response => console.log(response));
  };

  handleTextAreaState = (event: any) => {
    const { value } = event.target;

    this.setState({
      textAreaValue: value
    });
  };
  render() {
    return (
      <div className="new-post-component">
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="new-post-component__text-area"
            value={this.state.textAreaValue}
            onChange={this.handleTextAreaState}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default NewPost;
