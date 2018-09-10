import * as React from 'react';
import { Component } from 'react';
import './App.scss';

import MainLayout from './components/Layouts/MainLayout';

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
        <MainLayout />
      </div>
    );
  }
}

export default App;
