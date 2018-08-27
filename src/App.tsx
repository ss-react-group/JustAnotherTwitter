import * as React from 'react';
import { Component } from 'react';
import './App.less';

import Post from './components/post/Post';

interface MainProps {}

interface MainState {}
class App extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
  }

  public componentDidMount() {}
  public render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
