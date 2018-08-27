import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    inputValue: ''
  };

  fetchPosts() {
    const fetchPromise = fetch('http://localhost:8081/api/v1/secured/posts');

    fetchPromise.then(response => response.json()).then(readable => {
      this.setState({
        posts: [...readable]
      });
    });
  }

  createNewPost() {
    const body = JSON.stringify({
      authorId: 2,
      content: this.state.inputValue
    });

    const createRequest = fetch(
      'http://localhost:8081/api/v1/secured/add_new_post',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body
      }
    );

    createRequest
      .then(serverResponse => serverResponse.json())
      .then(readable => {
        console.log(readable);
      });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  handleClickEv = () => {
    this.createNewPost();
  };

  handleChangeEvt = ev => {
    this.setState({
      inputValue: ev.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <ul>
          <li>
            {this.state.posts.map(post => (
              <div key={post.id}>{post.content}</div>
            ))}
          </li>
        </ul>

        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChangeEvt}
        />
        <button onClick={this.handleClickEv}> Create new</button>
      </div>
    );
  }
}

export default App;
