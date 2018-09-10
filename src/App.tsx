import * as React from 'react';
import { Component } from 'react';
import './App.scss';
import PasswordEncrypting from './components/common/inputs/password-encrypting/PasswordEncrypting';

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
        <PasswordEncrypting />
      </div>
    );
  }
}

export default App;
