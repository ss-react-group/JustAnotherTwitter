import * as React from 'react';
import { Component } from 'react';
import './App.scss';
import NewPost from './components/posts/New-post/New-post';
import AllPosts from './components/posts/All-posts/All-posts';
import FacebookLoginComponent from './components/common/button/fb-login-button/Fb-login-button';

// Application props
interface IAppProps {}
// Application state
interface IAppState {}
class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
  }
  public render() {
    return (
      <div className="App">
        <FacebookLoginComponent />
        <NewPost />
        <AllPosts />
      </div>
    );
  }
}

export default App;
