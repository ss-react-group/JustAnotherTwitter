import * as React from 'react';
import { Component } from 'react';
import './App.less';

// Components
import Post from './components/post/Post';
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
        <Post />
      </div>
    );
  }
}

export default App;
